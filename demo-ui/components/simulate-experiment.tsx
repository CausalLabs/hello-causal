import React, { useEffect, useState } from "react";

export default function SimulateExperiment() {
  const [state, setState] = useState<"none" | "running" | "done" | "error">(
    "none"
  );

  const [ticks, setTicks] = useState(0);

  const [controlVal, setControlVal] = useState("5");
  const [variantVal, setVariantVal] = useState("10");

  const [res, setRes] = useState<Response>();

  const simulateExperimentFunction = async () => {
    try {
      setState("running");
      setTicks(0);

      const response = await fetch(
        `http://localhost:8842/api/simulateExperiment?controlPercent=${controlVal}&variantPercent=${variantVal}`
      );

      setRes(response);
      if (response.status == 200) setState("done");
      else setState("error");
    } catch (e) {
      setState("error");
    }
  };

  useEffect(() => {
    if (state == "running") {
      const id = setTimeout(() => {
        setTicks(ticks + 1);
      }, 1000);
      return () => {
        clearTimeout(id);
      };
    }
  });

  return (
    <div>
      <section>
        <div>
          Now that your experiment is running, let's simulate impressions and
          clicks to the Control and Variant version of your site.
        </div>

        <div>
          <input
            type="number"
            pattern="[0-9]*"
            min={0}
            max={100}
            value={controlVal}
            onChange={(e) =>
              setControlVal((v) =>
                e.target.validity.valid ? e.target.value : v
              )
            }
          />{" "}
          <span>% of users that click the button in control</span>
        </div>
        <div>
          <input
            type="number"
            pattern="[0-9]*"
            min={0}
            max={100}
            value={variantVal}
            onChange={(e) =>
              setVariantVal((v) =>
                e.target.validity.valid ? e.target.value : v
              )
            }
          />{" "}
          <span>% of users that click the button in other variant</span>
          <div>
            <button
              style={{ width: "190px" }}
              className="demo-button"
              disabled={state == "running"}
              onClick={simulateExperimentFunction}
            >
              {state == "running"
                ? ticks
                : state == "done"
                ? "Simulate more traffic"
                : "Run Simulation"}
            </button>
            <i data-testid="state-complete">
              {state == "done" && <>Complete!</>}
            </i>
            <i>
              {state == "error" &&
                ` Failed. ${res?.statusText}${
                  res?.statusText ? ". " : ""
                }Please try running again.`}
            </i>
          </div>
        </div>
        <div>
          We'll have to run the ETL to collect the experiment data so it can
          take about 30 seconds. Once you simulate some traffic, you can view
          the results of your experiment in the Web Tools{" "}
          <a href="https://tools.causallabs.io/experiments" target="new">
            Experiments
          </a>{" "}
          section by clicking into your experiment.
        </div>
        <div>
          You can simulate more traffic to see what your experiment would look
          like with more data.
        </div>
      </section>
    </div>
  );
}

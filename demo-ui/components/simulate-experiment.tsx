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
        <p>
          Now that your experiment is running, let's simulate impressions and
          clicks to the Control and Variant version of your site.
        </p>

        <p>
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
        </p>
        <p>
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
          <p>
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
          </p>
        </p>
        <p>
          Once you simulate some traffic, you can view the results of your
          experiment in the Web Tools{" "}
          <a href="https://tools.causallabs.io/experiments" target="new">
            Experiments
          </a>{" "}
          section by clicking into your experiment.
        </p>
        <p>
          You can simulate more traffic to see what your experiment would look
          like with more data.
        </p>
      </section>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getSimulateJSON } from "../../helpers/simulate";
import { useSession } from "../causal";
import { HCButton } from "../HCButton/HCButton";

export default function SimulateExperiment({
  featureName,
}: {
  featureName: "SneakerCard" | "CrossSellFeature";
}) {
  const [state, setState] = useState<"none" | "running" | "done" | "error">(
    "none"
  );

  const session = useSession();

  const [ticks, setTicks] = useState(0);

  const [controlVal, setControlVal] = useState(5);
  const [variantVal, setVariantVal] = useState(10);

  const [res, setRes] = useState<Response>();

  const simulateExperimentFunction = async () => {
    try {
      setState("running");
      setTicks(0);

      const body = getSimulateJSON(featureName, controlVal, variantVal);

      // running the ETL kills all sessions, so flush the cache
      // add a public method to do this
      session?._.cache.deleteAll(true);

      const response = await fetch("http://localhost:8842/api/simulate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

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
    <div className="p-10 bg-gray-100 rounded-xl">
      <div className="font-semibold">Simulate your experiment</div>
      <div className="mt-2">
        Now that your experiment is running, let's simulate impressions and
        clicks to the Control and Variant version of your site.
      </div>

      <div className="mt-hc ml-6">
        <div>
          <input
            type="number"
            pattern="[0-9]*"
            min={0}
            max={100}
            value={controlVal}
            onChange={(e) =>
              setControlVal((v) =>
                e.target.validity.valid ? parseInt(e.target.value) : v
              )
            }
          />{" "}
          <span className="ml-2">
            % of users that click the button in control
          </span>
        </div>
        <div className="mt-hc">
          <input
            type="number"
            pattern="[0-9]*"
            min={0}
            max={100}
            value={variantVal}
            onChange={(e) =>
              setVariantVal((v) =>
                e.target.validity.valid ? parseInt(e.target.value) : v
              )
            }
          />{" "}
          <span className="ml-2">
            % of users that click the button in other variant
          </span>
        </div>
      </div>
      <div className="mt-12">
        <HCButton
          className="w-[190px]"
          disabled={state == "running"}
          onClick={simulateExperimentFunction}
          data-testid="simulate-button"
        >
          {state == "running" ? "Running... " + ticks : "Run Experiment"}
        </HCButton>
        <div className="mt-hc">
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
    </div>
  );
}

import fs from "fs";
import Head from "next/head";
import path from "path";
import { useEffect, useState } from "react";
import { useSession } from "../components/causal";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";
import { HCButton } from "../components/HCButton/HCButton";
import { Layout } from "../components/Layout/Layout";
import {
  getSimulateJSON,
  SimulateChoice,
  simulateChoices,
} from "../helpers/simulate";

export async function getServerSideProps() {
  const schema = path.join(process.cwd(), "types/simulate.d.ts");
  const schemaFile = fs.readFileSync(schema, "utf8");

  return {
    props: {
      schemaFile,
    },
  };
}

type PrefillChoice = SimulateChoice | "Custom";

export default function Simulate({ schemaFile }: { schemaFile: string }) {
  const session = useSession();

  const [prefillChoice, setPrefillChoice] = useState<PrefillChoice>("Custom");

  const [jsonStr, setJSONStr] = useState("{}");
  const [res, setRes] = useState<Response>();

  const [ticks, setTicks] = useState(0);
  const [state, setState] = useState<"none" | "running" | "done" | "error">(
    "none"
  );

  let json: unknown | undefined = undefined;
  try {
    json = JSON.parse(jsonStr);
  } catch {}

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

  const simulateExperimentFunction = async () => {
    try {
      setState("running");
      setTicks(0);

      // running the ETL kills all sessions, so flush the cache
      // add a public method to do this
      session?._.cache.deleteAll(true);

      const response = await fetch("http://localhost:8842/api/simulate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonStr,
      });

      setRes(response);
      if (response.status == 200) setState("done");
      else setState("error");
    } catch (e) {
      setState("error");
    }
  };

  return (
    <Layout>
      <Head>
        <title>Traffic Simulator</title>
      </Head>

      <section className="mt-8">
        <span className="mr-4">Prefill JSON</span>
        <select
          autoComplete="off"
          value={prefillChoice}
          onChange={(evt) => {
            const choice: PrefillChoice = evt.target.value as PrefillChoice;
            setPrefillChoice(choice);
            if (choice == "Custom") setJSONStr(JSON.stringify({}));
            else {
              const json = getSimulateJSON(choice, 10, 20);
              setJSONStr(JSON.stringify(json, null, 2));
            }
          }}
        >
          <option value="Custom">Custom</option>
          {simulateChoices.map((choice) => (
            <option value={choice} key={choice}>
              {choice}
            </option>
          ))}
        </select>
      </section>
      <section className="mt-4">
        <textarea
          className="w-full min-h-[720px] w-full md:w-[720px]"
          value={jsonStr}
          onChange={(evt) => setJSONStr(evt.target.value)}
        ></textarea>

        <div>{json == undefined && <i>invalidJson</i>}</div>

        <div className="mt-12">
          <HCButton
            className="w-[190px]"
            disabled={state == "running"}
            onClick={simulateExperimentFunction}
            data-testid="simulate-button"
          >
            {state == "running" ? "Simulating... " + ticks : "Simulate"}
          </HCButton>
          <div className="mt-hc">
            <i data-testid="state-complete">
              {state == "done" && <>Complete!</>}
            </i>
            <i>
              {state == "error" &&
                ` Failed. ${res?.statusText}${
                  res?.statusText ? ". " : ""
                }Please check your impression server logs and try running again.`}
            </i>
          </div>
        </div>
      </section>
      <hr className="mt-hc" />
      <section className="mt-hc">
        <div>Here is the TypeScript simulation schema:</div>
        <CodeBlock className="mt-4" language="typescript" code={schemaFile} />
      </section>
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "../components/causal";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";
import Credentials from "../components/Credentials/Credentials";
import { HCButton } from "../components/HCButton/HCButton";
import { Instruction } from "../components/instruction/Instruction";
import { Layout } from "../components/Layout/Layout";
import { Note } from "../components/Note/Note";
import { awsAccountId } from "./register";

export default function ViewDataInDataWarehouse() {
  const [state, setState] = useState<"none" | "loading" | "done" | "error">(
    "none"
  );

  const [ticks, setTicks] = useState(0);
  const session = useSession();
  const callEtlFunction = async () => {
    try {
      setState("loading");
      setTicks(0);

      // running the ETL kills all session, so flush the cache
      // add a public method to do this
      session?._.cache.deleteAll(true);
      const response = await fetch("http://localhost:8842/api/runEtl");
      if (response.status == 200) setState("done");
      else setState("error");
    } catch (e) {
      setState("error");
    }
  };

  useEffect(() => {
    if (state == "loading") {
      const id = setTimeout(() => {
        setTicks(ticks + 1);
      }, 1000);
      return () => {
        clearTimeout(id);
      };
    }
  });

  return (
    <Layout>
      <Head>
        <title>Viewing the data warehouse</title>
      </Head>
      <div>
        <h1 data-testid="sectionheader">Viewing the data warehouse</h1>

        <section>
          <div>
            Causal runs an ETL process hourly to reflect impression server data
            in the data warehouse.
          </div>
          <div>
            To illustrate this process for this demo, we&apos;ve enabled this
            application to run the ETL on demand.
          </div>
        </section>
        <section className="mt-section">
          <h2>Try it out</h2>
          <div className="font-bold">Run the ETL and view the data</div>
          <Instruction num={1} className="mt-2">
            <div>Click the &quot;Run ETL&quot; button below.</div>

            <HCButton
              data-testid="run-etl"
              disabled={state == "loading"}
              onClick={callEtlFunction}
              className="mt-hc"
              width="180px"
            >
              {state == "done"
                ? "Run Again"
                : state == "loading"
                ? "Running... " + ticks
                : "Run ETL"}
            </HCButton>

            <div className="mt-hc">
              <i data-testid="status">
                {state == "done" && <>ETL Complete!</>}
              </i>
              <i data-testid="status">
                {state == "error" && <>ETL Failed. Please try again.</>}
              </i>
            </div>

            <Note className="mt-hc">
              Note: It takes up to 30 seconds to run the ETL
            </Note>
          </Instruction>
          <Instruction num={2}>
            View{" "}
            <Link href={`/etl-query?id=hello-causal`} className="font-semibold">
              an example
            </Link>{" "}
            of Causal data returned from the data warehouse.
          </Instruction>
          <Instruction num={3}>
            View data in{" "}
            <Link
              className="font-semibold"
              href="https://us-east-1.console.aws.amazon.com/athena/home?region=us-east-1#/query-editor"
              target="new"
            >
              AWS Athena.
            </Link>{" "}
            <Credentials
              accountId={awsAccountId()}
              username={process.env.NEXT_PUBLIC_AWS_USERNAME ?? "/error"}
              password={process.env.NEXT_PUBLIC_AWS_PASSWORD ?? "/error"}
            />
            <HCButton
              className="mt-hc"
              href="https://us-east-1.console.aws.amazon.com/athena/home?region=us-east-1#/query-editor"
              target="new"
            >
              Log In
            </HCButton>
            <Note className="mt-hc">
              If you are already logged into AWS with other credentials, you
              will need to log out first
            </Note>
          </Instruction>

          <Instruction num={4}>
            <div className="flex justify-end w-full">
              <img src="/workgroup-indicator.svg" />
            </div>
            <div className="-mt-16">
              Once you&apos;re in the <b>AWS Athena &gt; Query Editor</b>,
              select the <b>{process.env.NEXT_PUBLIC_AWS_USERNAME}</b>{" "}
              workgroup. Look in the upper right corner for the workgroup
              dropdown.
            </div>
            <Note className="mt-hc">
              Ignore the banners about security and the query engine version
            </Note>
          </Instruction>
          <Instruction num={5}>
            Run some example SQL, e.g.
            <CodeBlock
              className="mt-1"
              code={`SELECT SUM(impression_count) as num_impressions,
       SUM(CARDINALITY("add_to_cart")) as add_to_cart_clicks, 
       button_text,
       product_description 
FROM sneaker_card
GROUP BY button_text, product_description;`}
              language="sql"
              copyControl={true}
            />
          </Instruction>
          <div className="mt-hc flex justify-center">
            <img src="/causal-circuit.svg" />
          </div>
          <div className="mt-10">
            A benefit of Causal is that the front end feature definitions are
            always kept in sync with what&apos;s in the data warehouse so
            everyone on your team – engineers, data scientists, analysts, and
            product managers are speaking the same language and relying on the
            same data. To learn more, read our data warehouse{" "}
            <a
              href="https://tech.causallabs.io/docs/data-warehouse/overview"
              target="new"
            >
              tech docs
            </a>
            .
          </div>
        </section>

        <section className="next-topic">
          <HCButton href="/creating-metrics">Next: Creating a Metric </HCButton>
        </section>
      </div>
    </Layout>
  );
}

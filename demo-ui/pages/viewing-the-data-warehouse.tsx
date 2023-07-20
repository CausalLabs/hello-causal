import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { awsAccountId } from "./register";
import { useSession } from "../components/causal";
import CredentialsTable from "../components/credentials";
import { CopyableCodeBlock } from "../components/clipboard-utils";

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
        <section>
          <h2 data-testid="sectionheader">Viewing the data warehouse</h2>
          <div>
            Causal runs an ETL process hourly to reflect impression server data
            in the data warehouse.
          </div>
          <div>
            To illustrate this process for this demo, we&apos;ve enabled this
            application to run the ETL on demand.
          </div>
        </section>
        <section>
          <h3>Try it out</h3>
          <div>1. Click the &quot;Run ETL&quot; button below.</div>
          <aside className="note" style={{ marginTop: "-12px" }}>
            Note: It takes up to 30 seconds to run the ETL
          </aside>
          <button
            data-testid="demoButton"
            disabled={state == "loading"}
            className="demo-button"
            onClick={callEtlFunction}
            style={{ width: "120px" }}
          >
            {state == "done"
              ? "Run Again"
              : state == "loading"
              ? ticks
              : "Run ETL"}
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i data-testid="status">{state == "done" && <>ETL Complete!</>}</i>
          <i data-testid="status">
            {state == "error" && <>ETL Failed. Please try again.</>}
          </i>
          <div>
            2. View <Link href={`/etl-query?id=hello-causal`}>an example</Link>{" "}
            of Causal data returned from the data warehouse.
          </div>
          <div>3. View data in AWS Athena</div>
          <div>
            Log into{" "}
            <Link
              href="https://us-east-1.console.aws.amazon.com/athena/home?region=us-east-1#/query-editor"
              target="new"
            >
              AWS Athena.
            </Link>{" "}
            Your <b>initial</b> credentials are:
          </div>
          <div>
            {process.env.NEXT_PUBLIC_AWS_USERNAME &&
              process.env.NEXT_PUBLIC_AWS_PASSWORD && (
                <>
                  <CredentialsTable
                    accountId={awsAccountId()}
                    username={process.env.NEXT_PUBLIC_AWS_USERNAME}
                    password={process.env.NEXT_PUBLIC_AWS_PASSWORD}
                  />
                </>
              )}
          </div>
          <aside className="note" style={{ marginTop: "-12px" }}>
            If you are already logged into AWS with other credentials, you will
            need to log out first
          </aside>
          <div>
            Once you&apos;re in the <b>AWS Athena &gt; Query Editor</b>, select
            the <b>{process.env.NEXT_PUBLIC_AWS_USERNAME}</b> workgroup. Look in
            the upper right corner for the workgroup dropdown.
          </div>
          <aside className="note">
            Ignore the banners about security and the query engine version
          </aside>
          <div>
            Run some example SQL, e.g.
            <CopyableCodeBlock
              txt={
                "SELECT SUM(impression_count) as num_impressions, SUM(CARDINALITY(button_click)) as num_clicks, background_color, width FROM example_feature GROUP BY background_color, width;"
              }
            />
          </div>
          <aside className="note">
            A benefit of the platform is that the front end feature definitions
            your team stores in Causal are always kept in sync with what&apos;s
            in the data warehouse so everyone on your team – engineers, data
            scientists, analysts, and product managers are speaking the same
            language and relying on the same data. To learn more, read our data
            warehouse{" "}
            <a
              href="https://tech.causallabs.io/docs/data-warehouse/overview"
              target="new"
            >
              tech docs
            </a>
            .
          </aside>
        </section>
        <section>
          <div className="next-topic">
            <Link href={`/creating-metrics`}>Next: Creating a Metric</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

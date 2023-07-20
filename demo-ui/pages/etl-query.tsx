import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function EtlQuery() {
  const router = useRouter();
  const queryId = router.query.id as string;

  const [state, setState] = useState<"none" | "loading" | "error" | "done">(
    "none"
  );
  const [ticks, setTicks] = useState(0);
  const [data, setData] = useState<string[][]>();

  const getData = useCallback(async () => {
    try {
      setState("loading");
      setTicks(0);
      const res = await fetch(
        `http://localhost:8842/api/queryEtl?queryId=${queryId}`
      );
      if (res.status == 200) {
        const resultSet = await res.json();
        setState("done");
        setData(resultSet);
      } else {
        setState("error");
      }
    } catch (e) {
      setState("error");
    }
  }, [queryId]);

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
      <Head>ETL Results for {queryId}</Head>
      <h2 data-testid="sectionheader">Data warehouse response example</h2>
      <div>
        Click the "Run Query" button below to see the results of the following
        SQL in{" "}
        <Link
          href="https://us-east-1.console.aws.amazon.com/athena/home?region=us-east-1#/query-editor"
          target="new"
        >
          AWS Athena
        </Link>
        .
        <code>select * from &quot;session&quot; order by ds desc, hh desc</code>{" "}
        <aside className="note" style={{ marginTop: "-12px" }}>
          Note: This can take up to 15 seconds to load.
        </aside>
        <button
          disabled={state == "loading"}
          className="demo-button"
          onClick={getData}
          style={{ width: "120px" }}
        >
          {state == "loading"
            ? ticks
            : state == "done"
            ? "Run Again"
            : "Run Query"}
        </button>
      </div>
      {state == "error" && "There was an error querying {queryId}"}
      {state == "done" ? (
        <div>
          <table className="results-table">
            <tbody>
              {data?.map((row, idx1) => (
                <tr key={idx1}>
                  {row.map((cell, idx2) => (
                    <td key={idx2}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ height: "220px" }}></div>
      )}
      <div style={{ clear: "both" }}></div>
      <div className="prev-topic">
        <Link href={`/viewing-the-data-warehouse`}>
          Previous: Back to Viewing the data warehouse
        </Link>
      </div>
    </Layout>
  );
}

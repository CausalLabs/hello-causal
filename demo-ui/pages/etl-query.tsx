import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout/Layout";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";
import { Note } from "../components/Note/Note";
import { HCButton } from "../components/HCButton/HCButton";
import Link from "next/link";

export default function EtlQuery() {
  const router = useRouter();
  const queryId = router.query.id as string;

  const [state, setState] = useState<"none" | "loading" | "error" | "done">(
    "none"
  );
  const [ticks, setTicks] = useState(0);
  const [data, setData] = useState<string[][]>();

  const maxDataLength = 200;
  const origDataLength = useRef(0);

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

        origDataLength.current = resultSet.length;
        const tmp =
          resultSet.length > maxDataLength
            ? resultSet.slice(0, maxDataLength)
            : resultSet;
        setData(tmp);
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
      <h1 data-testid="sectionheader">Data warehouse response example</h1>
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
      </div>
      <CodeBlock
        code='select * from "session" order by ds desc, hh desc limit 200'
        language="sql"
        className="mt-2"
      />
      <Note className="mt-hc">
        Note: This can take up to 15 seconds to load.
      </Note>
      <HCButton
        disabled={state == "loading"}
        onClick={getData}
        className="mt-hc"
        width="180px"
      >
        {state == "loading"
          ? "Running... " + ticks
          : state == "done"
          ? "Run Again"
          : "Run Query"}
      </HCButton>
      {state == "error" && (
        <span className="ml-2">There was an error querying "{queryId}"</span>
      )}
      {state == "done" ? (
        <div className="mt-hc overflow-auto max-w-full max-h-[700px]">
          {data && (
            <table className="results-table w-full">
              <thead>
                <tr>
                  {data[0]?.map((cell, idx) => (
                    <th key={idx}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.slice(1)?.map((row, idx1) => (
                  <tr key={idx1}>
                    {row.map((cell, idx2) => (
                      <td key={idx2}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <div style={{ height: "220px" }}></div>
      )}

      {data && origDataLength.current > maxDataLength && (
        <div className="mt-hc italic text-gray-800">
          Results limited to 200 rows
        </div>
      )}

      <section className="next-topic">
        <HCButton href="/viewing-the-data-warehouse">
          Previous: Viewing the data warehouse
        </HCButton>
      </section>
    </Layout>
  );
}

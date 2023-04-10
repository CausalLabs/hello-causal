import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import Layout from "../components/layout";

type DataProps = {
  queryId: string;
  resultSet: string[][];
  error: boolean;
};

export const getServerSideProps: GetServerSideProps<DataProps> = async (
  context
) => {
  const queryId = context.query.id as string;
  const res = await fetch(`http://etl-query:8081/query/${queryId}`);
  if (res.status == 200) {
    const resultSet = await res.json();
    return { props: { queryId: queryId, resultSet: resultSet, error: false } }
  } else {
    return { props: { queryId: queryId, resultSet: Array(0), error: true } };
  };
};

export default function EtlQuery(data: DataProps) {
  return (
    <Layout>
      <Head>ETL Results for {data.queryId}</Head>
      <h2>Data warehouse response example</h2>          
      <p>The following is the result of running the SQL <code>select * from "session"</code> in AWS Athena.</p>
        { data.error ? (
          <div>There was an error querying {data.queryId}</div>
        ) : (
          <table cellPadding="10px">
            <tbody>
            {data.resultSet.map((row) => (
              <tr>
                {row.map((cell) => (
                  <td>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody></table>
        )}
    <p><Link href={`/viewing-the-data-warehouse`}>&lt; Back</Link></p>

    </Layout>
  );
}
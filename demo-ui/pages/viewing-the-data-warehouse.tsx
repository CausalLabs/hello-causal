import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";

export default function ViewDataInDataWarehouse() {
  const feature = useFeature(qb().getExampleFeature());

  // const request_etl_from_iserver = await fetch(`http://iserver:3004/cmd`);

  return (
    <Layout>
      <Head>
        <title>Viewing the data warehouse</title>
      </Head>
      <div>
          <section>
            <h2>Viewing the data warehouse</h2>          
            <p>Causal runs an ETL process hourly to reflect impression server data in the data warehouse.</p>
            <p>To illustrate this process for this demo, we've enabled this application to initialize ETL on demand.</p>
          </section>
          <section>
          <h3>Try it out</h3>
          <p>1. Click the "Run ETL" button.</p>
            <p>
            <button style={{width: feature?.width, height: feature?.height, background: feature?.backgroundColor, color: feature?.fontColor}} onClick={() => feature?.signalButtonClick()}>
              Run ETL 
              {/* TODO Add onClick runEtl() function */}
            </button>
            </p>
          <p>View <Link href={`/etl-query?id=hello-causal`}>an example</Link> of Causal data returned from the data warehouse. (Note: This page loads slowly ~10 seconds.)</p>
          <p>2. Log into <a href="https://200238787088.signin.aws.amazon.com/console" target="new">AWS Athena</a> using the IAM user name and Password from your Causal welcome email (Subject: "Welcome to the CausalLabs.io demo").</p>
          <p>3. Relax for 60 seconds. The ETL takes time to run.</p>
          <p>4. Run example SQL.</p>
          </section>
          <section>
          <p>
            <Link href={`/fin`}>
              Summary and Next Steps
            </Link>
          </p>
          </section>
      </div>  
    </Layout>
  );
}

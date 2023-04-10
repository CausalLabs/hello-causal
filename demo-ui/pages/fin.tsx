import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";

export default function ViewDataInDataWarehouse() {
  const feature = useFeature(qb().getExampleFeature());
  return (
    <Layout>
        <Head>
          <title>Summary and Next Steps</title>
        </Head>
        <div>
        <section>
          <h2>Summary and Next Steps</h2>          
          <p>In this demo, you learned how to:</p>
          <ul>
            <li>Define a feature in Causal</li>
            <li>Use a Causal-defined feature in React</li>
            <li>Manage Causal-defined features without code</li>
            <li>Track user impressions and events in Causal</li>
            <li>View Causal data in a data warehouse</li>
          </ul>
          <h3>Next Steps</h3>
            <p>Read our <a href="https://tech.causallabs.io/docs/index" target="new">documentation</a>.</p>
            <p>Email us at <a href="mailto:'support@causallabs.io'">support@causallabs.io</a> if you'd like to learn more about how to use Causal in your own application. We'd love to hear any feedback you have.</p>
          <h3>Thanks!</h3>
            <p>The Causal Team</p>
        </section>
        </div>
    </Layout>
  );
}

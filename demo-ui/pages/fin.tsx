import Head from "next/head";
import Layout from "../components/layout";

export default function ViewDataInDataWarehouse() {
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
          <p>
            Read our{" "}
            <a href="https://tech.causallabs.io/docs/index" target="new">
              documentation
            </a>{" "}
            to learn about
          </p>
          <ul>
            <li>Defining metrics, audiences, or experiments</li>
            <li>Using other APIs, e.g. for Java, Ruby</li>
            <li>Using external data sources for metrics</li>
            <li>Employ Causal to improve Machine Learning models</li>
            <li>Seting up your production environments</li>
          </ul>

          <p>
            Email us at{" "}
            <a href="mailto:'support@causallabs.io'">support@causallabs.io</a>{" "}
            if you&apos;d like to learn more about how to use Causal in your own
            application. We&apos;d love to hear any feedback you have.
          </p>
          <h3>Thanks!</h3>
          <p>The Causal Team</p>
        </section>
      </div>
    </Layout>
  );
}

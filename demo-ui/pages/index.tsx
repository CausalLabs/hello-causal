import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>A Brief Intro to Causal</title>
      </Head>
      <div>
        <section>
          <h2 data-testid="sectionheader">A Brief Intro to Causal</h2>
          <div>
            The goal of this demo application is to help you understand the
            features and benefits of Causal so you feel confident using it in
            your own codebase. If you need help using the demo, please email{" "}
            <a href="mailto:support@causallabs.io">support@causallabs.io</a> and
            we&apos;ll get right back to you.
          </div>

          <table cellPadding="5px">
            <tbody>
              <tr>
                <td>
                  <h3>Demo Scope</h3>
                  <div>This demo covers how to:</div>
                  <ul>
                    <li>Define a feature in Causal</li>
                    <li>Use a Causal-defined feature in React</li>
                    <li>Manage Causal-defined features without code</li>
                    <li>Track user impressions and events</li>
                    <li>Create a metric and run an experiment</li>
                    <li>Connect Causal to an ML model with Sagemaker</li>
                    <li>View Causal data in a data warehouse</li>
                  </ul>
                </td>
                <td>
                  <h3>Out of Scope</h3>
                  <div>This demo does not cover how to:</div>
                  <ul>
                    <li>Define audiences</li>
                    <li>Use other APIs, e.g. for Java, Ruby</li>
                    <li>Use external data sources for metrics</li>
                    <li>Set up your production environments</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <aside className="note">
            Note: Please make sure to leave the Docker container running
            throughout this tutorial.
          </aside>
        </section>
        <section>
          <div className="next-topic">
            <Link href={`/an-example-feature`}>Next: An Example Feature</Link>
          </div>
        </section>
        <section></section>
      </div>
    </Layout>
  );
}

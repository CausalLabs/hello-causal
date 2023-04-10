import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>A Brief Intro to Causal</title>
      </Head>
      <div>
      <section>
        <h2>A Brief Intro to Causal</h2>
        <p>The goal of this demo application is to help you understand the features and benefits of Causal so you feel confident using it in your   own codebase. If you need help or get stuck using the demo, please email <a href="mailto:support@causallabs.io">support@causallabs.io</a> and we'll get right back to you.</p>
        
        <table cellPadding="5px">
          <tbody>
          <tr><td>
        <h3>Demo Scope</h3>
        <p>This demo covers how to:</p>
          <ul>
            <li>Define a feature in Causal</li>
            <li>Use a Causal-defined feature in React</li>
            <li>Manage Causal-defined features without code</li>
            <li>Track user impressions and events in Causal</li>
            <li>View Causal data in a data warehouse</li>
          </ul>
        </td><td>
        <h3>Out of Scope</h3>
        <p>This demo does not cover how to:</p>
        <ul>
            <li>Define metrics, audiences, or experiments</li>
            <li>Use backend plugins, e.g. use Causal with Java, Ruby</li>
            <li>Use external data sources for metrics</li>
            <li>Employ Causal to improve Machine Learning models</li>
            <li>Set up your production environments</li>
        </ul>
        </td></tr>
        </tbody>
        </table>
      </section>
      <section>
        <p>
          <Link href={`/an-example-feature`}>
          Next: An Example Feature
        </Link>
        </p>
      </section>
      <section>
      </section>
    </div>  

    </Layout>
  );
}

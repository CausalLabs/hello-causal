import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function CreatingMetrics() {
  return (
    <Layout>
      <ClientOnly>
        <Head>
          <title>Creating a Metric</title>
        </Head>
        <div>
          <section>
            <h2>Creating a Metric</h2>
            <p>
              The metrics you define in Causal help your team keep track of user
              behaviors as they relate to your application and your business.
              You can read about the various types of metrics available in
              Causal in our{" "}
              <a
                href="https://tech.causallabs.io/docs/data-warehouse/metrics"
                target="new"
              >
                tech docs
              </a>
              .
            </p>

            <p>
              For this tutorial example, we're going to focus on creating a
              session metric, specifically: <br />
              <i>
                “How many times (on average) in each session did a user click
                our button?”
              </i>
            </p>

            <p>
              As a reminder, here's how we initially defined the button click
              event for our Example Feature in FDL:
            </p>
            <p>
              <code>
                <pre>{`feature ExampleFeature { 
  output {
    # (truncated for brevity)
  }

  "Occurs each time a user taps the button"
  event ButtonClick {
  }

};`}</pre>
              </code>
            </p>

            <p>
              And here's how we call the ButtonClick event from our React code:
            </p>
            <p>
              <code>
                <pre>{`<button onClick={() => feature?.signalButtonClick()}>`}</pre>
              </code>
            </p>

            <p>
              Our new metric will track the sum of the ButtonClick events when
              users click on the button in our application.
            </p>

            <h3>Try it out</h3>

            <p>
              1. In the Web Tools{" "}
              <a href="https://tools.causallabs.io/metrics" target="new">
                Metrics
              </a>{" "}
              section, click "Create New Metric"
            </p>
            <p>2. Give your metric a name, e.g. "Button Clicks"</p>

            <p>
              3. Under "How would you like to group and summarize?", leave it as
              "Per Session". We're measuring button clicks per user session.
            </p>
            <p>
              4. Under "Which items should be included?", click Add Item. Expand
              the options in the tree:{" "}
              <pre>
                Example Feature &gt; Events &gt; Displayed Example Feature &gt;
                Button Click &gt; Fired
              </pre>
            </p>
            <p>5. Choose "Fired" and tap "Select".</p>
            <p>6. Tap "Publish" and confirm.</p>
            <p>
              That's it for metrics! Next, we'll use your new metric in an
              experiment.
            </p>
          </section>
          <section>
            <p className="next-topic">
              <Link href={`/creating-experiment`}>
                Next: Creating an Experiment
              </Link>
            </p>
          </section>
        </div>
      </ClientOnly>
    </Layout>
  );
}

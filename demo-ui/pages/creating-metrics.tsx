import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function CreatingMetrics() {
  return (
    <Layout>
      <Head>
        <title>Creating a Metric</title>
      </Head>
      <div>
        <section>
          <h2 data-testid="sectionheader">Creating a Metric</h2>
          <div>
            The metrics you define in Causal help your team keep track of user
            behaviors as they relate to your application and your business. You
            can read about the various types of metrics available in Causal in
            our{" "}
            <a
              href="https://tech.causallabs.io/docs/data-warehouse/metrics"
              target="new"
            >
              tech docs
            </a>
            .
          </div>

          <div>
            For this tutorial example, we're going to focus on creating a
            session metric, specifically: <br />
            <i>
              “How many times (on average) in each session did a user click our
              button?”
            </i>
          </div>

          <div>
            As a reminder, here's how we initially defined the button click
            event for our Example Feature in FDL:
          </div>
          <div>
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
          </div>

          <div>
            And here's how we call the ButtonClick event from our React code:
          </div>
          <div>
            <code>
              <pre>{`<button onClick={() => feature?.signalButtonClick()}>`}</pre>
            </code>
          </div>

          <div>
            Our new metric will track the sum of the ButtonClick events when
            users click on the button in our application.
          </div>

          <h3>Try it out</h3>

          <div>
            1. In the Web Tools{" "}
            <a href="https://tools.causallabs.io/metrics" target="new">
              Metrics
            </a>{" "}
            section, click "Create New Metric"
          </div>
          <div>2. Give your metric a name, e.g. "Button Clicks"</div>
          <div>
            3. Skip down to the "Which items should be included?", click Add
            Item. Expand the options in the tree:{" "}
            <pre>Example Feature &gt; Events &gt; Button Click &gt; Fired</pre>
          </div>
          <div>4. Choose "Fired" and tap "Select".</div>
          <div>5. Tap "Publish" and confirm.</div>
          <div>
            That's it for metrics! Next, we'll use your new metric in an
            experiment.
          </div>
        </section>
        <section>
          <div className="next-topic">
            <Link href={`/creating-experiment`}>
              Next: Creating an Experiment
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

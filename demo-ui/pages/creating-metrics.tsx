import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout/Layout";
import { HCButton } from "../components/HCButton/HCButton";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";
import { Video } from "../components/Video/Video";
import { Instruction } from "../components/instruction/Instruction";
import { Literal } from "../components/Literal/Literal";
import { getWebtoolsUrl } from "./register";

export default function CreatingMetrics() {
  let counter = 1;

  return (
    <Layout>
      <Head>
        <title>Creating a Metric</title>
      </Head>
      <div>
        <h1 data-testid="sectionheader">Creating a Metric</h1>
        <section>
          <div>
            The metrics you define in Causal help your team keep track of user
            behaviors as they relate to your application and your business. You
            can read about the various types of metrics available in Causal in
            our{" "}
            <Link
              href="https://tech.causallabs.io/docs/data-warehouse/metrics"
              target="new"
            >
              tech docs
            </Link>
            .
          </div>

          <div className="mt-hc">
            For this tutorial example, we're going to focus on creating a
            session metric, specifically: <br />
            <i>
              “How many times (on average) in each session did a user click our
              button?”
            </i>
          </div>

          <div className="mt-hc">
            As a reminder, here's how we initially defined the add to cart click
            event for our Example Feature in FDL:
          </div>

          <CodeBlock
            className="mt-hc"
            language="graphql"
            code={`feature SneakerCard {
    output {
    # (truncated for brevity)
    }

    "Occurs each time a user taps the button"
    event AddToCartClick {
    }              
};`}
          />

          <div className="mt-hc">
            And here's how we{" "}
            <span className="font-semibold">
              call the ButtonClick event from our React code:
            </span>
          </div>
          <div>
            <CodeBlock
              className="mt-hc"
              language="tsx"
              code={`<button onClick={() => feature?.signalAddToCart()}>`}
            />
          </div>

          <div className="mt-hc">
            Our <span className="font-semibold">new metric</span> will track the
            sum of the ButtonClick events when users click on the button in our
            application.
          </div>

          <Video href="/movies/creating-metrics.mp4" className="mt-hc" />

          <h2 className="mt-10">Try it out</h2>
          <div className="font-bold">Create a metric</div>

          <Instruction num={counter++} className="mt-2">
            In the Web Tools{" "}
            <a
              href={getWebtoolsUrl() + "/metrics"}
              target="new"
              className="font-semibold"
            >
              Metrics
            </a>{" "}
            section, click <Literal>Create New Metric</Literal>.
            <HCButton
              href={getWebtoolsUrl() + "/metrics"}
              target="new"
              className="mt-hc"
            >
              Create New Metric
            </HCButton>
          </Instruction>

          <Instruction num={counter++}>
            Give your metric a name, e.g. <Literal>Add to Cart Clicks</Literal>.
          </Instruction>

          <Instruction num={counter++}>
            <div>Leave the following unchanged:</div>
            <ul className="list-disc list-inside indent-3 mt-1">
              <li>
                <Literal>Select a metric type</Literal>
              </li>
              <li>
                <Literal>
                  Does this metric improve with an increase or a decrease
                </Literal>
              </li>
              <li>
                <Literal>How would you like to group and summarize</Literal>
              </li>
            </ul>
            <div className="mt-3">
              We're measuring add to cart clicks per user session. An increase
              in this metric is an improvement.
            </div>
          </Instruction>

          <Instruction num={counter++}>
            Add a <Literal>Description</Literal> if you'd like.
          </Instruction>

          <Instruction num={counter++}>
            Under <Literal>Which items should be included</Literal>, click{" "}
            <Literal>Add Item</Literal>. Expand the options in the tree:
            <CodeBlock
              className="mt-hc"
              code="Sneaker Card &gt; Events &gt; Add To Cart &gt; Fired"
              language="typescript" // to make the > a different color
            />
          </Instruction>

          <Instruction num={counter++}>
            Choose <Literal>Fired</Literal> and tap <Literal>Select</Literal>.
          </Instruction>

          <Instruction num={counter++}>
            Tap <Literal>Publish</Literal> and confirm.
          </Instruction>

          <h2 className="mt-10">That's it for metrics!</h2>
          <div>Next, we'll use your new metric in an experiment.</div>
        </section>

        <section className="next-topic">
          {" "}
          <HCButton href="/creating-experiment">
            Next: Creating an Experiment
          </HCButton>
        </section>
      </div>
    </Layout>
  );
}

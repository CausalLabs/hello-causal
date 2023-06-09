import React from "react";
import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import SimulateExperiment from "../components/simulate-experiment";
import { ClientOnly } from "../components/utils";

export default function CreatingExperiment() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
      <ClientOnly>
        <Head>
          <title>Creating an Experiment</title>
        </Head>
        <div>
          <section>
            <h2 data-testid="sectionheader">Creating an Experiment</h2>
            <p>
              Causal helps you optimize your application by exposing users to
              different variants of features and by measuring which variant
              performs best based on metrics you define.
            </p>
            <p>
              <b>Example</b>
            </p>
            <p>
              Imagine that your team wants to compare two versions of the
              "Example Feature" button from our earlier lessons. The current
              version ({feature?.backgroundColor}) and a blue button.
            </p>
            <p>
              <button
                style={{
                  width: feature?.width,
                  height: feature?.height,
                  background: feature?.backgroundColor,
                  color: feature?.fontColor,
                }}
              >
                {feature?.callToActionCopy}
              </button>
              &nbsp;
              <button
                style={{
                  width: feature?.width,
                  height: feature?.height,
                  background: "blue",
                  color: feature?.fontColor,
                }}
              >
                {feature?.callToActionCopy}
              </button>
            </p>
            <p>
              Remember, you can change the backgroundColor of the button{" "}
              <a
                href="https://tools.causallabs.io/features/edit/ExampleFeature"
                target="_new"
              >
                in the Causal Dashboard.
              </a>
            </p>
            <h3>Try it out</h3>
            <aside className="note" style={{ marginTop: "-12px" }}>
              Note: You will need to have created a metric from{" "}
              <a href="/creating-metrics">Creating a Metric</a> to complete this
              tutorial.
            </aside>
            <p>
              1. In the Web Tools{" "}
              <a href="https://tools.causallabs.io/experiments" target="new">
                Experiments
              </a>{" "}
              section, click "Create New Experiment"
            </p>
            <p>
              2. Give your experiment a name. (Any name is OK. If you are not
              feeling creative try "Button experiment".)
            </p>
            <p>
              3. Under Add Features, choose "Example Feature" for the Feature
              and "Background Color" for the Attribute
            </p>
            <p>
              4. Tap "Create Experiment". You'll see the experiment detail view.
              If you've gone through the previous tutorial steps the Control
              value of Example Feature: Background Color should now equal
              "green" or "red".
            </p>
            <p>
              5. Under GOALS AND METRICS &gt; Experiment Metric, choose the
              metric you created earlier (e.g. "Button Click") from the
              dropdown.
            </p>
            <p>
              6. Tap "Add a Variant" and give your variant a name, e.g. "Green
              Version"
            </p>
            <p>
              7. Once your variant appears, set the Value of "Example Feature:
              Background Color" to "green".
            </p>
            <p>8. Tap "Launch Experiment" and confirm.</p>
            <p>
              Your experiment is running! Next, we'll simulate user traffic to
              your experiment so you can see what looks like.
            </p>
          </section>
          <section>
            <h2> Simulate your experiment </h2>
          </section>
          <div>
            <SimulateExperiment />
          </div>
          <section>
            <p className="next-topic">
              <Link href={`/running-ml-models`}>Next: Linking ML Models</Link>
            </p>
          </section>
        </div>
      </ClientOnly>
    </Layout>
  );
}

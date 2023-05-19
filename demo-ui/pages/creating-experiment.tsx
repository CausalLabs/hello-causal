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
            <h2>Creating an Experiment</h2>
            <p>
              Causal helps you optimize your application by exposing users to
              different variants of features and by measuring which variant
              performs best based on metrics you define.
            </p>
            <p>
              <b>Example</b>
            </p>
            <p>
              Imagine that your team wants to compare two versions of a button –
              A red one and a green one – to determine which one users are more
              likely to click. We'll use the same “Example Feature” button from
              our earlier lessons.
            </p>
            <p>
              <button
                style={{
                  width: feature?.width,
                  height: feature?.height,
                  background: "red",
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
                  background: "green",
                  color: feature?.fontColor,
                }}
              >
                {feature?.callToActionCopy}
              </button>
            </p>
            <h3>Try it out</h3>

            <p>
              1. In the Web Tools{" "}
              <a href="https://tools.causallabs.io/experiments" target="new">
                Experiments
              </a>{" "}
              section, click "Create New Experiment"
            </p>
            <p>2. Give your experiment a name (any name is OK.)</p>
            <p>
              3. Under Add Features, choose "Example Feature" for the Feature
              and "Background Color" for the Attribute
            </p>
            <p>
              4. Tap "Create Experiment". You'll see the experiment detail view.
              Note the Control value of Example Feature: Background Color = red.
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
              <Link href={`/fin`}>Next: Summary and Next Steps</Link>
            </p>
          </section>
        </div>
      </ClientOnly>
    </Layout>
  );
}

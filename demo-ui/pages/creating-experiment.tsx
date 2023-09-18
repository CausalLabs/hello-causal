import React from "react";
import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import { Layout } from "../components/Layout/Layout";
import { Grid } from "../components/Grid/Grid";
import { Card2 } from "../components/Card/Card2";
import { Note } from "../components/Note/Note";
import { Video } from "../components/Video/Video";
import { Instruction } from "../components/instruction/Instruction";
import { HCButton } from "../components/HCButton/HCButton";
import { Literal } from "../components/Literal/Literal";
import SimulateExperiment from "../components/SimulateExperiment/SimulateExperiment";
import { Card } from "../components/Card/Card";
import { getWebtoolsUrl } from "./register";

function cloneWithOverride<T>(
  obj: T | undefined,
  override: Partial<T> = {}
): T | undefined {
  if (obj === undefined) return undefined;

  const cloned = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
  return Object.assign(cloned, override);
}

export default function CreatingExperiment() {
  const card = useFeature(qb().getSneakerCard());
  let count = 1;

  return (
    <Layout>
      <Head>
        <title>Creating an Experiment</title>
      </Head>
      <div>
        <h1 data-testid="sectionheader">Creating an Experiment</h1>

        <section>
          <div>
            Causal helps you optimize your application by exposing users to
            different variants of features and by measuring which variant
            performs best based on metrics you define.
          </div>

          <Grid className="mt-hc h-[900px] sm:h-[550px]">
            {card == "OFF" ? (
              <div>
                The Card feature is turned off. Turn it on to see the side by
                side experiment cards
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Card />
                  <Card2
                    card={cloneWithOverride(card, {
                      buttonBackgroundColor: "lightblue",
                    })}
                  />
                </div>
                <div className="mt-10 max-w-[240px] sm:max-w-[500px] bg-white p-5 border-gray-200">
                  Imagine that your team wants to compare two versions of the
                  Card from our earlier lessons. The current version (on the
                  left), and new version (on the right) with a blue button.
                </div>
              </div>
            )}
          </Grid>

          <Note className="mt-hc">
            Remember, you can change the <Literal>backgroundColor</Literal> of
            the button{" "}
            <Link
              className="font-semibold"
              href={getWebtoolsUrl() + "/features/edit/SneakerCard"}
              target="_new"
            >
              in the Causal Dashboard.
            </Link>{" "}
          </Note>
        </section>

        <section className="mt-section">
          <Video href="/movies/creating-experiment.mp4" />
        </section>

        <section className="mt-section">
          <h2>Try it out</h2>
          <div className="font-bold">Create an experiment</div>

          <Note>
            Note: You will need to have created a metric from{" "}
            <Link href="/creating-metrics" className="font-semibold">
              Creating a Metric
            </Link>{" "}
            to complete this tutorial.
          </Note>

          <Instruction num={count++}>
            In the Web Tools{" "}
            <Link href={getWebtoolsUrl() + "/experiments"} target="new">
              Experiments
            </Link>{" "}
            section, click <Literal>Create New Experiment</Literal>
            <HCButton
              className="mt-hc"
              href={getWebtoolsUrl() + "/experiments"}
              target="new"
            >
              Create New Experiment
            </HCButton>
          </Instruction>

          <Instruction num={count++}>
            Give your experiment a name. Any name is OK. If you are not feeling
            creative try <Literal>Card Experiment</Literal>.
          </Instruction>

          <Instruction num={count++}>
            Under Add Features, choose <Literal>Sneaker Card</Literal> for the
            Feature and <Literal>Button Background Color</Literal> for the
            Attribute
          </Instruction>

          <Instruction num={count++}>
            Tap <Literal>Create Experiment</Literal>. You'll see the experiment
            detail view. If you've gone through the previous tutorial steps the
            Control value of{" "}
            <Literal>Sneaker Card: Button Background Color</Literal> will equal{" "}
            <Literal>white</Literal> If you haven't it will equal{" "}
            <Literal>pink</Literal>.
          </Instruction>

          <Instruction num={count++}>
            Under the <Literal>GOALS AND METRICS</Literal> panel, choose the{" "}
            <Literal>Experiment Metric</Literal> dropdown, and then choose the
            metric you created earlier (e.g.{" "}
            <Literal>Add to Cart Clicks</Literal>) from the dropdown list.
          </Instruction>

          <Instruction num={count++}>
            Tap <Literal>Add a Variant</Literal> and give your variant a name,
            e.g. <Literal>Blue Version</Literal>.
          </Instruction>

          <Instruction num={count++}>
            Once your variant appears, set the Value of{" "}
            <Literal>Sneaker Card</Literal> :{" "}
            <Literal>Button Background Color</Literal> to{" "}
            <Literal>lightblue</Literal>.
          </Instruction>

          <Instruction num={count++}>
            Tap <Literal>Launch Experiment</Literal> and confirm
          </Instruction>

          <div className="mt-10 text-2xl font-bold">
            Your experiment is running!
          </div>
          <div className="mt-3">
            Next, we'll simulate user traffic to your experiment so you can see
            what looks like.
          </div>
        </section>

        <section className="mt-section">
          <div>
            <SimulateExperiment featureName="SneakerCard" />
          </div>
        </section>

        <div className="mt-10">
          Once you simulate some traffic, you can view the results of your
          experiment in the Web Tools{" "}
          <Link
            href={getWebtoolsUrl() + "/experiments"}
            target="new"
            className="font-semibold"
          >
            Experiments
          </Link>{" "}
          section by clicking into your experiment.
        </div>
        <div className="mt-hc">
          You can simulate more traffic to see what your experiment would look
          like with more data.
        </div>
      </div>

      <section className="next-topic">
        <HCButton href={`/running-ml-models`}>Next: Link an ML Models</HCButton>
      </section>
    </Layout>
  );
}

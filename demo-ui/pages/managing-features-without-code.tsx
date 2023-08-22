import Head from "next/head";
import Link from "next/link";
import { CardWithGrid } from "../components/Card/Card";
import { HCButton } from "../components/HCButton/HCButton";
import { Instruction } from "../components/instruction/Instruction";
import { Layout } from "../components/Layout/Layout";
import { Literal } from "../components/Literal/Literal";
import { Video } from "../components/Video/Video";
import { getWebtoolsUrl } from "./register";

export default function ManagingFeaturesWithoutCode() {
  return (
    <Layout>
      <Head>
        <title>Managing features without code</title>
      </Head>
      <div>
        <h1 data-testid="sectionheader">Managing features without code</h1>

        <section>
          <div>
            All of the features you define in your .fdl file are visible in the
            Causal Dashboard.
          </div>
          <div className="mt-hc">
            Once you&apos;ve written and compiled your Features in FDL and
            pushed your changes to the Causal server, anyone on your team with
            permission can update the values and roll them out to different
            environments.
          </div>
        </section>

        <section className="mt-section">
          <Video href="/movies/managing-features-without-code.mp4" />
        </section>

        <section className="mt-section">
          <h2>Try it out</h2>
          <div className="font-bold">Update a feature with the web tools</div>

          <Instruction num={1}>
            <div>
              <Link
                className="font-semibold"
                href={getWebtoolsUrl() + "/features/edit/SneakerCard"}
                target="_new"
              >
                Edit the Sneaker Card Feature
              </Link>{" "}
              in the Causal Dashboard.
            </div>

            <HCButton
              className="mt-hc"
              href={getWebtoolsUrl() + "/features/edit/SneakerCard"}
              target="_new"
            >
              Edit Feature
            </HCButton>
          </Instruction>

          <Instruction num={2}>
            Under <Literal>Values for Rollout</Literal>, change the{" "}
            <Literal>Sneaker Card</Literal> output named{" "}
            <Literal>Button Background Color</Literal> to{" "}
            <Literal>white</Literal> and tap <Literal>SAVE</Literal>.
          </Instruction>

          <Instruction num={3}>
            You&apos;ll see a <Literal>Production Attribute Change</Literal>{" "}
            warning. Tap <Literal>Continue</Literal>. You will see the new
            button background color below.
          </Instruction>

          <CardWithGrid className="mt-section" />

          <div className="mt-hc">
            Anyone on your team with the appropriate permissions can make this
            kind of change without additional coding.
          </div>
        </section>

        <section className="next-topic">
          {" "}
          <HCButton href="/tracking-impressions-and-events">
            Next: Tracking Impressions and Events
          </HCButton>
        </section>
      </div>
    </Layout>
  );
}

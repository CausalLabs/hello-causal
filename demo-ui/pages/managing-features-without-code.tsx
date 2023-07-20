import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";

export default function ManagingFeaturesWithoutCode() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
      <Head>
        <title>Managing features without code</title>
      </Head>
      <div>
        <section>
          <h2 data-testid="sectionheader">Managing features without code</h2>
          <div>
            All of the features you define in your .fdl file are visible in the
            Causal Dashboard.
          </div>
          <div>
            Once you&apos;ve written and compiled your Features in FDL and
            pushed your changes to the Causal server, anyone on your team with
            permission can update the values and roll them out to different
            environments.
          </div>
        </section>
        <section>
          <h3>Try it out: Edit a feature in the Causal dashboard</h3>
          <div>
            1.{" "}
            <a
              href="https://tools.causallabs.io/features/edit/ExampleFeature"
              target="_new"
            >
              Edit the Example Feature
            </a>{" "}
            in the Causal Dashboard.
          </div>
          <div>
            2. Under "Values for Rollout", change the{" "}
            <span className="inline-value">ExampleFeature</span> output named{" "}
            <span className="inline-value">width</span> so it equals{" "}
            <span className="inline-value">550px</span> (instead of the prior
            default <span className="inline-value">150px</span>) and tap SAVE.
          </div>
          <div>
            3. You&apos;ll see a{" "}
            <span className="inline-webui">Production Attribute Change</span>{" "}
            warning. Tap <span className="inline-webui">Continue</span>. You
            will see a much wider button below.
          </div>
          <div>
            <button
              style={{
                width: feature?.width,
                height: feature?.height,
                background: feature?.backgroundColor,
                color: feature?.fontColor,
              }}
              onClick={() => feature?.signalButtonClick()}
            >
              {feature?.callToActionCopy}
            </button>
          </div>
          <div>
            Anyone on your team with the appropriate permissions can make this
            kind of change without additional coding.
          </div>
        </section>
        <h3>Watch how to do it</h3>
        <div>
          <a
            href="https://www.loom.com/share/9fc71b6446ec420abaaf261ea14e3577"
            target="new"
          >
            <img
              className="loom-thumbnail"
              src="https://cdn.loom.com/sessions/thumbnails/9fc71b6446ec420abaaf261ea14e3577-with-play.gif"
            />
          </a>
        </div>

        <section>
          <div className="next-topic">
            <Link href={`/tracking-impressions-and-events`}>
              Next: Tracking Impressions and Events
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

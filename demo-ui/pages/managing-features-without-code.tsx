import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function ManagingFeaturesWithoutCode() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
      <ClientOnly>
        <Head>
          <title>Managing features without code</title>
        </Head>
        <div>
          <section>
            <h2>Managing features without code</h2>
            <p>
              All of the features you define in your .fdl file are visible in
              the Causal Dashboard.
            </p>
            <p>
              Once you&apos;ve written and compiled your Features in FDL and
              pushed your changes to the Causal server, anyone on your team with
              permission can update the values and roll them out to different
              environments.
            </p>
          </section>
          <section>
            <h3>Try it out: Edit a feature in the Causal dashboard</h3>
            <p>
              1.{" "}
              <a
                href="https://tools.causallabs.io/features/edit/ExampleFeature"
                target="_new"
              >
                Edit the Example Feature
              </a>{" "}
              in the Causal Dashboard.
            </p>
            <p>
              2. Under <span className="inline-webui">Values for Rollout</span>,
              change the <span className="inline-value">ExampleFeature</span>{" "}
              output named <span className="inline-value">width</span> so it
              equals <span className="inline-value">550px</span> (instead of the
              prior default <span className="inline-value">150px</span>) and
              click
              <span className="inline-webui">SAVE</span>.
            </p>
            <p>
              3. You&apos;ll see a{" "}
              <span className="inline-webui">Production Attribute Change</span>{" "}
              warning. Tap <span className="inline-webui">Continue</span>.
            </p>
            <p>
              4. Refresh this page. You will see a much wider button below.
              <br />
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
            </p>
            <p>
              Anyone on your team with the appropriate permissions can make this
              kind of change without additional coding.
            </p>
          </section>
          <h3>Watch how to do it</h3>
          <p>
            <a
              href="https://www.loom.com/share/9fc71b6446ec420abaaf261ea14e3577"
              target="new"
            >
              <img
                className="loom-thumbnail"
                src="https://cdn.loom.com/sessions/thumbnails/9fc71b6446ec420abaaf261ea14e3577-with-play.gif"
              />
            </a>
          </p>

          <section>
            <p className="next-topic">
              <Link href={`/tracking-impressions-and-events`}>
                Next: Tracking Impressions and Events
              </Link>
            </p>
          </section>
        </div>
      </ClientOnly>
    </Layout>
  );
}

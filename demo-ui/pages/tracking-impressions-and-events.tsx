import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function TrackingImpressionsAndEvents() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
      <ClientOnly>
        <Head>
          <title>Tracking Impressions and Events</title>
        </Head>
        <div>
          <section>
            <h2>Tracking Impressions and Events</h2>
            <h3>Impressions</h3>
            <p>
              When a user&apos;s browser renders the features you&apos;ve
              defined with Causal, the Causal Impression Server records an
              impression. An impression is when a feature is displayed to a user
              (
              <a
                href="https://tech.causallabs.io/docs/fdl/memoization"
                target="new"
              >
                docs
              </a>
              ).
            </p>

            <aside className="note">
              Note: The Causal Impression Server for this demo runs locally as
              part of the Docker package you installed. In your terminal log,
              look for:
              <code>
                INFO i.c.iserver.ImpressionServer - Starting impression server
                on port 3004
              </code>
            </aside>

            <h3>Events</h3>
            <p>
              Causal also enables you to generate events associated with any
              Feature.
            </p>
            <p>
              In our example feature below, we&apos;ve specified an event in the
              FDL file to fire when the button is clicked:
              <code>
                &quot;Occurs each time a user taps the button&quot;
                <br />
                event ButtonClick &#123;&#125;
              </code>
            </p>
            <p>
              In the react <span className="inline-value">&lt;button&gt;</span>{" "}
              component, we call the click event:
              <code>
                onClick=&#123;() =&gt; feature?.signalButtonClick()&#125;
              </code>
            </p>
          </section>
          <section>
            <h3>Try it out: View impressions and events</h3>
            <p>
              1.{" "}
              <a href="https://tools.causallabs.io/debug" target="new">
                Open the Event Viewer
              </a>{" "}
              in the Debug section of the Causal Dashboard.
              <br />
              Under <span className="inline-webui">Event Viewer</span>, click
              the switch next to{" "}
              <span className="inline-webui">Logging is OFF for you</span> to
              turn it on.
            </p>
            <p>
              2. Refresh this page and look for an impression recorded in the
              log.
            </p>
            <p>
              3. Click the button below and look for an event recorded in the
              log.
            </p>
            <p>
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
              These impressions and events are also logged to your data
              warehouse.
            </p>
            <h3>Watch how to do it</h3>
            <p>
              <a
                href="https://www.loom.com/share/ebfb74a6bab1482b84953c5e2cdb435f"
                target="new"
              >
                <img
                  className="loom-thumbnail"
                  src="https://cdn.loom.com/sessions/thumbnails/ebfb74a6bab1482b84953c5e2cdb435f-with-play.gif"
                />
              </a>
            </p>
          </section>
          <section>
            <p className="next-topic">
              <Link href={`/viewing-the-data-warehouse`}>
                Next: Viewing the data warehouse
              </Link>
            </p>
          </section>
        </div>
      </ClientOnly>
    </Layout>
  );
}

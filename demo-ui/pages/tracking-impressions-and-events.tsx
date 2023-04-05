import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function TrackingImpressionsAndEvents() {
  const feature = useFeature(qb().getExampleFeature());
  let buttonStyle = {
    width: feature?.width,
    height: feature?.height,
    background: feature?.backgroundHexColor,
    color: feature?.fontColor,
  };
  return (
    <Layout>
      <ClientOnly>
        <section>
          <h2>Tracking Impressions and Events</h2>
          <p>
            When a user's browser renders the features you've registered with
            Causal, an "Impression" is logged with the Causal Impression Server.
          </p>
          <p>
            Causal also enables you to generate "Events" associated with any
            Feature.
          </p>
          <p>
            In our example feature below, we've specified an event to fire when
            the button is clicked
          </p>
          <p>
            <code>
              "Occurs each time a user taps the button"
              <br />
              event ButtonClick &#123;&#125;
            </code>
          </p>
        </section>
        <section>
          <p>
            <button
              style={buttonStyle}
              onClick={() => feature?.signalButtonClick()}
            >
              {feature?.callToActionCopy}
            </button>
          </p>
        </section>
        <section>
          <h3>Try it out: View impressions and events from this demo app</h3>
          <p>
            1. View the events log in the "Debug" section of the Causal
            Dashboard. Under Event Viewer, click the switch next to "Logging is
            OFF for you" to turn it on.
          </p>
          <p>2. Refresh this demo app page</p>
          <a
            href="https://tools.causallabs.io/features/edit/ExampleFeature"
            target="_new"
          >
            the Example Feature
          </a>{" "}
          here.
        </section>
        <section>
          <p>
            <Link href={`/tracking-impressions-and-events`}>Next &gt;</Link>
          </p>
        </section>
      </ClientOnly>
    </Layout>
  );
}

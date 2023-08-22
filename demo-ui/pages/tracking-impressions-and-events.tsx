import Head from "next/head";
import Link from "next/link";
import { CardWithGrid } from "../components/Card/Card";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";
import { Instruction } from "../components/instruction/Instruction";
import { Layout } from "../components/Layout/Layout";
import { HCButton } from "../components/HCButton/HCButton";
import { Note } from "../components/Note/Note";
import { Video } from "../components/Video/Video";
import { Literal } from "../components/Literal/Literal";
import { getWebtoolsUrl } from "./register";

export default function TrackingImpressionsAndEvents() {
  return (
    <Layout>
      <Head>
        <title>Tracking Impressions and Events</title>
      </Head>
      <div>
        <h1 data-testid="sectionheader">Tracking Impressions and Events</h1>

        <section>
          <h2>Impressions</h2>
          <div>
            When a user&apos;s browser renders the features you&apos;ve defined
            with Causal, the Causal Impression Server records an impression. An
            impression is when a feature is displayed to a user (
            <a
              href="https://tech.causallabs.io/docs/fdl/memoization"
              target="new"
            >
              docs
            </a>
            ).
          </div>

          <Note className="mt-2">
            Note: The Causal Impression Server for this demo runs locally as
            part of the Docker package you installed. In your terminal log, look
            for:
            <CodeBlock
              language="bash"
              code="INFO i.c.iserver.ImpressionServer - Starting impression server on port 3004"
            />
          </Note>
        </section>
        <section className="mt-section">
          <h2>Events</h2>

          <div>
            Causal also enables you to generate events associated with any
            Feature. In our example feature below, we've specified an event in
            the FDL file to fire when the button is clicked:
          </div>

          <CodeBlock
            className="mt-1"
            code={`"Occurs each time a user adds product to cart"
event AddToCart {}`}
            language="graphql"
          />

          <div className="mt-hc">
            In the react <Literal>&lt;button&gt;</Literal> component, we call
            the click event:
          </div>

          <CodeBlock
            className="mt-1"
            code="onClick={() => feature?.signalAddToCart()}"
            language="tsx"
          />
        </section>
        <section className="mt-section">
          <Video href="/movies/tracking-impressions-events.mp4" />
        </section>

        <section className="mt-section">
          <h2>Try it out</h2>
          <div className="font-bold">View impressions and events</div>

          <Instruction num={1} className="mt-2">
            <Link
              href={getWebtoolsUrl() + "/event-viewer"}
              target="new"
              className="font-semibold"
            >
              Open the Event Viewer
            </Link>{" "}
            in the Debug section of the Causal Dashboard.
            <br />
            Under <Literal>Event Viewer</Literal>, click the switch next to{" "}
            <Literal>Logging is OFF for you</Literal> to turn it on.
            <HCButton
              href={getWebtoolsUrl() + "/event-viewer"}
              target="new"
              className="mt-hc"
            >
              Open Event Viewer
            </HCButton>
          </Instruction>

          <Instruction num={2}>
            Refresh this page and look for an impression recorded in the log.
          </Instruction>

          <Instruction num={3}>
            Click the <Literal>Add to Cart</Literal> button below and look for
            an event recorded in the log.
          </Instruction>

          <CardWithGrid className="mt-hc" />

          <div className="mt-hc">
            These impressions and events are also logged to your data warehouse.
          </div>
        </section>

        <section className="next-topic">
          {" "}
          <HCButton href="/viewing-the-data-warehouse">
            Next: Viewing the data warehouse
          </HCButton>
        </section>
      </div>
    </Layout>
  );
}

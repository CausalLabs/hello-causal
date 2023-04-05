import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function FeaturesAndAttributes() {
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
        <Head>
        </Head>
        <section>
          <h2>Managing features without code</h2>          
          <p>All of the features you define in your .fdl file are visible in the <a href="https://tools.causallabs.io/features">Causal Dashboard</a>.</p>
          <p>Once you've written and compiled your Features in FDL and pushed your changes to the Causal server, anyone on your team with permission can update the values and roll them out to different environments.</p>
        </section>
        <section>
          <p>
            <button style={buttonStyle}
            onClick={() => feature?.signalButtonClick()}>
            {feature?.callToActionCopy}
          </button>
          </p>    
        </section>
        <section>
        <h3>Try it out</h3>
        <p>1. Visit <a href="https://tools.causallabs.io/features/edit/ExampleFeature" target="_new">the Example Feature</a> here.</p>
        <p>2. Under "Values for Rollout", change one of the values e.g. make the Background Hex Color = "#000080" (blue).</p>
        <p>3. You'll see a warning<code>Production Attribute Change<br />
You are about to introduce one or more new attribute values to production. Continue?</code>(Tap "Continue") </p>
        </section>
        <section>
        <p>
          <Link href={`/tracking-impressions-and-events`}>
            Next: Tracking Impressions and Events &gt;
          </Link>
        </p>
        </section>
      </ClientOnly>
    </Layout>
  );
}

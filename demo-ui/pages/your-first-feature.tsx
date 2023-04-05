import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function YourFirstFeature() {
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
          <h2>Your first feature</h2>
          <p>Your team's application probably has many features.</p>
          <p>
            To understand how Causal manages features, let's focus on a single
            feature, the button below.
          </p>
          <p>
            This button has the following attributes:
            <br />
            Call To Action Copy: {feature?.callToActionCopy}
            <br />
            Width: {feature?.width}
            <br />
            Height: {feature?.height}
            <br />
            Font Color: {feature?.fontColor}
            <br />
            Background Color: {feature?.backgroundHexColor}
          </p>
        </section>
        <section>
          <p>
            <Link href={`./features-and-the-fdl-file`}>
              <button
                style={buttonStyle}
                onClick={() => feature?.signalButtonClick()}
              >
                {feature?.callToActionCopy}
              </button>
            </Link>
          </p>
          <p>
            <br />
            (Go ahead, it's OK to click it!)
          </p>
        </section>
      </ClientOnly>
    </Layout>
  );
}

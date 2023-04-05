import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function FeaturesAndTheFdlFile() {
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
          <h2>Features and the FDL file</h2>
          <p>
            Causal uses a{" "}
            <a href="https://tech.causallabs.io/docs/fdl/intro" target="new">
              Feature Definition Language
            </a>{" "}
            file to specify each feature's attributes ("outputs") and default
            values in a .fdl file. Before a .fdl file is compiled, a feature
            looks something like this:
          </p>
          <code>
            <p>
              feature ExampleFeature &#123;
              <br />
              ...
              <br />
              &nbsp;&nbsp;output &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;"the button Hex color"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;backgroundHexColor: String! = "#008000"
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <p></p>
          </code>
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
          <h3>Try it out: Edit the FDL and recompile</h3>
          <p>
            1. Find the .fdl file linked to this demo application. From the
            hello-causal directory, open the file ./fdl/causal.fdl
          </p>
          <p>
            2. Change one of the values in the .fdl file, e.g. make the
            backgroundHexColor = "#800000" (red) instead of "#008000" (green)
            and save the file.
          </p>
          <p>
            3. From your terminal, run
            <br />
            <code>
              ./causalc --push-fdl --typescript demo-ui/components/causal.ts
              fdl/causal.fdl
            </code>
            . This compiles your .fdl file into Typescript code so it can be
            used by this React/Next JS app. Starting from the demo-ui directory,
            you can see the resulting file at ./components/causal.ts
          </p>
          <p>
            Refresh this page when you're done to see the change you've made.
          </p>
        </section>
        <section>
          <p>
            <Link href={`reference-fdl-from-javascript`}>
              Next: Reference your defined features from Javascript &gt;
            </Link>
          </p>
        </section>
      </ClientOnly>
    </Layout>
  );
}

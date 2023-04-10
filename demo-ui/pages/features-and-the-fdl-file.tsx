import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function FeaturesAndTheFdlFile() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
      <ClientOnly>
        <Head>
          <title>Defining Features with FDL</title>
        </Head>
        <div>
          <section>
            <h2>Defining Features with FDL</h2>
            <p>
              Causal uses a{" "}
              <a href="https://tech.causallabs.io/docs/fdl/intro" target="new">
                Feature Definition Language
              </a>{" "}
              file to specify each feature's attributes ("outputs") and default
              values in a .fdl file. Here's an example feature specified in FDL:
            </p>

            <p>
              <code>
                feature ExampleFeature &#123;
                <br />
                &nbsp;&nbsp;// (truncated for brevity)
                <br />
                &nbsp;&nbsp;output &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;"the button background color"
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: String! = "#008000"
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </code>
            </p>
          </section>
          <section>
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
          </section>
          <section>
            <h3>Try it out: Edit the FDL and recompile</h3>
            <p>
              1.{" "}
              <Link href={`register`} target="new">
                Register this device
              </Link>{" "}
              (your computer) so Causal knows where to display the features
              you're testing. (
              <a
                href="https://tech.causallabs.io/docs/getting-started/trying/register"
                target="new"
              >
                view docs
              </a>
              )
            </p>
            <p>
              2. Starting from the hello-causal directory, open the Feature
              Definition Language file <code>./fdl/causal.fdl</code>
            </p>
            <p>
              3. Change one of the values in the .fdl file, e.g. make the
              backgroundColor = "green" instead of "red" and save the file.
            </p>
            <p>
              4. Run the following command in your terminal: <br />
              <code>
                ./causalc --push-fdl --typescript demo-ui/components/causal.ts
                fdl/causal.fdl
              </code>
              This script compiles your .fdl file into Typescript code to be
              used by this React/Next.js app.
            </p>
            <p>
              5. Refresh this page to see the change you've made. (If you
              followed the instructions, the button feature above should be
              green.
            </p>

            <h3>Watch how to do it</h3>
            <p>
              <a
                href="https://www.loom.com/share/9088a3ec2a924e07ad137a7e73795e08"
                target="new"
              >
                <img
                  className="loom-thumbnail"
                  src="https://cdn.loom.com/sessions/thumbnails/9088a3ec2a924e07ad137a7e73795e08-with-play.gif"
                />
              </a>
            </p>
          </section>
          <section>
            <p>
              <Link href={`reference-fdl-from-javascript`}>
                Next: Reference FDL features in Javascript
              </Link>
            </p>
          </section>
        </div>
      </ClientOnly>
    </Layout>
  );
}

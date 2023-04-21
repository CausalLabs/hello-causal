import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import CredentialsTable from "../components/credentials";
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
              file to specify each feature&apos;s attributes and default values
              in an .fdl file. FDL types are{" "}
              <a href="https://graphql.org/">GraphQL</a>{" "}
              <a href="https://www.apollographql.com/docs/apollo-server/schema/schema/">
                types
              </a>
              , so it is familiar and easy to use.
            </p>
            <p>
              Here&apos;s an example feature specified in FDL:
              <code>
                <pre>{`feature ExampleFeature {
    # attributes are defined by the keyword output
    output {
        "the button text"
        callToActionCopy: String! = "Click Me!"

        "descriptive text above the button"
        descriptiveCopy: String! = "This is an irresistible button:"

        "the button width"
        width: String! = "150px"

        "the button height"
        height: String! = "40px"

        "the button background color"
        backgroundColor: String! = "red"

        "the button font color"
        fontColor: String! = "#ffffff"                
    };
};`}</pre>
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
            <aside className="note">
              Reminder: Please make sure to leave the Docker container running
              throughout this tutorial.
            </aside>
            <p>
              1.{" "}
              <Link
                href={"https://tools.causallabs.io/auth/causal"}
                target="new"
              >
                Log in
              </Link>{" "}
              to the web tools
            </p>
            <p>
              Your <b>initial</b> credentials are:
            </p>
            <>
              <CredentialsTable
                username={process.env.NEXT_PUBLIC_CAUSAL_USERNAME ?? "/error"}
                password={process.env.NEXT_PUBLIC_CAUSAL_PASSWORD ?? "/error"}
              />
              <aside className="note">
                We encourage you to change your password! You can do so with the
                “forgot password” flow on the login flow.
              </aside>
            </>
            <p>
              2.{" "}
              <Link href={"/register"} target="new">
                Register this web browser
              </Link>{" "}
              so Causal knows where to display the features you&apos;re testing
              (
              <a
                href="https://tech.causallabs.io/docs/getting-started/trying/register"
                target="new"
              >
                docs
              </a>
              ).
            </p>
            <p>
              3. Starting from the hello-causal directory, open the following
              Feature Definition Language file.
              <code>./fdl/causal.fdl</code>
            </p>
            <p>
              4. Change the background color from red to green and save the .fdl
              file
              <code>backgroundColor: String! = "green"</code>
            </p>
            <p>
              5. Run the following command in your terminal: <br />
              <code>
                ./causalc --push-fdl --typescript demo-ui/components/causal.ts
                fdl/causal.fdl
              </code>
              The <span className="inline-value">causalc</span> script compiles
              your FDL into TypeScript code, and that TypeScript code is used by
              this tutorial
            </p>
            <p>
              5. If you followed the instructions, the buttons on this page will
              turn green.
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
            <p className="next-topic">
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

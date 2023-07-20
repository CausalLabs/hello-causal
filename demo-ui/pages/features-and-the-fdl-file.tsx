import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import CredentialsTable from "../components/credentials";
import { CopyableCodeBlock } from "../components/clipboard-utils";
import Layout from "../components/layout";
import { getWebtoolsUrl } from "./register";
import React from "react";

export default function FeaturesAndTheFdlFile() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
      <Head>
        <title>Defining Features</title>
      </Head>
      <div>
        <section>
          <h2 data-testid="sectionheader">Defining Features</h2>
          <p>
            Causal uses a{" "}
            <a href="https://tech.causallabs.io/docs/fdl/intro" target="new">
              Feature Definition Language
            </a>{" "}
            file to specify each feature&apos;s attributes and initial seed
            values in an .fdl file. FDL types are{" "}
            <a href="https://graphql.org/">GraphQL</a>{" "}
            <a href="https://www.apollographql.com/docs/apollo-server/schema/schema/">
              types
            </a>
            , so they are familiar and easy to use.
          </p>
          <div>
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
          </div>
        </section>
        <section>
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
        </section>
        <section>
          <h3>Try it out: Edit the FDL and recompile</h3>
          <aside className="note">
            Reminder: Please make sure to leave the Docker container running
            throughout this tutorial.
          </aside>
          <aside className="note">
            All paths are relative to the{" "}
            <span className="inline-value">hello-causal</span> directory
          </aside>
          <div>
            1.{" "}
            <Link href={`${getWebtoolsUrl()}/auth/causal`} target="new">
              Log in
            </Link>{" "}
            to the web tools
          </div>
          <div>
            Your <b>initial</b> credentials are:
          </div>
          <>
            <CredentialsTable
              username={process.env.NEXT_PUBLIC_CAUSAL_USERNAME ?? "/error"}
              password={process.env.NEXT_PUBLIC_CAUSAL_PASSWORD ?? "/error"}
            />
          </>
          <div>
            2.{" "}
            <Link href={"/register"} target="new">
              Register this web browser
            </Link>{" "}
            so Causal knows where to display the features you&apos;re testing (
            <a
              href="https://tech.causallabs.io/docs/reference/install/register"
              target="new"
            >
              docs
            </a>
            ).
          </div>
          <div>
            3. Open the following file in your favorite editor. As always the
            path is relative to the hello-causal directory.
            <br />
            <CopyableCodeBlock txt={"./fdl/causal.fdl"} />
          </div>
          <div>
            4. Change the background color from red to green and save the .fdl
            file
            <CopyableCodeBlock txt={'backgroundColor: String! = "green"'} />
          </div>
          <div>
            5. In a the hello-causal directory, run the following command:{" "}
            <br />
            <CopyableCodeBlock
              txt={
                "./causalc --push-fdl --typescript demo-ui/components/causal.ts fdl/causal.fdl"
              }
            />
            The <span className="inline-value">causalc</span> script compiles
            your FDL into TypeScript code, and that TypeScript code is used by
            this tutorial. When <span className="inline-value">causalc</span>{" "}
            completes, along with your change to{" "}
            <span className="inline-value">./fdl/causal.dfl</span>, the buttons
            will turn green.
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

          <h3>Watch how to do it</h3>
          <div>
            <a
              href="https://www.loom.com/share/9088a3ec2a924e07ad137a7e73795e08"
              target="new"
            >
              <img
                className="loom-thumbnail"
                src="https://cdn.loom.com/sessions/thumbnails/9088a3ec2a924e07ad137a7e73795e08-with-play.gif"
              />
            </a>
          </div>
        </section>
        <section>
          <div className="next-topic">
            <Link href={`reference-fdl-from-javascript`}>
              Next: Reference FDL features in Javascript
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

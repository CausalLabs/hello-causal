import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { CopyableCodeBlock } from "../components/clipboard-utils";

export default function ReferenceFdlFromJavascript() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
      <Head>
        <title>Reference FDL features in Javascript</title>
      </Head>
      <div>
        <section>
          <h2 data-testid="sectionheader">
            Reference FDL features in Javascript
          </h2>
          <div>
            This app is built with <a href="https://react.dev/">React</a> and{" "}
            <a href="https://nextjs.org/">Next.js</a>. You can view complete
            React setup and usage instructions in our{" "}
            <a
              href="https://tech.causallabs.io/docs/howto/using-react"
              target="new"
            >
              documentation
            </a>
            .
          </div>
          <div>
            At the top of our file, we import{" "}
            <span className="inline-value">useFeature</span> from Causal
            TypeScript SDK:
            <code>
              import &#123; qb, useFeature &#125; from
              &quot;../components/causal&quot;;
            </code>
          </div>

          <div>
            We define a variable <span className="inline-value">feature</span>{" "}
            to hold the <span className="inline-value">Example Feature</span>{" "}
            data:
            <code>const feature = useFeature(qb().getExampleFeature());</code>
          </div>

          <div>
            In the <span className="inline-value">&lt;button&gt;</span>{" "}
            component, we reference the feature&apos;s attributes to define
            style elements and the button&apos;s copy:
            <code>
              <pre>
                {`<button
    style={{
    width: feature?.width,
    height: feature?.height,
    background: feature?.backgroundColor,
    color: feature?.fontColor,
    }}
>
    {feature?.callToActionCopy}
</button>`}
              </pre>
            </code>
          </div>
        </section>
        <section>
          <h3>
            Try it out: Edit this page to add a button &#x68;eadline managed by
            Causal
          </h3>

          <aside className="note">
            Reminder: All paths are relative to the{" "}
            <span className="inline-value">hello-causal</span> directory
          </aside>

          <div>
            1. In your favorite editor open the following file. It corresponds
            to the webpage you are currently looking at. Changes to the file
            will automatically be reflected in the browser.
            <CopyableCodeBlock
              txt={"./demo-ui/pages/reference-fdl-from-javascript.tsx"}
            />
          </div>

          <div>
            2. Find &quot;&#x48;eadline To Change&quot; in the code, replace it
            with the code below, and save the file.
            <CopyableCodeBlock txt={"{feature?.descriptiveCopy}"} />
          </div>

          <div>
            <b>
              {/* -------------------------------------------------------------------- */}
              {/* Replace "Headline To Change" below with "{feature?.descriptiveCopy}" */}
              {/* Do this by deleting and uncommenting the lines below                 */}
              {/* -------------------------------------------------------------------- */}
              {/*                                                                      */}
              {/* -- DELETE THE LINE BELOW -- */}
              Headline To Change
              {/* -- UNCOMMENT THE LINE BELOW --*/}
              {/* {feature?.descriptiveCopy} */}
            </b>

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
          </div>

          <div>
            3. You should now see &quot;{feature?.descriptiveCopy}&quot; as the
            &#x68;eadline above the button on this page. You just added a Causal
            feature output to a Javascript app!
          </div>

          <div>
            <i>
              Bonus feature: If you type the following in your IDE, you&apos;ll
              be able to see the available attributes in auto-complete.
            </i>
            <code>&#123;feature?.</code>
          </div>

          <h3>Watch how to do it</h3>
          <div>
            <a
              href="https://www.loom.com/share/eda941f717224fe780d01090133440d5"
              target="new"
            >
              <img
                className="loom-thumbnail"
                src="https://cdn.loom.com/sessions/thumbnails/eda941f717224fe780d01090133440d5-with-play.gif"
              />
            </a>
          </div>
        </section>
        <section>
          <div className="next-topic">
            <Link href={`/managing-features-without-code`}>
              Next: Managing features without code
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function ReferenceFdlFromJavascript() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
      <ClientOnly>
        <Head>
          <title>Reference FDL features in Javascript</title>
        </Head>
        <div>
        <section>
          <h2>Reference FDL features in Javascript</h2>
          <p>This app is built with React and Next.js. You can view complete React setup and usage instructions in our <a href="https://tech.causallabs.io/docs/getting-started/trying/using-react" target="new">documentation</a>.</p>
          <p>At the top of our file, we import useFeature from Causal components:</p>
          <code>
            import &#123; qb, useFeature &#125; from "../components/causal";
          </code>

          <p>We define a variable "feature" to gather the FDL file elements:</p>
          <code>
            const feature = useFeature(qb().getExampleFeature());
          </code>

          <p>In the button tag itself, we reference the feature's attributes to define style elements and the button's copy:</p>
          <p>
          <code>
          &lt;button style=&#123;&#123;width: feature?.width, height: feature?.height, background: feature?.backgroundColor, color: feature?.fontColor&#125;&#125;&gt;
          <br />&nbsp;&nbsp;&#123;feature?.callToActionCopy&#125;
          <br />&lt;&#8725;button&gt;
          </code>
          </p>
        </section>
        <section>
        <h3>Try it out: Edit this page to add a button headline managed by Causal</h3>

        <p><b>
          {/* Replace "Headline To Change" below with {feature?.descriptiveCopy} (including the braces.) */}
          Headline To Change
          {/* ------------------------------------------------------ */}
          </b>

        <br />
          <button style={{width: feature?.width, height: feature?.height, background: feature?.backgroundColor, color: feature?.fontColor}} onClick={() => feature?.signalButtonClick()}>
            {feature?.callToActionCopy}
          </button>
        </p>    

        <p>1. From the demo-ui directory, view the file corresponding with this webpage: 
          <code>./pages/reference-fdl-from-javascript</code></p>

        <p>2. Find "Headline To Change" in the code (in the line above the &lt;button&gt; tag.) and replace it with <code>&#123;feature?.descriptiveCopy&#125;</code>and save the file.</p>
        
        <p>3. You should now see "{feature?.descriptiveCopy}" as the headline above the button on this page. You just added a Causal feature output to a Javascript app!</p>


        <h3>Watch how to do it</h3>
        <p>
          <a href="https://www.loom.com/share/eda941f717224fe780d01090133440d5" target="new"><img className="loom-thumbnail" src="https://cdn.loom.com/sessions/thumbnails/eda941f717224fe780d01090133440d5-with-play.gif" /></a>
        </p>

        </section>
        <section>
        <p>
          <Link href={`/managing-features-without-code`}>
            Next: Managing features without code
          </Link>
        </p>
        </section>
      </div>
      </ClientOnly>
    </Layout>
  );
}

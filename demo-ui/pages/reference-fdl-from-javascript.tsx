import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";

export default function ReferenceFdlFromJavascript() {
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
          <h2>Reference FDL features in Javascript</h2>
          <p>This app is built with React and Next JS. You can view complete React setup and usage instructions in our <a href="https://tech.causallabs.io/docs/getting-started/trying/using-react" target="new">documentation</a>.</p>
            
          <p>Here's what our example feature looks like in code:</p>

          <p>At the top of our file, we import useFeature from Causal components</p>
          <code>
          <p>&nbsp;&nbsp;import &#123; qb, useFeature &#125; from "../components/causal";
          </p>
          </code>

          <p>We define a variable to gather the elements of and assign </p>
          <code>
          <p>&nbsp;&nbsp;const feature = useFeature(qb().getExampleFeature());
          <br />let buttonStyle = &#123;
          <br />width: feature?.width,
          <br />height: feature?.height,
          <br />background: feature?.backgroundHexColor,
          <br />color: feature?.fontColor,
    &#125;;
          </p>
          </code>


          <p>In the button itself, we reference the </p>
          <p>
          <code>
          &nbsp;&nbsp;&lt;button style=&#123;buttonStyle&#125;&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#123;feature?.callToActionCopy&#125;
            <br />&nbsp;&nbsp;&lt;&#8725;button&gt;
          </code>
          </p>
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
        <h3>Try it out: Edit this page to add a button description</h3>
        <p>1. From the demo-ui directory, view this file: ./pages/reference-fdl-from-javascript</p>
        <p>2. Add <code>&#123;feature?.descriptiveCopy&#125;</code> in the line above <code>&lt;button&gt;</code>.</p>
        <p>3. Refresh this page. You just added a Causal feature to a javascript app!</p>
        </section>
        <section>
        <p>
          <Link href={`/managing-features-without-code`}>
            Next: Managing features without code &gt;
          </Link>
        </p>
        </section>

      </ClientOnly>
    </Layout>
  );
}

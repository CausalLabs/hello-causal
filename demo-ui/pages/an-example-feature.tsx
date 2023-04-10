import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";

export default function YourFirstFeature() {
  const feature = useFeature(qb().getExampleFeature());

  return (
    <Layout>
        <Head>
          <title>An example feature</title>
        </Head>
        <div>
        <section>
          <h2>An example feature</h2>
          <p>Your team's application probably has many features.</p><p>To understand how Causal manages features, let's focus on a single simple feature, the button below.</p>
          <button style={{width: feature?.width, height: feature?.height, background: feature?.backgroundColor, color: feature?.fontColor}} onClick={() => feature?.signalButtonClick()}>
            {feature?.callToActionCopy}
          </button>
          <p>This button has the following attributes:</p>
            <table cellSpacing="10px">
              <tbody>
                <tr><td><b>Call To Action Copy</b></td><td>{feature?.callToActionCopy}</td></tr>
                <tr><td><b>Width</b></td><td>{feature?.width}</td></tr>
                <tr><td><b>Height</b></td><td>{feature?.height}</td></tr>
                <tr><td><b>Font Color</b></td><td>{feature?.fontColor}</td></tr>
                <tr><td><b>Background Color</b></td><td>{feature?.backgroundColor}</td></tr>
              </tbody>
            </table>
        </section>
        <section>
          <p>Now, let's look at how Causal manages features and their attributes.</p><p>
            <Link href={`./features-and-the-fdl-file`}>
              Next: Defining Features with FDL
            </Link>
          </p>    
        </section>
      </div>
    </Layout>
  );
}

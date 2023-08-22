import Head from "next/head";
import { CardData } from "../components/CardData/CardData";
import { CardWithGrid } from "../components/Card/Card";
import { Layout } from "../components/Layout/Layout";
import { HCButton } from "../components/HCButton/HCButton";

export default function YourFirstFeature() {
  return (
    <Layout>
      <Head>
        <title>An example feature</title>
      </Head>
      <div>
        <section>
          <h1 data-testid="sectionheader">An example feature</h1>

          <div>
            To understand how Causal manages features, let&apos;s focus on a
            single simple feature, the card below.
          </div>

          <CardWithGrid />

          <div className="text-xl font-bold mt-10 mb-2">
            This button has the following attributes:
          </div>

          <CardData className="mt-hc" />
        </section>

        <section className="mt-section">
          <div>
            Now, let&apos;s look at how Causal provides tools to manage features
            and their attributes.
          </div>
        </section>

        <section className="next-topic">
          <HCButton href="./features-and-the-fdl-file">
            Next: Defining Features with FDL
          </HCButton>
        </section>
      </div>
    </Layout>
  );
}

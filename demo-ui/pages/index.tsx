import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import { ClientOnly } from "../components/utils";

export default function Home() {
  return (
    <Layout>
      <ClientOnly>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <h2>Welcome to the Causal tutorial</h2>
          <p>
            The goal of this demo application is to help you understand the
            features and benefits of Causal so you feel confident using it in
            your own codebase.
          </p>
          <p>
            If you need help, <a href="#">join our Slack channel</a> or email{" "}
            <a href="mailto:support@causallabs.io">support@causallabs.io</a>.
          </p>
        </section>
        <section>
          <p>
            <Link href={`/your-first-feature`}>Get Started</Link>
          </p>
        </section>
      </ClientOnly>
    </Layout>
  );
}

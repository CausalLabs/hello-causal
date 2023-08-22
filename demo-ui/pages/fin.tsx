import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { LearnAbout } from "../components/LearnAbout/LearnAbout";

export default function ViewDataInDataWarehouse() {
  return (
    <Layout>
      <Head>
        <title>Summary and Next Steps</title>
      </Head>
      <div>
        <h1 data-testid="sectionheader">Summary and Next Steps</h1>
        <section>
          <div className="mt-10">
            <LearnAbout
              title={
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "38px",
                    margin: 0,
                  }}
                  className="text-2xl font-bold"
                >
                  In this demo, you learned how to:
                </div>
              }
            />
          </div>

          <h2 className="mt-10">Next Steps</h2>
          <div>
            Read our{" "}
            <a
              href="https://tech.causallabs.io/docs/index"
              target="new"
              className="font-semibold"
            >
              documentation
            </a>{" "}
            to learn about
          </div>
          <ul className="list-disc list-inside indent-3">
            <li className="mt-2 font-semibold">Defining audiences</li>
            <li className="mt-1">
              <span className="font-semibold">Using other APIs,</span> e.g. for
              Java, Ruby
            </li>
            <li className="mt-1">
              Using <span className="font-semibold">external data</span> sources
              for metrics
            </li>
            <li className="mt-1">
              Seting up your{" "}
              <span className="font-semibold">production environments</span>
            </li>
          </ul>
          <div className="mt-4">
            Check out our example{" "}
            <a href="/store" target="new" className="font-semibold">
              e-commerce store
            </a>{" "}
            bundled with the Causal Demo. The source code is available in the{" "}
            <span className="font-mono text-sm py-0.5 px-1 bg-gray-200 text-red-500">
              src/app/store
            </span>{" "}
            folder of the demo-ui directory.
          </div>

          <img className="mt-10" src="/gear.svg" />

          <div className="mt-10">
            Email us at{" "}
            <a href="mailto:'support@causallabs.io'">support@causallabs.io</a>{" "}
            if you&apos;d like to learn more about how to use Causal in your own
            application.
          </div>
          <div className="mt-hc font-semibold">
            We&apos;d love to hear any feedback you have.
          </div>
          <div className="mt-4">Thanks,</div>
          <div>The Causal Team</div>
        </section>
      </div>
    </Layout>
  );
}

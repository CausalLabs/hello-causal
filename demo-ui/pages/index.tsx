import Head from "next/head";
import { HCButton } from "../components/HCButton/HCButton";
import { Layout } from "../components/Layout/Layout";
import { LearnAbout } from "../components/LearnAbout/LearnAbout";
import { Prerequisite } from "../components/Prerequisites/Prerequisites";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>A Brief Intro to Causal</title>
      </Head>
      <div>
        <section>
          <h1 data-testid="sectionheader">Welcome!</h1>
          <div>
            This demo will go through examples that introduce you to Causal’s
            powerful tools. In order to run this tutorial you will need a few
            things open to get started.
          </div>
          <div className="mt-hc">
            <Prerequisite />
          </div>

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
                  This demo will cover:
                </div>
              }
            />
          </div>
        </section>

        <section className="next-topic">
          {" "}
          <HCButton href="/an-example-feature">
            Next: An Example Feature
          </HCButton>
        </section>
      </div>
    </Layout>
  );
}

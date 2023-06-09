import React from "react";
import Head from "next/head";
import Link from "next/link";
import { qb, useFeature } from "../components/causal";
import Layout from "../components/layout";
import { ClientOnly } from "../components/utils";
import { getWebtoolsUrl } from "./register";
export default function CreatingExperiment() {
  const date = new Date();
  const feature = useFeature(
    qb().getCrossSellFeature({ productName: "apple", dayOfWeek: date.getDay() })
  );

  const ButtonList = ({ strings }: { strings: string[] | undefined }) => {
    return (
      <span>
        {strings?.map((s, index) => (
          <button
            data-testid="carousel-button"
            style={{
              height: "30px",
              marginRight: "5px",
              marginBottom: "5px",
              background: "white",
              color: "black",
              border: "1px solid black",
            }}
            onClick={() =>
              feature?.signalCrossSellItemClick({ productName: s })
            }
            key={index}
          >
            {s}
          </button>
        ))}
      </span>
    );
  };
  return (
    <Layout>
      <ClientOnly>
        <Head>
          <title>Linking an ML Model</title>
        </Head>
        <div>
          <section>
            <h2 data-testid="sectionheader">Link an ML Model</h2>
            <p>
              <aside className="note">
                Note: When we refer to "features" below, we mean "Features
                defined by Causal in FDL." We will call ML features "inputs" or
                "feature args" to avoid confusion.
              </aside>
            </p>
            <p>
              Causal helps you improve your ML models and ML operations. By
              linking an ML model to a Causal Feature attribute, you can:
              <ul>
                <li>easily swap different models without changing code</li>
                <li>
                  A/B test different models to measure each model's performance
                  relative to a key user event or metric
                </li>
                <li>
                  track the user impressions (usage) of an ML model just as you
                  would for any product feature
                </li>{" "}
              </ul>
            </p>
            <p>
              <b>Example</b>
            </p>
            <p>
              Imagine your team is in charge of the product display page for a
              grocery store website. Your product page displays a "cross sell"
              section containing additional products that users are most likely
              to buy. You build a model that takes in inputs - like the original
              product's name and the day of the week - and outputs a list of
              recommended products.
            </p>
            <p>
              <b>Your Cross Sell Carousel</b>
              <p>
                <div>
                  <ButtonList strings={feature?.results} />
                </div>
              </p>
            </p>
            <p>
              Suppose we are looking at the page for purchasing an "apple". By
              default, your engineering team has already set up recommendations
              based on the site's best selling items. Imagine that the data
              science team has built a new model and loaded it into Sagemaker.
              Using Causal, you can swap the Sagemaker model into the site
              without writing code.
            </p>
            <h3>Try it out: Replace the recommendations with an ML model</h3>
            <p>
              1.{" "}
              <a
                href={`${getWebtoolsUrl()}/features/edit/CrossSellFeature`}
                target="_new"
              >
                Edit the Cross Sell Feature
              </a>{" "}
              in the Causal Dashboard.
            </p>
            <p>
              2. Under <span className="inline-webui">Values for Rollout</span>,
              click the{" "}
              <img
                style={{
                  whiteSpace: "nowrap",
                  display: "inline",
                  verticalAlign: "middle",
                  marginTop: "-5px",
                }}
                height="32px"
                width="40px"
                src={"/external_link_icon.png"}
                alt={"Link to Model"}
              />{" "}
              icon so it opens the Link Model UI. For "Model Source" select{" "}
              <span className="inline-value">SageMaker</span> and in Model URL
              enter{" "}
              <span className="inline-value">
                hello-causal-cross-sell-recommender
              </span>{" "}
              and click <span className="inline-webui">SAVE</span> in the modal
              and then again click <span className="inline-webui">SAVE</span> in
              the feature's edit page.
            </p>
            <p>
              3. You&apos;ll see a{" "}
              <span className="inline-webui">Production Attribute Change</span>{" "}
              warning. Tap <span className="inline-webui">Continue</span>.
            </p>
            <p>
              4. When you refresh this page, you should see the results of the
              model in "Your Cross Sell Carousel."
            </p>
            <h3>Collect training data</h3>
            <p>
              When you use a Causal Feature to link your ML model to the front
              end, the state of user impressions are tracked (as shown in
              section{" "}
              <Link href={`/tracking-impressions-and-events`}>
                Tracking Impressions and Events
              </Link>
              . ) To see impressions/events for this example, follow the
              instructions below.
            </p>
            <p>
              1.{" "}
              <a href="https://tools.causallabs.io/debug" target="new">
                Open the Event Viewer
              </a>{" "}
              in the Debug section of the Causal Web Tools.
              <br />
              Under <span className="inline-webui">Event Viewer</span>, click
              the switch next to{" "}
              <span className="inline-webui">Logging is OFF for you</span> to
              turn it on.
            </p>
            <p>
              2. Refresh this page and then look in the Event Viewer for a
              recorded impression. You can open the impression details and see
              that the arguments "productName" and "dayOfWeek" – the inputs to
              the model – match the values at the time of the impression.
            </p>
            <p>
              3. Tap on one of the Cross Sell buttons (the name of a food
              product), which will record an "CrossSellItemClick" event. The
              product's information is linked to the impression in the Event
              Viewer and (once ETL runs) in the warehouse.
            </p>
          </section>
          <section>
            <p className="next-topic">
              <Link href={`/fin`}>Next: Summary and Next Steps</Link>
            </p>
          </section>
        </div>
      </ClientOnly>
    </Layout>
  );
}

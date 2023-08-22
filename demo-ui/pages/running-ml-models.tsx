import Head from "next/head";
import Link from "next/link";
import { HCButton } from "../components/HCButton/HCButton";
import { Instruction } from "../components/instruction/Instruction";
import { Layout } from "../components/Layout/Layout";
import { Note } from "../components/Note/Note";
import { Literal } from "../components/Literal/Literal";
import { Video } from "../components/Video/Video";
import { XSell } from "../components/XSell/XSell";
import { getWebtoolsUrl } from "./register";
import { Grid } from "../components/Grid/Grid";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";

export default function RunningModels() {
  let count = 1;
  let count2 = 1;
  return (
    <Layout>
      <Head>
        <title>Linking an ML Model</title>
      </Head>
      <div>
        <h1 data-testid="sectionheader">Link ML Models</h1>

        <section>
          <Note>
            Note: When we refer to "features" below, we mean "Features defined
            by Causal in FDL." We will call ML features "inputs" or "feature
            args" to avoid confusion.
          </Note>
          <h2 className="mt-hc min-h-[64px]">
            Causal helps you improve your ML models and ML operations.
          </h2>
          <div className="mt-hc h-[128px]">
            By linking an ML model to a Causal Feature attribute, you can:
            <ul className="pl-5 space-y-1 mt-2">
              <li className="flex">
                <span className="pr-2">•</span>
                <span>easily swap different models without changing code</span>
              </li>
              <li className="flex">
                <span className="pr-2">•</span>
                <span>
                  A/B test different models to measure each model's performance
                  relative to a key user event or metric
                </span>
              </li>
              <li className="flex">
                <span className="pr-2">•</span>
                <span>
                  track the user impressions (usage) of an ML model just as you
                  would for any product feature
                </span>
              </li>
            </ul>{" "}
          </div>

          <div className="font-bold mt-16 text-lg">Example</div>
          <div className="mt-2">
            Imagine your team is in charge of the recommendations for an
            e-commerce site. Your product page displays a "cross sell" section
            containing additional products that users are most likely to buy.
            You build a model that takes in inputs - like the original product's
            name and the day of the week - and outputs a list of recommended
            products.
          </div>
          <div className="mt-hc">
            <Grid className="h-[320px]">
              <XSell productName="apple" />
            </Grid>
          </div>
          <div className="mt-hc">
            Suppose we are looking at the page for purchasing some recipe
            ingredients. By default, your engineering team has already set up
            recommendations based on the site's best selling items.
          </div>
          <div className="mt-hc">
            Imagine that the data science team has built a new model and loaded
            it into Sagemaker.{" "}
            <span className="font-bold">
              Using Causal, you can swap the Sagemaker model into the site
              without writing code.
            </span>
          </div>
        </section>
        <section className="mt-section">
          <Video href="/movies/running-ml-models.mp4" />
        </section>
        <section className="mt-section">
          <h2>Try it out!</h2>

          <div>Replace the recommendations with an ML model</div>

          <Instruction num={count++}>
            <a
              href={`${getWebtoolsUrl()}/features/edit/CrossSellFeature`}
              target="_new"
            >
              Edit the Cross Sell Feature
            </a>{" "}
            in the Causal Dashboard.
          </Instruction>

          <Instruction num={count++}>
            Under <Literal>Values for Rollout</Literal>, click the{" "}
            <img
              style={{
                whiteSpace: "nowrap",
                display: "inline",
                verticalAlign: "middle",
                marginTop: "-5px",
              }}
              height="32px"
              width="40px"
              src={"/external-link-icon.png"}
              alt={"Link to Model"}
            />{" "}
            icon so it opens the Link Model UI.
          </Instruction>
          <Instruction num={count++}>
            For <Literal>Model Source</Literal> select{" "}
            <Literal>SageMaker</Literal> and in <Literal>Model URL</Literal>{" "}
            enter the following model name:
            <CodeBlock
              copyControl={true}
              language="none"
              code="hello-causal-cross-sell-recommender"
            />
          </Instruction>
          <Instruction num={count++}>
            Click <Literal>SAVE</Literal> in the modal and then again click{" "}
            <Literal>SAVE</Literal> in the feature's edit page.
          </Instruction>

          <Instruction num={count++}>
            You&apos;ll see a <Literal>Production Attribute Change</Literal>{" "}
            warning. Tap <Literal>Continue</Literal>.
          </Instruction>

          <Instruction num={count++}>
            You will see the new results of the model in the cross sell carousel
          </Instruction>

          <div className="mt-hc">
            <Grid className="h-[320px]">
              <XSell productName="apple" />
            </Grid>
          </div>

          <h2 className="mt-hc">Collect training data</h2>

          <div>
            When you use a Causal Feature to link your ML model to the front
            end, the state of user impressions are tracked (as shown in section{" "}
            <Link href={`/tracking-impressions-and-events`}>
              Tracking Impressions and Events
            </Link>
            ). To see impressions/events for this example, follow the
            instructions below.
          </div>

          <Instruction num={count2++}>
            <Link href={getWebtoolsUrl() + "/event-viewer"} target="new">
              Open the Event Viewer
            </Link>{" "}
            in the Debug section of the Causal Web Tools.
            <br />
            Under <Literal>Event Viewer</Literal>, click the switch next to{" "}
            <Literal>Logging is OFF for you</Literal> to turn logging on.
          </Instruction>

          <Instruction num={count2++}>
            Refresh this page and then look in the Event Viewer for a recorded
            impression. You can open the impression details and see that the
            arguments <Literal>productName</Literal> and{" "}
            <Literal>dayOfWeek</Literal> – the inputs to the model – match the
            values at the time of the impression.
          </Instruction>

          <Instruction num={count2++}>
            Tap on one of the Cross Sell buttons (the name of a food product),
            which will record an <Literal>CrossSellItemClick</Literal> event.
            The product's information is linked to the impression in the Event
            Viewer and (once ETL runs) in the warehouse.
          </Instruction>
        </section>

        <section className="next-topic">
          {" "}
          <HCButton href="/fin">Next: Summary and Next Steps</HCButton>
        </section>
      </div>
    </Layout>
  );
}

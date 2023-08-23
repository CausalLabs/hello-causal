import Head from "next/head";
import Link from "next/link";
import { CardWithGrid } from "../components/Card/Card";
import { CodeBlock, CodeSpan } from "../components/CodeBlock/CodeBlock";
import Credentials from "../components/Credentials/Credentials";
import { HCButton } from "../components/HCButton/HCButton";
import { Instruction } from "../components/instruction/Instruction";
import { Layout } from "../components/Layout/Layout";
import { Note } from "../components/Note/Note";
import { Literal } from "../components/Literal/Literal";
import { Video } from "../components/Video/Video";
import { getWebtoolsUrl } from "./register";

export default function FeaturesAndTheFdlFile() {
  return (
    <Layout>
      <Head>
        <title>Defining Features</title>
      </Head>
      <div className="mb-10">
        <h1 data-testid="sectionheader">Defining Features</h1>
        <section>
          <div>
            Causal uses a{" "}
            <a href="https://tech.causallabs.io/docs/fdl/intro" target="new">
              Feature Definition Language
            </a>{" "}
            file to specify each feature&apos;s attributes and initial seed
            values in an .fdl file.
          </div>
          <div className="mt-hc">
            FDL types are <a href="https://graphql.org/">GraphQL</a>{" "}
            <a href="https://www.apollographql.com/docs/apollo-server/schema/schema/">
              types
            </a>
            , so they are familiar and easy to use.
          </div>
          <div className="font-bold mt-hc">
            Here&apos;s an example feature specified in FDL:
          </div>
          <div className="mt-hc">
            <CodeBlock
              language="graphql"
              code={`feature SneakerCard {     
    # Feature attributes are defined by the keyword output     
    output { 
        "Product Card Headline"
        headline: String! = "NIKE AIR"
        
        "Product Description"
        productDescription: String! = 
            "Bold, red sneakers for your unstoppable, stylish stride."         
        
        "the button text"         
        buttonText: String! = "Buy"         
        
        "the button background color"         
        buttonTextColor: String! = "black"         
        
        "the button text color"         
        buttonBackgroundColor: String! = "pink"

    }

    event AddToCart {}
}
`}
            />
          </div>
          <CardWithGrid className="mt-10" />
        </section>
        <section className="mt-section">
          <Video href="/movies/features-and-the-fdl-file.mp4" />
        </section>

        <section className="mt-section">
          <h2>Try it out</h2>
          <div className="font-bold">Update the FDL file</div>

          <Note className="mt-hc">
            <span className="font-bold">Reminder</span>: Please make sure to
            leave the Docker container running throughout this tutorial. All
            paths are relative to the <Literal>hello-causal</Literal> directory
          </Note>

          <Instruction num={1}>
            <div>
              <Link
                href={`${getWebtoolsUrl()}/auth/causal`}
                target="new"
                className="font-semibold"
              >
                Log in
              </Link>{" "}
              to the web tools
            </div>
            <div>
              <Credentials
                username={process.env.NEXT_PUBLIC_CAUSAL_USERNAME ?? "/error"}
                password={process.env.NEXT_PUBLIC_CAUSAL_PASSWORD ?? "/error"}
              />
            </div>
            <HCButton
              href={`${getWebtoolsUrl()}/auth/causal`}
              target="new"
              className="mt-3"
            >
              Log In
            </HCButton>
          </Instruction>

          <Instruction num={2}>
            <Link href={"/register"} target="new" className="font-medium">
              Register this web browser
            </Link>{" "}
            so Causal knows where to display the features you&apos;re testing{" "}
            <Link
              href="https://tech.causallabs.io/docs/reference/install/register"
              target="new"
              className="font-medium"
            >
              (docs)
            </Link>
            .
          </Instruction>

          <Instruction num={3}>
            Open the following file in your favorite editor. As always the path
            is relative to the hello-causal directory.
            <br />
            <CodeBlock
              code={"./fdl/causal.fdl"}
              language="graphql"
              copyControl={true}
            />
          </Instruction>

          <Instruction num={4}>
            <div className="w-full  ">
              Change the button text from <Literal>Buy</Literal> to{" "}
              <Literal>Add to Cart</Literal> and save the .fdl file
            </div>
            <CodeBlock
              code='buttonText: String! = "Add to Cart"'
              language="graphql"
              copyControl={true}
            />
          </Instruction>

          <Instruction num={5}>
            In a the hello-causal directory, run the following command:
            <CodeBlock
              code={
                "./causalc --push-fdl --typescript demo-ui/components/causal.ts fdl/causal.fdl"
              }
              language="command"
              copyControl={true}
            />
          </Instruction>

          <CardWithGrid className="mt-hc" />

          <div className="mt-hc">
            The <CodeSpan code="causalc" /> script compiles your FDL into
            TypeScript code, and that TypeScript code is used by this tutorial.
          </div>
          <div className="mt-hc">
            When <CodeSpan code="causalc" /> completes, along with your change
            to <CodeSpan code="./fdl/causal.fdl" />, the card button text will
            change to <Literal>Add to Cart</Literal>. Refresh your browser to
            see the change.
          </div>
        </section>

        <section className="next-topic">
          {" "}
          <HCButton href="reference-fdl-from-javascript">
            Next: Reference FDL features in Javascript
          </HCButton>
        </section>
      </div>
    </Layout>
  );
}

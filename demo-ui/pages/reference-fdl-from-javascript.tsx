import Head from "next/head";
import { CardWithGrid } from "../components/Card/Card";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";
import { HCButton } from "../components/HCButton/HCButton";
import { Instruction } from "../components/instruction/Instruction";
import { Layout } from "../components/Layout/Layout";
import { Literal } from "../components/Literal/Literal";
import { Note } from "../components/Note/Note";
import { Video } from "../components/Video/Video";

export default function ReferenceFdlFromJavascript() {
  return (
    <Layout>
      <Head>
        <title>Reference FDL features in Javascript</title>
      </Head>
      <div>
        <section>
          <h1 data-testid="sectionheader">
            Reference FDL features in Javascript
          </h1>
          <div>
            This app is built with <a href="https://react.dev/">React</a> and{" "}
            <a href="https://nextjs.org/">Next.js</a>. You can view complete
            React setup and usage instructions in our{" "}
            <a
              href="https://tech.causallabs.io/docs/guide/TypeScript/using-react"
              target="new"
            >
              documentation
            </a>
            . Here is an overview of how it works.
          </div>
          <div className="mt-2">
            At the top of our card component file{" "}
            <Literal>./demo-ui/components/Card/Card.tsx</Literal>, we import the
            Causal hook <Literal>useFeature</Literal> from the TypeScript SDK:
            <CodeBlock
              className="mt-2"
              code='import &#123; qb, useFeature &#125; from "../components/causal";'
              language="typescript"
            />
          </div>

          <div className="mt-hc">
            In the <Literal>&lt;Card /&gt;</Literal> component, we request the
            card data:
            <CodeBlock
              className="mt-2"
              code="const card = useFeature(qb().getSneakerCard());"
              language="typescript"
            />
          </div>

          <div className="mt-hc">
            And then we reference this data to set the text and style elements.{" "}
            Here is the code for the button:
            <CodeBlock
              className="mt-2"
              language="tsx"
              code={`<button
    className={s.button}
    style={{
        color: card?.buttonTextColor,
        background: card?.buttonBackgroundColor,
    }}
>
    {card?.buttonText}
</button>
  `}
            />
          </div>
        </section>

        <section className="mt-section">
          <Video href="/movies/reference-fdl-from-javascript.mp4" />
        </section>

        <section>
          <h3 className="mt-hc">Try it out</h3>
          <div className="font-bold">
            Use Causal for the product description
          </div>

          <Note className="mt-2">
            Reminder: All paths are relative to the{" "}
            <Literal>hello-causal</Literal> directory
          </Note>

          <Instruction num={1} className="mt-2">
            In your favorite editor open the following file. It corresponds to
            the Card component that displays the sneaker. Changes to the file
            will automatically be reflected in the browser.
            <CodeBlock
              code={"./demo-ui/components/Card/Card.tsx"}
              language="bash"
              copyControl={true}
            />
          </Instruction>

          <Instruction num={2}>
            <div>
              Delete the code that says <Literal>Hardcoded description</Literal>
              .
            </div>
            <div className="mt-2">
              Uncomment the code that says{" "}
              <Literal>Causal enabled description</Literal>.
            </div>
            <CodeBlock
              code={`{/* Hardcoded description */}
<div className={s.description}>
    Bright, red sneakers for your dynamic, elegant dash.
</div>

{/* Causal enabled description */}
{/* 
<div className={s.description}>{card?.productDescription} </div> 
*/}`}
              language="tsx"
              copyControl={true}
            />
          </Instruction>

          <CardWithGrid className="mt-hc" />

          <Instruction num={3}>
            You should now see{" "}
            <Literal>
              Bold, red sneakers for your unstoppable, stylish stride.
            </Literal>{" "}
            as the product description. You just added a Causal feature output
            to a Javascript app!
          </Instruction>

          <Instruction num={undefined}>
            <div className="italic">
              Bonus tip: If you type the following in your IDE, you&apos;ll be
              able to see the available attributes in auto-complete.
            </div>

            <CodeBlock
              className="mt-hc"
              code="&#123;card?."
              language="typescript"
            />

            <img className="mt-hc" src="/autocomplete.png" />
          </Instruction>
        </section>

        <section className="next-topic">
          {" "}
          <HCButton href="/managing-features-without-code">
            Next: Managing features without code
          </HCButton>
        </section>
      </div>
    </Layout>
  );
}

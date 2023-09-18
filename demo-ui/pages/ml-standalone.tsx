import Head from "next/head";
import { Grid } from "../components/Grid/Grid";
import { XSell } from "../components/XSell/XSell";

export default function RunningModels() {
  return (
    <>
      <Head>
        <title>Recommender Example</title>
      </Head>
      <div className="mt-4 flex flex-col justify-center items-center">
        <h1 data-testid="sectionheader">Recommender Example</h1>

        <section>
          <div className="mt-hc">
            <Grid className="h-[1020px] sm:h-[320px] w-screen">
              <XSell productName="apple" />
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
}

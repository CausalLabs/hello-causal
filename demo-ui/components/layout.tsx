import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const name = "CausalLabs";
export const siteTitle = "Hello Causal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = router.asPath;
  return (
    <div className="float-container">
      <div className="float-container sidebar">
        <h3>Contents</h3>

        <div>
          {path == "/" ? (
            <b>Introduction</b>
          ) : (
            <Link href={`/`}>Introduction</Link>
          )}
        </div>

        <div>
          {path == "/an-example-feature" ? (
            <b>An Example Feature</b>
          ) : (
            <Link href={`an-example-feature`}>An Example Feature</Link>
          )}
        </div>

        <div>
          {path == "/features-and-the-fdl-file" ? (
            <b>Defining Features</b>
          ) : (
            <Link href={`features-and-the-fdl-file`}>Defining Features</Link>
          )}
        </div>

        <div>
          {path == "/reference-fdl-from-javascript" ? (
            <b>Reference FDL features in Javascript</b>
          ) : (
            <Link href={`reference-fdl-from-javascript`}>
              Reference FDL features in Javascript
            </Link>
          )}
        </div>

        <div>
          {path == "/managing-features-without-code" ? (
            <b>Managing features without code</b>
          ) : (
            <Link href={`managing-features-without-code`}>
              Managing features without code
            </Link>
          )}
        </div>

        <div>
          {path == "/tracking-impressions-and-events" ? (
            <b>Tracking Impressions and Events</b>
          ) : (
            <Link href={`tracking-impressions-and-events`}>
              Tracking Impressions and Events
            </Link>
          )}
        </div>

        <div>
          {path == "/viewing-the-data-warehouse" ? (
            <b>Viewing the data warehouse</b>
          ) : (
            <Link href={`viewing-the-data-warehouse`}>
              Viewing the data warehouse
            </Link>
          )}
        </div>

        <div>
          {path == "/creating-metrics" ? (
            <b>Creating a Metric</b>
          ) : (
            <Link href={`creating-metrics`}>Creating a Metric</Link>
          )}
        </div>

        <div>
          {path == "/creating-experiment" ? (
            <b>Creating an Experiment</b>
          ) : (
            <Link href={`creating-experiment`}>Creating an Experiment</Link>
          )}
        </div>

        <div>
          {path == "/running-ml-models" ? (
            <b>Linking ML Models</b>
          ) : (
            <Link href={`running-ml-models`}>Linking ML Models</Link>
          )}
        </div>

        <div>
          {path == "/fin" ? (
            <b>Summary and Next Steps</b>
          ) : (
            <Link href={`fin`}>Summary and Next Steps</Link>
          )}
        </div>
      </div>
      <div className="float-container content">{children}</div>
    </div>
  );
}

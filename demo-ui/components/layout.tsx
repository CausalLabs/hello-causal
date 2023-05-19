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

        <p>
          {path == "/" ? (
            <b>Introduction</b>
          ) : (
            <Link href={`/`}>Introduction</Link>
          )}
        </p>

        <p>
          {path == "/an-example-feature" ? (
            <b>An Example Feature</b>
          ) : (
            <Link href={`an-example-feature`}>An Example Feature</Link>
          )}
        </p>

        <p>
          {path == "/features-and-the-fdl-file" ? (
            <b>Defining Features</b>
          ) : (
            <Link href={`features-and-the-fdl-file`}>Defining Features</Link>
          )}
        </p>

        <p>
          {path == "/reference-fdl-from-javascript" ? (
            <b>Reference FDL features in Javascript</b>
          ) : (
            <Link href={`reference-fdl-from-javascript`}>
              Reference FDL features in Javascript
            </Link>
          )}
        </p>

        <p>
          {path == "/managing-features-without-code" ? (
            <b>Managing features without code</b>
          ) : (
            <Link href={`managing-features-without-code`}>
              Managing features without code
            </Link>
          )}
        </p>

        <p>
          {path == "/tracking-impressions-and-events" ? (
            <b>Tracking Impressions and Events</b>
          ) : (
            <Link href={`tracking-impressions-and-events`}>
              Tracking Impressions and Events
            </Link>
          )}
        </p>

        <p>
          {path == "/viewing-the-data-warehouse" ? (
            <b>Viewing the data warehouse</b>
          ) : (
            <Link href={`viewing-the-data-warehouse`}>
              Viewing the data warehouse
            </Link>
          )}
        </p>

        <p>
          {path == "/creating-metrics" ? (
            <b>Creating a Metric</b>
          ) : (
            <Link href={`creating-metrics`}>Creating a Metric</Link>
          )}
        </p>

        <p>
          {path == "/creating-experiment" ? (
            <b>Creating an Experiment</b>
          ) : (
            <Link href={`creating-experiment`}>Creating an Experiment</Link>
          )}
        </p>

        <p>
          {path == "/fin" ? (
            <b>Summary and Next Steps</b>
          ) : (
            <Link href={`fin`}>Summary and Next Steps</Link>
          )}
        </p>
      </div>
      <div className="float-container content">{children}</div>
    </div>
  );
}

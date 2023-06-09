import { NextRouter, useRouter } from "next/router";
import React from "react";
import { ClientOnly, getOrMakeDeviceId } from "../components/utils";

export function awsAccountId(): string {
  const match = (process.env.NEXT_PUBLIC_AWS_URL ?? "/error").match(
    "https:\\/\\/(?<aws_id>\\d+).signin.aws.amazon.com"
  );

  if (match?.groups != null) {
    return match.groups["aws_id"];
  }
  return "200238787088"; //fallback default to env
}

export function getWebtoolsUrl(): string {
  const router = useRouter();
  const accountId = awsAccountId();
  // This makes development a little easier
  const humanToolsUrl =
    accountId == "200238787088"
      ? "https://tools.causallabs.io"
      : "https://dev.causallabs.io";

  const human = router.query.fromTest == null;
  return human ? humanToolsUrl : "https://dev.causallabs.io";
}

/**
 * This is an internal page which registers your browser with the tools.causallabs.io debugger screen. This allows you
 * to see the data in the browser window that is logged by the iserver.
 * @constructor
 */
export default function Page() {
  const router = useRouter();

  if (typeof window === "undefined") {
    // no device ID in server side rendering
    return <></>;
  }

  const persistentId = getOrMakeDeviceId();
  const iserver = process.env.NEXT_PUBLIC_CAUSAL_BROWSER_ISERVER;

  if (iserver == undefined)
    return <>NEXT_PUBLIC_CAUSAL_BROWSER_ISERVER is not defined</>;

  for (let ii = localStorage.length - 1; ii >= 0; --ii) {
    const key = localStorage.key(ii);
    if (key?.startsWith("_causal_")) localStorage.removeItem(key);
  }

  window.localStorage.setItem("_causal_registered", "true");

  const webtoolsUrl = getWebtoolsUrl();
  const redirectTo = `${webtoolsUrl}/QA?persistentId=${persistentId}`;
  router.push(redirectTo);
  return (
    <ClientOnly>
      <div style={{ display: "none" }}>
        <div>iserver: {iserver}</div>
        <div>webtoolsUrl: {webtoolsUrl}</div>
        <div>redirectTo: {redirectTo}</div>
      </div>
    </ClientOnly>
  );
}

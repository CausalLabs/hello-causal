import { AppProps } from "next/app";
import { ReactNode } from "react";
import { Session, SessionContext, SessionJSON } from "../components/causal";
import { ClientOnly, getOrMakeDeviceId } from "../components/utils";
import "./globals.css";

/**
 * This is a `special` react page that injects code across every page on the site. We take advantage of this
 * functionality to create a new causal session using a persistent cookie
 *
 * We also force the page to render on the client side only, b/c it's simpler to demonstrate
 *
 * @param Component any component
 * @param pageProps the page properties
 * @constructor
 */
export default function DemoApp({
  Component,
  pageProps,
}: AppProps & {
  sessionJson: SessionJSON;
}): ReactNode {
  const deviceId = getOrMakeDeviceId();
  const session = new Session({ deviceId });
  return (
    <ClientOnly>
      <SessionContext.Provider value={session}>
        <Component {...pageProps} />
      </SessionContext.Provider>
    </ClientOnly>
  );
}

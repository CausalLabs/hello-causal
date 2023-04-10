import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import { ReactNode } from "react";
import { Session, SessionContext } from "../components/causal";
import { getOrMakeDeviceId } from "../components/utils";
import "./globals.css";

type MyProps = {
  deviceId: string;
};

type MyAppProps = AppProps & MyProps;

/**
 * This is a `special` react page that injects code across every page on the site. We take advantage of this
 * functionality to create a new causal session using a persistent cookie
 *
 * @param Component any component
 * @param pageProps the page properties
 * @constructor
 */
export default function DemoApp({
  Component,
  pageProps,
  deviceId,
}: MyAppProps): ReactNode {
  const session = new Session({ deviceId });

  return (
    <SessionContext.Provider value={session}>
      <Component {...pageProps} />
    </SessionContext.Provider>
  );
}

type MyAppInitialProps = AppInitialProps & MyProps;

DemoApp.getInitialProps = async (
  context: AppContext
): Promise<MyAppInitialProps> => {
  const deviceId = getOrMakeDeviceId(context.ctx);
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
    deviceId,
  };
};

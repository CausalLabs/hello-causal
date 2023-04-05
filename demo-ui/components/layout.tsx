import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const name = "CausalLabs";
export const siteTitle = "Hello Causal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const home = router.pathname == "/";
  return (
    <div>
      <Head>
      </Head>
      <header>
      </header>
      <main>{children}</main>
    </div>
  );
}

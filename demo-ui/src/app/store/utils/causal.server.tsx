// This is a FeatureDL automatically generated file. DO NOT DIRECTLY EDIT, your changes will not persist.
// TSServer
import React from "react";
import { Session, Query, FeatureNames } from "./causal";
import { ClientCacheProvider } from "./causal.client";

export async function ServerCacheFill<F extends FeatureNames>({
  session,
  query,
  children,
}: {
  session: Session;
  query: Query<F>;
  children: React.ReactNode;
}) {
  await session.requestCacheFill(query);
  return (
    <ClientCacheProvider sessionJSON={session.toJSON()}>
      {children}
    </ClientCacheProvider>
  );
}
/// TSServer

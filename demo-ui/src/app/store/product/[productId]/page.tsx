import { queryBuilder } from "../../utils/causal";
import { ServerCacheFill } from "../../utils/causal.server";
import { getSession } from "../../utils/utils-server";
import Checkout from "./product";

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const session = getSession();
  const query = queryBuilder().getStore_checkout();
  return (
    <ServerCacheFill session={session} query={query}>
      <Checkout productId={params.productId} />
    </ServerCacheFill>
  );
}

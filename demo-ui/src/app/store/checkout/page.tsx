import { queryBuilder } from "../utils/causal";
import { ServerCacheFill } from "../utils/causal.server";
import { getSession } from "../utils/utils-server";
import Checkout from "./checkout";

export default async function Page() {
  const session = getSession();
  const query = queryBuilder().getStore_checkout();
  return (
    <ServerCacheFill session={session} query={query}>
      <Checkout />
    </ServerCacheFill>
  );
}

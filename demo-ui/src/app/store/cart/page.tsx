import { queryBuilder } from "../utils/causal";
import { ServerCacheFill } from "../utils/causal.server";
import { getSession } from "../utils/utils-server";
import Cart from "./cart";

export default async function Page() {
  const session = getSession();
  const query = queryBuilder().getStore_cart();
  return (
    <ServerCacheFill session={session} query={query}>
      <Cart />
    </ServerCacheFill>
  );
}

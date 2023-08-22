import { queryBuilder } from "../utils/causal";
import { ServerCacheFill } from "../utils/causal.server";
import { getSession } from "../utils/utils-server";
import Quiz from "./quiz";

export default async function Page() {
  const session = getSession();
  const query = queryBuilder().getStore_Quiz();
  return (
    <ServerCacheFill session={session} query={query}>
      <Quiz />
    </ServerCacheFill>
  );
}

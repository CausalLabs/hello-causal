import Home from "./home";
import { queryBuilder } from "./utils/causal";
import { ServerCacheFill } from "./utils/causal.server";
import { getSession } from "./utils/utils-server";

export default async function Page() {
  const session = getSession();
  const query = queryBuilder()
    .getStore_Hero()
    .getStore_HomePageOffers()
    .getStore_TrendingProductCarousel()
    .getStore_PromoBanner()
    .getStore_HeaderTopHat()
    .getStore_NewsletterSignup();

  const seed = Math.random().toString();

  return (
    <ServerCacheFill session={session} query={query}>
      <Home seed={seed} />
    </ServerCacheFill>
  );
}

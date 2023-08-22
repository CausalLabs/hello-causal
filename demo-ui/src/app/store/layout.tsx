import "./globals.css";
import { Inter } from "next/font/google";

import { queryBuilder } from "./utils/causal";
import { CartProvider } from "./cart/context";
import { Header } from "./header";
import { Footer } from "./footer";
import { ServerCacheFill } from "./utils/causal.server";
import { getSession } from "./utils/utils-server";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getSession();
  const query = queryBuilder()
    .getStore_HeaderTopHat()
    .getStore_HeaderTopHat()
    .getStore_PenQuizPromoCard()
    .getStore_NewsletterSignup();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ServerCacheFill session={session} query={query}>
          <CartProvider>
            <Header />
            <div>{children}</div>
            <Footer />
          </CartProvider>
        </ServerCacheFill>
      </body>
    </html>
  );
}

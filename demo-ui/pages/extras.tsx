import Link from "next/link";
import { Layout } from "../components/Layout/Layout";

export default function Extras() {
  return (
    <Layout>
      <ul className="list-disc list-inside indent-3 mt-1 space-y-1">
        <li>
          <Link href="/store">E-commerce store</Link>
        </li>
        <li>
          <Link href="/ml-standalone">Standalone ML Cross Sell</Link>
        </li>
        <li>
          <Link href="/simulate">Simulator</Link>
        </li>
      </ul>
    </Layout>
  );
}

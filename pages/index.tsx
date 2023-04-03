import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <>
          <h2>Static Generation (SSG)</h2>
          <ul>
            <li>Without data - this page itself!</li>
            <li>
              <Link href={"/ssg/country/PER"}>With data</Link>
            </li>
          </ul>

          <h2>Incremental Static Generation (IRS)</h2>
          <ul>
            <li>
              <Link href={"/isr/country/fallback/BRA"}>
                Fallback (rendered at built time)
              </Link>
            </li>
            <li>
              <Link href={"/isr/country/fallback/POL"}>
                Fallback (rendered at runtime)
              </Link>
            </li>
            <li>
              <Link href={"/isr/country/regeneration/HRV"}>"Re"generation</Link>
            </li>
          </ul>

          <h2>Client-side Fetching/Rendering (CSR)</h2>
          <ul>
            <li>
              <Link href={"/csf/country"}>
                Fetch country information by client-side
              </Link>
            </li>
          </ul>

          <h2>Server-side Rendering (SSR)</h2>
          <ul>
            <li>
              <Link href={"/ssr/country/TUN"}>Tunisia</Link>
            </li>
          </ul>

          <h2>Search Examples</h2>
          <ul>
            <li>
              <Link href={"/search/ssg"}>
                Static Generation + Fallback + Regeneration
              </Link>
            </li>
            <li>
              <Link href={"/search/ssr"}>Server-side Rendering</Link>
            </li>
          </ul>
        </>
      </>
    </Layout>
  );
}

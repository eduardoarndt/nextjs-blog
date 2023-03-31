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
          <h2>SSG & SSR</h2>
          <Link href={"/ssg/country/PER"}>
            Static Generation: /ssg/country/PER
          </Link>
          <br />
          <Link href={"/ssr/country/TUN"}>
            Server-side Rendering: /ssr/country/TUN
          </Link>
          <h2>ISR</h2>
          <Link href={"/isr/country/fallback/BRA"}>
            Incremental Static Generation: /isr/country/fallback/BRA
            (pre-rendered at built time)
          </Link>
          <br />
          <Link href={"/isr/country/fallback/POL"}>
            Incremental Static Generation: /isr/country/POL (fallback)
          </Link>
          <br />
          <Link href={"/isr/country/regeneration/HRV"}>
            Incremental Static Generation: /isr/country/HRV ("re"generation)
          </Link>
          <h2>SSG without data, with client-side fetching</h2>
          <Link href={"/csf/country"}>/csf/country</Link>
        </>
      </>
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {/* links to all pages... */}
        <>
          <h2>SSG & SSR</h2>
          <Link href={"/ssg/country/BRA"}>
            Static Generation: /ssg/country/BRA
          </Link>
          <br />
          <Link href={"/ssr/country/BRA"}>
            Server-side Rendering: /ssr/country/BRA
          </Link>
          <h2>ISR</h2>
          <Link href={"/isr/country/fallback/BRA"}>
            Incremental Static Generation: /isr/country/fallback/BRA
            (pre-rendered at built time)
          </Link>
          <br />
          <Link href={"/isr/country/fallback/BEL"}>
            Incremental Static Generation: /isr/country/BEL (fallback)
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

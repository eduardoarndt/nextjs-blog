import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { CountryCode } from "../domain/country";
import { getAllCountryCodes } from "../lib/countries";

type HomeProps = {
  countryCodes: CountryCode[];
};

export default function Home({ countryCodes }: HomeProps) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {countryCodes.map((countryCode) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link href={"/ssg/country/" + countryCode.cca3}>
              {countryCode.cca3} (static generation)
            </Link>
            <Link href={"/ssr/country/" + countryCode.cca3}>
              {countryCode.cca3} (ssr generation)
            </Link>
            <br />
          </div>
        ))}
      </>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const countryCodes = await getAllCountryCodes();

  return {
    props: {
      countryCodes,
    },
  };
};

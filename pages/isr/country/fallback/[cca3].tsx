import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../../../components/layout";
import { Country, CountryCode } from "../../../../domain/country";
import { getCountry } from "../../../../lib/countries";

type CountryPageProps = {
  country: Country;
};

export default function CountryPage({ country }: CountryPageProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout home={false}>
      <p>{`CCA3 Code: ${country.cca3}`}</p>
      <p>{`Official Name: ${country.name.official}`}</p>
      <p>{`Common Name: ${country.name.common}`}</p>
      <p>{`Capital: ${country.capital[0]}`}</p>
      <p>{`Region: ${country.region}`}</p>
      <p>{`Subregion: ${country.subregion}`}</p>
      <br />
      {country.cca3 == "BRA" || country.cca3 == "ARG" ? (
        <em>This page is has been compiled at build time!</em>
      ) : (
        <em>This page is has been incrementally compiled at runtime!</em>
      )}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // this could even be empty...
  const countryCodes = [{ cca3: "BRA" }, { cca3: "ARG" }] as CountryCode[];

  const paths = countryCodes.map((countryCode: CountryCode) => {
    return {
      params: {
        cca3: countryCode.cca3,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await getCountry(params?.cca3 as string);

  return country ? { props: { country } } : { notFound: true };
};

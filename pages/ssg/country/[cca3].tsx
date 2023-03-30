import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/layout";
import { Country } from "../../../domain/country";
import { getAllCountryCodes, getCountry } from "../../../lib/countries";

type CountryPageProps = {
  country: Country;
};

export default function CountryPage({ country }: CountryPageProps) {
  return (
    <Layout home={false}>
      <p>{`Official Name: ${country.name.official}`}</p>
      <p>{`Common Name: ${country.name.common}`}</p>
      <p>{`Capital: ${country.capital[0]}`}</p>
      <p>{`Region: ${country.region}`}</p>
      <p>{`Subregion: ${country.subregion}`}</p>
      <p>{`CCA3 Code: ${country.cca3}`}</p>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCountryCodes();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await getCountry(params?.cca3 as string);

  return {
    props: {
      country,
    },
  };
};

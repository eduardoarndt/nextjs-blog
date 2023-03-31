import { GetServerSideProps } from "next";
import Layout from "../../../components/layout";
import { Country } from "../../../domain/country";
import { getCountry } from "../../../lib/countries";

type CountryPageProps = {
  country: Country;
};

export default function CountryPage({ country }: CountryPageProps) {
  return (
    <Layout>
      <p>{`CCA3 Code: ${country.cca3}`}</p>
      <p>{`Official Name: ${country.name.official}`}</p>
      <p>{`Common Name: ${country.name.common}`}</p>
      <p>{`Capital: ${country.capital[0]}`}</p>
      <p>{`Region: ${country.region}`}</p>
      <p>{`Subregion: ${country.subregion}`}</p>
      <br />
      <em>This page has been compiled by the server during runtime!</em>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const country = await getCountry(params?.cca3 as string);

  return country ? { props: { country } } : { notFound: true };
};

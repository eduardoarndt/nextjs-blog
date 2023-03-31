import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../../components/layout";
import { Country, CountryCode } from "../../../../domain/country";
import { getAllCountryCodes, getCountry } from "../../../../lib/countries";

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
      <em>
        This page is being pre-rendered every time it gets olders than 60
        seconds!
      </em>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const countryCodes = await getAllCountryCodes();

  const paths = countryCodes.map((countryCode: CountryCode) => {
    return {
      params: {
        cca3: countryCode.cca3,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await getCountry(params?.cca3 as string);

  return country ? { props: { country }, revalidate: 60 } : { notFound: true };
};

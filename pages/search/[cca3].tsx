import { GetServerSideProps } from "next";
import Layout from "../../components/layout";
import SearchBar from "../../components/searchBar";
import { Country } from "../../domain/country";
import { getCountry } from "../../lib/countries";

type SearchResultPageProps = {
  country: Country;
};

export default function SearchResult({ country }: SearchResultPageProps) {
  return (
    <Layout home={false}>
      <SearchBar />
      <>
        <p>{`CCA3 Code: ${country.cca3}`}</p>
        <p>{`Official Name: ${country.name.official}`}</p>
        <p>{`Common Name: ${country.name.common}`}</p>
        <p>{`Capital: ${country.capital[0]}`}</p>
        <p>{`Region: ${country.region}`}</p>
        <p>{`Subregion: ${country.subregion}`}</p>
      </>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const country = await getCountry(params?.cca3 as string);

  if (!country) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      country,
    },
  };
};

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import SearchBar from "../../../components/searchBar";
import { Country } from "../../../domain/country";
import { getCountry } from "../../../lib/countries";

type SearchResultPageProps = {
  country: Country;
};

export default function SearchResult({ country }: SearchResultPageProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Layout>
        <SearchBar linkTo="/search/ssg/" />
        <>
          <p>{`CCA3 Code: Loading...`}</p>
          <p>{`Official Name: Loading...`}</p>
          <p>{`Common Name: Loading...`}</p>
          <p>{`Capital: Loading...`}</p>
          <p>{`Region: Loading...`}</p>
          <p>{`Subregion: Loading...`}</p>
        </>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchBar linkTo="/search/ssg/" />
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await getCountry(params?.cca3 as string);

  return country ? { props: { country } } : { notFound: true };
};

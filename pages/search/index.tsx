import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import SearchBar from "../../components/searchBar";
import { Country } from "../../domain/country";
import { getCountry } from "../../lib/countries";

export default function Search() {
  return (
    <Layout home={false}>
      <SearchBar />
    </Layout>
  );
}

import Layout from "../../../components/layout";
import SearchBar from "../../../components/searchBar";

export default function Search() {
  return (
    <Layout>
      <SearchBar linkTo="/search/ssr/" />
    </Layout>
  );
}

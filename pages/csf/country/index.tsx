import useSWR from "swr";
import Layout from "../../../components/layout";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CountryPage() {
  const { data: country, error } = useSWR(
    "https://restcountries.com/v3.1/alpha/BRA?fields=name%2Cregion%2Csubregion%2Ccapital%2Ccca3",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!country) return <div>loading...</div>;

  return (
    <Layout>
      <p>{`CCA3 Code: ${country.cca3}`}</p>
      <p>{`Official Name: ${country.name.official}`}</p>
      <p>{`Common Name: ${country.name.common}`}</p>
      <p>{`Capital: ${country.capital[0]}`}</p>
      <p>{`Region: ${country.region}`}</p>
      <p>{`Subregion: ${country.subregion}`}</p>
      <br />
      <em>This page has been compiled at runtime by the client!</em>
    </Layout>
  );
}

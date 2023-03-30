import { Country, CountryCode } from "../domain/country";

export async function getAllCountryCodes() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=cca3", {
    method: "GET",
  });

  const countryCodes = (await res.json()) as CountryCode[];

  return countryCodes.map((countryCode: CountryCode) => {
    return {
      params: {
        cca3: countryCode.cca3,
      },
    };
  });
}

export async function getCountry(countryCode: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name%2Cregion%2Csubregion%2Ccapital%2Ccca3`,
    {
      method: "GET",
    }
  );

  const country = (await res.json()) as Country;

  return country;
}

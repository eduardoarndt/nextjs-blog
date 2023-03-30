import { Country, CountryCode } from "../domain/country";

export async function getAllCountryCodes() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=cca3", {
    method: "GET",
  });

  if (!res.ok) {
    throw { status: res.status, text: res.statusText };
  }

  const countryCodes = (await res.json()) as CountryCode[];

  return countryCodes;
}

export async function getCountry(countryCode: string) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name%2Cregion%2Csubregion%2Ccapital%2Ccca3`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw { status: res.status, text: res.statusText };
    }

    const country = (await res.json()) as Country;

    return country;
  } catch (error) {
    console.error(error);
    return null;
  }
}

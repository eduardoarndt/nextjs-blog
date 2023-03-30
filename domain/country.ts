export type Country = {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  cca3: string;
};

export type CountryCode = {
  cca3: string;
};

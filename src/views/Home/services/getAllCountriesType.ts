export type LanguageTranslations = {
  official: string;
  common: string;
};

export type CountryName = {
  common: string;
  official: string;
  nativeName: {
    eng: LanguageTranslations;
  };
};

export type Currency = {
  name: string;
  symbol: string;
};

export type IDD = {
  root: string;
  suffixes: string[];
};

export type Demonyms = {
  eng: {
    f: string;
    m: string;
  };
  fra: {
    f: string;
    m: string;
  };
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};

export type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

export type CapitalInfo = {
  latlng: [number, number];
};

export type Country = {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    XCD: Currency;
  };
  idd: IDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    eng: string;
  };
  translations: {
    ara: LanguageTranslations;
    bre: LanguageTranslations;
    ces: LanguageTranslations;
    cym: LanguageTranslations;
    deu: LanguageTranslations;
    est: LanguageTranslations;
    fin: LanguageTranslations;
    fra: LanguageTranslations;
    hrv: LanguageTranslations;
    hun: LanguageTranslations;
    ita: LanguageTranslations;
    jpn: LanguageTranslations;
    kor: LanguageTranslations;
    nld: LanguageTranslations;
    per: LanguageTranslations;
    pol: LanguageTranslations;
    por: LanguageTranslations;
    rus: LanguageTranslations;
    slk: LanguageTranslations;
    spa: LanguageTranslations;
    srp: LanguageTranslations;
    swe: LanguageTranslations;
    tur: LanguageTranslations;
    urd: LanguageTranslations;
    zho: LanguageTranslations;
  };
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: CapitalInfo;
};

export type GetAllCountriesReturn = {
  data: Country[];
};

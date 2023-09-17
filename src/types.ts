export type Login = {
    email: string;
    password: string;
}

export type User = {
    id: number;
    email: string;
    username: string;
    name: string;
    roles: string[];
    locale: string;
    access_token:string;
    refresh_token:string;
}

export type Refresh = {
    refresh_token: string
}

export type RefreshResponse = {
    access_token:string;
    refresh_token:string;
}

export type Search = {
    query: string;
}

export type SearchResponse = {
    continents: Array<ContinentModel>;
    countries: Array<CountryModel>;
    languages: Array<LanguageModel>;
}

export type ContinentModel = {
    code: string;
    name: string;
}

export type CountryModel = {
    code: string;
    name: string;
    native: string;
    phone: string;
    continent: string;
    capital: string;
    currency: string;
    languages: string;
}

export type LanguageModel = {
    code: string;
    name: string;
    native: string;
    rtl: boolean;
}

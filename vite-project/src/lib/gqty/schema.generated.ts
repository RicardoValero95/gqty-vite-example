/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface ContinentFilterInput {
  code?: Maybe<StringQueryOperatorInput>;
}

export interface StringQueryOperatorInput {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
}

export interface CountryFilterInput {
  code?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  continent?: Maybe<StringQueryOperatorInput>;
}

export interface LanguageFilterInput {
  code?: Maybe<StringQueryOperatorInput>;
}

export enum CacheControlScope {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  CacheControlScope: true,
  ID: true,
  Int: true,
  String: true,
  Upload: true,
};
export const generatedSchema = {
  Continent: {
    __typename: { __type: "String!" },
    code: { __type: "ID!" },
    name: { __type: "String!" },
    countries: { __type: "[Country!]!" },
  },
  ContinentFilterInput: { code: { __type: "StringQueryOperatorInput" } },
  Country: {
    __typename: { __type: "String!" },
    code: { __type: "ID!" },
    name: { __type: "String!" },
    native: { __type: "String!" },
    phone: { __type: "String!" },
    continent: { __type: "Continent!" },
    capital: { __type: "String" },
    currency: { __type: "String" },
    languages: { __type: "[Language!]!" },
    emoji: { __type: "String!" },
    emojiU: { __type: "String!" },
    states: { __type: "[State!]!" },
  },
  CountryFilterInput: {
    code: { __type: "StringQueryOperatorInput" },
    currency: { __type: "StringQueryOperatorInput" },
    continent: { __type: "StringQueryOperatorInput" },
  },
  Language: {
    __typename: { __type: "String!" },
    code: { __type: "ID!" },
    name: { __type: "String" },
    native: { __type: "String" },
    rtl: { __type: "Boolean!" },
  },
  LanguageFilterInput: { code: { __type: "StringQueryOperatorInput" } },
  State: {
    __typename: { __type: "String!" },
    code: { __type: "String" },
    name: { __type: "String!" },
    country: { __type: "Country!" },
  },
  StringQueryOperatorInput: {
    eq: { __type: "String" },
    ne: { __type: "String" },
    in: { __type: "[String]" },
    nin: { __type: "[String]" },
    regex: { __type: "String" },
    glob: { __type: "String" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    continents: {
      __type: "[Continent!]!",
      __args: { filter: "ContinentFilterInput" },
    },
    continent: { __type: "Continent", __args: { code: "ID!" } },
    countries: {
      __type: "[Country!]!",
      __args: { filter: "CountryFilterInput" },
    },
    country: { __type: "Country", __args: { code: "ID!" } },
    languages: {
      __type: "[Language!]!",
      __args: { filter: "LanguageFilterInput" },
    },
    language: { __type: "Language", __args: { code: "ID!" } },
  },
  subscription: {},
} as const;

export interface Continent {
  __typename?: "Continent";
  code: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  countries: Array<Country>;
}

export interface Country {
  __typename?: "Country";
  code: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  native: ScalarsEnums["String"];
  phone: ScalarsEnums["String"];
  continent: Continent;
  capital?: Maybe<ScalarsEnums["String"]>;
  currency?: Maybe<ScalarsEnums["String"]>;
  languages: Array<Language>;
  emoji: ScalarsEnums["String"];
  emojiU: ScalarsEnums["String"];
  states: Array<State>;
}

export interface Language {
  __typename?: "Language";
  code: ScalarsEnums["ID"];
  name?: Maybe<ScalarsEnums["String"]>;
  native?: Maybe<ScalarsEnums["String"]>;
  rtl: ScalarsEnums["Boolean"];
}

export interface State {
  __typename?: "State";
  code?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  country: Country;
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  continents: (args?: {
    filter?: Maybe<ContinentFilterInput>;
  }) => Array<Continent>;
  continent: (args: { code: Scalars["ID"] }) => Maybe<Continent>;
  countries: (args?: { filter?: Maybe<CountryFilterInput> }) => Array<Country>;
  country: (args: { code: Scalars["ID"] }) => Maybe<Country>;
  languages: (args?: {
    filter?: Maybe<LanguageFilterInput>;
  }) => Array<Language>;
  language: (args: { code: Scalars["ID"] }) => Maybe<Language>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Continent: Continent;
  Country: Country;
  Language: Language;
  Mutation: Mutation;
  Query: Query;
  State: State;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames =
  | "Continent"
  | "Country"
  | "Language"
  | "Mutation"
  | "Query"
  | "State"
  | "Subscription";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  CacheControlScope: CacheControlScope | undefined;
}

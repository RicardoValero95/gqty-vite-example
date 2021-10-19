import { FC, useState } from "react";
import { CountryFilterInput, Maybe, useLazyQuery } from "../gqty";

export const LazyCountries: FC = () => {
  const [getCountries, { isLoading, data, error }] = useLazyQuery(
    (
      { countries },
      args?:
        | {
            filter?: Maybe<CountryFilterInput> | undefined;
          }
        | undefined
    ) => countries(args)
  );
  const [currency, setCurrency] = useState<string | undefined>(undefined);

  const onSearch = () =>
    getCountries({
      args: {
        filter: {
          currency: {
            eq: currency,
          },
        },
      },
    });

  return (
    <div>
      <h1>Countries</h1>
      <div>
        <h6>Filters</h6>
        <label>Currency</label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </div>
      <button onClick={() => onSearch()}>Search</button>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <>
            <h6>Results</h6>
            <ul>
              {data?.map((country) => (
                <li key={country.code}>{country.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

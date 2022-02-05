import { FormControl, Select, MenuItem } from "@mui/material";
import React from "react";
import { map } from "lodash";
import "./App.css";

const App = () => {
  const [countries, setCountries] = React.useState<any>([]);

  React.useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = map(data, (country: any) => {
            return {
              name: country.country,
              value: country.countryInfo.iso2,
            };
          });
          setCountries(countries);
        });
    };
    getCountriesData();
  }, [countries]);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {map(countries, (country: any, index) => {
              return (
                <MenuItem value={country.value} key={index}>
                  {country.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default App;

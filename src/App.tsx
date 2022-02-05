import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Card,
  CardContent,
} from "@mui/material";
import * as React from "react";
import { map } from "lodash";
import InfoBox from "./Information-box";
import Map from "./Map";
import "./App.css";

const App = () => {
  const [countries, setCountries] = React.useState<any>([]);
  const [selectedCountry, setSelectedCountry] = React.useState("WorldWide");

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
  }, []);

  const onCountryChange = (event: SelectChangeEvent<string>) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={selectedCountry}
              onChange={onCountryChange}
            >
              <MenuItem value="WorldWide">WorldWide</MenuItem>
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

        <div className="app__stats">
          <InfoBox
            title="Corona-Virus cases"
            total={2000}
            cases={123}
          ></InfoBox>
          <InfoBox
            title="Corona-Virus cases"
            total={2000}
            cases={123}
          ></InfoBox>
          <InfoBox
            title="Corona-Virus cases"
            total={2000}
            cases={123}
          ></InfoBox>
        </div>

        <Map></Map>
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;

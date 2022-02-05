import { map } from "lodash";
import * as React from "react";

export interface TablePropsInterface {
  countries: any;
}

const Table: React.FC<TablePropsInterface> = ({ countries }) => {
  return (
    <div>
      {map(countries, (country: any) => {
        return (
          <tr>
            <td>{country.country}</td>
            <td>
              <strong>{country.cases}</strong>
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default Table;

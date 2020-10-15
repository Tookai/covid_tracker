import React from "react";
import { prettyPrintStat } from "../utils";
import "../Style/Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{prettyPrintStat(cases)}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;

import React from "react";
import { DataTable } from "./containers/DataTable";
import "./App.scss";

export const App = ({ rows }) => (
  <div className="app__container">
    <DataTable rows={rows} rowsPerPage={5} />
  </div>
);

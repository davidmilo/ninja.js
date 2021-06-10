import React from "react";
import { List } from "../../components/List/List";

export const UsersList = ({ currentPageNumber, rows, rowsPerPage }) => (
  <List
    currentPageNumber={currentPageNumber}
    rows={rows}
    rowsPerPage={rowsPerPage}
  />
);

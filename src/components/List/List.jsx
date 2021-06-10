import React from "react";
import { ListContent } from "../ListContent/ListContent";

export const List = ({ currentPageNumber, rows, rowsPerPage }) => (
  <table>
    <ListContent
      currentPageNumber={currentPageNumber}
      rows={rows}
      rowsPerPage={rowsPerPage}
    />
  </table>
);

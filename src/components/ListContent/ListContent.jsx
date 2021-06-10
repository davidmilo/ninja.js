import React from "react";
import { renderListContentRows } from "../../utils/List";
import "./ListContent.scss";

export const ListContent = ({ currentPageNumber, rows, rowsPerPage }) => (
  <tbody className="listContent">
    {renderListContentRows({ currentPageNumber, rows, rowsPerPage })}
  </tbody>
);

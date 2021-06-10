import React from "react";
import { Row } from "../components/Row/Row";

export const calculatePagesQuantity = ({ rows, rowsPerPage }) =>
  rowsPerPage === 0 ? 0 : Math.ceil(rows.length / rowsPerPage);

export const calculateRows = ({ currentPageNumber, rowsPerPage }) => {
  const startIndex = currentPageNumber * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  return [startIndex, endIndex];
};

export const renderListContentRows = ({
  currentPageNumber,
  rows,
  rowsPerPage,
}) =>
  rows
    .slice(...calculateRows({ currentPageNumber, rowsPerPage }))
    .map((row) => <Row key={row.per_id} row={row} />);

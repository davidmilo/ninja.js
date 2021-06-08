import React from "react";
import { Row } from "./Row";

export const List = ({ currentPageNumber, rows, rowsPerPage }) => {
  const calculateRowsForCurrentPage = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return [startIndex, endIndex];
  };

  const renderTableRows = rows
    .slice(...calculateRowsForCurrentPage(currentPageNumber))
    .map((row) => <Row key={row.per_id} row={row} />);

  return (
    <table>
      <tbody>{renderTableRows}</tbody>
    </table>
  );
};

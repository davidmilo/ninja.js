import React, { useEffect, useState } from "react";
import { List } from "./List";
import { Pagination } from "./Pagination";
import { Search } from "./Search";

export const DataTable = ({ rows: rowsFromProps, rowsPerPage = 40 }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [rows, setRows] = useState(rowsFromProps);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  useEffect(() => {
    setTotalNumberOfPages(calculateTotalNumberOfPages(rows));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const calculateTotalNumberOfPages = (rows) =>
    rowsPerPage === 0 ? 0 : Math.ceil(rows.length / rowsPerPage);

  const handlePaginationPageChange = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const handleSearch = ({ target: { value: text } }) => {
    const rowsFound = rowsFromProps;
    setCurrentPageNumber(0);
    setRows(
      rowsFound.filter(
        (row) =>
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      )
    );
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound));
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <List
        currentPageNumber={currentPageNumber}
        rows={rows}
        rowsPerPage={rowsPerPage}
      />
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={handlePaginationPageChange}
      />
    </div>
  );
};

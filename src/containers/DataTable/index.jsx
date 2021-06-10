import React, { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { calculatePagesQuantity } from "../../utils/List";
import { handleBackslash } from "../../utils/String";
import { UsersList } from "../UsersList/UsersList";
import { Searcher } from "../Searcher/Searcher";

export const DataTable = ({ rows: rowsFromProps, rowsPerPage = 10 }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [rows, setRows] = useState([]);
  const [totalNumberOfPages, setPagesQuantity] = useState(0);

  useEffect(() => {
    setPagesQuantity(calculatePagesQuantity({ rows, rowsPerPage }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  useEffect(() => {
    setRows(rowsFromProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsFromProps]);

  const handleSearch = ({ target: { value: text } }) => {
    const rowsFound = rowsFromProps;
    const safeText = handleBackslash(text);
    setRows(
      rowsFound.filter(
        (row) =>
          row.name1.toLowerCase().search(safeText.toLowerCase()) > -1 ||
          row.email.toLowerCase().search(safeText.toLowerCase()) > -1
      )
    );
    setPagesQuantity(calculatePagesQuantity({ rows: rowsFound, rowsPerPage }));
    setCurrentPageNumber(0);
  };

  return (
    <div className="dataTable">
      <Searcher onSearch={handleSearch} />
      <UsersList
        currentPageNumber={currentPageNumber}
        rows={rows}
        rowsPerPage={rowsPerPage}
      />
      <Pagination
        currentPageNumber={currentPageNumber}
        onChange={(pageNumber) => setCurrentPageNumber(pageNumber)}
        totalNumberOfPages={totalNumberOfPages}
      />
    </div>
  );
};

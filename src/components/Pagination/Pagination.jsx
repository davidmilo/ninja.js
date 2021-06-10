import React from "react";
import { renderPaginationButtons } from "../../utils/Pagination";
import "./Pagination.scss";

export const Pagination = ({
  currentPageNumber,
  onChange,
  totalNumberOfPages,
}) => {
  const paginationButtons = renderPaginationButtons({
    currentPageNumber,
    onChange,
    totalNumberOfPages,
  });
  return (
    paginationButtons.length > 0 && (
      <ul className="pagination">{paginationButtons}</ul>
    )
  );
};

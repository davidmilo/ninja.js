import React from "react";
import { Page } from "./Page";
import "./Pagination.scss";

export const Pagination = ({
  currentPageNumber,
  onChange,
  totalNumberOfPages,
}) => {
  const pages = Array.from(Array(totalNumberOfPages).keys()).map(
    (pageNumber) => (
      <Page
        currentPageNumber={currentPageNumber}
        key={pageNumber}
        onChange={onChange}
        pageNumber={pageNumber}
      />
    )
  );

  return pages.length > 0 && <ul className="pagination">{pages}</ul>;
};

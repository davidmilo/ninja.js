import React from "react";
import { PaginationButton } from "../components/PaginationButton/PaginationButton";

export const renderPaginationButtons = ({
  currentPageNumber,
  onChange,
  totalNumberOfPages,
}) =>
  Array.from(Array(totalNumberOfPages).keys()).map((pageNumber) => (
    <PaginationButton
      currentPageNumber={currentPageNumber}
      key={pageNumber}
      onChange={onChange}
      pageNumber={pageNumber}
    />
  ));

import React from "react";
import { Button } from "../../components/Button/Button";
import { renderButtonClassName } from "../../utils/ClassNames";

export const PaginationButton = ({
  currentPageNumber,
  onChange,
  pageNumber,
}) => (
  <li className="pagination__buttons">
    <Button
      className={renderButtonClassName({
        active: +currentPageNumber === +pageNumber,
      })}
      onClick={(event) => {
        event.preventDefault();
        onChange(pageNumber);
      }}
      text={pageNumber + 1}
    />
  </li>
);

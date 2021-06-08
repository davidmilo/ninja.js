import React from "react";
import { Button } from "./Button";
import "./Page.scss";

export const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const isActivePage = () => currentPageNumber === pageNumber;

  const handlePaginationClick = (event) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  const buttonText = pageNumber + 1;

  return (
    <li className="page__item">
      <Button
        active={isActivePage()}
        onClick={handlePaginationClick}
        text={buttonText}
      />
    </li>
  );
};

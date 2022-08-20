import React from 'react';

export const PaginationItem = ({ pageNumber, currentPageNumber, onChange }) => {
  const renderedPageNumber = () => {
    return pageNumber + 1;
  };

  const handlePageNumber = () => {
    onChange(pageNumber);
  };

  return (
    <li className="page-item mr-1">
      <button
        className={
          currentPageNumber === pageNumber
            ? 'page-link button-outline'
            : 'page-item mr-1'
        }
        onClick={handlePageNumber}
      >
        {renderedPageNumber()}
      </button>
    </li>
  );
};

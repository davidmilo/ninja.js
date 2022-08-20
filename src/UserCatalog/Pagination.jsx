import React from 'react';

import { PaginationItem } from './Page';

export const Pagination = ({
  currentPageNumber,
  totalNumberOfPages,
  onChange,
}) => {
  const pages = Array.from(Array(totalNumberOfPages).keys());

  console.log('pages', pages);
  return pages.length > 1 ? (
    <ul className="pagination">
      {pages.map((pageNumber) => {
        return (
          <PaginationItem
            key={pageNumber}
            currentPageNumber={currentPageNumber}
            pageNumber={pageNumber}
            onChange={() => onChange(pageNumber)}
          />
        );
      })}
    </ul>
  ) : null;
};

import React from 'react';
import { useMemo } from 'react';

import { PaginationItem } from './PaginationItem';

export const Pagination = ({
  currentPageNumber,
  totalNumberOfPages,
  onChange,
}) => {
  const pages = useMemo(
    () => Array.from(Array(totalNumberOfPages).keys()),
    [totalNumberOfPages]
  );

  return pages.length > 1 ? (
    <ul className="pagination">
      {pages.map((pageNumber) => {
        return (
          <PaginationItem
            key={pageNumber}
            currentPageNumber={currentPageNumber}
            pageNumber={pageNumber}
            onChange={onChange}
          />
        );
      })}
    </ul>
  ) : null;
};

import React from 'react'

import Page from './Page'

const Pagination = ({ currentPageNumber = 0, totalNumberOfPages = 0, onChange = () => {} }) => {
  const pages =
    Array
      .from(Array(totalNumberOfPages).keys())
      .map(pageNumber => {
        return <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange} />
      })


  return pages.length <= 1 ? null : (
    <ul className="pagination">
      {pages}
    </ul>
  )
}

export default Pagination

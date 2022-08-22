import React from 'react'
import PropTypes from 'prop-types'
import Page from './Page.jsx'
import { ITEMS_PER_PAGE } from '../constants.js'

export const calculatePageCount = (rowsFound, rowsPerPage = ITEMS_PER_PAGE) =>
  rowsPerPage ? Math.ceil(rowsFound / rowsPerPage) : 0

const Pagination = ({ paginationState, totalRowCount }) => {
  const [currentPageNumber, setCurrentPageNumber] = paginationState

  const pageCount = calculatePageCount(totalRowCount)

  if (pageCount <= 1) {
    return null
  }

  return (
    <ul className="pagination">
      {[...Array(pageCount)].map((_, index) => {
        return (
          <Page
            key={index}
            currentPageNumber={currentPageNumber}
            pageNumber={index}
            onChange={setCurrentPageNumber}
          />
        )
      })}
    </ul>
  )
}

Pagination.propTypes = {
  // This is a tuple ([number, (number) => void]).
  // It would trivial to type this with TS, but requires a custom validator for prop-types.
  paginationState: PropTypes.array.isRequired,
  totalRowCount: PropTypes.number.isRequired
}

export default Pagination


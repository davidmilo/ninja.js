import React, {useState} from 'react'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

const DataTable = ({rows = [], rowsPerPage = 40}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [rowsToRender, setRowsToRender] = useState(rows);

  const calculateTotalNumberOfPages = () => (!rowsToRender?.length || rowsPerPage === 0) 
    ? 0 
    : Math.ceil(rowsToRender.length / rowsPerPage)
  

  const search = (event) => {
    const text = event.target.value

    if (text) {
      const queryText = text.toLowerCase()
      const rowsFound = rows.filter((row) => {
        return row.name1.toLowerCase().search(queryText) > -1 ||
         (row.email && row.email.toLowerCase().search(queryText) > -1)
      })
      setRowsToRender(rowsFound || []);
    } else {
      setRowsToRender(rows);
    }

    setCurrentPageNumber(0);
  }

  const changeToPageNumber = (pageNumber) => setCurrentPageNumber(pageNumber);

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }

  const totalNumberOfPages = calculateTotalNumberOfPages();

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>
          { rowsToRender.map(row => <Row key={row.per_id} row={row} />)
            .slice(...rowsInPageNumber(currentPageNumber)) }
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber} />
    </div>
  )
}

export default DataTable

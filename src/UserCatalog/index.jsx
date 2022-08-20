import React from 'react';
import { useState, useEffect } from 'react';
import { Pagination } from './Pagination';
import Search from './Search';
import { UserTable } from './UserTable';
import { UserRow } from './UserRow';

export const UserCatalog = ({ users, rowsPerPage }) => {
  const [nrOfRows, setNrOfRows] = useState(users);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  console.log('rows', users);
  useEffect(() => {
    if (rowsPerPage === 0) {
      setTotalNumberOfPages(0);
    } else setTotalNumberOfPages(Math.ceil(nrOfRows.length / rowsPerPage));
  }, [rowsPerPage, nrOfRows.length]);

  const searchUsers = (event) => {
    const text = event.target.value;
    let rowsFound = users;

    if (text) {
      rowsFound = users.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }
    setNrOfRows(rowsFound);
    setCurrentPageNumber(0);
  };

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const rowsToRender = nrOfRows
    .map((row) => row)
    .slice(
      currentPageNumber * rowsPerPage,
      currentPageNumber * rowsPerPage + rowsPerPage
    );

  return (
    <div>
      <Search onSearch={searchUsers} />

      <UserTable>
        {rowsToRender.map((row) => {
          return <UserRow key={row.per_id} row={row} />;
        })}
      </UserTable>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber}
      />
    </div>
  );
};

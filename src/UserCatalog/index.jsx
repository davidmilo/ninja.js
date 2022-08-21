import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Pagination } from './Pagination';
import { Search } from './Search';
import { UserTable } from './UserTable';
import { UserRow } from './UserRow';

export const UserCatalog = ({ users, usersPerPage }) => {
  const [nrOfUsers, setNrOfUsers] = useState(users);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  useEffect(() => {
    if (usersPerPage === 0) {
      setTotalNumberOfPages(0);
    } else setTotalNumberOfPages(Math.ceil(nrOfUsers.length / usersPerPage));
  }, [usersPerPage, nrOfUsers.length]);

  const searchUsers = (event) => {
    const text = event.target.value;
    let usersFound = users;

    if (text) {
      usersFound = users.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }
    setNrOfUsers(usersFound);
    setCurrentPageNumber(0);
  };

  const changeToPageNumber = useCallback(
    (pageNumber) => {
      setCurrentPageNumber(pageNumber);
    },
    [setCurrentPageNumber]
  );

  const usersToDisplay = nrOfUsers
    .map((user) => user)
    .slice(
      currentPageNumber * usersPerPage,
      currentPageNumber * usersPerPage + usersPerPage
    );

  return (
    <div>
      <Search onSearch={searchUsers} />
      <UserTable>
        {usersToDisplay.map((user) => {
          return <UserRow key={user.per_id} user={user} />;
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

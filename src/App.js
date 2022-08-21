import React from 'react';
import { UserCatalog } from './UserCatalog';
import './App.css';

const App = ({ users }) => {
  return (
    <div className="container mt-3">
      <UserCatalog users={users} locale="da" usersPerPage={5} />
    </div>
  );
};

export default App;

import React from 'react';
import { UserCatalog } from './UserCatalog';
import './App.css';

const App = ({ rows }) => {
  return (
    <div className="container mt-3">
      <UserCatalog users={rows} locale="da" rowsPerPage={5} />
    </div>
  );
};

export default App;

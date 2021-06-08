import React from "react";
import "./Search.scss";

export const Search = ({ onSearch }) => (
  <div className="search">
    <input onChange={onSearch} placeholder="Søg brugere" type="search" />
  </div>
);

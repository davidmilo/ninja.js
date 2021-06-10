import React from "react";
import { Input } from "../../components/Input/Input.jsx";
import "./Searcher.scss";

export const Searcher = ({ onSearch }) => (
  <div className="searcher">
    <Input onChange={onSearch} placeholder="Søg brugere" type="search" />
  </div>
);

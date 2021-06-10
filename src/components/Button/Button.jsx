import React from "react";
import "./Button.scss";

export const Button = ({ className, onClick, text }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

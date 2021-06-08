import classnames from "clsx";
import React from "react";
import "./Button.scss";

export const Button = ({ active, onClick, text }) => {
  const className = classnames("button", {
    "button-outline": active,
  });

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

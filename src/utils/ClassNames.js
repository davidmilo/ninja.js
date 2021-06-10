import classnames from "clsx";

export const renderButtonClassName = ({ active }) =>
  classnames("button", {
    "button-outline": active,
  });

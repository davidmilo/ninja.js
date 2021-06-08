import React from "react";
import "./Row.scss";

export const Row = ({ row: { edit_path, email, name1 } }) => (
  <tr className="row">
    <td>
      <p className="row__text">
        <a href={edit_path}>{name1}</a>
      </p>
      <p className="row__text row__text--small">
        <small>{email}</small>
      </p>
    </td>
  </tr>
);

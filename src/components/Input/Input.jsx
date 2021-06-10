import React from "react";

export const Input = ({ onChange, placeholder, type }) => (
  <input onChange={onChange} placeholder={placeholder} type={type} />
);

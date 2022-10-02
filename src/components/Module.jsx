import React from "react";

export const Module = ({ title, name, Details, Duration, asad }) => {
  return (
    <div className="sub">
      <h3>{title}</h3>
      <label> Name :</label>
      <span>{name}</span>
      <br />
      <label>Details :</label>
      <span>{Details}</span>
      <p />
      <br />
      <label> Duration:</label>
      <span>{Duration}</span>
      <label> asad:</label>
      <span>{asad}</span>
    </div>
  );
};

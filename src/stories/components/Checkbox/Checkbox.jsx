import React from "react";

import "./styles.css";

const Checkbox = ({ checked, callback, label, htmlFor = "toggle" }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id="checkbox-input"
        name={htmlFor}
        checked={checked}
        onChange={callback}
      />
      <label id="checkbox-label" htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

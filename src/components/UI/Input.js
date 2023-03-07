import React from "react";

import "./Input.css";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={props.className}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        required
      />
    </div>
  );
};

export default Input;

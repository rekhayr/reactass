import React from "react";

const Button = props => (
  <button onClick={props.onClick} disable={props.disable}>
    {props.value}
  </button>
);
export default Button;

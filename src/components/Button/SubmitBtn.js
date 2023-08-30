import React from "react";
import "../../css/button.css";
import { Link } from "react-router-dom";
const Button = (props) => {
  // get the by props
  const title = props.title;
  const className = props.className;
  const Icon = props.Icon;
  const pathName = props.pathName;
  const IconLeft = props.IconLeft;
  return (
    <div className={className}>
      <button type="submit" className={className}>
        <i className={IconLeft}></i> {title} <i className={Icon}></i>{" "}
      </button>
    </div>
  );
};

export default Button;

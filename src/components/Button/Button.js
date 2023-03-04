import React from "react";
import "../../css/button.css";
const Button = ({ children, className = "" }) => {
  return (
    <div className="Button">
      <button className={`${className}`}>{children}</button>
    </div>
  );
};

export default Button;

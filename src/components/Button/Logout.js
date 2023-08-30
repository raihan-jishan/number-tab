import React from "react";

const Logout = (props) => {
  const Function = props.Function;
  const className = props.className;
  return (
    <div className={className}>
      <li onClick={Function}>Logout</li>
    </div>
  );
};

export default Logout;

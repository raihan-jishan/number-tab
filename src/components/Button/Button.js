import React from "react";
import "../../css/button.css";
import {Link} from 'react-router-dom';
const Button = (props ) => {
  // get the by props
  const title = props.title;
  const className = props.className; 
  const Icon = props.Icon;
  const pathName = props.pathName;
  const IconLeft = props.IconLeft;
  const onClick = props.onClick;
  return (
    <div className={className}>
     <Link to={pathName}>
     <button type="submit" className={className} onClick={onClick}><i className={IconLeft} ></i>  {title} <i className={Icon} ></i> </button>
     </Link>
    </div>
  );
};

export default Button;

import React from "react";
import Button from "../../components/Button/Button.js";
import "../../css/infos.css";
const Infos = (props) => {
  // get data by props
  const title = props.title;
  const buttonTitle = props.buttonTitle;
  const btnPath = props.btnPath;
  const btnIcon = props.btnIcon;
  const className = props.className;
  return (
    <div className="info-item">
      <h1>{title}</h1>
      <Button
        title={buttonTitle}
        pathName={btnPath}
        Icon={btnIcon}
        className={className}
      />
    </div>
  );
};

export default Infos;

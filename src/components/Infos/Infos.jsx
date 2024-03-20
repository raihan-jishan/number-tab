import React from "react";
<<<<<<< HEAD
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
=======

const Infos = ({ name }) => {
  return (
    <span className="flex items-center justify-center text-2xl tracking-wide font-bold capitalize">
      {name}
    </span>
>>>>>>> 4214f29 (update the ui & increase features)
  );
};

export default Infos;

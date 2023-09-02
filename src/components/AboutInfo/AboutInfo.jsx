/*
    title: "Aboutinfo.js file"
    desc: "file for about infos  " 
    date: 2 - 8 - 2023.
*/
// import all important files and modules
import React from "react";
import Button from "../../components/Button/Button.js";
import "../../css/addform.css";
import AddFormPic from "../../assets/Account.svg";
const AboutInfo = () => {
  return (
    <div className="form-container">
      <div className="image-card">
        {/* about image pic  */}
        <img src={AddFormPic} alt="404 module not found!" />
      </div>
      {/* form*/}
      <div className="form-input">
        <div>
          <h1>About this app</h1>
        </div>
        <div>
          <input className="input" placeholder="Add a number..." />
        </div>
        <div>
          <input className="input" placeholder="Add a type..." />
        </div>

        {/* onSubmit btn */}
        <div className="submit-btn">
          <Button
            title="Create account"
            className="btn-primary  "
            IconLeft="fa-regular fa-user"
          />
        </div>
        {/* close */}
      </div>

      {/* close */}
    </div>
  );
};
// exp default module. 
export default AboutInfo;

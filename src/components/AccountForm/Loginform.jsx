/*
    title: "Loginform.js file"
    desc: "  file for   application account login form and login a account. " 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPic from "../../assets/Login.svg";
import Infos from "../../components/Infos/Infos.jsx";
import SubmitBtn from "../../components/Button/SubmitBtn.js";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loginform = () => {
  //  server
  const server = "https://backend-of-notebook.onrender.com";
  // initailize a useState hook with this credentials
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // initilaize useNaviagte() func
  let navigate = useNavigate();
  // handleSubmit functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${server}/api/auth/login`, {
      // des-structuring proccess
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    // response -> covert json
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      // navigate   by pushing path
      navigate("/addnumber");
    } else {
      <h1>Invalid creadentials... </h1>;
    }
  };
  // onChange event function
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // login Successful

  return (
    // wrapp the whole with fragment ...
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="form-container">
        <div className="image-card">
          {/* image card image or not found by default alt tag incloded. */}
          <img src={LoginPic} alt="404 module not found!" />
        </div>
        <form action="" className="form-input" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="enter a email"
              className="form-control"
              value={credentials.email} // creadentials infos
              onChange={onChange} // onChange function to handle events .
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <input
              placeholder="enter password"
              type="password"
              className="form-control"
              value={credentials.password} // creadentials infos
              onChange={onChange} // onChange function to handle events .
              name="password"
              id="password"
            />
          </div>
          {/* onSubmit btn componeent */}
          <div className="submit-btn">
            <SubmitBtn
              title="Login now"
              className="btn-primary  "
              IconLeft="fa-solid fa-arrow-right-to-bracket"
            />
          </div>
          {/* close */}
        </form>
      </div>
      {/* that is the info about Doesn't have an account ? signup infos...  */}

      <Infos
        title="Doesn't have an account ?"
        buttonTitle="create account"
        btnPath="/account"
        btnIcon="fa-regular fa-user"
        className="btn-primary border-radius-md login p-5"
      />
    </SkeletonTheme>
  );
};
// export default the module file.
export default Loginform;

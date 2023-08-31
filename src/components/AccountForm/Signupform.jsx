/*
    title: "Signupform.js file"
    desc: "  file for   application account form and create a account " 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/addform.css";
import SubmitBtn from "../../components/Button/SubmitBtn.js";
import Infos from "../../components/Infos/Infos.jsx";
import SignUpPic from "../../assets/Account.svg";
const SignupForm = () => {
  // initailize a useState hook with this credentials
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // initailize server url
  const server = "https://backend-of-notebook.onrender.com";
  // useNavigate hook react router
  const navigate = useNavigate();
  // handleSubmit functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${server}/api/auth/createuser`, {
      // des-structuring proccess
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    // response -> covert json
    const json = await response.json();
    console.log(json);
    // Save the auth token and redirect
    localStorage.setItem("token", json.authtoken);
    // navigate   by pushing path
    navigate("/addnumber");
  };
  // onChange event function
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    // wrapp the whole with fragment ...
    <>
      <div className="form-container">
        <div className="image-card">
          {/* image card image or not found by default alt tag incloded. */}
          <img src={SignUpPic} alt="404 module not found!" />
        </div>
        {/* form section with the input tags  */}
        <form className="form-input" onSubmit={handleSubmit}>
          {/* name */}
          <div>
            <input
              onChange={onChange} // onChange function to handle events .
              type="text"
              className="form-control"
              id="name"
              placeholder="enter name"
              name="name"
            />
          </div>
          {/* email  */}
          <div>
            <input
              onChange={onChange} // onChange function to handle events .
              type="email"
              placeholder="enter email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          {/* password */}
          <div>
            <input
              onChange={onChange} // onChange function to handle events .
              type="password"
              placeholder="enter password"
              className="form-control"
              name="password"
              id="password"
              required // password is required .
              minLength={6}
            />
          </div>
          {/* conferm pass */}
          <div>
            <input
              onChange={onChange} // onChange function to handle events .
              type="password"
              placeholder="conf. password"
              className="form-control"
              name="cpassword"
              id="cpassword"
              required // password is required .
              minLength={6}
            />
          </div>

          {/* onSubmit btn */}
          <div className="submit-btn">
            <SubmitBtn
              title="Create account"
              className="btn-primary  "
              IconLeft="fa-regular fa-user"
            />
          </div>
          {/* close */}
        </form>
      </div>
      {/* that is the info about all raedy have an account login infos...  */}
      <Infos // all data is get by props .
        title="All ready have an account ?"
        buttonTitle="Login Now"
        btnPath="/login"
        btnIcon="fa-solid fa-arrow-right-to-bracket"
        className="btn-primary border-radius-md login"
      />
    </>
  );
};
// export default the module file.
export default SignupForm;

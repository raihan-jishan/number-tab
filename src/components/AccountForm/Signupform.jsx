import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/addform.css";
import SubmitBtn from '../../components/Button/SubmitBtn.js';
import Infos from '../../components/Infos/Infos.jsx';
import SignUpPic from "../../assets/Account.svg";
const SignupForm = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // initailize port
  const port = "https://backend-of-notebook.onrender.com";
  // useNavigate hook react router
  const navigate = useNavigate();

  // onChange funcs and more
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${port}/api/auth/createuser`, {
      // des-structurin
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    // Save the auth token and redirect
    localStorage.setItem("token", json.authtoken);
    // navigate   by pushing path
    navigate("/addnumber");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="form-container">
        <div className="image-card">
          <img src={SignUpPic} alt="404 module not found!" />
        </div>

        <form className="form-input" onSubmit={handleSubmit}>
          {/* name */}
          <div>
            <input
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              type="password"
              placeholder="enter password"
              className="form-control"
              name="password"
              id="password"
              required
              minLength={6}
            />
          </div>
          {/* conferm pass */}
          <div>
            <input
              onChange={onChange}
              type="password"
              placeholder="conf. password"
              className="form-control"
              name="cpassword"
              id="cpassword"
              required
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
        {/* close */}
      </div>
      <Infos
        title="All ready have an account ?"
        buttonTitle="Login Now"
        btnPath="/login"
        btnIcon="fa-solid fa-arrow-right-to-bracket"
        className="btn-primary border-radius-md login"
      />
    </>
  );
};

export default SignupForm;

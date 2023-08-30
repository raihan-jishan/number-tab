import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPic from "../../assets/Login.svg";
import Infos from '../../components/Infos/Infos.jsx';
import SubmitBtn from "../../components/Button/SubmitBtn.js";
const Loginform = () => {
  // port name
  const port = "https://backend-of-notebook.onrender.com";
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate(); // initilaize useNaviagte() func
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${port}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
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

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // login Successful

  return (
    <>
      <div className="form-container">
        <div className="image-card">
          <img src={LoginPic} alt="404 module not found!" />
        </div>
        <form action="" className="form-input" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="enter a email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
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
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
            />
          </div>
          {/* onSubmit btn */}
          <div className="submit-btn">
            <SubmitBtn
              title="Login now"
              className="btn-primary  "
              IconLeft="fa-solid fa-arrow-right-to-bracket"
            />
          </div>
          {/* close */}
        </form>
        {/* close */}
      </div>
      <Infos
        title="Doesn't have an account ?"
        buttonTitle="create account"
        btnPath="/account"
        btnIcon="fa-regular fa-user"
        className="btn-primary border-radius-md login p-5"
      />
    </>
  );
};

export default Loginform;

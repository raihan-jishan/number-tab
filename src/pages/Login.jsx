/*
    title: "Login.js file"
    desc: "file for   application  login   works. " 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import React from "react";
import Loginform from "../components/AccountForm/Loginform";
const Login = () => {
  return (
    <div>
      <div className="info-title">
        <h2>Login account</h2>
      </div>
      {/* wrapped the login  form into a section. */}

      <Loginform />
    </div>
  );
};

export default Login;

/*
    title: "Account.js file"
    desc: "Main file for whole application Authentications works. " 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import React from "react";
import AccountForm from "../components/AccountForm/Signupform.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const Account = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="info-title">
        <h2>Create a account</h2>
      </div>
      {/* wrapped the account form into a section. */}
      <AccountForm />  
    </SkeletonTheme>
  );
};

export default Account;

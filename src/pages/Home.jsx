/*
    title: Home.jsx file, 
    desc: simple home age file for application .
    date: 23 - 8 - 2023 . 
*/
import React from "react";
import { AiOutlineBorderlessTable } from "react-icons/ai";
import Btn from "../components/Button/Button.js";
import Login from "../pages/Login.jsx";
import "../css/homePage.css";
import Numbers from "./Numbers.jsx";
const Home = () => {
  return (
    <>
      <div class="hero-wrapper">
        <div class="overlay">
          <div class="hero-content">
            <h1>
              <AiOutlineBorderlessTable className="numberTag" size={40} /> Store
              the Number safe place{" "}
              
            </h1>
            <p>
              If you want to save your important numbers , You can storade in
              this application....
            </p>

            <Btn
              title="Save Number"
              Icon="fa-solid fa-user-plus"
              className="btn-primary border-radius-md"
            />
          </div>
        </div>
      </div>
      {/* numberList */}

      {localStorage.getItem("token") ? <Numbers /> : <Login />}

      {/* close */}
    </>
  );
};

export default Home;

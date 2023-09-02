/*
    title: Home.jsx file, 
    desc: simple home page file for application .
    date: 23 - 8 - 2023 . 
*/
// import all important files and modules 
import { AiOutlineBorderlessTable } from "react-icons/ai";
import Btn from "../components/Button/Button.js";
import Login from "../pages/Login.jsx";
import "../css/homePage.css";
import Numbers from "./Numbers.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
  return (
    // wrapp whole application with the react fragment.
    <SkeletonTheme>
      {/* main container of the homepage */}
      
        <div className="hero-wrapper">
          <div className="overlay">
            <div className="hero-content">
              <h1>
                <AiOutlineBorderlessTable className="numberTag" size={40} />{" "}
                Store the Number safe place
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
     
      {/* if have token then go to the number page or go to login page component.  */}
      {localStorage.getItem("token") ? <Numbers /> : <Login />}
    </SkeletonTheme>
  );
};

export default Home;

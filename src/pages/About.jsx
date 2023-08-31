/*
    title: "About.js file"
    desc: "  file for about application purpose and that  works " 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import React from "react";
import AboutInfo from "../components/AboutInfo/AboutInfo";

const About = () => {
  return (
    <>
      <div className="info-title">
        <h2>About Us</h2>
      </div>
      {/* wrap the about info section  */}
      <AboutInfo />
    </>
  );
};

export default About;

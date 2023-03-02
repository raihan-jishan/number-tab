import React from "react";
import "../css/home.css";
import { People } from "../DATA/People";
const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>People Number Tab </h1>
      </div>
      <div className="warn">
        <p>If you want to see docs version click here !</p>
      </div>

      {People.map((user) => {
        return (
          <div className="dataTable">
            <h3>Name: {user.name}</h3>
            <h3>Number:{user.number}</h3>
            <h3 className="type">Type:{user.type} <span className="icon">{user.icon}</span></h3>
            
          </div>
        );
      })}
    </div>
  );
};

export default Home;

import React from "react";
import "../css/home.css";
import {Link} from 'react-router-dom'
import { People } from "../DATA/People";
const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>People Number Tab </h1>
      </div>
      <div className="warn">
        <p>If you want to see docs version <Link to={"/docs/number-user-e4470374091274092"} className="click"> click here !  </Link></p>
      </div>

      {People.map((user) => {
        return (
          <div className="dataTable" key={user.id}>
            <h3>Name: {user.name}</h3>
            <h3>Number:{user.number}</h3>
            <h3 className="type">
              Type:{user.type} <span className="icon">{user.icon}</span>
            </h3>
          </div>
        );
      })}
      <div className="titleContainer">
        <h2>
          Could'nt Convert Image To Digital Number Please See The Real Word Of
          Hand Writing !
        </h2>
      </div>
      <div className="Button">
        <Link to={"/docs/number-user-e4470374091274092"}>
        <button className="docsBtn">
          View Docs <i class="fa-solid fa-folder"></i>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

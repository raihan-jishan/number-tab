/*
    title: Nav.jsx file, 
    desc: simple navbar components . 
    date: 23 - 8 - 2023. 
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import {
  AiOutlineHome,
  AiOutlineUserAdd,
  AiOutlineBook,
  AiOutlineFolderAdd,
  AiOutlineNumber,
} from "react-icons/ai";
import "../../css/nav.css";
import Brand from "./Brand";
import { NavLink } from "react-router-dom";
import Logout from "../Button/Logout";
const Nav = () => {
  // initialize useNaviagte hook
  const navigate = useNavigate();
  // initialize useState hook
  const [click, setClick] = useState(false);
  // handleClick
  const handleClick = () => {
    setClick(!click);
  };
  // handleClose
  const handleClose = () => {
    setClick(false);
  };
  // handleLogout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header id="header">
      <Brand />
      <div class="hamburger">
        {click ? (
          <GrClose size={45} onClick={handleClick} />
        ) : (
          <HiBars3CenterLeft size={45} onClick={handleClick} />
        )}
      </div>
      <nav class={click ? "navbar active" : "navbar"}>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={(navInfo) => (navInfo.isActive ? " active" : "")}
              onClick={handleClose}
            >
              <AiOutlineHome size={0} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={(navInfo) => (navInfo.isActive ? " active" : "")}
              onClick={handleClose}
            >
              <AiOutlineBook size={0} /> About
            </NavLink>
          </li>
          <li>
            {localStorage.getItem("token") ? (
              <NavLink
                to={"/numbers"}
                className={(navInfo) => (navInfo.isActive ? " active" : "")}
                onClick={handleClose}
              >
                <AiOutlineNumber size={0} />
                Numbers
              </NavLink>
            ) : null}
          </li>
          <li>
            {localStorage.getItem("token") ? (
              <NavLink
                to={"/addnumber"}
                className={(navInfo) => (navInfo.isActive ? " active" : "")}
                onClick={handleClose}
              >
                <AiOutlineFolderAdd /> AddNumber
              </NavLink>
            ) : null}
          </li>
          {/* try */}
          {!localStorage.getItem("token") ? (
            <>
              <li className="account-link">
                <NavLink
                  onClick={handleClose}
                  to="/login"
                  className={({ isActive }) => (isActive ? "active" : null)}
                >
                  Login
                </NavLink>
              </li>
              <li className="account-link">
                <NavLink
                  onClick={handleClose}
                  to="/account"
                  className={({ isActive }) => (isActive ? "active" : null)}
                >
                  SignUp
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <Logout Function={handleLogout} className="logOutBtn" />
            </li>
          )}

          {/* cathch */}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

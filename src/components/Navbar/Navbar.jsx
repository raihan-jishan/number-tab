import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  Brand,
  NavLits,
  ThemeSwitcher,
  navbarListData,
} from "../../utils/index.jsx";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const OpenNavbar = () => {
    setClick(!click);
  };
  const closeNavbar = () => {
    setClick(false);
  };
  return (
    <div>
      <nav className="bg-gray-50 dark:bg-gray-950 dark:text-gray-50  fixed w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Brand />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3 max-lg:gap-1">
            {/* theme switch button */}
            <ThemeSwitcher />
            {/* account */}
            <div className="text-xl max-lg:text-sm  flex gap-2 bg-gray-900 p-2 text-gray-100 px-4 rounded-full hover:scale-95 transition-all cursor-pointer dark:bg-gray-700 max-lg:dark:bg-gray-950 dark:text-gray-50 font-bold ">
              {localStorage.getItem("token") ? (
                <Link to={"/dashboard"} className="flex gap-3">
                  {" "}
                  <FaRegUser size={25} className="text-gray-300 " />
                  <span className="max-lg:hidden">account</span>
                </Link>
              ) : (
                <Link to={"/create-an-account"} className="flex gap-3">
                  {" "}
                  <FaRegUser size={25} className="text-gray-300 " />
                  <span className="max-lg:hidden">account</span>
                </Link>
              )}
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
              onClick={OpenNavbar}
            >
              <HiOutlineBars3BottomRight size={40} />
            </button>
          </div>
          <div
            className={
              click
                ? "items-center justify-between  w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            }
          >
            <ul className="flex flex-col p-4 md:p-0  font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   text-center  ">
              {navbarListData.map((data) => {
                return (
                  <NavLits
                    key={data.id}
                    data={data}
                    closeNavbar={closeNavbar}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { useContext, useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { navLinkData } from "../../constants";
import noteContext from "../../context/noteContext";
import { UserProfile } from "../ui/avatar";
import Logo from "../ui/logo";
import NavLink from "../ui/navLink";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import { getTimeGreeting } from "../../utils/utils";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeNav = () => setIsMenuOpen(false);
  const context = useContext(noteContext);
  const { user, getUserdetails } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserdetails();
    } else {
    }
  }, []);
  return (
    <header className={`fixed left-0 top-0 w-full z-50  bg-Primary`}>
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          {localStorage.getItem("token") ? (
            <div className="flex flex-col items-end justify-end  font-semibold font-Lato text-green-200 ">
              <span>Hi {user.name}</span>
              <span className="font-Comfortaa text-green-50 font-semibold">{getTimeGreeting()}</span>
            </div>
          ) : (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={toggleMenu} // Toggle menu on click
            >
              <span className="sr-only">Open main menu</span>
              <HiMiniBars3BottomRight className="h-8 w-8 " aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinkData.map((item, index) => (
            <NavLink key={index} label={item.name} path={item.path} />
          ))}
        </div>
        <div className="hidden gap-3 lg:flex lg:flex-1 lg:justify-end">
          {localStorage.getItem("token") ? (
            <UserProfile name={user.name} email={user.email} />
          ) : (
            <Button
              label={"Sigup"}
              path={"/create-an-account"}
              varient={"secondary"}
              icon={<User />}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-Primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-bgColor">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={toggleMenu} // Close menu on click
            >
              <span className="sr-only">Close menu</span>
              <IoIosClose className="h-12 w-12" size={30} aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="mt-2">
                {localStorage.getItem("token") ? (
                  <div className="flex items-end justify-end gap-6  ">
                    <UserProfile name={user.name} email={user.email} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center mt-2">
                    <Button
                      label={"Get start"}
                      icon={<RiContactsLine size={25} />}
                      path={"/create-an-account"}
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center justify-center space-y-10 py-5 p-6">
                {navLinkData.map((item, index) => (
                  <NavLink
                    key={index}
                    label={item.name}
                    path={item.path}
                    onClick={closeNav}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

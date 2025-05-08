import { useContext, useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { navLinkData } from "../../constants";
import noteContext from "../../context/noteContext";
import ThemeSwitcher from "../ThemeSwitcher";
import { UserProfile } from "../ui/avatar";
import { BtnPrimary } from "../ui/button";
import Logo from "../ui/logo";
import NavLink from "../ui/navLink";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open state
  const [bgColor, setBgColor] = useState("#111827"); // Background color

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeNav = () => setIsMenuOpen(false);
  const context = useContext(noteContext);
  const { user, getUserdetails } = context;
  // Scroll effect to change navbar color
  useEffect(() => {
    // get the login user details
    if (localStorage.getItem("token")) {
      getUserdetails();
    } else {
    }

    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBgColor("#1e293b"); // Change background color when scrolled down
      } else {
        setBgColor("#111827"); // Default background color at the top
      }
    };
    window.addEventListener("scroll", changeColor);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  return (
    <header
      className={`fixed left-0 top-0 w-full z-50  bg-white dark:bg-bgColor`}
      // style={{ backgroundColor: bgColor }}
    >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            onClick={toggleMenu} // Toggle menu on click
          >
            <span className="sr-only">Open main menu</span>
            <HiMiniBars3BottomRight className="h-8 w-8 "  aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinkData.map((item, index) => (
            <NavLink key={index} label={item.name} path={item.path} />
          ))}
        </div>
        <div className="hidden gap-3 lg:flex lg:flex-1 lg:justify-end">
          {!localStorage.getItem("token") ? null : <ThemeSwitcher />}
          {/* Button */}

          {localStorage.getItem("token") ? (
            // if the token was available then show the use name on the button

            <UserProfile name={user.name} email={user.email} />
          ) : (
            <BtnPrimary
              label={"Get started free"}
              icon={<RiContactsLine size={25} />}
              variant={"nav"}
              path={"/create-an-account"}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-bgColor">
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
                  <div className="flex items-center justify-between gap-6  ">
                   
                    <span className="ml-7">
                    <ThemeSwitcher />
                    </span>
                    <UserProfile name={user.name} email={user.email} />
                  </div>
                ) : (
                 <div className="flex items-center justify-center mt-2">
                   <BtnPrimary
                    label={"Get started free"}
                    icon={<RiContactsLine size={25} />}
                    variant={"nav"}
                    path={'/create-an-account'}
                    onClick={closeNav}
                  />
                 </div>
                )}
              </div> 
               <div className="flex flex-col items-center justify-center space-y-10 py-5 p-6">
               {navLinkData.map((item, index) => (
                  <NavLink key={index} label={item.name} path={item.path} onClick={closeNav}/>
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

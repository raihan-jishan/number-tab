import { SocialIcons } from "@/constants/social-icons";
import { AiOutlineNumber } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { footerDetailLinks, footerLinks } from "../../constants/index";
import { Button, buttonVariants } from "../ui/button";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex rounded-xl p-8  lg:items-start lg:gap-2 shadow-xl  ">
          <AiOutlineNumber size={59} className="text-black dark:text-gray-100"/>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                

                <p className="mt-4 text-black font-semibold dark:text-gray-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  non cupiditate quae nam molestias.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              {/* send message form */}
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="   p-2   sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter email address for get free home delivary."
                    className="bg-transparent dark:bg-gray-700   w-full p-4   outline-gray-400 dark:outline-gray-200 border-2 rounded-xl border-gray-500 text-white  "
                  />

                  <Button
                    className={buttonVariants({ className: "p-6 px-8  bg-gray-900 dark:bg-gray-50 text-white font-bold rounded-md text-[1rem] hover:opacity-90 hover:bg-gray-800 dark:text-black" })}
                  >
                    send
                  </Button>
                </div>
              </form>
            </div>
            {/* footer links */}
            {footerLinks.map((item, index) => {
              return (
                <div className="col-span-2 sm:col-span-1" key={index}>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {item.links.map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-black dark:text-gray-200 transition hover:opacity-75"
                          >
                            {" "}
                            {item.label}{" "}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {/* download apps links */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-semibold   text-gray-900">Get Our Apps</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Button
                    className={buttonVariants({
                      className: "p-8 px-12     rounded-lg text-black max-lg:px-20 bg-green-400 font-semibold hover:bg-green-400 hover:opacity-90",
                    })}
                  >
                    <FaGooglePlay size={30 } /> Play Store
                  </Button>
                </li>

                <li>
                  <Button
                    className={buttonVariants({
                      className: "p-8 px-12     rounded-lg text-black max-lg:px-20 bg-green-400 font-semibold hover:bg-green-400 hover:opacity-90",
                      
                    })}
                  >
                    <IoLogoAppleAppstore size={30} /> IOS Store
                  </Button>
                </li>
              </ul>
            </div>
            {/* social links  */}
            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              {SocialIcons.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{item.name}</span>

                      {item.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            {/* copy write  */}
            <p className="  text-gray-200 font-semibold text-lg  ">
              &copy; {new Date().getFullYear()} <span className="underline cursor-pointer"> number-tab </span> All rights reserved.
            </p>
            {/* footer bottom links  */}
            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              {footerDetailLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      {item.name}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

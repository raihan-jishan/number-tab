import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { PiSidebarSimpleDuotone } from 'react-icons/pi';
import { NavLink } from "react-router-dom";
import { dashboardSidebarLinks } from "../../constants";
;
const Dashboard_sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      {/* side curtain button */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="z-50 fixed top-2 left-2 inline-flex items-center p-2   text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {sidebarOpen ?  <PiSidebarSimpleDuotone size={30} /> :<HiBars3BottomLeft size={30}  />}
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 dark:bg-bgColor ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-950/5 ">
          {/* side bar options */}
          <ul class="space-y-2 mt-5 font-medium">
            {dashboardSidebarLinks.map((item, index) => {
              return (
                <li className="py-1 max-lg:mt-14">
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                      `flex font-medium text-lg items-center p-[0.7rem]   group${
                        isActive
                          ? `bg-gray-300 rounded-2xl dark:bg-green-400  dark:rounded-lg font-semibold dark:text-black dark:hover:bg-green-400/80`
                          : `text-gray-900 hover:dark:bg-gray-700 hover:bg-gray-100 ${
                              item.tag === "add-account"
                                ? "dark:bg-gray-300 mt-2 hover:scale-95 font-Raleway text-black font-semibold rounded-full"
                                : " dark:text-gray-400"
                            } `
                      }transition-all duration-300 ease-in-out`
                    }
                  >
                    <span>{item.icon} </span>
                    <span class="ms-3">{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* overlay on mobile  */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Dashboard_sidebar;

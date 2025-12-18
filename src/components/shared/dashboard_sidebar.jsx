import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { PiSidebarSimpleDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { dashboardSidebarLinks } from "../../constants";
const Dashboard_sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      {/* Sidebar toggle button */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="z-50 fixed top-4 left-4 inline-flex items-center p-2 text-gray-600 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {sidebarOpen ? (
          <PiSidebarSimpleDuotone size={30} />
        ) : (
          <HiBars3BottomLeft size={30} />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-Primary dark:bg-bgColor transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-4 py-6 overflow-y-auto bg-Primary   shadow-lg rounded-r-2xl">
          <ul className="space-y-4 mt-5 font-medium">
            {dashboardSidebarLinks.map((item, index) => {
              return (
                <li key={index} className="py-2">
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-lg   ${
                        isActive
                          ? "bg-green-100 text-black font-semibold   "
                          : "text-gray-100 bg-transparent  transition-all hover:text-white hover:bg-gray-100/10  dark:text-gray-300  "
                      }`
                    }
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className=" text-lg">{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Overlay on mobile */}
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

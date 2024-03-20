import { NavLink } from "react-router-dom";
const NavLits = ({ data, closeNavbar }) => {
  return (
    <div>
      <li>
        <NavLink
          to={data.path}
          className={(navInfo) =>
            navInfo.isActive
              ? "inline-flex items-center py-2 border-b-2 rounded-lg   border-gray-950 dark:border-gray-200 leading-5 focus:outline-none focus:border-gray-950 dark:focus:border-gray-400  duration-150 ease-in-out mt-5  dark:text-gray-200  px-3  md:p-0 text-xl font-semibold hover:scale-95 transition-all   gap-1"
              : "mt-5  dark:text-gray-200 py-2 px-3  md:p-0 text-xl font-semibold hover:scale-95 transition-all flex gap-1"
          }
          onClick={closeNavbar}
        >
          {data.icon} {data.name}
        </NavLink>
      </li>
    </div>
  );
};

export default NavLits;

import { Link } from "react-router-dom";

const NavLink = ({ label, path, icon, onClick }) => {
  const linkStyle =
    "text-base font-semibold flex items-center gap-1 capitalize text-black dark:text-white hover:text-gray-600   border-b-2 border-b-transparent dark:hover:text-gray-500 transition-all hover:font-extrabold hover:border-b-2 hover:border-black dark:hover:border-green-400";

  const isInternal = path === "contact" || path === "#";

  return (
    <div>
      {isInternal ? (
        <Link to={`/${path}`} className={linkStyle} onClick={onClick}>
          {icon} {label}
        </Link>
      ) : (
        <a href={`/#${path}`} className={linkStyle}>
          {icon} {label}
        </a>
      )}
    </div>
  );
};

export default NavLink;

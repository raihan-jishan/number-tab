import { Link } from "react-router-dom";

const NavLink = ({ label, path, icon, onClick }) => {
  const linkStyle =
    "text-base font-semibold flex items-center gap-1 capitalize border-b-2 border-b-transparent hover:border-b-green-500 transition-all hover:text-gray-400";

  const isInternal = path === "contact" || path === "#";

  return (
    <div className="">
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

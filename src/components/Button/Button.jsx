import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ className, name, icon, path }) => {
  return (
    <Link
      to={path}
      className={`bg-gray-950 text-gray-50 inline-flex items-center justify-center px-5 py-3 mr-3  font-medium text-center   rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 text-lg hover:bg-gray-950 hover:text-gray-50 hover:scale-95 transition-all hover:dark:bg-gray-800 ${className}`}
    >
      {name} {icon}
    </Link>
  );
};
export const AddButton = ({
  className,
  name,
  icon,
  fontSize,
  fontWeight,
  bg,
  rounded,
  width,
  onClick,
}) => {
  return (
    <button
      className={`p-2 text-center flex
    items-center justify-center px-6 font-${fontWeight}  ${bg} hover:scale-95 transition-all  text-${fontSize} rounded-${rounded} ${className} flex gap-3 w-${width}  `}
      onClick={onClick}
    >
      {icon} {name}
    </button>
  );
};

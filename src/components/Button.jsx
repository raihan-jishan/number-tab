import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  className,
  name,
  icon,
  path,
  roundedMedium,
  roundedFull,
  fontBold,
  fontMedium,
}) => {
  return (
    <Link
      to={path}
      className={`bg-gray-950 text-gray-50 inline-flex items-center justify-center px-5 py-3 mr-3    text-center   bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 text-lg  hover:scale-95 transition-all ease-linear ${
        roundedMedium
          ? "rounded-lg"
          : roundedFull
          ? "rounded-full"
          : "rounded-md"
      }  ${className} ${
        fontMedium ? "font-semibold" : fontBold ? "font-bold" : "font-medium"
      }`}
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
  roundedMedium,
  roundedFull, 
  width,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex w-full items-center justify-center px-5 py-2 mr-3  bg-black dark:bg-white  dark:text-black text-white  text-center   ${bg} focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 text-lg  hover:scale-95 transition-all ease-linear ${
        roundedMedium ? "rounded-md" :  roundedFull ? "rounded-full" : "rounded-lg"
      }   ${fontSize} ${fontWeight}  `}
    >
      {name} {icon}
    </button>
  );
};

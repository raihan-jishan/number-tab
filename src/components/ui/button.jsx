import { button } from "framer-motion/client";
import { Link } from "react-router-dom";
export const Button = ({
  path,
  label,
  icon,
  varient,
  image,
  mobileCustomPX,
  wFull
}) => {
  const primary =
    `bg-Secondary hover:bg-Secondary/95 p-4 px-5 rounded-full capitalize ${wFull?'w-full':''}  last:bg-gray-200   last:hover:bg-gray-300`;
  const secondary = "bg-Tertiary/90 hover:bg-Tertiary/95 p-3 px-4 rounded-full";
  const authenticate =
    "bg-Tertiary/5 hover:bg-Tertiary/10 text-white p-3 px-4 rounded-full";
  const authenticated = `bg-Secondary hover:bg-Secondary/95 p-3 px-24  ${mobileCustomPX} rounded-full `;

  return (
    <Link
      to={path ? path : "/"}
      className={` 
        ${
          varient === "primary"
            ? primary
            : varient === "secondary"
            ? secondary
            : varient === "authenticate"
            ? authenticate
            : varient === "authenticated"
            ? authenticated
            : ""
        }
      `}
    >
      <span
        className={`  font-semibold gap-2 flex items-center justify-center ${
          varient === "authenticate" ? "text-white" : "text-black"
        }`}
      >
        {varient === "authenticate" ? (
          <>
            {image ? (
              <img
                src={image}
                alt="icon was not found!"
                className="w-[10%]  "
              />
            ) : null}
          </>
        ) : (
          <>{icon}</>
        )}
        {label}
      </span>
    </Link>
  );
};

export const AuthBtn = ({ label, icon, onClick }) => {
  return (
    <button
      className={`bg-Secondary hover:bg-Secondary/95 p-3  px-20 max-lg:px-12 
     rounded-full`}
      onClick={onClick}
    >
      {" "}
      <span className="text-black font-bold flex  gap-1 items-center justify-center ">
        {icon}
        {label}
      </span>
    </button>
  );
};

export const AddBtn = ({ label }) => {
  return (
    <button className="text-black font-semibold rounded-full p-[0.6rem] px-5 bg-Secondary w-[95%] capitalize hover:bg-Secondary/85  transition-all ">
      {label}
    </button>
  );
};

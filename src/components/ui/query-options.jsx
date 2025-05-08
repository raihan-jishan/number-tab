import { Link } from "react-router-dom";

export const TagQuery = ({ icon, label, handelClick, varient, path }) => {
  const inlineStyle = `cursor-pointer transition-all text-[1.2rem] flex items-center    dark:text-black hover:scale-95  border border-black   capitalize  ${
    varient === "grid-options"
      ? "p-2 px-5  rounded-3xl  gap-3 bg-gray-100 hover:bg-gray-200  "
      : "p-1 px-2 rounded-full gap-1 dark:bg-green-50  "
  }`;
  return (
    <>
      {label === "Home" ? (
        <Link to={"/"} className={inlineStyle}>
          {icon} {label}
        </Link>
      ) : (
        <h5 className={inlineStyle} onClick={handelClick}>
          {icon} {label === "back" ? <Link to={"/"}> Back</Link> : label}
        </h5>
      )}
    </>
  );
};

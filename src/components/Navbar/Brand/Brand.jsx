import { GoHash } from "react-icons/go";
import { Link } from "react-router-dom";
const Brand = () => {
  return (
    <div>
      <Link
        to="/"
        className="flex items-center space-x-0 rtl:space-x-reverse text-gray-700 dark:text-gray-300 "
      >
        <GoHash size={35} />
        <span className="self-center text-[1.3rem] font-bold whitespace-nowrap ">
          NumberTab
        </span>
      </Link>
    </div>
  );
};

export default Brand;

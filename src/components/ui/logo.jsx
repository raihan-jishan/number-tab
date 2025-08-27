import { Link } from "react-router-dom";
import { LogoData } from "../../constants/data";
const Logo = () => {
  return (
    <Link to={"/"} className="-m-1.5 p-1.5 flex   ">
      {LogoData.map((item, index) => (
        <div key={index} className="flex items-center gap-0 ">
          {item.icon}
          <span className=" text-xl font-bold  font-Comfortaa dark:text-white text-gray-900">
            {item.name}
          </span>
        </div>
      ))}
    </Link>
  );
};

export default Logo;

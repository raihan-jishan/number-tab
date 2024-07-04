import { Link } from "react-router-dom";
const FeaturesCard = ({ name, icon,path }) => {
  return (
    <Link
      to={path}
      className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
    >
      {icon} {name}
    </Link>
  );
};

export default FeaturesCard;

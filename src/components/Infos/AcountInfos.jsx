import { Link } from "react-router-dom";

const AcountInfos = ({ inform, path, goFor }) => {
  return (
    <div className="flex items-center justify-center  mt-5 max-lg:flex-col">
      <p
        className="
  text-lg text-gray-400 hover:underline "
      >
        {inform}
      </p>
      <Link
        to={path}
        className="text-2xl darkp;text-gray-200 hover:underline rounded-full"
      >
        {goFor}
      </Link>
    </div>
  );
};

export default AcountInfos;

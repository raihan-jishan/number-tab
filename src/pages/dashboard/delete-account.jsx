import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="">
      <h1 className="text-2xl mt-5 m-2 font-semibold">Danger</h1>
      <div className=" m-3">
        <button
          onClick={handleClick}
          className="bg-red-500 rounded-sm p-2 text-white"
        >
          Delete Account
        </button>
      </div>
      <div className="m-2">
        <span className="text-gray-400">that could not be recover!</span>
      </div>
    </div>
  );
};

export default DeleteAccount;

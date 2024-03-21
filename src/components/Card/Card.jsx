import { CiUser } from "react-icons/ci";
import { GoHash } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
const Card = ({ name, number, type, deleteNote, data }) => {
  return (
    <div>
      <div className="mt-10 max-w-sm rounded-2xl overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1517061493161-6f312d1c36d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3MlMjBwYXBlciUyMGJsdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 flex gap-2">
            <CiUser size={30} /> {name}
          </div>
          <p className="text-gray-700 dark:text-gray-200 flex items-center justify-between text-2xl gap-2">
            {" "}
            <span className="flex gap-2 ">
              <LuPhone size={30} />
              {number}{" "}
            </span>{" "}
   
          </p>
         <div className="flex items-end justify-end mt-3">
         <button className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-95">
              <RiDeleteBin6Line
                size={35}
                onClick={() => {
                  deleteNote(data._id);
                }}
              />{" "}
            </button>
         </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className=" bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-2 gap-3 flex ">
            <span className="flex">
              <GoHash size={28} /> {type}
            </span>
            <div className=""></div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

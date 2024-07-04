import { AiOutlineDelete } from "react-icons/ai";

const Card = ({ name, number, data,  type, deleteNote }) => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1517061493161-6f312d1c36d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3MlMjBwYXBlciUyMGJsdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="paper image was not found!"
        />
        <div class="px-6 py-4">
          <div class="font-semibold text-[1.7rem] max-lg:text-[1.8rem] text-black dark:text-gray-300  capitalize mb-2 font-Comfortaa">
            {name}
          </div>
          <p class="mt-4 text-black dark:text-gray-200 text-[1.4rem] max-lg:text-[1.9rem] ">
            {number}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 flex items-center justify-between">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2 mb-2  ">
            {type}
          </span>
          <span class="inline-block dark:bg-gray-900    rounded-full px-3 py-1 text-xl font-semibold dark:text-white mr-2 mb-2  ">
            <AiOutlineDelete
            className="cursor-pointer"
              size={35}
              onClick={() => {
                deleteNote(data._id);
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

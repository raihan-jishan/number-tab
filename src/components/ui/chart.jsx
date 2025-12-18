import { PlusCircle } from "lucide-react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export const Chart = ({ value, icon, label }) => {
  return (
    <div className="  p-6 rounded-xl shadow-md w-full max-w-sm">
      <div className="flex  items-center justify-center  ">{icon}</div>
      <p className="text-center font-OpenSans mt-4 text-3xl text-white">
        {label}
        <span className="font-semibold  font-Manrope text-3xl">{value}</span>
      </p>
    </div>
  );
};
export const AddContact = () => {
  return (
    <Link
      to={"/add-contact"}
      className="bg-Secondary/95 transition-all hover:scale-[0.99] p-6 rounded-xl shadow-md w-full max-w-sm cursor-pointer"
    >
      <div className="flex  items-center justify-center  ">
        <PlusCircle size={60} className="text-black" />
      </div>
      <p className="text-center font-Manrope   font-semibold mt-4 text-3xl text-black">
        Add
      </p>
    </Link>
  );
};

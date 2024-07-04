import React from "react";
import { GoServer } from "react-icons/go";
import { LuSaveAll, LuStickyNote } from "react-icons/lu";
import { MdOutlineLockPerson } from "react-icons/md";
import FeaturesCard from "./FeaturesCard";
const Features = () => {
  return (
    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 -mt-20  max-lg:mt-5">
      <span className="font-semibold text-gray-400 uppercase text-3xl">FEATURED IN</span>
      <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
        <FeaturesCard name={"24/7"} icon={<GoServer size={40} />} path={"/"} />

        <FeaturesCard
          name={"limitless"}
          icon={<LuSaveAll size={40} />}
          path={"/"}
        />
        <FeaturesCard
          name={"secure"}
          icon={<MdOutlineLockPerson size={40} />}
          path={"/"}
        />
        <FeaturesCard
          name={"simple"}
          icon={<LuStickyNote size={40} />}
          path={"/"}
        />
      </div>
    </div>
  );
};

export default Features;

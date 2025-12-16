import React, { useContext, useEffect } from "react";
import Dashboard_Layout from "../../components/dash-layout";
import noteContext from "../../context/noteContext"; 
import { formattedDate, getTimeGreeting } from "../../utils/utils";
import OverView from "./over-view";
const Dashboard = () => {
  const context = useContext(noteContext);

  const { user, getUserdetails } = context;

  // useEffct hook
  useEffect(() => {
    getUserdetails();
  }, []);

  return (
    <div>
      <Dashboard_Layout>
        {/* wellcome user text */}
        <div className="flex items-center justify-between max-lg:flex-col">
          {/* wellcome user text */}
          <h1 className="relative inline-block px-6 max-lg:px-4  py-4   dark:bg-[#182126] bg-gray-50 dark:rounded-[3rem_1rem_3rem_1.5rem] dark:shadow-xl dark:ring-2 dark:ring-green-500/30     ">
            <span className="font-Comfortaa font-light text-2xl dark:drop-shadow-sm dark:text-white text-black ">
              Hi{" "}
            </span>
            <span className="text-3xl font-bold tracking-wide dark:text-green-300 text-black drop-shadow-md  ">
              {user.name}
            </span>
            <span className="font-semibold text-muted-foreground font-Comfortaa ml-2 text-2xl  p-2 text-black dark:text-gray-300  ">
              {" "}
              {getTimeGreeting()}
            </span>
          </h1>
          {/* right side content */}
          <div className="flex items-center gap-5 ">
            <h1 className="text-black dark:text-gray-400  tracking-wide text-lg  max-lg:dark:bg-transparent max-lg:dark:border-0 max-lg:border-0 max-lg:font-Raleway border-2 dark:bg-gray-800 border-spacing-x-64  p-4  rounded-full  font-semibold">
              {formattedDate}
            </h1>
            
          </div>
        </div>
        {/* overview part */}
        <div className="mt-10  ">
          <OverView />
        </div>
      </Dashboard_Layout>
    </div>
  );
};

export default Dashboard;

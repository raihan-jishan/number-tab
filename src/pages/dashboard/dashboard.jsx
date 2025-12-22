import React, { useContext, useEffect } from "react";
import Dashboard_Layout from "../../components/dash-layout";
import noteContext from "../../context/noteContext";
import { getTimeGreeting, formattedDate } from "../../utils/utils";
import OverView from "./over-view";
import { useLocation } from "react-router-dom";
import { SearchBar } from "../../components/ui/search";
import { FilePlusIcon } from "lucide-react";

const Dashboard = () => {
  const location = useLocation();
  const context = useContext(noteContext);

  const { user, getUserdetails } = context;

  // useEffect hook to fetch user details on mount
  useEffect(() => {
    getUserdetails();
  }, []);

  return (
    <div className="min-h-screen  ">
      <Dashboard_Layout>
        <div className="flex max-lg:items-center max-lg:justify-center  max-lg:p-10 max-lg:-mt-14">
          <h1 className="capitalize text-3xl font-semibold  ">
            {location.pathname.slice(1)}
          </h1>

        
        </div>

        <div className="mt-10">
          <OverView />
        </div>
      </Dashboard_Layout>
    </div>
  );
};

export default Dashboard;

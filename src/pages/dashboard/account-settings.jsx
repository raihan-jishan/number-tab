import { Mail } from "lucide-react";
import { useContext, useEffect } from "react";
import OtherAccountSvg from "../../assets/undraw_creative-flow_t3kz.svg";
import Dashboard_Layout from "../../components/dash-layout";
import { DashHero } from "../../components/Hero";
import { DashAvatar } from "../../components/ui/avatar";
import { BtnPrimary } from "../../components/ui/button";

import { DashHeading } from "../../components/ui/heading";
import noteContext from "../../context/noteContext";
const AaccountSettings = () => {
  const context = useContext(noteContext);

  const { user, getUserdetails } = context;

  // useEffct hook
  useEffect(() => {
    getUserdetails();
  }, []);
  return (
    <div>
      <Dashboard_Layout>
       <div className="max-lg:mt-2 max-lg:px-8">
       <DashHeading label={"Your account settings"} />
       </div>
        <div className="mt-12 flex items-center  gap-10 max-lg:flex-col">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center gap-6">
            <DashAvatar />
            <h1 className="text-3xl    font-extrabold  text-black dark:text-gray-200">
              {user.name}
            </h1>
              </div>{" "}
          </div>
          <div className="flex items-center gap-3">
            <Mail size={30} className="text-green-400" />
            <h1 className="text-3xl max-lg:text-xl font-extrabold  text-black dark:text-gray-300 font-Comfortaa">
              {user.email}
            </h1>
          </div>
        </div>

        <DashHero label={"Other account"} image={OtherAccountSvg} btnText={'Add onother account'}/>

        <DashHeading label={'DANGER 🔴 '}/>

        <div className="flex items-center justify-center">
          <BtnPrimary 
          label={'Logout'}
          variant={'logout'}
          onClick={() => {
            localStorage.removeItem('token')
          }}
          />
        </div>
      </Dashboard_Layout>
    </div>
  );
};

export default AaccountSettings;

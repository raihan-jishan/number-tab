import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Get_start from "../assets/get_start.gif";
import { BtnPrimary } from "./ui/button";
const GetStart = () => {
  return (
    <section className="bg-gray-100 dark:bg-bgColor  ">
      <div className="grid max-lg:flex-col-reverse max-lg:flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl   text-gray-700 dark:text-gray-400">
            Don't miss to save , loved contacts
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl mt-2  ">
            save your loved contacts effortlessly with our contact-saving web
            application. Keep your important connections just a click away!"
          </p>
          <div className="flex  gap-5 max-lg:flex-col">
            <BtnPrimary
              label="try for free"
              variant="start-btn"
              icon={<AiOutlineAppstoreAdd size={25} />}
            />
            <BtnPrimary label="explore more" variant="start-btn" />
          </div>
        </div>
        <div className="    lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={Get_start}
            alt="mockup"
            className="rounded-tl-[50%]
          rounded-br-[50%]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStart;

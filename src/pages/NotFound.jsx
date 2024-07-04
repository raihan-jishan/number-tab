import { MdOutlineBook } from "react-icons/md";
import { useLocation } from "react-router-dom";
import NotFoundImage from "../assets/notfound.svg";
import { Button } from "../utils";
const NotFound = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <section className="bg-white dark:bg-gray-950 mt-16 max-lg:mt-[4.5rem] p-4">
      {/* for mobile devices */}
      <div className="hidden max-lg:flex max-lg:w-4/5  max-lg:m-auto">
        <img src={NotFoundImage} alt="image not found!" />
      </div>
      {/* close */}
      <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray-100 max-lg:text-3xl max-lg:text-center">
            {pathname}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            is not exist in this webpage. Please browse onother page..
          </p>
          <div className="max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col">
            <Button
              name={"Add an important number"}
              path={"/addnumbers"}
              icon={
                <MdOutlineBook
                  size={35}
                  className="text-gray-50 dark:text-gray-400"
                />
              }
            />
            <Button
              name={"home"}
              path={"/"}
              className={
                "border-2 border-gray-600 max-lg:w-full bg-transparent max-lg:mt-2 dark:text-gray-300 text-gray-950 font-bold"
              }
            />
          </div>
        </div>
        <div className="max-lg:hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={NotFoundImage} alt="image not found!" />
        </div>
      </div>
    </section>
  );
};

export default NotFound; 

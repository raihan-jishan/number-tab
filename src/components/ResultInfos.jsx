import { TiContacts } from "react-icons/ti";
import { BtnPrimary } from "./ui/button";
const ResultInfos = ({
  Image,
  name,
  buttonText1,
  buttonText2,
  buttonPath1,
  buttonPath2,
  firstIcon,
  secondIcon
}) => {
  return (
    <main className="bg-white dark:bg-bgColor">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse mt-16">
        {/* Left: Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl mb-4 text-4xl  leading-tight md:text-5xl xl:text-[3.5rem] font-Raleway dark:text-gray-200 font-semibold  tracking-wide max-lg:mt-2">
            {name}
          </h1>

          <div className="flex  gap-3 flex-wrap mt-5">
            <BtnPrimary
              label={buttonText1}
              variant={"start-btn"}
              iconLeft={firstIcon}
              path={buttonPath1}
            />
            <BtnPrimary
              label={buttonText2}
              variant={"start-btn"}
              iconLeft={secondIcon}
              path={buttonPath2}
            />
          </div>
        </div>

        {/* Right: Hero Animation Video */}
        <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center relative">
          <img
            src={Image}
            className="w-[80%] max-lg:w-[90%]   rounded-2xl   object-cover  rounded-tl-[50%]
         rounded-br-[50%] dark:mix-blend-hard-light "
          />
        </div>
      </div>
    </main>
  );
};

export default ResultInfos;

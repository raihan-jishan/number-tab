import { FiRss, FiSave } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { BtnPrimary } from "./ui/button";
import HeroIllustration from "../assets/heroIllustration.svg";
export const Hero = () => {
  return (
    <main className="bg-white dark:bg-bgColor">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse mt-16">
        {/* Left: Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl  leading-tight md:text-5xl xl:text-6xl dark:text-gray-200 font-extrabold font-Raleway tracking-wide  max-lg:mt-4   ">
            Next-Gen Contact Storage, Simplified
          </h1>
          <p className="max-w-2xl mb-6 text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300 font-Raleway">
            Save, manage, and access your contacts—anytime, anywhere!
          </p>

          <div className="flex max-lg:flex max-lg:items-center max-lg:justify-center gap-3 flex-wrap">
            {localStorage.getItem("token") ? (
              <BtnPrimary
                label={"Add new contact"}
                variant={"hero-btn"}
                iconLeft={<TiContacts size={25} />}
                path={"/addnumbers"}
              />
            ) : (
              <BtnPrimary
                label={"Start Saving Now"}
                variant={"hero-btn"}
                iconLeft={<FiSave size={25} />}
              />
            )}

            {localStorage.getItem("token") ? (
              <BtnPrimary
                label={"View saved Contacts"}
                variant={"hero-btn"}
                iconLeft={<RiContactsLine size={25} />}
                path={"/saved-numbers"}
              />
            ) : (
              <BtnPrimary
                label={"Discover Now"}
                variant={"hero-btn"}
                iconLeft={<FiRss size={25} />}
                path={"/saved-numbers"}
              />
            )}
          </div>
        </div>

        {/* Right: Hero Animation Video */}
        <div className="lg:mt-0 mt-5 lg:col-span-5 lg:flex justify-center items-center relative">
          <img
            src={HeroIllustration}
            width="600"
            height="300"
            alt="mockup"
            className="w-[90%]"
          />
        </div>
      </div>
    </main>
  );
};

export const DashHero = ({ label, btnText, image, path }) => {
  return (
    <main className="bg-white dark:bg-bgColor">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse mt-16">
        {/* Left: Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl mb-4 text-4xl  leading-tight md:text-5xl xl:text-6xl dark:text-gray-200 font-extrabold font-Raleway tracking-wide max-lg:mt-5 max-lg:text-[2.3rem]">
            {label}
          </h1>

          <div className="flex  items-center justify-center gap-3 flex-wrap">
            <BtnPrimary
              label={btnText}
              variant={"start-btn"}
              iconLeft={<TiContacts size={25} />}
              path={path ? path : "/saved-numbers"}
            />
          </div>
        </div>

        {/* Right: Hero Animation Video */}
        <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center relative">
          <img
            src={HeroIllustration}
            className="w-[60%]   rounded-2xl   object-cover  rounded-tl-[50%]
      rounded-br-[50%] dark:mix-blend-hard-light max-lg:w-full "
          />
        </div>
      </div>
    </main>
  );
};

import { TiContacts } from "react-icons/ti";
import HeroIllustration from "../assets/hero-image.png";
import { HeroContent } from "./ui/heading";
import { Button } from "../components/ui/button";
export const Hero = () => {
  return (
    <main className="relative  bg-Primary ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse mt-5 max-lg:mt-16">
        {/* Left: Text Content */}
        <HeroContent />

        {/* Right: Hero Animation Video */}
        <div className="lg:mt-0   lg:col-span-5 lg:flex justify-center items-center relative  ">
          <img
            src={HeroIllustration}
            width="600"
            height="300"
            alt="mockup"
            className="w-[90%] "
          />
        </div>
      </div>
    </main>
  );
};

export const DashHero = ({ label, path }) => {
  return (
    <main className=" bg-Primary">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse mt-16">
        {/* Left: Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl mb-4 text-4xl  leading-tight md:text-5xl xl:text-6xl text-gray-200 font-extrabold font-Raleway tracking-wide max-lg:mt-5 max-lg:text-[2.3rem]">
            {label}
          </h1>

          <div className="flex  p-2 gap-3 flex-wrap text-white">
            <Button
              label={"Add Contact"}
              varient={"primary"}
              iconLeft={<TiContacts size={25} />}
              path={path ? path : "/saved-numbers"}
            />
          </div>
        </div>

        {/* Right: Hero Animation Video */}
        <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center relative ">
          <img
            src={HeroIllustration}
            className="w-[60%]   rounded-2xl   object-cover  rounded-tl-[50%]
      rounded-br-[50%] mix-blend-hard-light max-lg:w-full "
          />
        </div>
      </div>
    </main>
  );
};

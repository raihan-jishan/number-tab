import { TiContacts } from "react-icons/ti";
import { Button } from "./ui/button";
// import { BtnPrimary } from "./ui/button";
const ResultInfos = ({ Image, name, btnText }) => {
  return (
    <main className="relative  bg-Primary -mt-16">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse mt-16">
        {/* Left: Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-xl mb-4 text-4xl  md:text-5xl xl:text-6xl text-gray-300 font-medium capitalize    max-lg:mt-4  font-Lato -mt-20 ">
            {name}
          </h1>

          <div className="flex max-lg:flex max-lg:items-center max-lg:justify-center gap-2 flex-wrap mt-8">
            {btnText.map((item) => {
              return (
                <Button
                  label={item.text}
                  icon={item.icon}
                  varient={"primary"}
                  path={item.path}
                />
              );
            })}
          </div>
        </div>

        {/* Right: Hero Animation Video */}
        <div className="lg:mt-0   lg:col-span-5 lg:flex justify-center items-center relative  ">
          <img
            src={Image}
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

export default ResultInfos;

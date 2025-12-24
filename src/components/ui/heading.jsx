import { Button } from "./button";
export const Heading = ({
  label,
  textCenter,
  fontComfortaa, 
  fontSizeMedium,
}) => {
  return (
    <h1
      className={`${textCenter ? "text-center" : ""}  ${
        fontSizeMedium ? "text-2xl" : "text-3xl"
      } font-extrabold  text-gray-300   m-5 ${
        fontComfortaa ? "font-Comfortaa" : ""
      } relative after:content-['']  after:absolute after:left-1/2 after:bottom-[-8px] after:w-16 after:h-[4px] after:bg-green-500 after:transform after:-translate-x-1/2`}
    >
      {label}
    </h1>
  );
};
 
 

export const HeroContent = ({}) => {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-xl mb-4 text-4xl  leading-tight md:text-5xl xl:text-6xl text-gray-300 font-extrabold  tracking-tight  max-lg:mt-4 font-OpenSans ">
        Easy & <span className="font-Manrope ">Modern</span>{" "}
        <span className="font-Comfortaa text-green-400 tracking-tight">
          Contact
        </span>{" "}
        Storage
      </h1>
      <p className="max-w-xl mb-6  lg:mb-8 md:text-lg lg:text-[1rem] text-gray-300 font-Comfortaa  w-[80%]">
        Save, manage, and access all your contacts effortlessly with a clean and
        modern interface.
      </p>

      <div className="flex  gap-2 flex-wrap  ">
        {localStorage.getItem("token") ? (
          <> 
            <Button label={"Add new contact"} varient={"primary"} path={'/add-contact'}/>
            <Button label={"All contacts"} varient={"primary"} path={'/saved-contacts'}/>
          </>
        ) : (
          <>
            <Button label={"Start Saving"} varient={"primary"} />
            <Button label={"Discover"} varient={"primary"} />
          </>
        )}
      </div>
    </div>
  );
};

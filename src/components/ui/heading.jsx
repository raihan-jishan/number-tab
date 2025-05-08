export const Heading = ({
  title,
  widthMedium,
  textLarge,
  textMedium,
  textSmall,
  description,
  paragraph,
  MobilewidthFull,
  widthFull,
  widthFullBigger,
  showAll,
}) => {
  return (
    <div className={`text-center  `}>
      <h1
        className={`relative   inline-block ${textLarge ? "text-4xl" : ""} ${
          textMedium ? "text-3xl" : ""
        } ${
          textSmall ? "text-xl" : ""
        } font-bold text-center capitalize tracking-wide`}
      >
        <span className="   border-b-2 border-black dark:border-green-200 text-gray-700 dark:text-gray-500">
          {title}
        </span>
      </h1>
      {/* main title */}
      <div className="flex items-center justify-center">
        <h2
          className={`${
            showAll ? "text-gray-400" : "  dark:text-gray-400 text-gray-900"
          } font-semibold font-Raleway leading-[2.7rem] 
            relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-16 after:h-[4px] after:bg-green-500 after:transform after:-translate-x-1/2
            ${widthMedium ? "w-[30%]" : "w-1/4"} ${
            widthFull
              ? "w-[35%]"
              : widthFullBigger
              ? "w-[70%] max-lg:w-[90%]"
              : "w-1/4"
          } mt-2 text-[2.5rem] leading-[2.7rem] ${
            MobilewidthFull ? "max-lg:w-[100%]" : "max-lg:w-[70%]"
          } max-lg:p-4  max-lg:text-gray-800 `}
        >
          {description}
        </h2>
      </div>
      <p
        className={`${
          showAll ? "text-gray-500 font-semibold mt-4" : "text-gray-600"
        } mt-2  w-1/3 m-auto max-lg:w-full max-lg:p-3 max-lg:mt-2`}
      >
        {paragraph}
      </p>
    </div>
  );
};

// dashboard heading
export const DashHeading = ({
  label,
  textCenterize,
  fontDefault,
  textLeftMedium,
}) => {
  return (
    <div>
      <h1
        className={` ${
          textCenterize ? "ml-20" : textLeftMedium ? "ml-12" : ""
        } ${
          fontDefault ? " tracking-wide font-extrabold" : "font-Comfortaa "
        } text-black dark:text-gray-300 font-semibold text-3xl  tracking-wide `}
      >
        {label}
      </h1>
    </div>
  );
};

import { useState } from "react";
import { FaSortAmountDown, FaSortAmountUpAlt } from "react-icons/fa";
import { BtnPrimary } from "../components/ui/button";
import { Heading } from "../components/ui/heading";
import { serviceCardData } from "../constants/data";
import Section from "../global/wrapper";
import { ServiceCard } from "./ui/card";

const Feature = () => {
  const [showAll, setShowAll] = useState(false);

  // Slice the array to show only the first 3 items initially
  const displayedData = showAll ? serviceCardData : serviceCardData.slice(0, 6);

  return (
    <Section
      className={`m-0 transition-all duration-500 ${
        showAll ? "bg-gray-900" : "dark:bg-bgColor bg-white"
      } `}
      id={"features"}
    >
      <Heading
        textSmall
        borderSide
        description={"Effortless Contact Management Sync"}
        paragraph={
          "Automatically sync and organize your contacts across all devices, keeping them updated and accessible with ease."
        }
        MobilewidthFull
        widthFull
        showAll={showAll}
      />
      {/* Cards Display */}
      <div className="grid grid-cols-3 gap-5 m-5 p-5 max-lg:grid-cols-1 max-lg:m-2 max-lg:p-2">
        {displayedData.map((item, index) => (
          <ServiceCard
            key={index}
            Icon={item.imageUrl}
            label={item.title}
            status={item.status}
            percentage={item.percentage}
            description={item.description}
            className={`transition-all duration-500`}
            showAll={showAll}
          />
        ))}

     
      </div>
    </Section>
  );
};

export default Feature;

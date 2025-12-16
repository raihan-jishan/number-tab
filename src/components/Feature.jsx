import { Heading } from "../components/ui/heading";
import { features } from "../constants/data";
import Section from "../global/wrapper";
import { FeatureCard } from "./ui/card";

const Feature = () => {
  return (
    <Section
      className={"-mt-6 transition-all duration-500   bg-Primary "}
      id={"features"}
    >
      <Heading label={"Features"} textCenter fontComfortaa/>
      <div className="grid grid-cols-3 gap-5 m-5 p-5 max-lg:grid-cols-1 max-lg:m-2 max-lg:p-2 -mt-5">
        {features.map((item) =>{
          return (
            <FeatureCard  label={item.label} icon={item.icon} description={item.description}   />
          )
        })}
      </div>
    </Section>
  );
};

export default Feature;

import { motion } from "framer-motion";
import { Heading } from "./ui/heading";
import { WorkCard } from "./ui/card";
import { worksInfo } from "../constants/data";
const HowItWorks = () => {
  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 p-10"
    >
      <Heading label={"How it works"} textCenter fontComfortaa />

      {/* Grid of WorkCards with animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Slight fade-in for the whole grid
      >
        {worksInfo.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1, // Stagger effect for each card
              }}
              className={`${
                index % 3 !== 2 ? "border-r-2" : ""
              } ${index >= worksInfo.length - 3 ? "" : "border-b-2"} border-gray-300`}
            >
              <WorkCard
                point={item.id}
                image={item.image}
                label={item.label}
                description={item.description}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;

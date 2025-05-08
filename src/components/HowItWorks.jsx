import { motion } from "framer-motion";
import React from "react";
import { useIsMobile } from "../utils/useIsMobile";
import Carousel from "./ui/carousel";
import { Heading } from "./ui/heading";
const HowItWorks = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="mt-12 p-4 bg-gray-100 dark:bg-gray-950/50 text-gray-400/80"
      initial={{ opacity: 0 }} // Initial opacity
      animate={{ opacity: 1 }} // Fade in effect when loaded
      transition={{ duration: 0.5 }} // Fade-in duration
    >
      <Heading
        textSmall
        borderSide
        description="How it works, make better experience"
        paragraph=""
        widthFullBigger={isMobile}
        widthFull={!isMobile}
         
      />
      <Carousel />
    </motion.div>
  );
};

export default HowItWorks;

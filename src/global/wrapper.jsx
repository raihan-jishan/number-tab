import { motion } from "framer-motion";
const Section = ({ children, className, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial opacity
      animate={{ opacity: 1 }} // Fade in effect when loaded
      transition={{ duration: 0.5 }} // Fade-in duration
      className={`p-5 m-5 mt-5 max-lg:p-0 max-lg:m-0 ${className}`}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default Section;

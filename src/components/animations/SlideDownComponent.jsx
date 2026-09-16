import { motion } from "framer-motion";

const SlideDownComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}       
      whileInView={{ y: 0, opacity: 1 }}     
      viewport={{ amount: 0.2 }}             
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideDownComponent;

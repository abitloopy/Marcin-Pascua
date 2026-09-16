import { motion } from "framer-motion";

const SlideUpComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}     
      whileInView={{ y: 0, opacity: 1 }} 
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpComponent;

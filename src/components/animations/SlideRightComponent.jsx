import { motion } from "framer-motion";

const SlideRightComponent = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ x: -100, opacity: 0 }}   
      whileInView={{ x: 0, opacity: 1 }}  
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideRightComponent;

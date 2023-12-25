import { Variants, motion } from "framer-motion";

const layoutVariants: Variants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

function FormTransition() {
  return (
    <>
      <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen z-[350] bg-[#01A28B]"
      variants={layoutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay: 0.2, duration: 0.5, ease: "easeInOut"}}
      >
        
      </motion.div>

      <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen z-[340] bg-[#05ad94]"
      variants={layoutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay: 0.4, duration: 0.5, ease: "easeInOut"}}
      >
        
      </motion.div>

      <motion.div 
      className="fixed top-0 bottom-0 right-full h-screen z-[330] bg-[#11ccb0]"
      variants={layoutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay: 0.6, duration: 0.5, ease: "easeInOut"}}
      >
        
      </motion.div>
    </>
  );
}

export default FormTransition;

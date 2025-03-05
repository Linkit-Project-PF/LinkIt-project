import {motion} from "framer-motion"

const BenefitItem = ({ text } : {text: string}) => {
    return (
      <motion.div
        className="flex items-center gap-3 font-montserrat"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-linkIt-300 transform rotate-45">
          <div className="w-4 h-4 bg-linkIt-300"></div>
        </div>
        <span className="text-lg font-medium">{text}</span>
      </motion.div>
    )
  }

export default BenefitItem;
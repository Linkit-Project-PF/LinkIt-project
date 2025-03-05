import {motion} from "framer-motion"


const Navbar = () => {
  return (
    <nav className="bg-[#173951] text-white py-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center py-2"
        >
          <img src="/Linkit-logo/linkit-logo-2024-white.svg" alt="LinkIT Logo" className="h-8 md:h-8 w-auto" />
        </motion.div>

        <motion.div
          className="flex gap-2 font-bold font-montserrat text-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="">EN</span>
          <span>|</span>
          <span className="text-linkIt-300">ES</span>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar;
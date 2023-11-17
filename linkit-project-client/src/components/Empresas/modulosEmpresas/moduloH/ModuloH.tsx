import { motion } from "framer-motion"
import NavSoluciones from "./NavSoluciones"

export default function ModuloH() {


    return (
    <div className="flex flex-col items-center bg-white ">
        <h1 className="flex justify-center font-bold text-3xl 2xl:text-5xl mt-6">Nuestra solución</h1>
        <motion.button className="bg-linkIt-300 rounded-lg p-2 xl:p-4 h-7 xl:h-8 2xl:h-11 flex items-center text-white text-[15px] xl:text-sm 2xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-2 mt-3" whileTap={{ scale: 0.9 }}>¡Cotiza con nosotros!</motion.button>
       <NavSoluciones />
    </div>
    )
}
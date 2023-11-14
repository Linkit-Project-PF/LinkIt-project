import { motion } from "framer-motion"
import "./moduloH.css"
export default function ModuloH() {
    return (
    <div className="flex flex-col justify-center items-center bg-white py-24">
        <h1 className="flex justify-center items-center font-bold text-4xl 2xl:text-5xl">Nuestra solución</h1>
        <motion.button className="bg-linkIt-300 rounded-lg p-2 xl:p-4 h-7 xl:h-8 2xl:h-11 flex items-center text-white text-[15px] xl:text-sm 2xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-2 mt-6" whileTap={{ scale: 0.9 }}>¡Cotiza con nosotros!</motion.button>
        <div className="flex flex-col justify-center items-center w-[90%] mt-7">
            <nav className="bg-linkIt-500 rounded-md flex justify-around font-semibold text-xs w-[100%] h-8 px-2">
                <button className="border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300">1. Rol asignado</button>
                <button className="border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300">2. Pre-alineamiento</button>
                <button className="border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300">3. Alineamiento</button>
                <button className="border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300">4. Sourcing y reclutamiento</button>
                <button className="border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300">5. Presentación de candidatos</button>
                <button className="border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300">6. Analytics and follow up</button>
            </nav>
            <div className="flex flex-row items-start">
                <h1 className="font-bold text-3xl">Rol asignado</h1>
            </div>
        </div>
    </div>
    )
}
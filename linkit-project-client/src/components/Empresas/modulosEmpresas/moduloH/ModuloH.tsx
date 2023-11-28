import { motion } from "framer-motion"
import NavSoluciones from "./NavSoluciones"
import { useTranslation } from "react-i18next";

export default function ModuloH() {

    const { t } = useTranslation();
        return (
        <div>
            <h1 className=" flex text-[2vw] font-bold justify-center mt-[8vh]">{t('Nuestra solución')}</h1>
            <div className="flex justify-center">
            <motion.button className="bg-linkIt-300 rounded-lg p-3 mb-[8vh] items-center text-white text-[0.7vw] shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out mt-8" whileTap={{ scale: 0.9 }}>{t('¡Cotiza con nosotros!')}</motion.button>
            </div>
        <NavSoluciones />
        </div>
        )
}
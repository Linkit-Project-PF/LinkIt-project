import { motion } from "framer-motion"
import NavSoluciones from "./NavSoluciones"
import { useTranslation } from "react-i18next";

export default function ModuloH() {

    const { t } = useTranslation();
        return (
        <div className="dark:bg-linkIt-400 dark:text-white py-[6%]">
            <h1 className=" flex text-[2vw] font-bold justify-center">{t('Nuestra solución')}</h1>
            <div className="flex justify-center">
            <motion.button className="background-button mb-[8vh] mt-8" whileTap={{ scale: 0.9 }}>{t('¡Cotiza con nosotros!')}</motion.button>
            </div>
        <NavSoluciones />
        </div>
        )
}
import { motion } from "framer-motion"
import NavSoluciones from "./NavSoluciones"
import { useTranslation } from "react-i18next";

export default function ModuloH() {

    const { t } = useTranslation();
        return (
        <div className="dark:bg-linkIt-400 dark:text-white p-[7%]">
            <h3 className=" flex titles-size font-bold justify-center">{t('Nuestra solución')}</h3>
            <div className="flex justify-center">
            <a href="#calculadora" className="mt-[3%] mb-[5%]">
            <motion.button className="background-button " whileTap={{ scale: 0.9 }}>{t('¡Cotiza con nosotros!')}</motion.button>
            </a>
            </div>
        <NavSoluciones />
        </div>
        )
}
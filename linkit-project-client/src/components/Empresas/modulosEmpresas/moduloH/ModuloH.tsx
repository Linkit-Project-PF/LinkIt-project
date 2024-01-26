import { motion } from "framer-motion"
import NavSoluciones from "./NavSoluciones"
import { useTranslation } from "react-i18next";

export default function ModuloH() {

    const { t } = useTranslation();
        return (
        <div className="dark:bg-linkIt-400 dark:text-white p-[7%]">
            <h1 className=" flex text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] sm:text-[1.5rem] lg:text-[2rem] xl:text-[2.3rem] font-bold justify-center">{t('Nuestra solución')}</h1>
            <div className="flex justify-center">
            <motion.button className="background-button mt-[3%] mb-[5%]" whileTap={{ scale: 0.9 }}>{t('¡Cotiza con nosotros!')}</motion.button>
            </div>
        <NavSoluciones />
        </div>
        )
}
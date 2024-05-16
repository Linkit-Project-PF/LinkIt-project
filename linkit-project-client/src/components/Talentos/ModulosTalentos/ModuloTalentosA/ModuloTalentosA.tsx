import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import { RootState } from "../../../../redux/types";
import { useSelector } from "react-redux";
import starsBlue from "/Vectores/Stars-Trustpilot.svg"
import starsWhite from "/Vectores/MO-trustpilot.svg"

export default function ModuloTalentosA() {
const {t} = useTranslation();
const isDarkMode = useSelector(
  (state: RootState) => state.darkMode);

  return (
<div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white  pt-[17vh] lg:pt-[19vh] ">
 <div className="space-y-[5%] p-[9%]">
        <h2 className="font-bold font-manrope xs:text-[1.0rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.6rem] w-[150%] ssm:w-[130%] sm:w-[115%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight ">{t('Conéctate con los mejores proyectos IT')}</h2>
          <h3 className="font-monserrat text-[0.8rem] ssm:text-[0.9rem] sm:text-[1rem] lg:text-[1.5rem] md:text-[1.4rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%]  lg:w-[90%] xl:w-[85%] leading-tight">{t('Aplica a las mejores oportunidades')} <br/> {t('de manera remota.')}</h3>
        <div className="">
          <a href="#vacantes">
          <motion.button className="background-button md:text-[1rem]" whileTap={{ scale: 0.9 }}>{t('Vacantes disponibles')}</motion.button> </a>
        </div>
        <div className="relative flex top-3">
          <img className="w-1/2 lg:w-1/4 " src={isDarkMode ? starsWhite : starsBlue} alt="stars" />
          <span className="font-monserrat text-[0.6rem]  xs:ml-1 xs:font-light md:text-[1rem] lg:text-[1.2rem] ml-2 flex whitespace-nowrap items-center">{t('4/5 on Truspilot')} <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold  xs:ml-1 xs:font-light">{t('Leer reseñas')}</Link></span>
      </div>
      </div>
      <img className="2xl:w-[93%] 2xl:h-[100%] 2xl:ml-12 2xl:mt-0 2xl:bottom-0 xl:w-[90%] xl:ml-6 lg:w-[100%] lg:h-[100%] xs:h-[85%] sm:h-[95%] w-full h-auto px-4 xs:mt-8 xs:ml-3 ssm:h-[100%] md:mt-[15%] xl:mt-6" src="/Vectores/linkit-slider-talento.png" alt="computer" />
      </div>
  )
}

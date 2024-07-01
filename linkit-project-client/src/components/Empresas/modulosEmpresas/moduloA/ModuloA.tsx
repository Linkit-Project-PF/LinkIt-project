import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';
import { RootState } from "../../../../redux/types";
import { useSelector } from "react-redux";
import starsBlue from "/Vectores/Stars-Trustpilot.svg"
import starsWhite from "/Vectores/MO-trustpilot.svg"

export default function ModuloA() {

  const { t } = useTranslation();
  const navigate = useNavigate()


  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode);


  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa");
    setTimeout(() => {
      window.location.href = "#contactanosE";
    }, 0);
  }

  return (
    <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white  pt-[17vh] lg:pt-[19vh]">
       <div className="p-[9%] space-y-[5%]">
        <h2 className="font-bold font-manrope xs:text-[1.0rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] w-[150%] ssm:w-[130%] sm:w-[115%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight ">{t('Contrata y escala')} {t('con el mejor talento IT')} {t('en tan solo 5 días!')}</h2>
          <h3 className="font-montserrat text-[0.8rem] md:text-[1.2rem] ssm:text-[0.9rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%]  lg:w-[90%] xl:w-[85%] leading-tight">{t('Escala, gestiona y retiene al mejor')} {t('talento del mundo.')}</h3>
          <div className="">
          <motion.button className="background-button md:text-[1rem]" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>{('Contacta para contratar')}</motion.button>
          </div>
          <div className="relative flex top-3" >
          <img className="w-1/2 lg:w-1/4 " src={isDarkMode ? starsWhite : starsBlue} alt="stars" />
          <span className="font-montserrat text-[0.6rem] xs:ml-1 xs:font-light lg:text-[1.2rem] md:text-[1rem] ml-2 flex whitespace-nowrap items-center"><p className="font-montserrat">{t('4/5 en Truspilot')}</p><Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold xs:ml-1 xs:font-light"><p className="font-montserrat">{t('Leer reseñas')}</p></Link></span>
          </div>
          </div>
          <img className="2xl:w-[89%] 2xl:h-[97%] 2xl:ml-12 2xl:bottom-0 xl:w-[90%]  xl:ml-6 lg:w-[100%] lg:h-[100%] xs:h-[85%] xs:ml-3 sm:h-[95%] w-full h-auto px-4 xs:mt-8 md:mt-[15%] xl:mt-6" src="/Vectores/linkit-slider-empresa.png" alt="Businessman" />

    </div>
  )
}

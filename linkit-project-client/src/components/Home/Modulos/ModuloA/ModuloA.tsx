import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/types"
import starsBlue from "/Vectores/Stars-Trustpilot.svg"
import starsWhite from "/Vectores/MO-trustpilot.svg"


export default function ModuloA() {
  const{t}=useTranslation()

  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode);

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa");
  }

  const goSoyTalento = () => {
    navigate("/SoyTalento");
  }


  return (
    <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white pt-[17vh] lg:pt-[17vh]">
       <div className="space-y-[5%] mt-4 p-[9%]">
        <h1 className="font-bold font-manrope xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] md:w-[115%] xs:w-[115%] w-[100%] ssm:w-[130%] sm:w-[135%] lg:w-[120%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[125%] 2xl:text-[5rem] leading-tight ">{t('Conectando al talento más destacado con los mejores proyectos IT')}</h1>
          <h2 className="font-monserrat text-[0.8rem] ssm:text-[0.9rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%]  lg:w-[90%] xl:w-[85%] leading-tight">{t('Contrata y gestiona al mejor talento de manera global')}</h2>
        <div className="flex flex-col whitespace-nowrap xs:space-x-2 xs:flex-row">
          <motion.button className={`background-button`}
          onClick={goSoyEmpresa}  
          whileTap={{ scale: 0.9 }}
          >{t('Contrata Talento')}</motion.button>

          <motion.button className={`transparent-background-button`}
          onClick={goSoyTalento} 
          whileTap={{ scale: 0.9 }}

          >{t('Vacantes disponibles')}</motion.button>

        </div>
        <div className="relative flex top-3">
          <img className="w-1/2 lg:w-1/4 " src={isDarkMode ? starsWhite : starsBlue} alt="stars" />
          <span className="font-monserrat text-[0.6rem] lg:text-[1.2rem] md:text-[1rem] ml-2 flex whitespace-nowrap items-center">{t('4/5 on Truspilot')} <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2">{t('Leer reseñas')}</Link></span>
        </div>
        </div>
        <img className="2xl:w-[68%] 2xl:ml-36 2xl:mt-12 xl:w-[65%] xl:ml-36 xl:mt-24 xl:mb-2 lg:w-[75%] lg:mt-16 lg:mb-8 lg:ml-[15%] w-full h-auto px-4 xs:mt-8 md:mt-16 md:ml-12 md:w-[80%] md:mb-4 " src="/Vectores/linkit-slider-home.png" alt="computer" />
      </div>
  )
}

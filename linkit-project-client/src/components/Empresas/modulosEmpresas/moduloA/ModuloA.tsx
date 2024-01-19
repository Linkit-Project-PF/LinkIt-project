import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

export default function ModuloA() {

  const { t } = useTranslation();
  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa")
  }

  return (
    <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white p-[7%] lg:p-[6%] pt-[17vh] lg:pt-[23vh] pb-[13%]">
       <div className="space-y-[5%] ">
        <h1 className="font-bold font-manrope xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] w-[150%] ssm:w-[130%] sm:w-[135%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight">{t('Contrata y escala')} <br /> {t('con el mejor talento IT')} <br /> {t('en tan solo 5 días!')}</h1>
          <h3 className="font-monserrat text-[0.8rem] ssm:text-[0.9rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%]  lg:w-[90%] xl:w-[85%] leading-tight">{t('Escala, gestiona y retiene al mejor')} <br /> {t('talento del mundo.')}</h3>
          <div className="">
            <a href="#contactanosE">
          <motion.button className="background-button" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>{t('Contrata Talento')}</motion.button></a>
          </div>
          <div className="relative flex top-3" >
          <img className="w-1/3 lg:w-1/4 " src="Vectores/Stars-Trustpilot.svg" alt="stars" />
          <h4 className="font-monserrat text-[0.6rem] lg:text-[1rem] ml-2 flex whitespace-nowrap items-center">{t('4/5 en Truspilot')} <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold">{t('Leer reseñas')}</Link></h4>
          </div>
          </div>
        <img className="relative self-end bottom-2 xs:bottom-0 xs:left-5 xs:top-3 md:top-16 lg:top-14" src="/Vectores/2-linkit-ilustracion-soy-empresa-SVG.svg" alt="computer" />
    </div>
  )
}

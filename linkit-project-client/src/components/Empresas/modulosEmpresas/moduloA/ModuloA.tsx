import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

export default function ModuloA() {

  const { t } = useTranslation();
  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa");
    setTimeout(() => {
      window.location.href = "#calculadora";
    }, 0);
  }

  return (
    <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white p-[7%] pt-[17vh] lg:pt-[23vh] ">
       <div className="space-y-[5%] ">
        <h2 className="font-bold font-manrope xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] w-[150%] ssm:w-[130%] sm:w-[115%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight ">{t('Contrata y escala')} {t('con el mejor talento IT')} {t('en tan solo 5 días!')}</h2>
          <h3 className="ont-monserrat text-[0.8rem] ssm:text-[0.9rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%]  lg:w-[90%] xl:w-[85%] leading-tight">{t('Escala, gestiona y retiene al mejor')} {t('talento del mundo.')}</h3>
          <div className="">
          <motion.button className="background-button" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>{('Contacta para contratar')}</motion.button>
          </div>
          <div className="relative flex top-3" >
          <img className="w-1/2 lg:w-1/4 " src="Vectores/Stars-Trustpilot.svg" alt="stars" />
          <span className="font-monserrat text-[0.6rem] lg:text-[1rem] ml-2 flex whitespace-nowrap items-center">{t('4/5 en Truspilot')} <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold">{t('Leer reseñas')}</Link></span>
          </div>
          </div>
        <img className="relative self-end bottom-5 w-[90%] left-[15%] xs:left-[30%] xs:w-[70%] ssm:w-[90%] ssm:bottom-0 ssm:left-[15%] lg:top-10 lg:w-[100%]  lg:left-[12%]" src="/Vectores/3-linkit-ilustracion-soy-empresa-SVG_v02.svg" alt="computer" />
    </div>
  )
}

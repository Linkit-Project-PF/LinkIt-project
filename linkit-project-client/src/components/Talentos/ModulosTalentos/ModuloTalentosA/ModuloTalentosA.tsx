import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { useTranslation } from "react-i18next";
// import PhoneInput from "react-phone-number-input/input"

export default function ModuloTalentosA() {
const {t} = useTranslation();

  return (
<div className="grid grid-cols-2 h-screen w-screen gap-y-5 bg-linkIt-500">
        <h1 className="font-bold font-manrope text-[4vw] leading-[8vh] 2xl:leading-[9vh] pt-[24vh] xl:pt-[24vh] pl-[5vw]">{t('Conéctate con los mejores proyectos IT')}</h1>
          <h3 className="font-monserrat col-start-1 pl-[5vw] text-[1.8vw] leading-[3.5vh] 2xl:leading-[4vh]">{t('Aplica a las mejores oportunidades')} <br/> {t('de manera remota.')}</h3>
        <div className="pl-[5vw]">
          <a href="#vacantes">
          <motion.button className="font-manrope relative z-10 col-start-1 bg-linkIt-300 border rounded-[7px] p-3 px-5 text-white text-[0.8vw] shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:border transition-all duration-300 ease-in-out" whileTap={{ scale: 0.9 }}>{t('Vacantes disponibles')}</motion.button> </a>
        </div>
        <div className="flex pl-[5vw]">
          <img className="col-start-1 w-[10vw] -mt-[7.5vh] -ml-[1.5vw]" src="Vectores/linkit-web-vectores_Mesa de trabajo 1.svg" alt="stars" />
          <h4 className="font-monserrat col-start-1 -ml-4 mt-[2vh] text-[1vw]">{t('4/5 on Trustpilot')} <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold">{t('Leer reviews')}</Link></h4>
      </div>
        <img className="row-[1/6] col-start-2 w-auto h-auto pt-[16vh] xl:pt-[14vh]" src="/Vectores/linkit-web-vectores-14.svg" alt="computer with people" />
      </div>
  )
}

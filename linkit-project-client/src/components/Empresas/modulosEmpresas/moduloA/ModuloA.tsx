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
    <div className="grid grid-cols-2 h-screen w-screen gap-y-5 bg-linkIt-500 dark:bg-linkIt-200 dark:text-white">
        <h1 className="font-bold font-manrope text-[4vw] leading-[8vh] 2xl:leading-[9vh] pt-[24vh] xl:pt-[24vh] pl-[5vw]">{t('Contrata y escala')} <br /> {t('con el mejor talento IT')} <br /> {t('en tan solo 5 días!')}</h1>
          <h3 className="font-monserrat col-start-1 pl-[5vw] text-[1.8vw] leading-[3.5vh] 2xl:leading-[4vh]">{t('Escala, gestiona y retiene al mejor')} <br /> {t('talento del mundo.')}</h3>
          <div className="pl-[5vw]">
            <a href="#contactanosE">
          <motion.button className="background-button" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>{t('Contrata Talento')}</motion.button></a>
          </div>
          <div className="flex pl-[5vw]" >
          <img className="col-start-1 w-[10vw] -mt-[7.5vh] -ml-[1.5vw]" src="Vectores/linkit-web-vectores_Mesa de trabajo 1.svg" alt="stars" />
          <h4 className="font-monserrat col-start-1 -ml-4 mt-[2vh] text-[1vw]">{t('4/5 en Truspilot')} <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold">{t('Leer reseñas')}</Link></h4>
          </div>
        <img className="row-[1/6] col-start-2 w-auto h-auto pt-[16vh] xl:pt-[14vh]" src="/Vectores/linkit-web-vectores-14.svg" alt="computer with people" />
    </div>
  )
}

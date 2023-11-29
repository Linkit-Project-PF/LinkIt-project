import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState } from "react";
export default function ModuloA() {
  const{t}=useTranslation()

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa")
  }
  const goSoyTalento = () => {
    navigate("/SoyTalento")
  }

  const [isHoveredContrata, setIsHoveredContrata] = useState(false);
  const [isHoveredVacantes, setIsHoveredVacantes] = useState(false);

  return (
    <div className="grid grid-cols-2 h-screen w-screen 2xl:gap-y-5 bg-linkIt-500">
        <h1 className="font-bold font-manrope text-[4vw] leading-[8vh] 2xl:leading-[9vh] pt-[24vh] xl:pt-[24vh] pl-[5vw]">{t('Conectando al talento más destacado con los mejores proyectos IT')}</h1>
          <h3 className="font-monserrat col-start-1 pl-[5vw] text-[1.8vw] leading-[3.5vh] 2xl:leading-[4vh] pr-[15vw]">{t('Contrata y gestiona al mejor talento de manera global')}</h3>
        <div className="pl-[5vw] space-x-3">
          <motion.button className={`font-manrope relative z-10 col-start-1 border bg-linkIt-300 rounded-[7px] p-3 px-5 text-[0.8vw] shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:border transition-all duration-300 ease-in-out${isHoveredVacantes ? ' border-linkIt-300 bg-transparent text-black' : ' bg-linkIt-300 text-white'}`}
          onClick={goSoyEmpresa} 
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setIsHoveredContrata(true)}
            onHoverEnd={() => setIsHoveredContrata(false)}
          >{t('Contrata Talento')}</motion.button>

          <motion.button className={`font-manrope relative z-10 border rounded-[7px] p-2.5 px-5 text-[0.8vw] shadow-md hover:bg-linkIt-300 hover:shadow-md hover:text-white transition-all duration-300 ease-in-out ${isHoveredContrata ? 'bg-linkIt-300 text-white' : 'border-linkIt-300 bg-transparent text-black'}`}
          onClick={goSoyTalento} 
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setIsHoveredVacantes(true)}
            onHoverEnd={() => setIsHoveredVacantes(false)}
          >{t('Vacantes disponibles')}</motion.button>

        </div>
        <div className="flex pl-[5vw]">
          <img className="col-start-1 w-[10vw] -mt-[7.5vh] -ml-[1.5vw]" src="Vectores/linkit-web-vectores_Mesa de trabajo 1.svg" alt="stars" />
          <h4 className="font-monserrat col-start-1 -ml-4 mt-[2vh] text-[1vw]">{t('4/5 on Truspilot')} <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold">{t('Leer reviews')}</Link></h4>
        </div>
        <img className="row-[1/6] col-start-2 w-auto h-auto pt-[16vh] xl:pt-[14vh]" src="/Vectores/linkit-web-vectores-14.svg" alt="computer with persons" />
      </div>
  )
}

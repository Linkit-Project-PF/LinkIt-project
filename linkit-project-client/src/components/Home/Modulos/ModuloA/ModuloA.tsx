import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function ModuloA() {
  const{t}=useTranslation()

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa")
  }
  const goSoyTalento = () => {
    navigate("/SoyTalento")
  }

  return (
    <div className="grid grid-cols-2 gap-1 bg-linkIt-500 pt-24 pl-2 md:pl-6 md:pt-24 lg:p-14 lg:pt-36 xl:pt-38 xl:p-30 xl:pb-24 2xl:pb-24 h-[95vh]">
      <div className="flex flex-col justify-center md:mx-2 lg:mx-4 xl:mx-6 2xl:ml-12 2xl:mt-24">
        <h1 className="text-sm font-bold md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-8xl font-manrope">{t('Conectando al talento más destacado con los mejores proyectos IT')}</h1>
        <div className="my-1 md:my-2 lg:my-6 xl:my-6 2xl:pr-32 2xl:mt-12">
          <h3 className="text-xs md:text-base lg:text-[1.1rem] xl:text-[1.5rem] 2xl:text-5xl">{t('Contrata y gestiona al mejor talento de manera global')}</h3>
        </div>
        <div className="flex 2xl:mt-2 h-[5vh]">
          <motion.button className="bg-linkIt-300 rounded-[7px] 2xl:rounded-xl p-1 h-[100%] lg:w-[28%] 2xl:w-[20%] text-white shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-1 text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-xl" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>{t('Contrata Talento')}</motion.button>
          <motion.button className="border-linkIt-300 border rounded-[7px] 2xl:rounded-xl p-1 h-[100%] lg:w-[28%] 2xl:w-[20%] shadow-md hover:bg-linkIt-300 hover:shadow-md hover:text-white transition-all duration-300 ease-in-out m-1 text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-xl" onClick={goSoyTalento} whileTap={{ scale: 0.9 }}>{t('Vacantes disponibles')}</motion.button>
        </div>
        <div className="flex flex-row items-center ">
          <img className=" w-[12vw] -ml-4 2xl:-mx-9 -mt-4" src="Vectores/linkit-web-vectores_Mesa de trabajo 1.svg" alt="stars" />
          <h4 className="flex text-[9px] md:text-xs xl:text-lg 2xl:text-lg mb-4">4/5 on Truspilot <NavLink to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold">Read reviews</NavLink></h4>
        </div>
      </div>

      <div>
        <img className="absolute 2xl:w-[55vw] w-[60vw] top-28 left-[40vw] 2xl:left-[45vw]" src="/Vectores/linkit-web-vectores-14.svg" alt="computer with persons" />
      </div>
    </div>
  )
}

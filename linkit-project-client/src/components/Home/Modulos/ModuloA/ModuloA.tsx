import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

export default function ModuloA() {

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa")
  }
  const goSoyTalento = () => {
    navigate("/SoyTalento")
  }

  return (
    <div className="grid grid-cols-2 gap-1 bg-linkIt-500 pt-24 pl-2 md:pl-6 md:pt-24 xl:pt-28 xl:p-32 2xl:pb-24">
      <div className="flex flex-col justify-center md:mx-2 lg:mx-4 xl:mx-6 2xl:ml-12 2xl:mt-24">
        <h1 className="text-sm font-bold md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Conectando al talento más destacado con los mejores proyectos IT</h1>
        <div className="my-1 md:my-2 lg:my-6 xl:my-6 2xl:pr-32 2xl:mt-12">
          <h3 className="text-xs md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl">Contrata y gestiona al mejor talento de manera global</h3>
        </div>
        <div className="flex  xl:my-10 2xl:mt-2">
          <motion.button className="bg-linkIt-300 rounded-lg p-1 h-auto xl:p-2 2xl:px-6 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-1 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-xl" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>Contrata Talento</motion.button>
          <motion.button className="border-linkIt-300 border rounded-lg p-1 xl:p-2 2xl:px-6 h-auto font-medium shadow-md hover:bg-linkIt-300 hover:shadow-md hover:text-white transition-all duration-300 ease-in-out m-1 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-xl" onClick={goSoyTalento} whileTap={{ scale: 0.9 }}>Vacantes disponibles</motion.button>
        </div>
        <div className="flex flex-row items-center ">
          <img className="w-1/6" src="Vectores/linkit-web-vectores_Mesa de trabajo 1.svg" alt="stars" />
          <h4 className="flex font-semibold text-[9px] md:text-xs lg:text-base xl:text-lg 2xl:text-lg">4/5 on Truspilot <NavLink to="" className="underline ml-2">Read reviews</NavLink></h4>
        </div>
      </div>

      <div>
        <img className="w-auto" src="/Vectores/linkit-web-vectores-14.svg" alt="computer with persons" />
      </div>
    </div>
  )
}

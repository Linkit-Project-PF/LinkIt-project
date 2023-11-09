import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function ModuloA() {

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa")
  }
  const goSoyTalento = () => {
    navigate("/SoyTalento")
  }

  return (
    <div className="grid grid-cols-2 gap-1 p-5 bg-linkIt-50 py-24">
      <div className="flex flex-col justify-center p-24">
        <h1 className="text-6xl font-bold ">Conectando al talento más destacado con los mejores proyectos IT</h1>
        <div className="py-8 pr-60">
          <h3 className="text-3xl">Contrata y gestiona al mejor talento de manera global</h3>
        </div>
        <div className="flex">
          <motion.button className="bg-linkIt-300 rounded-lg p-2 h-10 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 m-2" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>Contrata Talento</motion.button>
          <motion.button className="border-linkIt-300 border rounded-lg p-2 h-10 font-medium shadow-md hover:bg-linkIt-300 hover:shadow-md hover:text-white transition m-2" onClick={goSoyTalento} whileTap={{ scale: 0.9 }}>Vacantes disponibles</motion.button>
        </div>
        <div className="flex flex-row items-center">
          <img className="w-1/6" src="/public/vectores/linkit-web-vectores-16.svg" alt="stars" />
          <h4 className="flex font-semibold">4/5 on Truspilot <p className="underline ml-2">Read reviews</p></h4>
        </div>
      </div>

      <div>
        <img className="w-auto" src="/public/vectores/linkit-web-vectores-14.svg" alt="computer with persons" />
      </div>
    </div>
  )
}

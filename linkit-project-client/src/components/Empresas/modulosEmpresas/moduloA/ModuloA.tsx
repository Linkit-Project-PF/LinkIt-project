import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function ModuloA() {

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa")
  }

  return (
    <div className="grid grid-cols-2 gap-1 p-4 bg-linkIt-500 py-24">
      <div className="flex flex-col p-24">
        <h1 className="text-4xl xl:text-6xl 2xl:text-8xl w-[390px] xl:w-[660px] 2xl:w-[1100px] font-bold relative bottom-12 2xl:bottom-2 right-10 xl:right-12 2xl:right-2">Contrata y escala <br /> con el mejor talento IT en tan solo 5 días!</h1>
        <div className="py-8 pr-60">
          <h3 className="text-base xl:text-[22px] 2xl:text-5xl relative bottom-16 2xl:bottom-2 w-60 xl:w-96 2xl:w-[760px] right-10 xl:right-12 2xl:right-2">Escala, gestiona y retiene al mejor talento del mundo.</h3>
        </div>
        <div className="relative bottom-[80px] 2xl:bottom-5 right-10 xl:right-12 2xl:right-4">
          <motion.button className="bg-linkIt-300 rounded-lg p-2 xl:p-4 h-7 xl:h-8 2xl:h-11 flex items-center text-white text-[10px] xl:text-xs 2xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-2" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>Contrata Talento</motion.button>
        </div>
        <div className="relative bottom-20 2xl:bottom-10 right-8 xl:right-10 2xl:right-3">
          <img className="relative w-[100px] 2xl:w-32 2xl:top-10 h-26" src="Vectores/linkit-web-vectores-16.svg" alt="stars" />
          <h4 className="flex flex-row relative bottom-16 2xl:bottom-[38px] left-[104px] 2xl:left-[130px]">4/5 on Truspilot <p className="underline ml-2 font-semibold">Leer reviews</p></h4>
        </div>
      </div>

      <div>
        <img className="w-auto" src="/Vectores/linkit-web-vectores-14.svg" alt="computer with persons" />
      </div>
    </div>
  )
}

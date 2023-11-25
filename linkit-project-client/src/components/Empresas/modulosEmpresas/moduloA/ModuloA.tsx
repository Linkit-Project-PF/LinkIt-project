import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function ModuloA() {

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa")
  }

  return (
    <div className="grid grid-cols-2 h-screen w-screen 2xl:gap-y-5 bg-linkIt-500">
        <h1 className="font-bold font-manrope text-[4vw] leading-[8vh] 2xl:leading-[9vh] pt-[24vh] xl:pt-[18vh] pl-[5vw]">Contrata y escala <br /> con el mejor talento IT <br /> en tan solo 5 días!</h1>
          <h3 className="font-monserrat col-start-1 pl-[5vw] text-[1.8vw] leading-[3.5vh] 2xl:leading-[4vh]">Escala, gestiona y retiene al mejor <br /> talento del mundo.</h3>
          <div className="pl-[5vw]">
          <motion.button className="font-manrope col-start-1 bg-linkIt-300 rounded-[7px] 2xl:rounded-xl p-3 text-white shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-1 text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-xl" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>Contrata Talento</motion.button>
          </div>
          <div className="flex pl-[5vw]" >
          <img className="col-start-1 w-[10vw] -mt-[7.5vh] -ml-[1.5vw]" src="Vectores/linkit-web-vectores_Mesa de trabajo 1.svg" alt="stars" />
          <h4 className="font-monserrat col-start-1 -ml-4 mt-[2vh] text-[1vw]">4/5 on Truspilot <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2 font-semibold">Leer reviews</Link></h4>
          </div>
        <img className="row-[1/6] col-start-2 w-auto h-auto pt-[16vh] xl:pt-[12vh]" src="/Vectores/linkit-web-vectores-14.svg" alt="computer with people" />
    </div>
  )
}

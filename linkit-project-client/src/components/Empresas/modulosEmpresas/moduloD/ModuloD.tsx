import { motion } from "framer-motion"
import testimonios from "../../../../Utils/testimonios.json"
import CardTestionios from "./cardTestimonios"
export default function ModuloA() {





  return (
    <div className="flex flex-col items-center bg-linkIt-500 py-10 xl:py-16 2xl:py-20">
      <h1 className="flex font-bold text-[2vw]">Lo que dicen nuestros clientes</h1>
      <motion.button className="flex justify-center items-center p-2 text-[1vw] mt-[2vh] xl:text-[0.7vw] border-linkIt-300 border rounded-lg font-medium shadow-md hover:bg-linkIt-300 hover:shadow-md hover:text-white transition-all duration-300 ease-in-out" whileTap={{ scale: 0.9 }}>Conoce los casos de éxito</motion.button>
      <div className="grid grid-cols-4 space-x-3 mt-16 mb-[10vh]">
      <div className="grid grid-col space-y-3">
        {
          testimonios.slice(0, 2).map((testimonio) => (
            <CardTestionios key={testimonio.id} {...testimonio} />
          ))
        }
      </div>
      <div className="relative bottom-3 grid grid-col space-y-3">
      {
          testimonios.slice(2, 4).map((testimonio) => (
            <CardTestionios key={testimonio.id} {...testimonio} />
          ))
        }
      </div>
      <div className="relative top-3 grid grid-col space-y-3">
      {
          testimonios.slice(4, 6).map((testimonio) => (
            <CardTestionios key={testimonio.id} {...testimonio} />
          ))
        }
      </div>
      <div className="grid grid-col space-y-3">
      {
          testimonios.slice(6, 8).map((testimonio) => (
            <CardTestionios key={testimonio.id} {...testimonio} />
          ))
        }
      </div>
      </div>
    </div>
  )
}

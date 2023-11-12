import { motion } from "framer-motion"
import testimonios from "../../../../Utils/testimonios.json"
import CardTestionios from "./cardTestimonios"
export default function ModuloA() {





  return (
    <div className="flex flex-col items-center bg-linkIt-500 py-10 xl:py-16 2xl:py-20 h-[48rem] xl:h-screen">
      <h1 className="flex font-bold text-2xl 2xl:text-4xl">Lo que dicen nuestros clientes</h1>
      <motion.button className="flex justify-center items-center text-sm 2xl:text-base border-linkIt-300 border rounded-lg p-2 2xl:p-3 h-8 2xl:h-9 w-52 2xl:w-56 font-medium shadow-md hover:bg-linkIt-300 hover:shadow-md hover:text-white transition-all duration-300 ease-in-out m-2" whileTap={{ scale: 0.9 }}>Conoce los casos de éxito</motion.button>
      <div className="flex flex-row space-x-3 mt-16">
      <div className="flex flex-col space-y-3">
        {
          testimonios.slice(0, 2).map((testimonio) => (
            <CardTestionios key={testimonio.id} {...testimonio} />
          ))
        }
      </div>
      <div className="relative bottom-3 flex flex-col space-y-3">
      {
          testimonios.slice(2, 4).map((testimonio) => (
            <CardTestionios key={testimonio.id} {...testimonio} />
          ))
        }
      </div>
      <div className="relative top-3 flex flex-col space-y-3">
      {
          testimonios.slice(4, 6).map((testimonio) => (
            <CardTestionios key={testimonio.id} {...testimonio} />
          ))
        }
      </div>
      <div className="flex flex-col space-y-3">
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

import { motion } from "framer-motion"
import testimonios from "../../../../Utils/testimonios.json"
import CardTestionios from "./cardTestimonios"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
export default function ModuloA() {

  const { t } = useTranslation();



    return (
      <div className="flex flex-col items-center bg-linkIt-500 dark:bg-linkIt-400 p-[6%]">
        <h1 className="flex font-bold text-[2vw] dark:text-white">{t('Lo que dicen nuestros clientes')}</h1>
        <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank">
        <motion.button className="transparent-background-button dark:bg-linkIt-300 dark:text-white dark:hover:text-linkIt-300 dark:hover:bg-white mt-3" whileTap={{ scale: 0.9 }}>{t('Conoce los casos de éxito')}</motion.button></Link>
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

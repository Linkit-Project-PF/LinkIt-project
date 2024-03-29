import { motion } from "framer-motion"
import testimonios from "../../../../Utils/testimonios.json"
import CardTestionios from "./cardTestimonios"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import blackArrow from "/Vectores/arrow.png";
import whiteArrow from "/Vectores/white-arrow.png"
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";

import { useState } from "react";
export default function ModuloA() {


  const { t } = useTranslation();
  const [toShow, setToShow] = useState(testimonios[0])
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode);


  const prev = () => {
      if (toShow === testimonios[0]) {
          setToShow(testimonios[testimonios.length - 1])
      } else {
          setToShow(testimonios[testimonios.indexOf(toShow) - 1])
      }
   }

   const next = () => {
      if (toShow === testimonios[testimonios.length - 1]) {
          setToShow(testimonios[0])
      } else {
          setToShow(testimonios[testimonios.indexOf(toShow) + 1])
      }
    }


    return (
      <div className="grid items-center justify-items-center bg-linkIt-500 dark:bg-linkIt-400 p-[7%]">
        <h3 className="flex titles-size justify-self-center font-bold font-manrope dark:text-white text-center">{t('Lo que dicen nuestros clientes')}</h3>
        <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank">
        <motion.button className="transparent-background-button dark:bg-linkIt-300 dark:text-white dark:hover:text-linkIt-300 dark:hover:bg-white mt-3" whileTap={{ scale: 0.9 }}>{t('Conoce los casos de éxito')}</motion.button></Link>
        <div className="grid-cols-4 space-x-3 mt-16 hidden lg:grid">
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
        <div className="grid grid-cols-3 lg:hidden justify-items-center items-center my-7">
            <img src={isDarkMode ? whiteArrow : blackArrow} className="rotate-90 w-[20px] justify-self-start ssm:justify-self-center cursor-pointer" onClick={prev} alt="previous" />
            
              <CardTestionios key={toShow.id} {...toShow} />
            <img src={isDarkMode ? whiteArrow : blackArrow} onClick={next} className="-rotate-90 w-[20px] justify-self-end ssm:justify-self-center cursor-pointer" alt="next" />
        </div>
      </div>
    )
}

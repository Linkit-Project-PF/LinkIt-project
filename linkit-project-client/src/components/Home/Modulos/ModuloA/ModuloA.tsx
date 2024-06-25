import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/types"
import starsBlue from "/Vectores/Stars-Trustpilot.svg"
import starsWhite from "/Vectores/MO-trustpilot.svg"
import useWindowWidth from "../../../../Utils/useWindowWidth";
import { useState, useEffect } from "react";


export default function ModuloA() {
  const{t}=useTranslation()

  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode);

  const navigate = useNavigate()

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa");
  }

  const goSoyTalento = () => {
    navigate("/SoyTalento");
  }
  const [fixedHeight, setFixedHeight] = useState(0);
  const windowWidth = useWindowWidth();
  useEffect(() => {
    const updateFixedHeight = () => {
      const fixedNavbar = document.getElementById("Navbar");
      const fixedPreNavbar = document.getElementById("preNavbar");

      if (fixedNavbar && fixedPreNavbar) {
        setFixedHeight(fixedNavbar.offsetHeight + fixedPreNavbar.offsetHeight);
      }
    };

    updateFixedHeight();

    window.addEventListener("resize", updateFixedHeight);
    return () => {
      window.removeEventListener("resize", updateFixedHeight);
    };
  }, []);


  return (
    <div className="overflow-hidden md:pt-[17vh]  bg-linkIt-500 dark:bg-linkIt-200 dark:text-white"  style={
      windowWidth <= 767
        ? { marginTop: `${fixedHeight}px`, paddingTop: fixedHeight * 29 / 100 }
        : undefined
    }>
    <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white ">
       <div className="md:space-y-[5%] md:mt-4 md:p-[9%] md:pl-[6%] xs:pl-[9%] ">
        <h1 className="hidden md:block font-bold font-manrope md:text-[2.3rem] md:w-[115%] sm:w-[135%] lg:w-[120%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[125%] 2xl:text-[5rem] leading-tight ">{t('Conectando al talento más destacado con los mejores proyectos IT')}</h1>
        <h1 className="md:hidden font-bold font-manrope mt-[5%] xs:text-[1rem] min-[340px]:text-[1.1rem] min-[360px]:text-[1.2rem] min-[390px]:text-[1.2rem] min-[410px]:text-[1.4rem] min-[430px]:text-[1.4rem] min-[465px]:text-[1.5rem] min-[500px]:text-[1.7rem] ssm:text-[1.9rem] min-[570px]:text-[2rem] min-[600px]:text-[2.1rem] sm:text-[2.2rem] min-[670px]:text-[2.3rem] min-[700px]:text-[2.4rem] w-[110%] leading-tight ">{t('Conectando los')}<br/>{t('mejores talentos')}<br/>{t('y proyectos')}</h1>
          <h2 className="hidden md:block font-monserrat text-[0.8rem] ssm:text-[0.9rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%]  lg:w-[90%] xl:w-[85%] leading-tight">{t('Contrata y gestiona al mejor talento de manera global')}</h2>
        <div className="flex flex-col whitespace-nowrap md:space-x-2 mt-[7%] md:mt-0 md:flex-row">
          <motion.button className={`background-button text-[0.3rem] min-[300px]:text-[0.4rem] min-[350px]:text-[0.5rem] [400px]:text-[0.5rem] min-[430px]:text-[0.6rem] min-[465px]:text-[0.7rem] min-[500px]:text-[0.8rem] ssm:text-[0.9rem] min-[600px]:text-[0.9rem] sm:text-[1.1rem] min-[700px]:text-[1.2rem] md:text-[1rem]`}
          onClick={goSoyEmpresa}  
          whileTap={{ scale: 0.9 }}
          >{t('Contrata Talento')}</motion.button>

          <motion.button className={`transparent-background-button text-[0.3rem] min-[300px]:text-[0.4rem] min-[350px]:text-[0.5rem] [400px]:text-[0.5rem] min-[430px]:text-[0.6rem] min-[465px]:text-[0.7rem] min-[500px]:text-[0.8rem] ssm:text-[0.9rem] min-[600px]:text-[0.9rem] sm:text-[1.1rem] min-[700px]:text-[1.2rem] md:text-[1rem] mt-[5%]`}
          onClick={goSoyTalento} 
          whileTap={{ scale: 0.9 }}

          >{t('Vacantes disponibles')}</motion.button>

        </div>
        <div className="hidden md:flex relative top-3">
          <img className="w-1/2 lg:w-1/4 " src={isDarkMode ? starsWhite : starsBlue} alt="stars" />
          <span className="font-monserrat text-[0.6rem] lg:text-[1.2rem] md:text-[1rem] ml-2 flex whitespace-nowrap items-center">{t('4/5 on Truspilot')} <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank" className="underline ml-2">{t('Leer reseñas')}</Link></span>
        </div>
        </div>
        <img className="hidden md:block 2xl:w-[68%] 2xl:ml-36 2xl:mt-12 xl:w-[65%] xl:ml-36 xl:mt-24 xl:mb-2 lg:w-[75%] lg:mt-16 lg:mb-8 lg:ml-[15%] w-full h-auto px-4 xs:mt-8 md:mt-16 md:ml-12 md:w-[80%] md:mb-4 " src="/Vectores/linkit-slider-home.png" alt="computer" />
        <img className="md:hidden w-[82%] self-center justify-self-end mr-[12%] mb-[15%]" src="/Vectores/linkit-slider-home-mobile.png" alt="computer" />
      </div>
      <div className="md:hidden w-screen flex justify-center pb-[1.5%] pt-[1.5%] bg-white">
        <div className="w-[60%] flex flex-row items-center justify-around">
          <img
            className="w-1/3  "
            src={isDarkMode ? starsWhite : starsBlue}
            alt="stars"
          />
          <span className="font-monserrat text-[0.5rem]  xs:ml-1 xs:font-light min-[400px]:text-[0.6rem] min-[450px]:text-[0.7rem] min-[500px]:text-[0.8rem] ssm:text-[0.9rem] sm:text-[1rem] min-[700px]:text-[1.1rem]  whitespace-nowrap items-center">
            {t("4/5 on Truspilot")}{" "}
            <Link
              to="https://es.trustpilot.com/review/linkit-hr.com"
              target="_blank"
              className="underline ml-2 font-semibold  xs:ml-1 xs:font-light"
            >
              {t("Leer reseñas")}
            </Link>
          </span>
        </div>
      </div>
      </div>
  )
}

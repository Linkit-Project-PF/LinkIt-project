import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../../redux/types";
import { useSelector } from "react-redux";
import starsBlue from "/Vectores/Stars-Trustpilot.svg";
import starsWhite from "/Vectores/MO-trustpilot.svg";
import { useState, useEffect } from "react";
import useWindowWidth from "../../../../Utils/useWindowWidth";

export default function ModuloTalentosA() {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
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
    <div
      className={`bg-linkIt-500 dark:bg-linkIt-200  dark:text-white h-full md:pt-0`}
      style={
        windowWidth <= 767
          ? { marginTop: `${fixedHeight}px`, paddingTop: fixedHeight * 29 /100 }
          : undefined
      }
    >
      <div className="flex justify-center w-screen">
        <h2 className="md:hidden font-bold font-manrope xs:text-[1rem] min-[340px]:text-[1.1rem] min-[360px]:text-[1.2rem] min-[390px]:text-[1.2rem] min-[410px]:text-[1.4rem] min-[430px]:text-[1.4rem] min-[465px]:text-[1.5rem] min-[500px]:text-[1.7rem] ssm:text-[2rem] min-[600px]:text-[2.1rem] sm:text-[2.2rem] min-[670px]:text-[2.3rem] min-[700px]:text-[2.4rem] leading-tight w-[90%]">
          {t("Conéctate con los mejores")}<br/>{t("proyectos IT")}
        </h2>
      </div>
      <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white md:pt-[17vh] lg:pt-[19vh] ">
        <div className="sm:mt-[5%] md:mt-0 md:space-y-[5%] md:p-[9%]  pl-[6%] min-[300px]:ml-[7px] min-[350px]:ml-2 min-[450px]:ml-3 min-[500px]:ml-3 ssm:ml-4 md:ml-0 ">
          <h2 className="hidden md:block font-bold font-manrope xs:text-[1.0rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.6rem] w-[150%] ssm:w-[130%] sm:w-[115%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight ">
            {t("Conéctate con los mejores proyectos IT")}
          </h2>
          <h3 className="hidden md:block font-monserrat text-[0.8rem] lg:text-[1.5rem] md:text-[1.4rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%]  lg:w-[90%] xl:w-[85%] leading-tight">
            {t("Aplica a las mejores oportunidades")} <br />{" "}
            {t("de manera remota.")}
          </h3>
          <h3 className="md:hidden font-monserrat text-[0.4rem] xs:text-[0.6rem] min-[340px]:text-[0.7rem] min-[370px]:text-[0.7rem] min-[400px]:text-[0.8rem] min-[430px]:text-[0.9rem] min-[460px]:text-[0.9rem] min-[500px]:text-[1rem] ssm:text-[1.2rem]  min-[580px]:text-[1.3rem] sm:text-[1.4rem] min-[300px]:mt-[10%] ssm:mt-[10%] sm:mt-[5%] md:mt-0 min-[700px]:text-[1.5rem] w-[110%] ssm:w-[115%] sm:w-[115%] leading-tight">
            {t("Aplica a oportunidades")}
            <br />
            {t("laborales de manera remota.")}
          </h3>
          <div className="mt-[10%] md:mt-0 ">
            <a href="#vacantes">
              <motion.button
                className="background-button text-[0.3rem] min-[300px]:text-[0.4rem] min-[350px]:text-[0.5rem] [400px]:text-[0.5rem] min-[430px]:text-[0.6rem] min-[465px]:text-[0.7rem] min-[500px]:text-[0.8rem] ssm:text-[0.9rem] min-[600px]:text-[0.9rem] sm:text-[1.1rem] min-[700px]:text-[1.2rem] md:text-[1rem]"
                whileTap={{ scale: 0.9 }}
              >
                {t("Vacantes disponibles")}
              </motion.button>{" "}
            </a>
          </div>
          <div className="hidden md:flex relative  flex-row top-3">
            <img
              className="w-1/2 lg:w-1/4 "
              src={isDarkMode ? starsWhite : starsBlue}
              alt="stars"
            />
            <span className="font-monserrat text-[0.6rem]  xs:ml-1 xs:font-light md:text-[1rem] lg:text-[1.2rem] ml-2 flex whitespace-nowrap items-center">
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
        <img
          className="2xl:w-[93%] 2xl:h-[100%] 2xl:ml-12 2xl:mt-0 2xl:bottom-0  xl:w-[90%] xl:ml-6 lg:w-[100%] lg:h-[100%] xs:h-[95%] xs:w-[87%] sm:h-[95%] sm:w-[88%] w-full h-auto md:px-4 min-[400px]:ml-1 min-[450px]:ml-2 ssm:ml-3 ssm:h-[95%] ssm:w-[88%] md:w-full md:h-full xs:self-end  md:self-auto  md:mt-[15%] xl:mt-6"
          src="/Vectores/linkit-slider-talento.png"
          alt="computer"
        />
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
  );
}

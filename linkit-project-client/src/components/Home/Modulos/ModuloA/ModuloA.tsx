import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/types";
import { useState, useEffect, useCallback } from "react";

export default function ModuloA() {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const navigate = useNavigate();
  const [fixedHeight, setFixedHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateDimensions = useCallback(() => {
    setWindowWidth(window.innerWidth);
    const fixedNavbar = document.getElementById("Navbar");
    const fixedPreNavbar = document.getElementById("preNavbar");
    if (fixedNavbar && fixedPreNavbar) {
      setFixedHeight(fixedNavbar.offsetHeight + fixedPreNavbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [updateDimensions]);

  const goSoyEmpresa = () => navigate("/SoyEmpresa");
  const goSoyTalento = () => navigate("/SoyTalento");

  return (
    <div
      className="overflow-hidden md:pt-[17vh] bg-linkIt-500 dark:bg-linkIt-200 dark:text-white"
      style={
        windowWidth <= 767
          ? {
              marginTop: `${fixedHeight}px`,
              paddingTop: (fixedHeight * 29) / 100,
            }
          : undefined
      }
    >
      <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white">
        <div className="md:space-y-[5%] md:mt-4 md:p-[9%] md:pl-[6%] xs:pl-[9%]">
          <h1 className="hidden md:block font-bold font-manrope md:text-[2.3rem] md:w-[115%] sm:w-[135%] lg:w-[120%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[125%] 2xl:text-[5rem] leading-tight">
            {t(
              "Conectando al talento más destacado con los mejores proyectos IT"
            )}
          </h1>
          <h1 className="md:hidden font-bold font-manrope mt-[5%] xs:text-[1rem] min-[340px]:text-[1.1rem] min-[360px]:text-[1.2rem] min-[390px]:text-[1.2rem] min-[410px]:text-[1.4rem] min-[430px]:text-[1.4rem] min-[465px]:text-[1.5rem] min-[500px]:text-[1.7rem] ssm:text-[1.9rem] min-[570px]:text-[2rem] min-[600px]:text-[2.1rem] sm:text-[2.2rem] min-[670px]:text-[2.3rem] min-[700px]:text-[2.4rem] w-[110%] leading-tight">
            {t("Conectando los")}
            <br />
            {t("mejores talentos")}
            <br />
            {t("y proyectos")}
          </h1>
          <h2 className="hidden md:block font-montserrat text-[0.8rem] ssm:text-[0.9rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%] lg:w-[90%] xl:w-[85%] leading-tight">
            {t("Contrata y gestiona al mejor talento de manera global")}
          </h2>
          <div className="flex flex-col whitespace-nowrap md:space-x-2 mt-[7%] md:mt-0 md:flex-row">
            <motion.button
              className="background-button text-[0.3rem] min-[300px]:text-[0.4rem] min-[350px]:text-[0.5rem] [400px]:text-[0.5rem] min-[430px]:text-[0.6rem] min-[465px]:text-[0.7rem] min-[500px]:text-[0.8rem] ssm:text-[0.9rem] min-[600px]:text-[0.9rem] sm:text-[1.1rem] min-[700px]:text-[1.2rem] md:text-[1rem] mt-[5%]"
              onClick={goSoyEmpresa}
              whileTap={{ scale: 0.9 }}
            >
              {t("Contrata Talento")}
            </motion.button>
            <motion.button
              className="transparent-background-button text-[0.3rem] min-[300px]:text-[0.4rem] min-[350px]:text-[0.5rem] [400px]:text-[0.5rem] min-[430px]:text-[0.6rem] min-[465px]:text-[0.7rem] min-[500px]:text-[0.8rem] ssm:text-[0.9rem] min-[600px]:text-[0.9rem] sm:text-[1.1rem] min-[700px]:text-[1.2rem] md:text-[1rem] mt-[5%]"
              onClick={goSoyTalento}
              whileTap={{ scale: 0.9 }}
            >
              {t("Vacantes disponibles")}
            </motion.button>
          </div>
          <div className="hidden md:flex relative top-3">
            <img
              className="w-1/2 lg:w-1/4"
              src={
                isDarkMode
                  ? "/2025/Home/ModuleA/MO-trustpilot.webp"
                  : "/2025/Home/ModuleA/Stars-Trustpilot.webp"
              }
              alt="Trustpilot rating"
              width="100"
              height="20"
            />
            <span className={isDarkMode ? "font-montserrat text-[0.6rem] lg:text-[1.2rem] md:text-[1rem] ml-2 flex whitespace-nowrap items-center text-white" : "font-montserrat text-[0.6rem] lg:text-[1.2rem] md:text-[1rem] ml-2 flex whitespace-nowrap items-center"}>
              {t("4/5 on Truspilot")}
              <Link
                to="https://es.trustpilot.com/review/linkit-hr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-2"
              >
                {t("Leer reseñas")}
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img
            src="/2025/Home/ModuleA/linkit-slider-home.webp"
            alt="LinkIT workspace illustration"
            className="w-full h-auto object-contain px-4 md:px-0 md:ml-12 lg:ml-[15%] xl:ml-36 2xl:ml-36
                       md:w-[80%] lg:w-[75%] xl:w-[65%] 2xl:w-[68%]
                       md:mt-16 lg:mt-16 xl:mt-24 2xl:mt-12
                       md:mb-4 lg:mb-8 xl:mb-2"
          />
        </div>
      </div>
      <div className="md:hidden w-screen flex justify-center py-[1.5%] mt-8 bg-white">
        <div className="w-[60%] flex flex-row items-center justify-around">
          <img
            className="w-1/3"
            src={
              isDarkMode
                ? "/2025/Home/ModuleA/MO-trustpilot.webp"
                : "/2025/Home/ModuleA/Stars-Trustpilot.webp"
            }
            alt="Trustpilot rating"
            width="100"
            height="20"
          />
          <span className={isDarkMode ? "font-montserrat text-[0.6rem] lg:text-[1.2rem] md:text-[1rem] ml-2 flex whitespace-nowrap items-center text-black" : "font-montserrat text-[0.6rem] lg:text-[1.2rem] md:text-[1rem] ml-2 flex whitespace-nowrap items-center"}>
            {t("4/5 on Truspilot")}{" "}
            <Link
              to="https://es.trustpilot.com/review/linkit-hr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-2 font-semibold xs:ml-1 xs:font-light"
            >
              {t("Leer reseñas")}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

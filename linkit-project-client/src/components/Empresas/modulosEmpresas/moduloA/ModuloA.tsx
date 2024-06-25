import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { RootState } from "../../../../redux/types";
import { useSelector } from "react-redux";
import starsBlue from "/Vectores/Stars-Trustpilot.svg";
import starsWhite from "/Vectores/MO-trustpilot.svg";
import useWindowWidth from "../../../../Utils/useWindowWidth";
import { useState, useEffect } from "react";

export default function ModuloA() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const [fixedHeight, setFixedHeight] = useState(0);
  const windowWidth = useWindowWidth();

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa");
    setTimeout(() => {
      window.location.href = "#contactanosE";
    }, 0);
  };

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
          ? { marginTop: `${fixedHeight}px`, paddingTop: fixedHeight * 29 / 100 }
          : undefined
      }
    >
      <div className="flex justify-center w-screen">
        <h2 className="md:hidden font-bold font-manrope xs:text-[1rem] min-[340px]:text-[1.1rem] min-[360px]:text-[1.2rem] min-[390px]:text-[1.2rem] min-[410px]:text-[1.4rem] min-[430px]:text-[1.4rem] min-[465px]:text-[1.5rem] min-[500px]:text-[1.7rem] ssm:text-[1.9rem] min-[570px]:text-[2rem] min-[600px]:text-[2.1rem] sm:text-[2.2rem] min-[670px]:text-[2.3rem] min-[700px]:text-[2.4rem] w-[90%] leading-tight ">
          {t("Contrata y escala con el mejor")}<br/>{t("talento IT en tan solo 5 días!")}
        </h2>
      </div>
      <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white  md:pt-[17vh] lg:pt-[19vh]">
        <div className="sm:mt-[5%] md:mt-0 md:space-y-[5%] md:p-[9%]  pl-[6%] min-[300px]:ml-[7px] min-[350px]:ml-2 min-[450px]:ml-3 min-[500px]:ml-3 ssm:ml-4 md:ml-0">
          <h2 className="hidden md:block font-bold font-manrope md:text-[2.3rem] w-[150%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight ">
            {t("Contrata y escala")} {t("con el mejor talento IT")}{" "}
            {t("en tan solo 5 días!")}
          </h2>
          <h3 className="md:hidden ont-monserrat text-[0.4rem] xs:text-[0.6rem] min-[340px]:text-[0.7rem] min-[370px]:text-[0.7rem] min-[400px]:text-[0.8rem] min-[430px]:text-[0.9rem] min-[460px]:text-[0.9rem] min-[500px]:text-[1rem] ssm:text-[1.2rem]  min-[580px]:text-[1.3rem] sm:text-[1.4rem] min-[300px]:mt-[10%] ssm:mt-[10%] sm:mt-[5%] md:mt-0 min-[700px]:text-[1.5rem] w-[110%] ssm:w-[115%] sm:w-[115%] leading-tight">
            {t("Escala, gestiona y retiene al")} <br/> {t("mejor talento del mundo.")}
          </h3>
          <h3 className="hidden md:block ont-monserrat md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] sm:w-[75%] lg:w-[90%] xl:w-[85%] leading-tight">
            {t("Escala, gestiona y retiene al mejor")} {t("talento del mundo.")}
          </h3>
          <div className="hidden md:block">
            <motion.button
              className="background-button md:text-[1rem]"
              onClick={goSoyEmpresa}
              whileTap={{ scale: 0.9 }}
            >
              {"Contacta para contratar"}
            </motion.button>
          </div>
          <div className="md:hidden mt-[10%] md:mt-0">
            <motion.button
              className="background-button text-[0.3rem] min-[300px]:text-[0.4rem] min-[350px]:text-[0.5rem] [400px]:text-[0.5rem] min-[430px]:text-[0.6rem] min-[465px]:text-[0.7rem] min-[500px]:text-[0.8rem] ssm:text-[0.9rem] min-[600px]:text-[0.9rem] sm:text-[1.1rem] min-[700px]:text-[1.2rem] md:text-[1rem]"
              onClick={goSoyEmpresa}
              whileTap={{ scale: 0.9 }}
            >
              {"Contrata Talento"}
            </motion.button>
          </div>
          <div className="hidden md:flex relative top-3">
            <img
              className="w-1/2 lg:w-1/4 "
              src={isDarkMode ? starsWhite : starsBlue}
              alt="stars"
            />
            <span className="font-monserrat text-[0.6rem] xs:ml-1 xs:font-light lg:text-[1.2rem] md:text-[1rem] ml-2 flex whitespace-nowrap items-center">
              {t("4/5 en Truspilot")}{" "}
              <Link
                to="https://es.trustpilot.com/review/linkit-hr.com"
                target="_blank"
                className="underline ml-2 font-semibold xs:ml-1 xs:font-light"
              >
                {t("Leer reseñas")}
              </Link>
            </span>
          </div>
        </div>
        <img
          className="2xl:w-[89%] 2xl:h-[97%] 2xl:ml-12 2xl:bottom-0 xl:w-[90%]  xl:ml-6 lg:w-[100%] lg:h-[100%] xs:w-[85%] xs:h-[95%] xs:self-end  md:self-auto md:w-full md:h-auto md:ml-3 md:px-4 md:mt-[15%] xl:mt-6"
          src="/Vectores/linkit-slider-empresa2.0.png"
          alt="Businessman"
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

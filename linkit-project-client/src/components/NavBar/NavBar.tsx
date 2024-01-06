import "./NavBar.css";
import LogoBlue from "/Linkit-logo/linkit-logo-2024-blue.svg";
import LogoWhite from "/Linkit-logo/linkit-logo-2024-white.svg";
import arrow from "/Vectores/arrow.png";
import whiteArrow from "/Vectores/white-arrow.png";
import Languaje from "../../Utils/Language";
import userGreen from "/Vectores/user-green.svg";
import userWhite from "/Vectores/user-white.svg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  setPressLogin,
  setPressSignUp,
  setPressRegister,
} from "../../redux/features/registerLoginSlice";
import { logout } from "../../redux/features/AuthSlice";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/types";

const staggerMenuItems = stagger(0.03, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      animate(
        "ul",
        {
          clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(10% 50% 90% 50% )",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );

      animate(
        "li",
        isOpen
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
        {
          duration: 0.1,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
    }
  }, [isOpen]);

  return scope;
}

function NavBar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const pressLogin = useSelector(
    (state: RootState) => state.registerLogin.pressLogin
  );
  const pressSignUp = useSelector(
    (state: RootState) => state.registerLogin.pressSignUp
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpenEmpresa, setIsOpenEmpresa] = useState(false);
  const [isOpenRecursos, setIsOpenRecursos] = useState(false);
  const [isOpenQS, setIsOpenQS] = useState(false);
  const [isOpenSoyTalento, setIsOpenSoyTalento] = useState(false);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const [userIsOpen, setUserIsOpen] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const scopeQS = useMenuAnimation(isOpenQS);
  const scopeRecursos = useMenuAnimation(isOpenRecursos);
  const scopeEmpresa = useMenuAnimation(isOpenEmpresa);
  const scopeSoyTalento = useMenuAnimation(isOpenSoyTalento);

  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.Authentication
  );

  const goAdminDashboard = () => {
    navigate("/AdminDashboard/statistics/OKRs");
  };
  const goHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const isActiveHome = location.pathname === "/";
  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa");
  };

  const isActiveEmpresa = location.pathname === "/SoyEmpresa";

  const navigatetoServicesCompany = () => {
    navigate("/SoyEmpresa");
    setTimeout(() => {
      window.location.href = "#serviciosE";
    }, 0);
  };

  const navigatetoProcessCompany = () => {
    navigate("/SoyEmpresa");
    setTimeout(() => {
      window.location.href = "#procesoE";
    }, 0);
  };

  const navigatetoQuoteCompany = () => {
    navigate("/SoyEmpresa");
    setTimeout(() => {
      window.location.href = "#calculadora";
    }, 1000);
  };

  const goSoyTalento = () => {
    navigate("/SoyTalento");
  };
  const isActiveTalento = location.pathname === "/SoyTalento";

  const navigatetoServicesTalent = () => {
    navigate("/SoyTalento");
    setTimeout(() => {
      window.location.href = "#serviciosT";
    }, 0);
  };

  const navigatetoProcessTalent = () => {
    navigate("/SoyTalento");
    setTimeout(() => {
      window.location.href = "#procesoT";
    }, 0);
  };

  const navigatetoVacanciesTalent = () => {
    navigate("/SoyTalento");
    setTimeout(() => {
      window.location.href = "#vacantes";
    }, 0);
  };

  const goRecursos = () => {
    navigate("/recursos");
  };
  const isActiveRecursos =
    location.pathname === "/recursos" ||
    location.pathname === "/recursos/libreria";

  const navigatetoBlogs = () => {
    navigate("/recursos");
    setTimeout(() => {
      window.location.href = "#blogs";
    }, 0);
  };

  const navigatetoEbooks = () => {
    navigate("/recursos");
    setTimeout(() => {
      window.location.href = "#ebooks";
    }, 0);
  };

  const navigatetoWebinars = () => {
    navigate("/recursos");
    setTimeout(() => {
      window.location.href = "#webinars";
    }, 0);
  };

  const navigatetoFAQ = () => {
    navigate("/recursos");
    setTimeout(() => {
      window.location.href = "#FAQ";
    }, 0);
  };

  const goQS = () => {
    navigate("/quienesSomos");
  };
  const isActiveQS = location.pathname === "/quienesSomos";

  const navigatetoMission = () => {
    navigate("/quienesSomos");
    setTimeout(() => {
      window.location.href = "#mision";
    }, 0);
  };
  const navigatetoVision = () => {
    navigate("/quienesSomos");
    setTimeout(() => {
      window.location.href = "#vision";
    }, 0);
  };
  const navigatetoValues = () => {
    navigate("/quienesSomos");
    setTimeout(() => {
      window.location.href = "#valores";
    }, 0);
  };
  const navigatetoHistory = () => {
    navigate("/quienesSomos");
    setTimeout(() => {
      window.location.href = "#historia";
    }, 0);
  };
  const navigatetoInternalTalent = () => {
    navigate("/quienesSomos");
    setTimeout(() => {
      window.location.href = "#talento-Interno";
    }, 0);
  };
  const navigatetoHome = () => {
    navigate("/");
    setTimeout(() => {
      window.location.href = "#inicio";
      window.scrollTo({
        top: 0,
      });
    }, 0);
  };

  const darkMode = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  useEffect(() => {
    if (toggleDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleDarkMode]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-fit w-screen p-0 m-0">
      <div className="preNavbar">
        <span className="">
          {t("Contrata y gestiona talentos de forma global con LinkIT")} |{" "}
        </span>
        <NavLink
          to="https://calendly.com/linkit-project-henry/30min"
          className="ml-2 underline underline-offset-[3.3px]"
          target="_blank"
        >
          {t("Comienza ahora!")} →
        </NavLink>
      </div>

      <div className="navBar">
        <img
          src={!toggleDarkMode ? LogoBlue : LogoWhite}
          onClick={() => navigatetoHome()}
          alt="LinkIT-logo"
          className="relative w-[15%] md:w-[10%] lg:w-[6%] xs:left-2 md:left-10 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
        />

        {windowWidth >= 1024 ? (
          <motion.div className={`container-navigation bg-transparent`}>
            <motion.button
              className={`flex items-center mt-[0.3%] border-b-[0.5vh] hover:border-b-linkIt-300 hover:text-linkIt-300 dark:hover:border-b-white dark:hover:text-white  ${
                isActiveHome
                  ? "text-linkIt-300 border-b-linkIt-300 dark:border-b-white dark:text-white"
                  : "border-b-transparent"
              }`}
              onClick={() => goHome()}
            >
              {t("Inicio")}
            </motion.button>

            <motion.nav
              className=""
              ref={scopeEmpresa}
              onMouseEnter={() => setIsOpenEmpresa(true)}
              onMouseLeave={() => setIsOpenEmpresa(false)}
            >
              <motion.button
                className={`flex h-full items-center border-b-[0.5vh] border-b-transparent hover:text-linkIt-300 dark:hover:text-white ${
                  isActiveEmpresa ? "text-linkIt-300 dark:text-white " : ""
                }`}
                whileTap={{ scale: 0.97 }}
                onClick={() => goSoyEmpresa()}
              >
                {t("Soy Empresa")}
                <div className="arrow w-[0.7vw] ml-[0.3vw] hidden lg:block">
                  <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
                </div>
              </motion.button>
              <ul
                className="relative right-[10%] bg-white dark:bg-linkIt-400 rounded-b-[7px] w-[120%] h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
                style={{
                  pointerEvents: isOpenEmpresa ? "auto" : "none",
                  clipPath: "inset(10% 50% 90% 50%)",
                }}
              >
                <div className="absolute w-[85%] left-[7.5%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 dark:after:bg-white after:absolute"></div>
                <li className={`hover:text-linkIt-300`}>
                  <button onClick={navigatetoServicesCompany}>
                    {t("Servicios")}
                  </button>
                </li>
                <hr className="w-[100%]" />
                <li className=" hover:text-linkIt-300">
                  <button onClick={navigatetoProcessCompany}>
                    {t("Proceso")}
                  </button>
                </li>
                <hr className="w-[100%]" />
                <li className=" hover:text-linkIt-300">
                  <button onClick={navigatetoQuoteCompany}>
                    {t("Cotiza")}
                  </button>{" "}
                </li>
              </ul>{" "}
            </motion.nav>

            <motion.nav
              className=""
              ref={scopeSoyTalento}
              onMouseEnter={() => setIsOpenSoyTalento(true)}
              onMouseLeave={() => setIsOpenSoyTalento(false)}
            >
              <motion.button
                className={`flex h-full items-center border-b-[0.5vh] border-b-transparent hover:text-linkIt-300 dark:hover:text-white ${
                  isActiveTalento ? "text-linkIt-300 dark:text-white" : ""
                }`}
                whileTap={{ scale: 0.97 }}
                onClick={() => goSoyTalento()}
              >
                {t("Soy Talento")}
                <div className="arrow w-[0.7vw] ml-[0.3vw] hidden lg:block">
                  <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
                </div>
              </motion.button>
              <ul
                className="relative right-[10%] bg-white rounded-b-[7px] dark:bg-linkIt-400 w-[120%] h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
                style={{
                  pointerEvents: isOpenSoyTalento ? "auto" : "none",
                  clipPath: "inset(10% 50% 90% 50%)",
                }}
              >
                <div className="absolute w-[85%] left-[7.5%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute dark:after:bg-white"></div>
                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoVacanciesTalent}>
                    {t("Vacantes")}
                  </button>
                </li>
                <hr className="w-[100%]" />
                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoServicesTalent}>
                    {t("Servicios")}
                  </button>
                </li>
                <hr className="w-[100%]" />
                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoProcessTalent}>
                    {t("Proceso")}
                  </button>
                </li>
              </ul>
            </motion.nav>

            <motion.nav
              className=""
              ref={scopeRecursos}
              onMouseEnter={() => setIsOpenRecursos(true)}
              onMouseLeave={() => setIsOpenRecursos(false)}
            >
              <motion.button
                className={`flex h-full items-center border-b-[0.5vh] border-b-transparent hover:text-linkIt-300 dark:hover:text-white ${
                  isActiveRecursos ? "text-linkIt-300 dark:text-white" : ""
                }`}
                whileTap={{ scale: 0.97 }}
                onClick={() => goRecursos()}
              >
                {t("Recursos")}
                <div className="arrow w-[0.7vw] ml-[0.3vw]">
                  <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
                </div>
              </motion.button>
              <ul
                className="bg-white right-[10%] relative rounded-b-[7px] dark:bg-linkIt-400 w-[120%] h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
                style={{
                  pointerEvents: isOpenRecursos ? "auto" : "none",
                  clipPath: "inset(10% 50% 90% 50%)",
                }}
              >
                <div className="absolute w-[85%] left-[7.5%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute dark:after:bg-white"></div>
                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoBlogs}>{t("Blogs")}</button>
                </li>
                <hr className="w-[100%]" />

                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoEbooks}>{t("Ebooks")}</button>
                </li>
                <hr className="w-[100%]" />

                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoWebinars}>{t("Webinars")}</button>
                </li>
                <hr className="w-[100%]" />

                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoFAQ}>FAQ</button>
                </li>
                <hr className="w-[100%]" />

                <li className="hover:text-linkIt-300">
                  <a
                    onClick={() => navigate("/recursos/libreria")}
                    className="cursor-pointer"
                  >
                    {t("Librería")}
                  </a>
                </li>
              </ul>
            </motion.nav>

            <motion.nav
              className=""
              ref={scopeQS}
              onMouseEnter={() => setIsOpenQS(true)}
              onMouseLeave={() => setIsOpenQS(false)}
            >
              <motion.button
                className={`flex h-full items-center border-b-[0.5vh] border-b-transparent hover:text-linkIt-300 dark:hover:text-white ${
                  isActiveQS ? "text-linkIt-300 dark:text-white" : ""
                }`}
                whileTap={{ scale: 0.97 }}
                onClick={() => goQS()}
              >
                {t("Quiénes Somos")}
                <div className="arrow w-[0.7vw] ml-[0.3vw]">
                  <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
                </div>
              </motion.button>
              <ul
                className="relative right-[10%] bg-white rounded-b-[7px] dark:bg-linkIt-400 w-[120%] h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
                style={{
                  pointerEvents: isOpenQS ? "auto" : "none",
                  clipPath: "inset(10% 50% 90% 50%)",
                }}
              >
                <div className="absolute w-[85%] left-[7.5%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute dark:after:bg-white"></div>
                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoMission}>{t("Misión")}</button>
                </li>
                <hr className="w-[100%]" />

                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoVision}>{t("Visión")}</button>
                </li>
                <hr className="w-[100%]" />

                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoValues}>{t("Valores")}</button>
                </li>
                <hr className="w-[100%]" />

                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoHistory}>{t("Historia")}</button>
                </li>
                <hr className="w-[100%]" />

                <li className="hover:text-linkIt-300">
                  <button onClick={navigatetoInternalTalent}>
                    {t("Talento interno")}
                  </button>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        ) : (
          <motion.ul
            className={`container-navigation ${
              burgerMenu ? "block" : "hidden"
            }`}
            initial={{ opacity: 0, scale: 0, y: "-50%" }}
            animate={{
              opacity: burgerMenu ? 1 : 0,
              scale: burgerMenu ? 1 : 0,
              y: burgerMenu ? "0%" : "-50%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center text-[0.8rem] xs:text-[1rem] md:text-[1.3rem]">
              <Languaje />

              <div className="cl-toggle-switch top-[1px]">
                <label className="cl-switch">
                  <input type="checkbox" onChange={darkMode} />
                  <span></span>
                </label>
              </div>
            </div>
            <li
              className={`flex cursor-pointer items-center mt-[0.3%] hover:text-linkIt-300 dark:hover:text-white  ${
                isActiveHome ? "text-linkIt-300 dark:text-white" : ""
              }`}
              onClick={() => goHome()}
            >
              {t("Inicio")}
            </li>
            <li
              className={`flex cursor-pointer h-full items-center hover:text-linkIt-300 dark:hover:text-white ${
                isActiveEmpresa ? "text-linkIt-300 dark:text-white " : ""
              }`}
              onClick={() => goSoyEmpresa()}
            >
              {t("Soy Empresa")}
            </li>
            <li
              className={`flex cursor-pointer h-full items-center hover:text-linkIt-300 dark:hover:text-white ${
                isActiveTalento ? "text-linkIt-300 dark:text-white" : ""
              }`}
              onClick={() => goSoyTalento()}
            >
              {" "}
              {t("Soy Talento")}
            </li>
            <li
              className={`flex cursor-pointer h-full items-center hover:text-linkIt-300 dark:hover:text-white ${
                isActiveRecursos ? "text-linkIt-300 dark:text-white" : ""
              }`}
              onClick={() => goRecursos()}
            >
              {" "}
              {t("Recursos")}
            </li>
            <li
              className={`flex cursor-pointer h-full items-center hover:text-linkIt-300 dark:hover:text-white ${
                isActiveQS ? "text-linkIt-300 dark:text-white" : ""
              }`}
              onClick={() => goQS()}
            >
              {" "}
              {t("Quiénes Somos")}
            </li>
          </motion.ul>
        )}

        <div className="containerBtnsNavbar">
          {/* toggleDarkMode */}

          <div className="cl-toggle-switch top-[1px] hidden lg:block">
            <label className="cl-switch">
              <input type="checkbox" onChange={darkMode} />
              <span></span>
            </label>
          </div>

          <motion.button
            className={`background-button`}
            onClick={() => goSoyEmpresa()}
            whileTap={{ scale: 0.9 }}
          >
            {t("Contrata Talento")}
          </motion.button>
          <motion.button
            className={`transparent-background-button`}
            onClick={() => goSoyTalento()}
            whileTap={{ scale: 0.9 }}
          >
            {t("Vacantes disponibles")}
          </motion.button>
          <div className="relative hidden lg:block 2xl:ml-3">
            <Languaje />
          </div>
          <div className="relative flex flex-col w-[3rem] h-[2rem] justify-start right-[8%] pt-[2.5%] xs:pt-[1.3%] 2xl:ml-6">
            <motion.div
              className={`user-container ${
                userIsOpen
                  ? "bg-linkIt-300 right-[65%] w-[5rem] lg:w-[8rem]"
                  : "bg-transparent w-[40%] xs:w-[50%] lg:w-[75%]"
              } lg:bottom-2`}
              onClick={() => setUserIsOpen(true)}
              onMouseLeave={() => setUserIsOpen(false)}
            >
              <motion.img
                className={`relative rounded-full border-linkIt-300 p-0.5 ${
                  userIsOpen ? "w-1/4" : "border left-[100%]"
                }`}
                src={userIsOpen ? userWhite : userGreen}
                alt="userIcon"
              />
              <motion.ul
                className={` bg-white dark:bg-linkIt-400 rounded-b-[7px] w-full h-fit mt-[5%] p-[7%] ${
                  userIsOpen ? "block" : "hidden"
                }`}
                onMouseLeave={() => setUserIsOpen(false)}
              >
                {isAuthenticated && role === "user" ? (
                  <div>
                    <li className="text-[0.6rem] lg:text-[0.9rem] mb-2 mt-0.5 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        className="profile hover:text-linkIt-300"
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        {t("Mis datos")}
                      </button>
                    </li>
                    <hr className="w-[100%]" />
                    <li className="text-[0.6rem] lg:text-[0.9rem] my-2 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        className="profile hover:text-linkIt-300"
                        onClick={() => navigate("/dashboard#postulations")}
                      >
                        {t("Mis postulaciones")}
                      </button>
                    </li>
                    <hr className="w-[100%]" />
                    <li className="text-[0.6rem] lg:text-[0.9rem] mt-2 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        className="logout hover:text-linkIt-300"
                        onClick={handleLogout}
                      >
                        {t("Cerrar sesión")}
                      </button>
                    </li>
                  </div>
                ) : isAuthenticated && role === "admin" ? (
                  <div>
                    <li className="text-[0.6rem] lg:text-[0.9rem] mb-2 mt-0.5 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        onClick={goAdminDashboard}
                        className="profile hover:text-linkIt-300"
                      >
                        {t("Panel")}
                      </button>
                    </li>
                    <hr className="w-[100%]" />
                    <li className="text-[0.6rem] lg:text-[0.9rem] mt-2 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        className="logout hover:text-linkIt-300"
                        onClick={handleLogout}
                      >
                        {t("Cerrar sesión")}
                      </button>
                    </li>
                  </div>
                ) : isAuthenticated && role === "company" ? (
                  <div>
                    <li className="text-[0.6rem] lg:text-[0.9rem] mb-2 mt-0.5 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        className="profile hover:text-linkIt-300"
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        {t("Mis datos")}
                      </button>
                    </li>
                    <hr className="w-[100%]" />
                    <li className="text-[0.6rem] lg:text-[0.9rem] my-2 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button className="profile hover:text-linkIt-300">
                        {t("Mis vacantes")}
                      </button>
                    </li>
                    <hr className="w-[100%]" />
                    <li className="text-[0.6rem] lg:text-[0.9rem] mt-2 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        className="logout hover:text-linkIt-300"
                        onClick={handleLogout}
                      >
                        {t("Cerrar sesión")}
                      </button>
                    </li>
                  </div>
                ) : (
                  <div>
                    <li className="text-[0.6rem] lg:text-[0.9rem] mb-2 mt-0.5 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        className=" hover:text-linkIt-300"
                        onClick={() => {
                          pressLogin === "visible"
                            ? dispatch(setPressLogin("hidden"))
                            : dispatch(setPressLogin("visible")),
                            dispatch(setPressSignUp("hidden"));
                        }}
                      >
                        {t("Inicia Sesión")}
                      </button>
                    </li>
                    <hr className="w-[100%]" />
                    <li className=" text-[0.6rem] lg:text-[0.9rem] mt-2 font-montserrat hover:text-linkIt-300 transition-all duration-200 ease-in-out">
                      <button
                        className=" hover:text-linkIt-300"
                        onClick={() => {
                          pressSignUp === "visible"
                            ? dispatch(setPressSignUp("hidden"))
                            : dispatch(setPressSignUp("visible")),
                            dispatch(setPressLogin("hidden")),
                            dispatch(setPressRegister("hidden")),
                            setPressRegister("hidden");
                        }}
                      >
                        {t("Regístrate")}
                      </button>
                    </li>
                  </div>
                )}
              </motion.ul>{" "}
            </motion.div>
          </div>

          {/* burguerMenu */}

          <button
            className="relative right-[10%] xs:right-[5%] lg:hidden"
            onClick={() => setBurgerMenu(!burgerMenu)}
          >
            <div
              className={`relative flex overflow-hidden items-center justify-center transform transition-all`}
            >
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-linkIt-300 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    burgerMenu ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`bg-linkIt-300 h-[2px] w-7 rounded transform transition-all duration-300 ${
                    burgerMenu ? "translate-x-10 delay-75" : ""
                  } `}
                ></div>
                <div
                  className={`bg-linkIt-300 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    burgerMenu ? "translate-x-10 delay-150" : ""
                  }`}
                ></div>

                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex  ${
                    burgerMenu ? " w-12 translate-x-0" : " w-0"
                  } `}
                >
                  <div
                    className={`absolute bg-black dark:bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                      burgerMenu ? "rotate-45" : ""
                    }`}
                  ></div>
                  <div
                    className={`absolute bg-black dark:bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                      burgerMenu ? "-rotate-45" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

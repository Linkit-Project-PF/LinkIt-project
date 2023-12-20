import "./NavBar.css";
import LogoBlue from "/Linkit-logo/linkit-logos-web_4-logo-horizontal-azul.svg";
import LogoWhite from "/Linkit-logo/linkit-logos-web_5-logo-horizontal-blanco.svg";
import arrow from "/Vectores/arrow.png";
import whiteArrow from "/Vectores/white-arrow.png";
import Languaje from "../../Utils/Language";
import iconUser from "/Vectores/iconUser.png";
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
  }, [isOpen]);

  return scope;
}

function NavBar() {
  const {t}= useTranslation()
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
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenSoyTalento, setIsOpenSoyTalento] = useState(false);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const scopeQS = useMenuAnimation(isOpenQS);
  const scopeUser = useMenuAnimation(isOpenUser);
  const scopeRecursos = useMenuAnimation(isOpenRecursos);
  const scopeEmpresa = useMenuAnimation(isOpenEmpresa);
  const scopeSoyTalento = useMenuAnimation(isOpenSoyTalento);

  const {isAuthenticated, role} = useSelector((state: RootState) => state.Authentication)

  const goAdminDashboard = () => {
    navigate("/AdminDashboard")
  }
  const goHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  }

  const isActiveHome = location.pathname === "/";
  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa");
  };

  const isActiveEmpresa = location.pathname === "/SoyEmpresa";

  const navigatetoServicesCompany = () => { 
    navigate("/SoyEmpresa")
    setTimeout(() => {
      window.location.href = '#serviciosE';
    }, 0); 
  }

  const navigatetoProcessCompany = () => {
    navigate('/SoyEmpresa')
    setTimeout(() => {
      window.location.href = '#procesoE';
    }, 0);
    }


  const navigatetoQuoteCompany = () => {
    navigate('/SoyEmpresa')
    setTimeout(() => {
      window.location.href = '#calculadora';
    }, 1000);
    }
  
  const goSoyTalento = () => {
    navigate("/SoyTalento");
  };
  const isActiveTalento = location.pathname === "/SoyTalento";

  const navigatetoServicesTalent = () => {
    navigate('/SoyTalento')
    setTimeout(() => {
      window.location.href = '#serviciosT';
    }, 0);
    }

  const navigatetoProcessTalent = () => {
    navigate('/SoyTalento')
    setTimeout(() => {
      window.location.href = '#procesoT';
    }, 0);
    }
    
  const navigatetoVacanciesTalent = () => {
    navigate('/SoyTalento')
    setTimeout(() => {
      window.location.href = '#vacantes';
    }, 0);
    }


  const goRecursos = () => {
    navigate("/recursos");
  };
  const isActiveRecursos = location.pathname === "/recursos" || location.pathname === "/recursos/libreria";

  const navigatetoBlogs = () => {
    navigate('/recursos')
    setTimeout(() => {
      window.location.href = '#blogs';
    }, 0);
    }

  const navigatetoEbooks = () => {
    navigate('/recursos')
    setTimeout(() => {
      window.location.href = '#ebooks';
    }, 0);
    }

  const navigatetoWebinars = () => {
    navigate('/recursos')
    setTimeout(() => {
      window.location.href = '#webinars';
    }, 0);
    }

  const navigatetoFAQ = () => {
    navigate('/recursos')
    setTimeout(() => {
      window.location.href = '#FAQ';
    }, 0);
    }

  const goQS = () => {
    navigate("/quienesSomos");
  };
  const isActiveQS = location.pathname === "/quienesSomos";

  const navigatetoMission = () => {
    navigate('/quienesSomos')
    setTimeout(() => {
      window.location.href = '#mision';
    }, 0);
    }
  const navigatetoVision = () => {
    navigate('/quienesSomos')
    setTimeout(() => {
      window.location.href = '#vision';
    }, 0);
    }
  const navigatetoValues = () => {
    navigate('/quienesSomos')
    setTimeout(() => {
      window.location.href = '#valores';
    }, 0);
    }
  const navigatetoHistory = () => {
    navigate('/quienesSomos')
    setTimeout(() => {
      window.location.href = '#historia';
    }, 0);
    }
  const navigatetoInternalTalent = () => {
    navigate('/quienesSomos')
    setTimeout(() => {
      window.location.href = '#talento-Interno';
    }, 0);
    }
  const navigatetoHome = () => {
    navigate('/')
    setTimeout(() => {
      window.location.href = '#inicio';
      window.scrollTo({
        top: 0,
      })
    }, 0);
  }

  const darkMode = () => { 
    setToggleDarkMode(!toggleDarkMode)
  }
  useEffect(() => {
    if (toggleDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
   }, [toggleDarkMode])
  return (
    <div>
      <div className="preNavbar">
        <span className="">
          {t('Contrata y gestiona talentos de forma global con LinkIT')} |{" "}
        </span>
        <NavLink
          to="https://calendly.com/linkit-project-henry/30min"
          className="ml-2 underline underline-offset-[3.3px]"
          target="_blank"
        >
          {t('Comienza ahora!')} →
        </NavLink>
      </div>
      <nav className="navBar ">
        <div className="h-full w-[8vw]">
        <img
          src={!toggleDarkMode ? LogoBlue : LogoWhite}
          onClick={() => navigatetoHome()}
          alt="LinkIT-logo"
          className="h-full w-full object-cover hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
        />
         </div>
        
          <motion.button
            className={`flex items-center mt-[0.3%] border-b-[0.5vh] hover:border-b-linkIt-300 hover:text-linkIt-300 dark:hover:border-b-white dark:hover:text-white  ${isActiveHome ? "text-linkIt-300 border-b-linkIt-300 dark:border-b-white dark:text-white" : "border-b-transparent"}`}
            onClick={() => goHome()}
          >
            {t('Inicio')}
          </motion.button>

          <motion.nav
            className=""
            ref={scopeEmpresa}
            onMouseEnter={() => setIsOpenEmpresa(true)}
            onMouseLeave={() => setIsOpenEmpresa(false)}
          >
            <motion.button
              className={`flex h-full items-center border-b-[0.5vh] border-b-transparent hover:text-linkIt-300 dark:hover:text-white ${isActiveEmpresa ? "text-linkIt-300 dark:text-white " : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goSoyEmpresa()}
            >
              {t('Soy Empresa')}
              <div className="arrow w-[0.7vw] ml-[0.3vw]">
                <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white dark:bg-linkIt-400 rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenEmpresa ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <div className="absolute w-[80%] left-[10%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 dark:after:bg-white after:absolute"></div>
              <li className={`hover:text-linkIt-300`}>
                <button onClick={navigatetoServicesCompany} >{t('Servicios')}</button>
              </li>
              <hr className="w-[100%]" />
              <li className=" hover:text-linkIt-300">
                <button onClick={navigatetoProcessCompany}>{t('Proceso')}</button>
              </li>
              <hr className="w-[100%]" />
              <li className=" hover:text-linkIt-300">
                <button  onClick={navigatetoQuoteCompany}>{t('Cotiza')}</button> </li>
            </ul>{" "}
          </motion.nav>


          <motion.nav
            className=""
            ref={scopeSoyTalento}
            onMouseEnter={() => setIsOpenSoyTalento(true)}
            onMouseLeave={() => setIsOpenSoyTalento(false)}
          >
            <motion.button
              className={`flex h-full items-center border-b-[0.5vh] border-b-transparent hover:text-linkIt-300 dark:hover:text-white ${isActiveTalento ? "text-linkIt-300 dark:text-white" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goSoyTalento()}
            >
              {t('Soy Talento')}
              <div className="arrow w-[0.7vw] ml-[0.3vw]">
                <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] dark:bg-linkIt-400 w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenSoyTalento ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <div className="absolute w-[80%] left-[10%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute dark:after:bg-white"></div>
              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoVacanciesTalent}>{t('Vacantes')}</button>
              </li>
              <hr className="w-[100%]" />
              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoServicesTalent}>{t('Servicios')}</button>
              </li>
              <hr className="w-[100%]" />
              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoProcessTalent}>{t('Proceso')}</button>
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
              className={`flex h-full items-center border-b-[0.5vh] border-b-transparent hover:text-linkIt-300 dark:hover:text-white ${isActiveRecursos ? "text-linkIt-300 dark:text-white" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goRecursos()}
            >
              {t('Recursos')}
              <div className="arrow w-[0.7vw] ml-[0.3vw]">
                <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="bg-white relative rounded-b-[7px] dark:bg-linkIt-400 w-full h-fit p-[0.5vw] pr-[1.4vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenRecursos ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <div className="absolute w-[80%] left-[10%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute dark:after:bg-white"></div>
              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoBlogs}>{t('Blogs')}</button>
              </li>
              <hr className="w-[120%]" />

              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoEbooks}>{t('Ebooks')}</button></li>
              <hr className="w-[120%]" />

              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoWebinars}>{t('Webinars')}</button>
              </li>
              <hr className="w-[120%]" />

              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoFAQ}>FAQ</button>
              </li>
              <hr className="w-[120%]" />

              <li className="hover:text-linkIt-300">
                <a onClick={() => navigate("/recursos/libreria")} className="cursor-pointer">{t('Librería')}</a>
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
              className={`flex h-full items-center border-b-[0.5vh] border-b-transparent hover:text-linkIt-300 dark:hover:text-white ${isActiveQS ? "text-linkIt-300 dark:text-white" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goQS()}
            >
              {t('Quiénes Somos')}
              <div className="arrow w-[0.7vw] ml-[0.3vw]">
                <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] dark:bg-linkIt-400 w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenQS ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <div className="absolute w-[80%] left-[10%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute dark:after:bg-white"></div>
              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoMission} >{t('Misión')}</button></li>
              <hr className="w-[100%]" />

              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoVision} >{t('Visión')}</button></li>
              <hr className="w-[100%]" />

              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoValues}>{t('Valores')}</button>
              </li>
              <hr className="w-[100%]" />

              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoHistory} >{t('Historia')}</button>
              </li>
              <hr className="w-[100%]" />

              <li className="hover:text-linkIt-300">
                <button onClick={navigatetoInternalTalent} >{t('Talento interno')}</button>
              </li>
            </ul>
          </motion.nav>
        


        <div className="containerBtnsNavbar">
        <div className="flex items-center justify-center h-full">
        <label className="toggle text-white dark:bg-linkIt-200 dark:hover:bg-linkIt-300 " htmlFor="switch">
            <input id="switch" className="input" type="checkbox" checked={toggleDarkMode} onChange={darkMode} />
            <div className="icon icon--moon flex items-center justify-center">
                <svg className="w-[60%]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                </svg>
            </div>
        
            <div className="icon icon--sun flex items-center justify-center">
                <svg className="w-[60%]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>
            </div>
        </label>

    </div>
          <Languaje />
          <motion.button
            className={`background-button`}
            onClick={() => goSoyEmpresa()}
            whileTap={{ scale: 0.9 }}
          >

            {t('Contrata Talento')}
          </motion.button>
          <motion.button
            className={`transparent-background-button`}
            onClick={() => goSoyTalento()}
            whileTap={{ scale: 0.9 }}
          >
            {t('Vacantes disponibles')}
          </motion.button>

          <motion.nav
            className="relative top-1 left-2 w-[75px] xl:w-[85px] h-[52px] xl:h-[52px]"
            ref={scopeUser}
            onMouseEnter={() => setIsOpenUser(true)}
            onMouseLeave={() => setIsOpenUser(false)}
          >
            <img
              className="w-8 xl:w-9 2xl:w-10 h-8 xl:h-9 2xl:h-10 relative top-1"
              src={iconUser}
              alt="inconUser"
            />
            <div className="arrow w-3 relative left-10 2xl:left-12 bottom-4 xl:bottom-[19px] 2xl:bottom-[22px]">
              <img src={!toggleDarkMode ? arrow : whiteArrow} alt="arrow" />
            </div>
            <ul
              className="bg-white dark:bg-linkIt-400 relative bottom-3 rounded-b-[7px] w-fit h-fit pr-4 pb-4"
              style={{
                pointerEvents: isOpenUser ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              {isAuthenticated && role === 'user' ? (
                <div>
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      className="profile hover:text-linkIt-300"
                      onClick={() => { navigate("/profile") }}
                    >
                      {t('Mis datos')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      className="profile hover:text-linkIt-300"
                    >
                      {t('Mis búsquedas')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      className="logout hover:text-linkIt-300"
                      onClick={handleLogout}
                    >
                      {t('Cerrar sesión')}
                    </button>
                  </li>
                </div>
              ) : isAuthenticated && role === 'admin' ? (
                <div>
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      onClick={goAdminDashboard}
                      className="profile hover:text-linkIt-300"
                    >
                      {t('Panel')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      className="logout hover:text-linkIt-300"
                      onClick={handleLogout}
                    >
                      {t('Cerrar sesión')}
                    </button>
                  </li>
                </div>
              ) : isAuthenticated && role === 'company' ? (
                <div>
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      className="profile hover:text-linkIt-300"
                      onClick={() => { navigate("/profile") }}
                    >
                      {t('Mis datos')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      className="profile hover:text-linkIt-300"
                    >
                      {t('Mis vacantes')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      className="logout hover:text-linkIt-300"
                      onClick={handleLogout}
                    >
                      {t('Cerrar sesión')}
                    </button>
                  </li>
                </div>
              ) : (
                <div>
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
                    <button
                      className=" hover:text-linkIt-300"
                      onClick={() => {
                        pressLogin === "visible"
                          ? dispatch(setPressLogin("hidden"))
                          : dispatch(setPressLogin("visible")),
                          dispatch(setPressSignUp("hidden"));
                      }}
                    >
                      {t('Inicia Sesión')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="mb-2 mt-3 ml-4 text-[10px] hover:text-linkIt-300 transition-all duration-200 ease-in-out xl:text-xs">
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
                      {t('Regístrate')}
                    </button>
                  </li>
                </div>
              )}
            </ul>{" "}
          </motion.nav>
        </div>
      </nav >
    </div >
  );
}

export default NavBar;

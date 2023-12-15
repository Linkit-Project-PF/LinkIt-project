import "./NavBar.css";
import Logo from "/Linkit-logo/linkit-logos-web_4-logo-horizontal-azul.svg";
import arrow from "/Vectores/arrow.png";
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

  return (
    <div>
      <div className="preNavbar">
        <span className="">
          {t('Contrata y gestiona talentos de forma global con LinkIt')} |{" "}
        </span>
        <NavLink
          to="https://calendly.com/linkit-project-henry/30min"
          className="ml-2 underline underline-offset-[3.3px]"
          target="_blank"
        >
          {t('Comienza ahora!')} →
        </NavLink>
      </div>
      <nav className="navBar">
        <div className="h-full w-[8vw]">
        <img
          src={Logo}
          onClick={() => navigatetoHome()}
          alt=""
          className="h-full w-full object-cover hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
        />
         </div>
        
          <motion.button
            className={`flex items-center mt-[0.3%] border-b-[0.5vh] hover:border-b-linkIt-300 hover:text-linkIt-300 ${isActiveHome ? "text-linkIt-300 border-b-linkIt-300" : " border-b-transparent"}`}
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
              className={`flex h-full items-center hover:text-linkIt-300 ${isActiveEmpresa ? "text-linkIt-300 border-b-linkIt-300" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goSoyEmpresa()}
            >
              {t('Soy Empresa')}
              <div className="arrow w-[0.7vw] ml-[0.3vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenEmpresa ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <div className="absolute w-[80%] left-[10%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute"></div>
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
              className={`flex h-full items-center hover:text-linkIt-300 ${isActiveTalento ? "text-linkIt-300" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goSoyTalento()}
            >
              {t('Soy Talento')}
              <div className="arrow w-[0.7vw] ml-[0.3vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenSoyTalento ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <div className="absolute w-[80%] left-[10%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute"></div>
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
              className={`flex h-full items-center hover:text-linkIt-300 ${isActiveRecursos ? "text-linkIt-300" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goRecursos()}
            >
              {t('Recursos')}
              <div className="arrow w-[0.7vw] ml-[0.3vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="bg-white relative rounded-b-[7px] w-full h-fit p-[0.5vw] pr-[1.4vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenRecursos ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <div className="absolute w-[80%] left-[10%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute"></div>
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
                <a onClick={() => navigate("/recursos/libreria")} className="cursor-pointer">{t('Libreria')}</a>
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
              className={`flex h-full items-center hover:text-linkIt-300 ${isActiveQS ? "text-linkIt-300" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goQS()}
            >
              {t('Quiénes Somos')}
              <div className="arrow w-[0.7vw] ml-[0.3vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenQS ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <div className="absolute w-[80%] left-[10%] after:h-[0.5vh] after:w-full after:bg-linkIt-300 after:absolute"></div>
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
          <Languaje />
          <motion.button
            className={`contrataBtnNavB`}
            onClick={() => goSoyEmpresa()}
            whileTap={{ scale: 0.9 }}
          >

            {t('Contrata Talento')}
          </motion.button>
          <motion.button
            className={`vacanteBtnNavB`}
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
              <img src={arrow} alt="arrow" />
            </div>
            <ul
              className="bg-white relative bottom-3 rounded-b-[7px] w-fit h-fit pr-4 pb-4"
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

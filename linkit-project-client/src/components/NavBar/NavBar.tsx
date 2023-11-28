import "./NavBar.css";
import Logo from "/Linkit-logo/linkit-logos-web_4-logo-horizontal-azul.svg";
import arrow from "/Vectores/arrow.png";
import iconUser from "/Vectores/iconUser.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  setPressLogin,
  setPressSignUp,
  setPressRegister,
} from "../../redux/features/registerLoginSlice";
import { logout } from "../../redux/features/AuthSlice";
import { useTranslation } from "react-i18next";

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
    (state: any) => state.registerLogin.pressLogin
  );
  const pressSignUp = useSelector(
    (state: any) => state.registerLogin.pressSignUp
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

  const isAuth = useSelector((state: any) => state.Authentication.authState.isAuthenticated)
  const role = useSelector((state: any) => state.Authentication.authState.role)

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
  const isActiveServiciosEmpresa = location.pathname === "/SoyEmpresa#servicios";

  const goSoyTalento = () => {
    navigate("/SoyTalento");
  };
  const isActiveTalento = location.pathname === "/SoyTalento";
  // const isActiveServiciosT = location.pathname === "/SoyTalento#serviciosT";
  const goRecursos = () => {
    navigate("/recursos");
  };
  const isActiveRecursos = location.pathname === "/recursos" || location.pathname === "/recursos/libreria"
  const goQS = () => {
    navigate("/quienesSomos");
  };
  const isActiveQS = location.pathname === "/quienesSomos";

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
        <img
          src={Logo}
          alt=""
          className="static h-20 xl:h-24 2xl:h-32 mr-2 xl:mr-6 2xl:mr-16 ml-2 xl:ml-6 2xl:ml-14"
        />

        <div className="containerLinksNavBar">
          <motion.button
            className={`relative hover:underline underline-offset-[22px] decoration-4 hover:text-linkIt-300 ${isActiveHome ? "underline text-linkIt-300" : ""
              }`}
            onClick={() => goHome()}
          >
            {t('Inicio')}
          </motion.button>

          <motion.nav
            className="relative top-[14px] xl:top-[14px] w-[85px] xl:w-[110px] h-[45px] xl:h-[48px]"
            ref={scopeEmpresa}
            onMouseEnter={() => setIsOpenEmpresa(true)}
            onMouseLeave={() => setIsOpenEmpresa(false)}
          >
            <motion.button
              className={`w-30 flex items-center hover:underline underline-offset-[22px] decoration-4 hover:text-linkIt-300 ${isActiveEmpresa ? "underline text-linkIt-300" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goSoyEmpresa()}
            >
              {t('Soy Empresa')}
              <div className="arrow w-3 ml-1 mt-[2px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="bg-white mt-[21.2px] rounded-b-[7px] w-24 xl:w-32 h-[110px]"
              style={{
                pointerEvents: isOpenEmpresa ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <li className={`relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300 ${isActiveServiciosEmpresa ? 'text-linkIt-300' : ''}`}>
                <a href="#serviciosE">{t('Servicios')}</a>
              </li>
              <hr className="w-[90px] mt-5 ml-4" />
              <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300">
                {t('Proceso')}{" "}
              </li>
              <hr className="w-[90px] ml-4 text-xs" />
              <li className="ml-4 mt-3 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a href="#cotiza">{t('Cotiza')}</a> </li>
            </ul>{" "}
          </motion.nav>


          <motion.nav
            className="relative top-[14px] xl:top-[14px] w-[85px] xl:w-[110px] h-[45px] xl:h-[48px]"
            ref={scopeSoyTalento}
            onMouseEnter={() => setIsOpenSoyTalento(true)}
            onMouseLeave={() => setIsOpenSoyTalento(false)}
          >
            <motion.button
              className={`w-30 flex items-center hover:underline underline-offset-[22px] decoration-4 hover:text-linkIt-300 ${isActiveTalento ? "underline text-linkIt-300" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goSoyTalento()}
            >
              {t('Soy Talento')}
              <div className="arrow w-3 ml-1 mt-[2px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="bg-white mt-[21.2px] rounded-b-[7px] w-24 xl:w-32 h-[110px]"
              style={{
                pointerEvents: isOpenSoyTalento ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <li className=" relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a href="#serviciosT">{t('Servicios')}</a>
              </li>
              <hr className="w-[90px] mt-5 ml-4" />
              <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a href="#procesoT">{t('Proceso')}</a>
              </li>
              <hr className="w-[90px] ml-4 text-xs" />
              <li className="ml-4 mt-3 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a href="#vacantes">{t('Vacantes')}</a></li>
            </ul>{" "}
          </motion.nav>


          <motion.nav
            className="relative top-[14px] xl:top-[14px] w-[65px] xl:w-[85px] h-[45px] xl:h-[48px]"
            ref={scopeRecursos}
            onMouseEnter={() => setIsOpenRecursos(true)}
            onMouseLeave={() => setIsOpenRecursos(false)}
          >
            <motion.button
              className={`w-30 flex items-center hover:underline underline-offset-[22px] decoration-4 hover:text-linkIt-300 ${isActiveRecursos ? "underline text-linkIt-300" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goRecursos()}
            >
              {t('Recursos')}
              <div className="arrow w-3 ml-1 mt-[3px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="bg-white mt-[21.2px] rounded-b-[7px] w-24 xl:w-32 h-[12.5rem]"
              style={{
                pointerEvents: isOpenRecursos ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a href="#blogs">{t('Blogs')}</a>
              </li>
              <hr className="w-[90px] mt-5 ml-4" />
              <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a href="#ebooks">{t('Ebooks')}</a></li>
              <hr className="w-[90px] ml-4" />
              <li className="ml-4 mt-3 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a href="#webinars">{t('Webinars')}</a>
              </li>
              <hr className="w-[90px] mt-[.7rem] ml-4" />
              <li className="ml-4 mt-3 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a href="#FAQ">FAQ</a>
              </li>
              <hr className="w-[90px] mt-[.7rem] ml-4" />
              <li className="ml-4 mt-3 text-[10px] xl:text-xs hover:text-linkIt-300">
                <a onClick={() => navigate("/recursos/libreria")} className="cursor-pointer">{t('Libreria')}</a>
              </li>
            </ul>{" "}
          </motion.nav>
          <motion.nav
            className="relative top-[14px] xl:top-[14px] w-[100px] xl:w-[125px] h-[45px] xl:h-[48px]"
            ref={scopeQS}
            onMouseEnter={() => setIsOpenQS(true)}
            onMouseLeave={() => setIsOpenQS(false)}
          >
            <motion.button
              className={`w-30 flex items-center hover:underline underline-offset-[22px] decoration-4 hover:text-linkIt-300 ${isActiveQS ? "underline text-linkIt-300" : ""
                }`}
              whileTap={{ scale: 0.97 }}
              onClick={() => goQS()}
            >
              {t('Quiénes Somos')}
              <div className="arrow w-3 ml-1 mt-[2px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="bg-white flex flex-col mt-[21.2px] w-28 xl:w-36 rounded-b-[7px] h-[150px]"
              style={{
                pointerEvents: isOpenQS ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300">{t('Misión')}</li>
              <hr className="w-[90px] ml-4" />
              <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300">{t('Visión')}</li>
              <hr className="w-[90px] ml-4" />
              <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs hover:text-linkIt-300">
                {t('Valores e Historia')}
              </li>
              <hr className="w-[90px] ml-4" />
              <li className="ml-4 mt-3 text-[10px] xl:text-xs hover:text-linkIt-300">
                {t('Talento interno')}
              </li>
            </ul>{" "}
          </motion.nav>
          <span className="font-medium">Inglés</span>
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
              {isAuth && role === 'user' ? (
                <div>
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className="profile"
                      onClick={() => { navigate("/MyProfile") }}
                    >
                      {t('Mis datos')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className="profile"
                    >
                      {t('Mis búsquedas')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className="logout"
                      onClick={handleLogout}
                    >
                      {t('Cerrar sesión')}
                    </button>
                  </li>
                </div>
              ) : isAuth && role === 'admin' ? (
                <div>
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      onClick={goAdminDashboard}
                      className="profile"
                    >
                      {t('Panel')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className="logout"
                      onClick={handleLogout}
                    >
                      {t('Cerrar sesión')}
                    </button>
                  </li>
                </div>
              ) : isAuth && role === 'company' ? (
                <div>
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className="profile"
                      onClick={() => { navigate("/MyProfile") }}
                    >
                      {t('Mis datos')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className="profile"
                    >
                      {t('Mis vacantes')}
                    </button>
                  </li>
                  <hr className="w-[90%] mt-5 ml-4" />
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className="logout"
                      onClick={handleLogout}
                    >
                      {t('Cerrar sesión')}
                    </button>
                  </li>
                </div>
              ) : (
                <div>
                  <li className="relative top-3 mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className=""
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
                  <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs">
                    <button
                      className=""
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


        <div className="containerBtnsNavbar">
          <motion.button
            className="contrataBtnNavB"
            onClick={() => goSoyEmpresa()}
            whileTap={{ scale: 0.9 }}
          >

            {t('Contrata Talento')}
          </motion.button>
          <motion.button
            className="vacanteBtnNavB"
            onClick={() => goSoyTalento()}
            whileTap={{ scale: 0.9 }}
          >
            {t('Vacantes disponibles')}
          </motion.button>
        </div>
      </nav >
    </div >
  );
}

export default NavBar;

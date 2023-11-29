import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  setPressLogin,
  setPressSignUp,
  setPressRegister,
} from "../../redux/features/registerLoginSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";

export default function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pressLogin = useSelector(
    (state: any) => state.registerLogin.pressLogin
  );
  const pressSignUp = useSelector(
    (state: any) => state.registerLogin.pressSignUp
  );

  const navigatetoHowItWorks = () => {
    navigate('/SoyEmpresa')
    setTimeout(() => {
      window.location.href = '#procesoE';
    }, 0);
    }

  const navigatetoSuccessStories = () => {
    navigate('/SoyEmpresa')
    setTimeout(() => {
      window.location.href = '#casosDeExitoE';
    }, 0);
    }

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
  const navigatetoEvents = () => {
    navigate('/recursos')
    setTimeout(() => {
      window.location.href = '#webinars';
    }, 0);
    }

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

  const navigatetoInternalTalent = () => {
    navigate('/quienesSomos')
    setTimeout(() => {
      window.location.href = '#talento-Interno';
    }, 0);
    }

  const {t} = useTranslation();
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-3 gap-1 mx-1">

        <div className="flex flex-col">
          <img className="w-[75%] ml-[10%]" src="/Linkit-logo/linkit-logos-web_2-logo-ppal-blanco.svg" alt="" />
          <div className="ml-[10%]">
            <h1 className="font-semibold my-1">Link IT</h1>
            <p className="w-full text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">{t('Conectando al talento mas destacado con los mejores proyectos IT')}</p>
            <div className="flex flex-row flex-wrap">
              <a href="" className="w-[10%]"><img className="w-[100%]" src="/Vectores/linkit-web-vectores-12.svg" alt="" ></img></a>
              <a href="https://www.linkedin.com/company/linkit-hr/" target="_blank" className="w-[10%]"><img className="w-[100%]" src="/Vectores/linkit-web-vectores-13.svg" alt="" /></a>
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-[8%] pr-[10%]">
          <ul className="flex justify-between">

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mr-2 md:mx-0">{t('Empresa')}</li>
              <ul>
                <br />
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoHowItWorks}> {t('Cómo funciona')}</button>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoSuccessStories}>{t('Casos de éxito')} </button>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">FAQ</NavLink>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"  onClick={() => {
                        pressSignUp === "visible"
                          ? dispatch(setPressSignUp("hidden"))
                          : dispatch(setPressSignUp("visible")),
                          dispatch(setPressLogin("hidden")),
                          dispatch(setPressRegister("hidden")),
                          setPressRegister("hidden");
                      }}>{t('Ingresar')}</button>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={() => {
                        pressLogin === "visible"
                          ? dispatch(setPressLogin("hidden"))
                          : dispatch(setPressLogin("visible")),
                          dispatch(setPressSignUp("hidden"));
                      }}>Login</button>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">{t('Talento')}</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> FAQ </NavLink>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={() => {
                        pressLogin === "visible"
                          ? dispatch(setPressLogin("hidden"))
                          : dispatch(setPressLogin("visible")),
                          dispatch(setPressSignUp("hidden"));
                      }}> Login </button>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Blog </button>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">{t('Recursos')}</li>
              <ul>
                <br />
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoBlogs}> Blogs </button>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoEbooks}> Ebooks </button>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoEvents}> {t('Eventos')} </button>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">{t('Quiénes Somos')}</li>
              <ul>
                <br />
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoMission}>{t('Misión')} </button>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoVision}> {t('Visión')} </button>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoValues}> {t('Valores e historia')} </button>
                </li>
                <li>
                  <button className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base" onClick={navigatetoInternalTalent}> {t('Talento interno')} </button>
                </li>
              </ul>
            </div>

            <div>
              <li className="font-semibold text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base mx-2 md:mx-0">{t('Vacantes')}</li>
              <ul>
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Desarrolladores')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Tester  </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Infraestructura')}</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Datos')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> Sap </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Ciberseguridad')} </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex">
              <ul className="flex flex-col">
                <br />
                <br />
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('En Chile')}</NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('En Colombia')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('En España')} </NavLink>
                </li>
                <li>
                  <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('En LATAM')} </NavLink>
                </li>
              </ul>
            </div>
          </ul>
          <div className="flex justify-evenly font-semibold lg:mt-20 xl:mt-32 2xl:mt-60">
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> ©2023 | {t('Todos los derechos reservados')}</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Politica de Privacidad')}</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base"> {t('Terminos y condiciones')}</NavLink>
            </p>
          </div>
        </div>
      </div >
      <br />
      <hr />
      <br />
    </div >
  )
}

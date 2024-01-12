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

  const navigatetoFAQ = () => {
    navigate('/recursos')
    setTimeout(() => {
      window.location.href = '#FAQ';
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
  // const navigatetoChile = () => {
  //    navigate('/quienesSomos')
  //   setTimeout(() => {
  //      window.location.href = '/quienesSomos?filtroMision=valor';
  //   }, 0);
  //   }
    // const navigatetColombia = () => {
  //    navigate('/quienesSomos')
  //   setTimeout(() => {
  //      window.location.href = '/quienesSomos?filtroMision=valor';
  //   }, 0);
  //   }
    // const navigatetoEspana = () => {
  //    navigate('/quienesSomos')
  //   setTimeout(() => {
  //     window.location.href = '/quienesSomos?filtroMision=valor';
  //   }, 0);
  //   }
    // const navigatetoLATAM = () => {
  //    navigate('/quienesSomos')
  //   setTimeout(() => {
  //     window.location.href = '/quienesSomos?filtroMision=valor';
  //   }, 0);
  //   }

  const {t} = useTranslation();
  return (
    <div className="bg-linkIt-200 text-white font-montserrat overflow-hidden w-screen p-[5%]">
      <div className="flex">
    <img className="w-1/4" src="/Vectores/LinkIt-Logotipo-2024-white.svg" alt="" />
      <div className="grid grid-cols-3 gap-[5%] m-[5%] w-full font-montserrat">

                  <div className="grid justify-start justify-items-start items-center space-y-1">
                  <p className="font-semibold text-[0.6rem] ssm:text-[0.8rem] xl:text-[1.5rem] ">{t('Empresa')}</p>
                  
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start " onClick={navigatetoHowItWorks}> {t('Cómo funciona')}</button>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start " onClick={navigatetoSuccessStories}>{t('Casos de éxito')} </button>
                
                
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"  onClick={() => {
                        pressSignUp === "visible"
                          ? dispatch(setPressSignUp("hidden"))
                          : dispatch(setPressSignUp("visible")),
                          dispatch(setPressLogin("hidden")),
                          dispatch(setPressRegister("hidden")),
                          setPressRegister("hidden");
                      }}>{t('Ingresar')}</button>
                
                
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={() => {
                        pressLogin === "visible"
                          ? dispatch(setPressLogin("hidden"))
                          : dispatch(setPressLogin("visible")),
                          dispatch(setPressSignUp("hidden"));
                      }}>Login</button>
                </div>
            

            <div className="grid justify-start justify-items-start items-center">
              <p className="font-semibold text-[0.6rem] ssm:text-[0.8rem] xl:text-[1.5rem] ">{t('Talento')} </p>
              <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoBlogs}> Blogs </button>
              <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoBlogs}> Blogs </button>
              <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoBlogs}> Blogs </button>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={() => {
                        pressLogin === "visible"
                          ? dispatch(setPressLogin("hidden"))
                          : dispatch(setPressLogin("visible")),
                          dispatch(setPressSignUp("hidden"));
                      }}> Login </button>
                 
            
            </div>


            <div className="grid justify-start justify-items-start items-center col-start-2">
              <p className="font-semibold text-[0.6rem] ssm:text-[0.8rem] xl:text-[1.5rem] ">{t('Recursos')} </p>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoBlogs}> Blogs </button>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoEbooks}> Ebooks </button>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoEvents}> {t('Eventos')} </button>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoFAQ}> FAQ </button>
                  
            </div>


            <div className="grid justify-start justify-items-start items-center col-start-1 row-start-2 space-y-1">
              <p className="font-semibold text-[0.6rem] ssm:text-[0.8rem] xl:text-[1.5rem] ">{t('Quiénes Somos')} </p>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoMission}>{t('Misión')} </button>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoVision}> {t('Visión')} </button>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoValues}> {t('Valores e historia')} </button>
                  <button className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start" onClick={navigatetoInternalTalent}> {t('Talento interno')} </button>
            </div>


            <div className="grid justify-start justify-items-start items-center col-start-3 row-start-1 row-span-2">
              <p className="font-semibold text-[0.6rem] ssm:text-[0.8rem] xl:text-[1.5rem] ">{t('Vacantes')} </p>
                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> {t('Desarrolladores')} </NavLink>
                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> Tester  </NavLink>
                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> {t('Infraestructura')}</NavLink>
                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> {t('Datos')} </NavLink>
                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> Sap </NavLink>
                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> {t('Ciberseguridad')} </NavLink>
            
                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> {t('En Chile')}</NavLink>

                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> {t('En Colombia')} </NavLink>

                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> {t('En España')} </NavLink>

                  <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  text-start"> {t('En LATAM')} </NavLink>
            </div>
            </div>
        </div>

          <div className="flex ssm:grid col-span-full items-center">
          <div className="col-start-1">
            <p className="font-semibold my-1 text-[0.6rem] ssm:text-[0.8rem] xl:text-[1.5rem] ">Link IT</p>
            <p className=" text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem] w-[90%] ssm:w-[50%] xl:w-[35%] font-montserrat">{t('Conectando al talento mas destacado con los mejores proyectos IT')}</p>
            <div className="flex  mt-2">
              <a href="" className="w-[20%] ssm:w-[7%] lg:w-[5%]"><img className="w-[100%]" src="/Vectores/linkit-web-vectores-12.svg" alt="" ></img></a>
              <a href="https://www.linkedin.com/company/linkit-hr/" target="_blank" className="w-[20%] ssm:w-[7%] lg:w-[5%]"><img className="w-[100%]" src="/Vectores/linkit-web-vectores-13.svg" alt="" /></a>
            </div>
        </div>
        <div className="flex-col flex ssm:flex-row ssm:mt-3 justify-between items-center whitespace-nowrap">
            <p className="text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  font-montserrat"> ©2023 | {t('Todos los derechos reservados')}
            </p>
            
            <p>
              <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  font-montserrat"> {t('Política de Privacidad')}</NavLink>
            </p>
            <p>
              <NavLink to='' className="hover:underline text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem]  font-montserrat"> {t('Términos y condiciones')}</NavLink>
            </p>
            </div>
      </div>
    </div >
  )
}

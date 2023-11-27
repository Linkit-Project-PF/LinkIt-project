import "./LoginCompany.css";
import { setPressLoginCompany, setPressSignUp } from "../../../redux/features/registerLoginSlice.ts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import validations from "../loginValidations.ts";
import { useDispatch } from "react-redux";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../helpers/authentication/firebase.ts";
import saveUserThirdAuth from "../../../helpers/authentication/thirdPartyUserSave.ts";
import { loginSuccess } from "../../../redux/features/AuthSlice.ts";
import { SUPERADMN_ID } from "../../../env.ts";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useTranslation } from "react-i18next";

type Event = {
  target: HTMLInputElement;
};

function LoginCompany() {
  const {t}= useTranslation()
  const dispatch = useDispatch();
  const [visiblePassword, setVisiblePassword] = useState<string>("password");
  const [lock, setLock] = useState<string>("/Vectores/lock.svg");
  const [open, setOpen] = useState<string>("closed");

  const handlePressNotRegistered = () => {
    dispatch(setPressSignUp("visible"));
    dispatch(setPressLoginCompany("hidden"));
  }

  const handleVisiblePassword = () => {
    if (visiblePassword === "password") {
      setVisiblePassword("text");
      setLock("/Vectores/lock-open.svg");
      setOpen("open");
    } else {
      setVisiblePassword("password");
      setLock("/Vectores/lock.svg");
      setOpen("closed");
    }
  };

  const [thirdParty, setThirdParty] = useState<boolean | undefined>(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = ({ target }: Event) => {
    const fieldErrors = validations({
      ...user,
      [target.name]: target.value,
    });

    setUser({
      ...user,
      [target.name]: target.value,
    });

    setErrors({
      ...errors,
      [target.name]: fieldErrors[target.name as keyof typeof fieldErrors],
    });
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios(
        `https://linkit-server.onrender.com/auth/login?email=${user.email}&password=${user.password}`
      );
      if (response.data._id) {
        Swal.fire({
          title: `Bienvenido de vuelta ${response.data.name}`,
          text: 'Has ingresado correctamente',
          icon: 'success',
          iconColor: '#173951',
          background: '#ECEEF0',
          confirmButtonColor: '#01A28B',
          confirmButtonText: 'Continuar'
        })
        const token = response.data._id;
        const role = response.data.role;
        dispatch(loginSuccess({ token, role }));
        dispatch(setPressLoginCompany("hidden"));
      }
    } catch (error: any) {
      Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos',
        icon: 'error',
        background: '#ECEEF0',
        confirmButtonColor: '#01A28B',
        confirmButtonText: 'Continuar'
      })
    }
  };

  const handleAuthClick = async (prov: string) => {
    try {
      let provider;
      if (prov === "google") {
        setThirdParty(true);
        provider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, provider);
        if ((response as any)._tokenResponse.isNewUser) {
          //* In case user tries to log in but account does not exist
          const DBresponse = await saveUserThirdAuth(response.user, "user");
          Swal.fire({
            title: `Bienvenido ${DBresponse.name}`,
            text: 'Has ingresado correctamente',
            icon: 'success',
            iconColor: '#173951',
            background: '#ECEEF0',
            confirmButtonColor: '#01A28B',
            confirmButtonText: 'Continuar'
          })
        } else {
          //* In case user exists, enters here
          const usersData = await axios.get(
            `https://linkit-server.onrender.com/users/find?email=${response.user.email}`,
            {
              headers: {
                Authorization: `Bearer ${SUPERADMN_ID}`,
              },
            }
          );
          if (usersData.data.length) {
            const authUser = usersData.data[0];
            const token = authUser._id;
            const role = authUser.role;
            dispatch(loginSuccess({ token, role }));
            Swal.fire({
              title: `Bienvenido de vuelta ${authUser.name}`,
              text: 'Has ingresado correctamente',
              icon: 'success',
              iconColor: '#173951',
              background: '#ECEEF0',
              confirmButtonColor: '#01A28B',
              confirmButtonText: 'Continuar'
            })
          } else {
            const companyData = await axios.get(
              `https://linkit-server.onrender.com/companies/find?email=${response.user.email}`,
              {
                headers: {
                  Authorization: `Bearer ${SUPERADMN_ID}`,
                },
              }
            );
            if (companyData.data.length) {
              const authCompany = companyData.data[0];
              const token = authCompany._id;
              const role = authCompany.role;
              dispatch(loginSuccess({ token, role }));
              Swal.fire({
                title: `Bienvenido de vuelta ${authCompany.name}`,
                text: 'Has ingresado correctamente',
                icon: 'success',
                iconColor: '#173951',
                background: '#ECEEF0',
                confirmButtonColor: '#01A28B',
                confirmButtonText: 'Continuar'
              })
            } else
              throw Error(
                "Usuario autenticado pero registro no encontrado, contacte a un administrador"
              );
          }
        }
      }
      dispatch(setPressLoginCompany("hidden"));
      setThirdParty(false);
    } catch (error: any) {
      setThirdParty(false);
      if (error.code === "auth/popup-closed-by-user") console.log(error);
      else {
        Swal.fire({
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
          icon: 'error',
          background: '#ECEEF0',
          confirmButtonColor: '#01A28B',
          confirmButtonText: 'Continuar'
        })
      }
    }
  };

  useEffect(()=>{
    if (thirdParty) {
      dispatch(setPressLoginCompany("hidden"));
      Swal.fire({
        icon: 'info',
        title: 'Espera un momento',
        text: `Estamos autenticando tu cuenta`,
        confirmButtonText: 'Iniciar sesión',
        confirmButtonColor: '#2D46B9',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showCloseButton: false,
        showCancelButton: false,
        showDenyButton: false,
        showConfirmButton: true,
        didOpen: () => {
          Swal.showLoading()
        },
        didClose: () => {
          dispatch(setPressLoginCompany("hidden"));
        }
      })
    }
  },[thirdParty])
  //? NOTE: Consider Google is <a> instead of <button> as any button will be taken for submit action

  return (
    <>
      <div
        className="bg-white bg-opacity-[85%] fixed top-0 left-0 w-screen h-screen"
        onClick={() => dispatch(setPressLoginCompany("hidden"))}
      ></div>
      <div className=" bg-linkIt-500 absolute left-1/2 top-1/2 translate-x-[-50%] rounded-[1.3rem] translate-y-[-50%] min-h-[50vh] p-[2%] w-[30%] flex flex-col flex-grow items-center gap-[1.5rem] font-montserrat overflow-hidden">
        <form
          className=" flex flex-col flex-grow items-center gap-[1.5rem] font-montserrat overflow-hidden w-full"
          onSubmit={handleSignIn}
        >

          <img
            src="/Linkit-logo/linkit-logo-blue.svg"
            alt="linkIT-Logo"
            className="w-[40%] mb-[-1rem] mt-[-9%]"
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem]">
              {t('¡Te damos la bienvenida a LinkIT!')}
            </h1>
            <p className="text-linkIt-400 font-[500] text-[.85rem] 2xl:text-[1.2rem]">
              {t('Conectamos a las empresas con el')} <br />
              {t('mejor talento para sus equipos.')}
            </p>
          </div>
          <fieldset className="flex flex-col w-full content-center justify-center items-center gap-[.5rem]">
            <div className="border-[.125rem] bg-white border-linkIt-300 w-[90%] rounded-[10px] p-[3px] flex flex-row items-center content-center gap-[.4rem] pl-[.7rem]">
              <img
                src="/Vectores/email-icon.svg"
                alt=""
                className="w-[.9rem]"
              />
              <input
                type="text"
                placeholder={t("Email corporativo")}
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="bg-transparent focus:outline-none placeholder:text-[.9rem] placeholder:text-linkIt-400 font-[500] w-[90%]"
              />
            </div>
            <div className="border-[.125rem] bg-white border-linkIt-300 w-[90%] rounded-[10px] p-[3px] flex flex-row items-center content-center gap-[.4rem] pl-[.7rem]">
              <img src={lock} alt="email" className="w-[.9rem]" />
              <input
                type={visiblePassword}
                placeholder={t("Contraseña")}
                name="password"
                value={user.password}
                onChange={handleInputChange}
                className="bg-transparent focus:outline-none placeholder:text-[.9rem] placeholder:text-linkIt-400 font-[500] w-[90%]"
              />
              <button onClick={handleVisiblePassword} type="button">
                <img
                  src={`/Vectores/eye-${open}.svg`}
                  alt="show-password"
                  className="w-[.9rem] mr-[.5rem]"
                />
              </button>
            </div>
            <p className="text-[.8rem] self-start ml-[6%] mb-[-5%] font-manrope">
              <motion.a
                href="_blank"
                whileHover={{ textDecoration: "underline" }}
              >
                {t('olvidé mi contraseña')}
              </motion.a>
            </p>
          </fieldset>
          <div className="flex flex-col w-full items-center gap-[.5rem]">
            <button
              className="bg-linkIt-300 text-white font-semibold text-[.9rem] p-[.2rem] w-[90%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out"
              type="submit"
            >
              {t('Iniciar sesión')}
            </button>
            <motion.button
              className="w-[90%] bg-white p-[.2rem] font-[500] border-[2px] border-linkIt-300 rounded-[.7rem] flex flex-row justify-center items-center gap-[.2rem]"
              onClick={() => handleAuthClick("google")}
              type="button"
              whileHover={{ scale: 1.05 }}
            >
              {" "}
              <img
                src="/images/google.png"
                alt="sign-in with google"
                className="w-[1.2rem]"
              />
              {t('Ingresa con Google')}
            </motion.button>
          </div>
          <Link 
          className="flex flex-row border-[2px] border-linkIt-300 rounded-[8px] p-[.5rem] bg-white w-[90%] justify-center items-center content-center gap-[.5rem] hover:scale-105 transition-all duration-300 ease-in-out"
          to={"https://calendly.com/linkit-project-henry/30min"}
          target="_blank"
          >
            <img src="/Vectores/calendario.svg" alt="" className="w-[2.5rem]" />
            <p className="font-semibold text-[.85rem]">
              {t('¿Necesitas ayuda?')} <br />{" "}
              <span className="text-linkIt-300">{t('Agenda una reunión')}</span>
            </p>
          </Link>
          <p className="text-[.7rem] font-[500] mb-[3%] lg:mb-[6%]">
            {t('¿Aún no tienes cuenta?')}
            <motion.span className="text-linkIt-300 underline cursor-pointer" onClick={handlePressNotRegistered}>
              {t('Registrarse')}
            </motion.span>
          </p>
          <h3 className="bg-linkIt-200 text-white font-semibold w-full text-center text-[.7rem] absolute bottom-0 top-[95%] p-[.4rem]">
            {t('INGRESO PARA EMPRESAS')}
          </h3>
        </form>
      </div>
    </>
  );
}

export default LoginCompany;

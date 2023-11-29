import { setPressLoginTalent, setPressSignUp } from "../../../redux/features/registerLoginSlice.ts";
import "./LoginTalent.css";
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
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useTranslation } from "react-i18next";
import { IUser } from "../../Profiles/types.ts";

type Event = {
  target: HTMLInputElement;
};

function LoginTalent() {
  const {t}= useTranslation()
  const dispatch = useDispatch();
  const [visiblePassword, setVisiblePassword] = useState<string>("password");
  const [lock, setLock] = useState<string>("/Vectores/lock.svg");
  const [open, setOpen] = useState<string>("closed");

  const handlePressNotRegistered = () => {
    dispatch(setPressSignUp("visible"));
    dispatch(setPressLoginTalent("hidden"));
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
      const response = await axios.get<IUser>(
        `https://linkit-server.onrender.com/auth/login?email=${user.email}&password=${user.password}&role=user`
      )
      const loggedUser = response.data

      if (response.status === 200) {
        Swal.fire({
          title: t("Bienvenido de vuelta", {name:response.data.name}),
          text: t("Has ingresado correctamente"),
          icon: "success",
          iconColor: "#173951",
          background: "#ECEEF0",
          confirmButtonColor: "#01A28B",
          confirmButtonText: t("Continuar"),
        });
        const token = response.data._id;
        const role = response.data.role;
        dispatch(loginSuccess({ token, role }));
        dispatch(setPressLoginTalent("hidden"));
      }
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: t("Usuario o contraseña incorrectos"),
        icon: "error",
        background: "#ECEEF0",
        confirmButtonColor: "#01A28B",
        confirmButtonText: t("Continuar"),
      });
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
            title: t("Bienvenido", {name:DBresponse.name}),
            text: t("Se ha creado una nueva cuenta para ti"),
            icon: "success",
            iconColor: "#173951",
            background: "#ECEEF0",
            confirmButtonColor: "#01A28B",
            confirmButtonText: t("Continuar"),
          });
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
            dispatch(loginSuccess(authUser));
            Swal.fire({
              title: t("Bienvenido de vuelta", {name:authUser.name}),
              text: t("Has ingresado correctamente"),
              icon: "success",
              iconColor: "#173951",
              background: "#ECEEF0",
              confirmButtonColor: "#01A28B",
              confirmButtonText: t("Continuar"),
            });
          } else {
            const adminData = await axios.get(
              `https://linkit-server.onrender.com/admins/find?email=${response.user.email}`,
              {
                headers: {
                  Authorization: `Bearer ${SUPERADMN_ID}`,
                },
              }
            );
            if (adminData.data.length) {
              const authAdmin = adminData.data[0];
              dispatch(loginSuccess(authAdmin))
              Swal.fire({
                title: t("Bienvenido de vuelta", {name:authAdmin.name}),
                text: t("Has ingresado correctamente"),
                icon: "success",
                iconColor: "#173951",
                background: "#ECEEF0",
                confirmButtonColor: "#01A28B",
                confirmButtonText: t("Continuar"),
              });
            } else
              throw Error(
                "Usuario autenticado pero registro no encontrado, contacte a un administrador"
              );
          }
        }
      }
      dispatch(setPressLoginTalent("hidden"));
      setThirdParty(false);
    } catch (error: any) {
      setThirdParty(false);
      Swal.fire({
        title: "Error",
        text:t( "Usuario o contraseña incorrectos"),
        icon: "error",
        background: "#ECEEF0",
        confirmButtonColor: "#01A28B",
        confirmButtonText: t("Continuar"),
      });
    }
  };
  //? NOTE: Consider Google is <a> instead of <button> as any button will be taken for submit action

  useEffect(()=>{
    if (thirdParty) {
      dispatch(setPressLoginTalent("hidden"));
      Swal.fire({
        icon: "info",
        title: t("Espera un momento"),
        text: t(`Estamos autenticando tu cuenta`),
        confirmButtonText: t("Iniciar sesión"),
        confirmButtonColor: "#2D46B9",
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
          dispatch(setPressLoginTalent("hidden"));
        }
      })
    }
  },[thirdParty])

  return (
    <>
      <div
        className="bg-white bg-opacity-[85%] fixed top-0 left-0 w-screen h-screen"
        onClick={() => dispatch(setPressLoginTalent("hidden"))}
      ></div>
      <div className=" bg-linkIt-500 absolute left-1/2 top-1/2 translate-x-[-50%] rounded-[1.3rem] translate-y-[-50%] min-h-[50vh] p-[2%] w-[30%] flex flex-col flex-grow items-center gap-[1.5rem] font-montserrat overflow-hidden">
        <form className=" flex flex-col flex-grow items-center gap-[1.5rem] font-montserrat overflow-hidden w-full" onSubmit={handleSignIn}>

          <img
            src="/Linkit-logo/linkit-logo-blue.svg"
            alt="linkIT-Logo"
            className="w-[40%] mb-[-1rem]"
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem]">
              {t('¡Te damos la bienvenida a LinkIT!')}
            </h1>
            <p className="text-linkIt-400 font-[500] text-[.85rem] 2xl:text-[1.2rem]">
              {t('Conéctate con los mejores proyectos y aplica')} <br />{t('a oportunidades de manera remota.')}
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
            <p className="text-[.8rem] self-start ml-[6%] font-manrope">
              <motion.a
                href="_blank"
                whileHover={{ textDecoration: "underline" }}
              >
                {t('olvidé mi contraseña')}
              </motion.a>
            </p>
          </fieldset>
          <div className="flex flex-col w-full items-center gap-[.5rem]">
            <button className="bg-linkIt-300 text-white font-semibold text-[.9rem] p-[.2rem] w-[90%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out" type="submit">
              {t('Iniciar sesión')}
            </button>
            <button
              className="w-[90%] bg-white p-[.2rem] font-[500] border-[2px] border-linkIt-300 rounded-[.7rem] flex flex-row justify-center items-center gap-[.2rem]"
              onClick={() => handleAuthClick("google")} type="button"
            >
              {" "}
              <img
                src="/images/google.png"
                alt="sign-in with google"
                className="w-[1.2rem]"
              />
              {t('Ingresa con Google')}
            </button>
          </div>
          <p className="text-[.7rem] font-[500] mb-[3%] lg:mb-[6%]">
            {t('¿Aún no tienes cuenta?')} {" "}
            <motion.span className="text-linkIt-300 underline cursor-pointer" onClick={handlePressNotRegistered}>
              {t('Registrarse')}
            </motion.span>
          </p>
          <h3 className="bg-linkIt-200 text-white font-semibold w-full text-center text-[.7rem] absolute bottom-0 top-[95%] p-[.4rem]">
            {t('INGRESO PARA TALENTOS')}
          </h3>
        </form>
      </div>
    </>
  );
}

export default LoginTalent;


import {
  setPressLoginTalent,
  setPressSignUp,
} from "../../../redux/features/registerLoginSlice.ts";
import "./LoginTalent.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import validations from "../loginValidations.ts";
import { useDispatch } from "react-redux";
import axios, { AxiosError } from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../../helpers/authentication/firebase.ts";
import saveUserThirdAuth from "../../../helpers/authentication/thirdPartyUserSave.ts";
import { loginSuccess } from "../../../redux/features/AuthSlice.ts";
import { SUPERADMN_ID } from "../../../env.ts";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useTranslation } from "react-i18next";
import { IUser, UserLoginType } from "../../Profiles/types.ts";
import Loading from "../../Loading/Loading.tsx";
import ResetPassword from "../../../Utils/ResetPassword/ResetPassword.tsx";

type Event = {
  target: HTMLInputElement;
};

function LoginTalent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [visiblePassword, setVisiblePassword] = useState<string>("password");
  const [lock, setLock] = useState<string>("/Vectores/lock.svg");
  const [open, setOpen] = useState<string>("closed");
  const [loading, isLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handlePressNotRegistered = () => {
    dispatch(setPressSignUp("visible"));
    dispatch(setPressLoginTalent("hidden"));
  };

  const resetPasswordHandler = () => {
    setShowResetPassword(true);
    setTimeout(() => {
      setShowResetPassword(false);
    }, 100);
  };

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
  const [user, setUser] = useState<UserLoginType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<UserLoginType>({
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
    isLoading(true);
    try {
      const response = await axios.post<IUser>(
        "https://linkit-server.onrender.com/auth/login",
        {
          email: user.email,
          password: user.password,
          role: "user",
        },
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
            "Accept-Language": sessionStorage.getItem("lang"),
            "Content-Type": "application/json", // Especifica el tipo de contenido como JSON
          },
        }
      );

      const loggedUser = response.data;

      if (response.status === 200) {
        Swal.fire({
          title: t("Bienvenido de vuelta ") + response.data.firstName,
          text: t("Has ingresado correctamente"),
          icon: "success",
          iconColor: "#173951",
          background: "#ECEEF0",
          allowOutsideClick: true,
          confirmButtonColor: "#01A28B",
          confirmButtonText: t("Continuar"),
        });
        isLoading(false);
        dispatch(loginSuccess(loggedUser));
        dispatch(setPressLoginTalent("hidden"));
      }
    } catch (error: any) {
      isLoading(false);
      Swal.fire({
        title: "Error",
        text: error.response.data,
        icon: "error",
        background: "#ECEEF0",
        allowOutsideClick: true,
        confirmButtonColor: "#01A28B",
        confirmButtonText: t("Continuar"),
      });
    }
  };

  const handleAuthClick = async (prov: string) => {
    try {
      let provider;

      if (prov === "github" || prov === "google") {
        setThirdParty(true);

        if (prov === "github") {
          provider = new GithubAuthProvider();
        } else provider = new GoogleAuthProvider();

        const response = await signInWithPopup(auth, provider);
        if ((response as any)._tokenResponse.isNewUser) {
          //* In case user tries to log in but account does not exist
          const DBresponse = await saveUserThirdAuth(
            response.user,
            "user",
            prov
          );
          Swal.fire({
            title: t("Bienvenido", { name: DBresponse.name }),
            text: t("Se ha creado una nueva cuenta para ti"),
            icon: "success",
            iconColor: "#173951",
            background: "#ECEEF0",
            allowOutsideClick: true,
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
                "Accept-Language": sessionStorage.getItem("lang"),
              },
            }
          );
          if (usersData.data.length) {
            if (!usersData.data[0].active)
              throw new Error(
                t(
                  "Email no verificado, por favor revisa tu bandeja de entrada o spam"
                )
              );
            const authUser = usersData.data[0];
            dispatch(loginSuccess(authUser));
            Swal.fire({
              title: t("Bienvenido de vuelta ") + authUser.firstName,
              text: t("Has ingresado correctamente"),
              icon: "success",
              iconColor: "#173951",
              background: "#ECEEF0",
              allowOutsideClick: true,
              confirmButtonColor: "#01A28B",
              confirmButtonText: t("Continuar"),
            });
          } else {
            const adminData = await axios.get(
              `https://linkit-server.onrender.com/admins/find?email=${response.user.email}`,
              {
                headers: {
                  Authorization: `Bearer ${SUPERADMN_ID}`,
                  "Accept-Language": sessionStorage.getItem("lang"),
                },
              }
            );
            if (adminData.data.length) {
              if (!adminData.data[0].active)
                throw new Error(
                  t(
                    "Email no verificado, por favor revisa tu bandeja de entrada o spam"
                  )
                );
              const authAdmin = adminData.data[0];
              dispatch(loginSuccess(authAdmin));
              Swal.fire({
                title: t("Bienvenido de vuelta ") + authAdmin.firstName,
                text: t("Has ingresado correctamente"),
                icon: "success",
                iconColor: "#173951",
                background: "#ECEEF0",
                allowOutsideClick: true,
                confirmButtonColor: "#01A28B",
                confirmButtonText: t("Continuar"),
              });
            } else
              throw Error(
                t(
                  "Usuario autenticado pero registro no encontrado, por favor inicia sesión desde la sección correspondiente. Si el error persiste contactános"
                )
              );
          }
        }
      }
      dispatch(setPressLoginTalent("hidden"));
      setThirdParty(false);
    } catch (error: any) {
      setThirdParty(false);
      if (error instanceof AxiosError) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data,
          icon: "error",
          background: "#ECEEF0",
          confirmButtonColor: "#01A28B",
          confirmButtonText: t("Continuar"),
        });
      } else {
        Swal.fire({
          title: "Error",
          text: error,
          icon: "error",
          background: "#ECEEF0",
          confirmButtonColor: "#01A28B",
          confirmButtonText: t("Continuar"),
        });
      }
    }
  };
  //? NOTE: Consider Google is <a> instead of <button> as any button will be taken for submit action

  useEffect(() => {
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
          Swal.showLoading();
        },
        didClose: () => {
          dispatch(setPressLoginTalent("hidden"));
        },
      });
    }
  }, [thirdParty]);

  return (
    <>
      <div
        className="bg-white bg-opacity-[85%] fixed top-0 left-0 w-screen h-screen"
        onClick={() => dispatch(setPressLoginTalent("hidden"))}
      ></div>
      {loading && <Loading text={t("Validando credenciales")} />}
      <div className=" bg-linkIt-500 absolute left-1/2 top-1/2 translate-x-[-50%] rounded-[1.3rem] translate-y-[-50%] min-h-[50vh] min-w-[300px] p-[2%] w-[30%] flex flex-col flex-grow items-center gap-[1.5rem] font-montserrat overflow-hidden">
        <form
          className=" flex flex-col flex-grow items-center gap-[1.5rem] font-montserrat overflow-hidden w-full"
          onSubmit={handleSignIn}
        >
          <img
            src="/Linkit-logo/linkit-logo-blue.svg"
            alt="linkIT-Logo"
            className="w-[40%] mb-[-1rem] mt-[-3%]"
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem]">
              {t("¡Te damos la bienvenida a LinkIT!")}
            </h1>
            <p className="text-linkIt-400 font-[500] text-[.85rem] 2xl:text-[1.2rem]">
              {t("Conéctate con los mejores proyectos y aplica")} <br />
              {t("a oportunidades de manera remota.")}
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
                placeholder={t("Email")}
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
            <p className="text-[.8rem] self-start ml-[6%] font-manrope cursor-pointer">
              <motion.a
                onClick={resetPasswordHandler}
                className="cursor-pointer"
                whileHover={{ textDecoration: "underline" }}
              >
                {t("olvidé mi contraseña")}
              </motion.a>
            </p>
            {showResetPassword && <ResetPassword user={user} />}
          </fieldset>
          <div className="flex flex-col w-full items-center gap-[.5rem]">
            <button
              className="bg-linkIt-300 text-white font-semibold text-[.9rem] p-[.2rem] w-[90%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out"
              type="submit"
            >
              {t("Iniciar sesión")}
            </button>
            <button
              className="w-[90%] bg-white p-[.2rem] font-[500] border-[2px] border-linkIt-300 rounded-[.7rem] flex flex-row justify-center items-center gap-[.2rem]"
              onClick={() => handleAuthClick("google")}
              type="button"
            >
              {" "}
              <img
                src="/images/google.png"
                alt="sign-in with google"
                className="w-[1.2rem]"
              />
              {t("Ingresa con Google")}
            </button>
            <motion.button
              className="w-[90%] bg-white p-[.2rem] font-[500] border-[2px] border-linkIt-300 rounded-[.7rem] flex flex-row justify-center items-center gap-[.2rem]"
              onClick={() => handleAuthClick("github")}
              type="button"
              whileHover={{ scale: 1.05 }}
            >
              {" "}
              <img
                src="/images/github.png"
                alt="sign-in with github"
                className="w-[1.2rem]"
              />
              {t(" Ingresa con Github")}
            </motion.button>
          </div>
          <p className="text-[.7rem] font-[500] mb-[3%] lg:mb-[6%]">
            {t("¿Aún no tienes cuenta?")}{" "}
            <motion.span
              className="text-linkIt-300 underline cursor-pointer"
              onClick={handlePressNotRegistered}
            >
              {t("Registrarse")}
            </motion.span>
          </p>
          <h3 className="bg-linkIt-200 text-white font-semibold w-full text-center text-[.7rem] absolute bottom-0 top-[95%] p-[.4rem]">
            {t("INGRESO PARA TALENTOS")}
          </h3>
        </form>
      </div>
    </>
  );
}

export default LoginTalent;

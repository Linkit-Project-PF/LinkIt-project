import "./Register.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import validations from "./registerValidations";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import {
  setPressLogin,
  setPressRegister,
} from "../../redux/features/registerLoginSlice";
import axios, { AxiosError } from "axios";
import { auth } from "../../helpers/authentication/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import saveUserThirdAuth from "../../helpers/authentication/thirdPartyUserSave";
import { FirebaseError } from "firebase/app";
import { SUPERADMN_ID } from "../../env";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

function Register() {
  const dispatch = useDispatch();
  const [thirdParty, setThirdParty] = useState<boolean | undefined>(false);

  const [visiblePassword, setVisiblePassword] = useState<string>("password");
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState<string>("password")
  const [lock, setLock] = useState<string>("/Vectores/lock.svg");
  const [lockConfirm, setLockConfirm] = useState<string>("/Vectores/lock.svg");
  const [open, setOpen] = useState<string>("closed");
  const [openConfirm, setOpenConfirm] = useState<string>("closed");

  const handlePressAlreadyRegistered = () => {
    dispatch(setPressRegister("hidden"));
    dispatch(setPressLogin("visible"));
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

  const handleVisibleConfirmPassword = () => {
    if (visibleConfirmPassword === "password") {
      setVisibleConfirmPassword("text");
      setLockConfirm("/Vectores/lock-open.svg");
      setOpenConfirm("open");
    } else {
      setVisibleConfirmPassword("password");
      setLockConfirm("/Vectores/lock.svg");
      setOpenConfirm("closed");
    }
  };

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    role: sessionStorage.getItem("RegisterType"),
  });
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("RegisterType");
    };
  }, []);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (user.role === "user") user.name = user.name + " " + user.lastname;
      const response = await axios.post(
        "https://linkit-server.onrender.com/auth/register",
        user
      );
      if (response.data._id)
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: `Bienvenido a LinkIT ${user.name}`,
        confirmButtonText: 'Iniciar sesión',
        confirmButtonColor: '#2D46B9',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showCloseButton: false,
        showCancelButton: false,
        showDenyButton: false,
        showConfirmButton: true,
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        },
        didClose: () => {
          dispatch(setPressRegister("hidden"));
          dispatch(setPressLogin("visible"));
        }
    })
      dispatch(setPressRegister("hidden"));
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: `${error.response?.data}`,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#2D46B9',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          showCloseButton: false,
          showCancelButton: false,
          showDenyButton: false,
          showConfirmButton: true,
          timer: 5000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          },
          didClose: () => {
            dispatch(setPressRegister("hidden"));
          }
        })
        if (
          error.response?.data ===
          "Register error: That email is already on use"
        )
          setErrors({ ...errors, email: "Email en uso" });
      } else console.log(error);
    }
  };

  const handleAuthLogin = async (prov: string) => {
    try {
      let provider;
      if (prov === "google") {
        setThirdParty(true);
        provider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, provider);
        // @ts-expect-error: Private property is not readable for typescript valiadtion.
        if (!response._tokenResponse.isNewUser) {
          //* In case trying to register with google but user already exists
          console.log(import.meta.env);
          const result = await axios.get(
            `https://linkit-server.onrender.com/users/find?email=${response.user.email}`,
            {
              headers: {
                Authorization: `Bearer ${SUPERADMN_ID}`,
              },
            }
          );
          if (result.data.length)
            throw Error(`El usuario ya existe, para acceder inicia sesion`);
          else {
            const result = await axios.get(
              `https://linkit-server.onrender.com/companies/find?email=${response.user.email}`,
              {
                headers: {
                  Authorization: `Bearer ${SUPERADMN_ID}`,
                },
              }
            );
            if (result.data.length)
              throw Error(`La empresa ya existe, para acceder inicia sesion`);
          }
        }
        //* In case user does not exist enters here
        const DBresponse = await saveUserThirdAuth(
          response.user,
          String(user.role)
        );
        alert(`Te has registrado exitosamente, bienvenido ${DBresponse.name}`);
        dispatch(setPressRegister("hidden"));
        setThirdParty(false);
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        setThirdParty(false);
        if (error.code === "auth/popup-closed-by-user") {
          console.log("Firebase: Pop-Up Closed");
        } else {
          alert(error);
        }
      } else if (error instanceof AxiosError) {
        alert("AxiosError: " + error);
      } else alert("AuthError: " + error);
    }
    dispatch(setPressRegister("hidden"));
  };
  return (
    <>
      <div
        className="bg-white bg-opacity-[85%] fixed top-0 left-0 w-screen h-screen"
        onClick={() => dispatch(setPressRegister("hidden"))}
      ></div>
      <div className=" bg-linkIt-500 absolute left-1/2 top-1/2 translate-x-[-50%] rounded-[1.3rem] translate-y-[-50%] min-h-[50vh] p-[2%] w-[30%] flex flex-col flex-grow items-center gap-[1.5rem] font-montserrat overflow-hidden">
        <form
          className=" flex flex-col flex-grow items-center gap-[1.5rem] font-montserrat overflow-hidden w-full"
          onSubmit={handleSubmit}
        >
          <fieldset
            className={thirdParty ? "opacity-80 w-full" : "bg-inherit w-full"}
            disabled={thirdParty ? true : false}
          >
            {thirdParty ? (
              <div className="fixed top-[45%] left-[48%] flex flex-col items-center">
                <img
                  src="https://i.gifer.com/ZKZg.gif"
                  className="w-10 allign-self-center"
                ></img>
                <p>Autenticando...</p>
              </div>
            ) : null}
          </fieldset>

          <img
            src="/Linkit-logo/linkit-logo-blue.svg"
            alt="linkIT-Logo"
            className="w-[40%] mb-[-1rem] mt-[-8%]"
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem]">
              ¡Te damos la bienvenida a LinkIT!
            </h1>
          </div>
          <fieldset className="flex flex-col w-full content-center justify-center items-center gap-[.5rem]">
            <input
              type="text"
              className="border-[.125rem] bg-white border-linkIt-300 w-[90%] rounded-[10px] p-[3px] flex flex-row items-center content-center gap-[.4rem] pl-[.7rem] bg-transparent focus:outline-none placeholder:text-[.9rem] placeholder:text-linkIt-400 font-[500]"
              placeholder={user.role === "user" ? "Nombre" : "Nombre de la empresa"}
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            {
              errors.name && ( <p className="text-red-500 text-xs italic">{errors.name}</p> )
            }
            {
              user.role === "user" &&
            <input
              type="text"
              className="border-[.125rem] bg-white border-linkIt-300 w-[90%] rounded-[10px] p-[3px] flex flex-row items-center content-center gap-[.4rem] pl-[.7rem] bg-transparent focus:outline-none placeholder:text-[.9rem] placeholder:text-linkIt-400 font-[500]"
              placeholder="Apellido"
              name="lastname"
              value={user.lastname}
              onChange={handleInputChange}
            />
            }
            {
              errors.lastname && ( <p className="text-red-500 text-xs italic">{errors.lastname}</p> )
            }
            <div className="border-[.125rem] bg-white border-linkIt-300 w-[90%] rounded-[10px] p-[3px] flex flex-row items-center content-center gap-[.4rem] pl-[.7rem]">
              <img
                src="/Vectores/email-icon.svg"
                alt=""
                className="w-[.9rem]"
              />
              <input
                type="text"
                placeholder="Email corporativo"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="bg-transparent focus:outline-none placeholder:text-[.9rem] placeholder:text-linkIt-400 font-[500] w-[90%]"
              />
            </div>
            {
              errors.email && ( <p className="text-red-500 text-xs italic">{errors.email}</p> )
            }
            <div className="border-[.125rem] bg-white border-linkIt-300 w-[90%] rounded-[10px] p-[3px] flex flex-row items-center content-center gap-[.4rem] pl-[.7rem]">
              <img src={lock} alt="email" className="w-[.9rem]" />
              <input
                type={visiblePassword}
                placeholder="Contraseña"
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
            {
              errors.password && ( <p className="text-red-500 text-xs italic">{errors.password}</p> )
            }
            <div className="border-[.125rem] bg-white border-linkIt-300 w-[90%] rounded-[10px] p-[3px] flex flex-row items-center content-center gap-[.4rem] pl-[.7rem]">
              <img src={lockConfirm} alt="email" className="w-[.9rem]" />
              <input
                type={visibleConfirmPassword}
                placeholder="Confirmar contraseña"
                name="confirm_password"
                value={user.confirm_password}
                onChange={handleInputChange}
                className="bg-transparent focus:outline-none placeholder:text-[.9rem] placeholder:text-linkIt-400 font-[500] w-[90%]"
              />
              <button onClick={handleVisibleConfirmPassword} type="button">
                <img
                  src={`/Vectores/eye-${openConfirm}.svg`}
                  alt="show-password"
                  className="w-[.9rem] mr-[.5rem]"
                />
              </button>
            </div>
            {
              errors.confirm_password && ( <p className="text-red-500 text-xs italic">{errors.confirm_password}</p> )
            }
          </fieldset>
          <div className="flex flex-col w-full items-center gap-[.5rem]">
            <button
              className="bg-linkIt-300 text-white font-semibold text-[.9rem] p-[.2rem] w-[90%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out disabled:opacity-80"
              type="submit"
              disabled={
                user.role === "user"
                  ? errors.name ||
                    errors.email ||
                    errors.password ||
                    errors.confirm_password ||
                    user.confirm_password !== user.password ||
                    user.password.length < 8 ||
                    user.name === "" ||
                    user.email === "" ||
                    user.password === "" ||
                    user.confirm_password === ""
                    ? true
                    : false
                  : errors.name ||
                    errors.email ||
                    errors.password ||
                    errors.confirm_password ||
                    user.confirm_password !== user.password ||
                    user.password.length < 8 ||
                    user.name === "" ||
                    user.email === "" ||
                    user.password === "" ||
                    user.confirm_password === ""
                    ? true
                    : false
              }
            >
              Crear Cuenta
            </button>
            <button
              className="w-[90%] bg-white p-[.2rem] font-[500] border-[2px] border-linkIt-300 rounded-[.7rem] flex flex-row justify-center items-center gap-[.2rem]"
              onClick={() => handleAuthLogin("google")}
              type="submit"
            >
              {" "}
              <img
                src="/images/google.png"
                alt="sign-in with google"
                className="w-[1.2rem]"
              />
              Registrate con Google
            </button>
          </div>
          <p className="text-[.7rem] font-[500] mb-[3%] lg:mb-[6%]">
            ¿Ya tienes una cuenta? {""}
            <span className="text-linkIt-300 underline cursor-pointer" onClick={handlePressAlreadyRegistered}>
              Ingresa aquí
            </span>
          </p>
          <h3 className="bg-linkIt-200 text-white font-semibold w-full text-center text-[.7rem] absolute bottom-0 top-[95%] p-[.4rem]">
            {`REGISTRO PARA ${user.role === "user" ? "TALENTOS" : "EMPRESAS"}`}
          </h3>
        </form>
      </div>
    </>
  );
}

export default Register;


import "./Register.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import validations from "./registerValidations";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import {
  setPressLogin,
  setPressSignUp,
  setPressRegister,
} from "../../redux/features/registerLoginSlice";
import axios, { AxiosError } from "axios";
import { auth } from "../../helpers/authentication/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import saveUserThirdAuth from "../../helpers/authentication/thirdPartyUserSave";
import { FirebaseError } from "firebase/app";
import { SUPERADMN_ID } from "../../env";

function Register() {
  const dispatch = useDispatch();
  const [thirdParty, setThirdParty] = useState<boolean | undefined>(false);

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
      if (user.role === 'user') user.name = user.name + ' ' + user.lastname
      const response = await axios.post(
        "https://linkit-server.onrender.com/auth/register",
        user
      );
      if (response.data._id)
        alert("Te has registrado exitosamente, ya puedes loguearte!");
      dispatch(setPressRegister("hidden"));
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
        if (
          error.response?.data ===
          "Register error: That email is already on use"
        )
          setErrors({ ...errors, email: "Email en uso" });
      } else console.log(error);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    event.stopPropagation();
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
    <div className="register-container">
      <div className="register-subContainer">
        <fieldset
          className={thirdParty ? "opacity-80" : "bg-inherit"}
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
          <form
            className="register-form"
            onSubmit={handleSubmit}
            onClick={handleClick}
          >
            <h1 className="register-title">Registrate</h1>
            <input
              type="text"
              className={`register-input ${errors.name ? "input-error" : ""}`}
              name="name"
              placeholder={user.role === "user" ? "Nombre" : "Nombre de la empresa"}
              onChange={handleInputChange} 
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}

            {user.role === "user" ? <div><input
              type="text"
              className={`register-input ${errors.lastname ? "input-error" : ""}`}
              name="lastname"
              placeholder="Apellido"
              onChange={handleInputChange} 
            />
            {errors.lastname && (
              <p className="text-red-500 text-xs italic">{errors.lastname}</p>
            )}</div> : null}

            <input
              type="text"
              className={`register-input ${errors.email ? "input-error" : ""}`}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />

            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}

            <input
              type="password"
              className={`register-input ${
                errors.password ? "input-error" : ""
              }`}
              name="password"
              placeholder="Contraseña"
              onChange={handleInputChange}
            />

            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}

            <input
              type="password"
              className={`register-input ${
                errors.confirm_password ? "input-error" : ""
              }`}
              name="confirm_password"
              placeholder="Confirmar contraseña"
              onChange={handleInputChange}
            />

            {errors.confirm_password && (
              <p className="text-red-500 text-xs italic">
                {errors.confirm_password}
              </p>
            )}

            <motion.button
              type="submit"
              className="w-full text-center py-3 rounded bg-linkIt-300 text-white focus:outline-none my-1 z-[1000]"
              whileTap={{ scale: 0.95 }}
              disabled={
                errors.name ||
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
              Crear cuenta
            </motion.button>

            <p>
              O registrate con
              <a
                onClick={() => handleAuthLogin("google")}
                className="relative flex justify-center border border-linkIt-500 shadow cursor-pointer p-[.5rem] rounded-[7px] font-montserrat w-[100%] text-center font-semibold"
              >
                <img
                  alt="google"
                  src="/images/google.png"
                  className="w-[1.5rem]"
                />
              </a>
            </p>

            <div className="register-conditions-container">
              Al registrarte aceptas nuestros
              <a className="register-conditions-links" href="#">
                <span> Terminos de servicio </span>
              </a>{" "}
              y
              <a className="register-conditions-links" href="#">
                <span> Politica de privacidad </span>
              </a>
            </div>
          </form>
        </fieldset>

        <div className="text-white mt-6">
          Ya tienes una cuenta?
          <a
            className="no-underline border-b border-blue text-blue cursor-pointer"
            onClick={() => {
              dispatch(setPressSignUp("hidden")),
                dispatch(setPressRegister("hidden")),
                dispatch(setPressLogin("visible"));
            }}
          >
            <span> Inicia sesión.</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;

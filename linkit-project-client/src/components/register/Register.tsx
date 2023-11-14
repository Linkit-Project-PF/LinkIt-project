import "./Register.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import validations from "./registerValidations";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import {
  setPressLogin,
  setPressSignUp,
  setPressRegister,
} from "../../redux/features/registerLoginSlice";
import axios from "axios";
import { auth } from "../../helpers/authentication/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import saveUserThirdAuth from "../../helpers/authentication/thirdPartyUserSave";

function Register() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>();
  const [thirdParty, setThirdParty] = useState<boolean | undefined>(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: sessionStorage.getItem("RegisterType"),
    phone,
    country,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      phone: phone,
      country: country,
    }));
  }, [phone, country]);

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
      const response = await axios.post(
        "https://linkit-server.onrender.com/users/register?type=email",
        user
      );
      console.log(response);
      if (response.data._id)
        alert("Te has registrado exitosamente, ya puedes loguearte!");
      dispatch(setPressRegister("hidden"));
      return response;
    } catch (error: any) {
      alert(error.response?.data);
      if (
        error.response?.data === "Register error: That email is already on use"
      )
        setErrors({ ...errors, email: "Email en uso" });
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
        if (!response._tokenResponse.isNewUser) {
          //* In case trying to register with google but user already exists
          const {data} = await axios.get(
            `https://linkit-server.onrender.com/users/find?email=${response.user.email}`
          );
          // TODO data[0] has user info to be saved on redux persist or the user management system
          dispatch(setPressRegister("hidden"));
          throw Error(
            `El usuario ya existe, te has logueado como ${data[0].name}`
          );
        }
        //* In case user does not exist enters here
        if (response.user) {
          const DBresponse = await saveUserThirdAuth(response.user)
          // TODO DBresponse has user info to be saved on redux persist or the user management system
          alert(
            `Te has registrado exitosamente, bienvenido ${DBresponse.name}`
          );
          dispatch(setPressRegister("hidden"));
          setThirdParty(false);
        }
      }
    } catch (error: any) {
      setThirdParty(false);
      if (error.code === "auth/popup-closed-by-user") console.log(error)
      else {
        alert(error);
      }
    }
  };
  //? NOTE: Consider Google is <a> instead of <button> as any button will be taken for submit action
  return (
    <div className="register-container">
      <div className="register-subContainer">
        <fieldset
          className={thirdParty ? "opacity-80" : "bg-inherit"}
          disabled={thirdParty ? true : false}
        >
          {thirdParty ? (
            <div className="fixed top-[45%] left-[47%] flex flex-col items-center">
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
            <a onClick={() => handleAuthLogin("google")}>Google</a>
            <input
              type="text"
              className={`register-input ${errors.name ? "input-error" : ""}`}
              name="name"
              placeholder="Nombre"
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}

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

            <PhoneInput
              className="register-input phone"
              name="phone"
              placeholder="Numero de telefono"
              initialValueFormat="national"
              onChange={(value: string) => {
                setPhone(value);
                if (typeof value === "string") {
                  const phoneNumber = parsePhoneNumberFromString(value);
                  if (phoneNumber) {
                    setCountry(phoneNumber.country);
                  }
                }
              }}
            />
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

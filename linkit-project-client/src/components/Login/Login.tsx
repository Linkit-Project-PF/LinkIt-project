import "./Login.css";
import { motion } from "framer-motion";
import { useState } from "react";
import validations from "./loginValidations.ts";
import { useDispatch } from "react-redux";
import {
  setPressLogin,
  setPressSignUp,
} from "../../redux/features/registerLoginSlice.ts";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../helpers/authentication/firebase.ts";
import saveUserThirdAuth from "../../helpers/authentication/thirdPartyUserSave.ts";
import { loginSuccess } from "../../redux/features/AuthSlice.ts";

type Event = {
  target: HTMLInputElement;
};

function Login() {
  const dispatch = useDispatch();
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios(
        `https://linkit-server.onrender.com/users/login?email=${user.email}&password=${user.password}`
      );
      if (response.data._id) alert(`Bienvenido ${response.data.name}`);{
        console.log(response)
        const token = response.data._id;
        dispatch(loginSuccess({ token }));
        return response;
      };
    } catch (error: any) {
      alert(error.response?.data);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleAuthClick = async (prov: string) => {
    try {
      let provider;
      if (prov === "google") {
        setThirdParty(true);
        provider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, provider);
        if (response._tokenResponse.isNewUser) {
          //* In case user tries to log in but account does not exist
          const DBresponse = await saveUserThirdAuth(response.user);
          //TODO DB response has user info for redux persist or the user management system
          alert(
            `No existe una cuenta con este email, cuenta creada para ${DBresponse.name}`
          );
        } else {
          //* In case user exists, enters here
          const { data } = await axios.get(
            `https://linkit-server.onrender.com/users/find?email=${response.user.email}`
          );
          // TODO data[0] has user info to be saved on redux persist or the user management system
          if (data.length) {
            const authUser = data[0];
            alert(`Has ingresado. Bienvenido, ${authUser.name}`);
          } else
            throw Error(
              "Usuario autenticado pero registro no encontrado, contacte a un administrador"
            );
        }
      }
      dispatch(setPressLogin("hidden"));
      setThirdParty(false);
    } catch (error: any) {
      setThirdParty(false);
      if (error.code === "auth/popup-closed-by-user") console.log(error);
      else {
        alert(error);
      }
    }
  };
  //? NOTE: Consider Google is <a> instead of <button> as any button will be taken for submit action
  return (
    <div className="login-container">
      <div className="login-subContainer">
        <fieldset
          className={thirdParty ? "opacity-80 w-full" : "bg-inherit w-full"}
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
            className="login-form"
            onClick={handleClick}
            onSubmit={handleSubmit}
          >
            <h1 className="login-title">Inicia sesión</h1>

            <a onClick={() => handleAuthClick("google")}>Google</a>
            <input
              type="text"
              className={`login-input ${
                errors.email ? "login-input-error" : ""
              }`}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />

            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}

            <input
              type="password"
              className={`login-input ${
                errors.password ? "login-input-error" : ""
              }`}
              name="password"
              placeholder="Contraseña"
              onChange={handleInputChange}
            />

            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}

            <motion.button
              type="submit"
              className="w-full text-center py-3 rounded bg-linkIt-300 text-white focus:outline-none my-1 z-[1000]"
              whileTap={{ scale: 0.95 }}
              disabled={errors.email || errors.password ? true : false}
            >
              Ingresa
            </motion.button>

            <div className="login-conditions-container">
              No tienes una cuenta?
              <a
                className="register-link"
                onClick={() => {
                  dispatch(setPressLogin("hidden")),
                    dispatch(setPressSignUp("visible"));
                }}
              >
                <span> Regístrate.</span>
              </a>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default Login;

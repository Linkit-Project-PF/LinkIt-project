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
import { SUPERADMN_ID } from "../../env.ts";

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
        `https://linkit-server.onrender.com/auth/login?email=${user.email}&password=${user.password}`
      );
      if (response.data._id) {
        alert(`Bienvenido ${response.data.name}`);
        const token = response.data._id;
        const role = response.data.role;
        dispatch(loginSuccess({ token, role }));
        dispatch(setPressLogin("hidden"));
      }
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
        if ((response as any)._tokenResponse.isNewUser) {
          //* In case user tries to log in but account does not exist
          const DBresponse = await saveUserThirdAuth(response.user, "user");
          alert(
            `No existe una cuenta con este email, cuenta de talento creada para ${DBresponse.name}. Ahora puedes iniciar sesión`
          );
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
            alert(`Has ingresado. Bienvenido, ${authUser.name}`);
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
              alert(`Has ingresado. Bienvenido, ${authCompany.name}`);
            } else
              throw Error(
                "Usuario autenticado pero registro no encontrado, contacte a un administrador"
              );
          }
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
            <div className="fixed top-[45%] left-[48%] flex flex-col items-center">
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
            <p>
              O Ingresa con
              <a
                onClick={() => handleAuthClick("google")}
                className="relative block border border-linkIt-500 shadow cursor-pointer p-[.5rem] rounded-[7px] font-montserrat w-[100%] text-center font-semibold"
              >
                Google
              </a>
            </p>
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

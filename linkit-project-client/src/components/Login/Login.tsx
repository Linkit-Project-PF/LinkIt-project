import "./Login.css";
import { motion } from "framer-motion";
import { useState } from "react";
import validations from "./loginValidations.tsx";

type Event = {
  target: HTMLInputElement;
};

type FormProps = {
  setPressLogin: React.Dispatch<React.SetStateAction<string>>;
  setPressSignUp: React.Dispatch<React.SetStateAction<string>>;
}

function Login({setPressLogin, setPressSignUp}: FormProps) {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleClick = (event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    event.stopPropagation()
  }

  return (
    <div className="login-container">
      <div className="login-subContainer">
        <form className="login-form" onClick={handleClick} onSubmit={handleSubmit}>
          <h1 className="login-title">Log in</h1>

          <input
            type="text"
            className={`login-input ${errors.email ? 'login-input-error' : ''}`}
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />

          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}

          <input
            type="password"
            className={`login-input ${errors.password ? 'login-input-error' : ''}`}
            name="password"
            placeholder="Password"
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
            Log in
          </motion.button>

          <div className="login-conditions-container">
            Don't have an account?
            <a className="register-link" onClick={()=>{setPressLogin('hidden'), setPressSignUp('visible')}}>
              <span> Sign up.</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
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
  setPressTalent,
} from "../../redux/features/registerLoginSlice";
import axios from "axios";

function RegisterTalent() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
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

    setPhone(target.value);

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
      return response;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div className="register-container">
      <div className="register-subContainer">
        <form
          className="register-form"
          onSubmit={handleSubmit}
          onClick={handleClick}
        >
          <h1 className="register-title">Sign up</h1>
          <input
            type="text"
            className={`register-input ${errors.name ? "input-error" : ""}`}
            name="name"
            placeholder="Name"
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
            placeholder="Phone Number"
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
            className={`register-input ${errors.password ? "input-error" : ""}`}
            name="password"
            placeholder="Password"
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
            placeholder="Confirm Password"
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
            Create Account
          </motion.button>

          <div className="register-conditions-container">
            By signing up, you agree to the
            <a className="register-conditions-links" href="#">
              <span> Terms of Service </span>
            </a>{" "}
            and
            <a className="register-conditions-links" href="#">
              <span> Privacy Policy </span>
            </a>
          </div>
        </form>

        <div className="text-white mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue cursor-pointer"
            onClick={() => {
              dispatch(setPressSignUp("hidden")),
                dispatch(setPressTalent("hidden")),
                dispatch(setPressLogin("visible"));
            }}
          >
            <span> Log in.</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterTalent;

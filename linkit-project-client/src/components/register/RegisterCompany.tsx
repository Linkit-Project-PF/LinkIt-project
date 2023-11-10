import "./Register.css";
import { motion } from "framer-motion";
import { useState } from "react";
import validations from "./registerCompanyValidations";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { setPressLogin, setPressSignUp, setPressCompany } from "../../redux/features/registerLoginSlice";
import axios from "axios";


function RegisterCompany() {

  const dispatch = useDispatch();

  const [phone, setPhone] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>();

  const [company, setCompany] = useState({
    name: "",
    email: "",
    phone,
    country,
    role: "company",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const fieldErrors = validations({
      ...company,
      [target.name]: target.value,
    });

    setCompany({
      ...company,
      [target.name]: target.value,
    });

    setErrors({
      ...errors,
      [target.name]: fieldErrors[target.name as keyof typeof fieldErrors],
    });
  };
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {

      const response = await axios.post('http://linkit-server.onrender.com/users/register', company)
      console.log(response)
      return response
    } catch (error: any) {
      console.log(error.message)
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
            placeholder="Company Name"
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

          <PhoneInput
            className="register-input phone"
            name="phone"
            placeholder="Phone Number"
            initialValueFormat="national"
            onChange={(value: string)=>{
              setPhone(value);
              if (typeof value === 'string') {
                const phoneNumber = parsePhoneNumberFromString(value);
                if (phoneNumber) {
                  setCountry(phoneNumber.country);
                }
              }
            }}
          />

          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}

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
              company.confirm_password !== company.password
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
                dispatch(setPressCompany("hidden")),
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

export default RegisterCompany;

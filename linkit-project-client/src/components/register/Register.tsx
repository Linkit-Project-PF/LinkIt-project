import './Register.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import validations from './registerValidations'

type Event = {
    target: HTMLInputElement
}

function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    })   

    const handleInputChange = ({target}:Event) => {
        const fieldErrors = validations({
            ...user,
            [target.name]: target.value
        })

        setUser({
            ...user,
            [target.name]: target.value
        })

        setErrors({
            ...errors,
            [target.name]: fieldErrors[target.name as keyof typeof fieldErrors]
        })
    }

  return (
    <div className="register-container">
    <div className="register-subContainer">
        <form className="register-form">
            <h1 className="register-title">Sign up</h1>
            <input 
                type="text"
                className="register-input"
                name="name"
                placeholder="Name" 
                onChange={handleInputChange}
                />
                { errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p> }
                
            <input 
                type="text"
                className="register-input"
                name="email"
                placeholder="Email" 
                onChange={handleInputChange}
                />

            <input 
                type="password"
                className="register-input"
                name="password"
                placeholder="Password" 
                onChange={handleInputChange}
                />
            <input 
                type="password"
                className="register-input"
                name="confirm_password"
                placeholder="Confirm Password" 
                onChange={handleInputChange}
                />

            <motion.button
                type="submit"
                className="w-full text-center py-3 rounded bg-linkIt-300 text-white focus:outline-none my-1 z-[1000]"
                whileTap={{ scale: 0.95 }} 
            >Create Account</motion.button>

            <div className="register-conditions-container">
                By signing up, you agree to the 
                <a className="register-conditions-links" href="#">
                    <span> Terms of Service </span>
                </a> and 
                <a className="register-conditions-links" href="#">
                   <span> Privacy Policy </span>
                </a>
            </div>
        </form>

        <div className="text-grey-dark mt-6">
            Already have an account? 
            <a className="no-underline border-b border-blue text-blue" href="#">
                <span> Log in.</span>
            </a>
        </div>
    </div>
</div>
  )
}

export default Register
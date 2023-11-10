import "./App.css";
import { Route, Routes } from "react-router-dom";
import Recursos from "./components/recursos/recursos";
import QuienesSomos from "./components/quienesSomos/quienesSomos";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Empresas from "./components/Empresas/Empresas";
import Talentos from "./components/Talentos/Talentos";
import RegisterTalent from "./components/register/RegisterTalent";
import RegisterCompany from "./components/register/RegisterCompany";
import PreRegisterForm from "./components/register/preRegisterForm";
import Login from "./components/Login/Login";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const registerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1,
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1,
    },
  },
};

const loginVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition:{
      type: "spring",
      delay: 0.2,
      duration: 1,
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1,
    },
  },
};

const registerCompanyVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1,
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1,
    },
  },
}

const registerTalentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1,
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1,
    },
  }
}

function App() {
  const [pressSignUp, setPressSignUp] = useState("hidden");
  const [pressLogin, setPressLogin] = useState("hidden");
  const [pressCompany, setPressCompany] = useState("hidden");
  const [pressTalent, setPressTalent] = useState("hidden");

  return (
    <>
      <NavBar />

        <motion.div 
          variants={loginVariants}
          initial="hidden"
          animate={pressLogin}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
          onClick={() => {
            setPressLogin("hidden");
          }}
        >
          <Login setPressLogin={setPressLogin} setPressSignUp={setPressSignUp}/>
        </motion.div>

      <button
        className="bg-linkIt-400 text-white z-20 absolute top-1/2"
        onClick={() => {
          pressLogin === "visible"
            ? setPressLogin("hidden")
            : setPressLogin("visible"), setPressSignUp("hidden")
        }}
      >
        Login
      </button>

      <motion.div 
          variants={registerVariants}
          initial="hidden"
          animate={pressSignUp}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
          onClick={() => {
            setPressSignUp("hidden");
          }}
        >
          <PreRegisterForm setPressTalent={setPressTalent} setPressCompany={setPressCompany} setPressSignUp={setPressSignUp}/>
        </motion.div>

        <motion.div 
          variants={registerCompanyVariants}
          initial="hidden"
          animate={pressCompany}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
          onClick={() => {
            setPressCompany("hidden");
          }}
        >
          <RegisterCompany setPressLogin={setPressLogin} setPressSignUp={setPressSignUp} setPressCompany={setPressCompany}/>
        </motion.div>

        <motion.div 
          variants={registerTalentVariants}
          initial="hidden"
          animate={pressTalent}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
          onClick={() => {
            setPressTalent("hidden");
          }}
        >
          <RegisterTalent setPressLogin={setPressLogin} setPressSignUp={setPressSignUp} setPressTalent={setPressTalent}/>
        </motion.div>

      <button
        className="bg-linkIt-400 text-white z-20 absolute top-[60%]"
        onClick={() => {
          pressSignUp === "visible"
            ? setPressSignUp("hidden")
            : setPressSignUp("visible"), setPressLogin("hidden"), setPressCompany("hidden"), setPressTalent("hidden")
        }}
      >
        Sign Up
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soyEmpresa" element={<Empresas />} />
        <Route path="/soyTalento" element={<Talentos />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
      </Routes>
    </>
  );
}

export default App;
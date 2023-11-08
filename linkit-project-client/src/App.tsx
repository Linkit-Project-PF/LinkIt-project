import "./App.css";
import { Route, Routes } from "react-router-dom";
import Recursos from "./components/recursos/recursos";
import QuienesSomos from "./components/quienesSomos/quienesSomos";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Empresas from "./components/Empresas/Empresas";
import Talentos from "./components/Talentos/Talentos";
import Register from "./components/register/Register";
import Login from "./components/Login/Login";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const registerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
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

function App() {
  const [pressRegister, setPressRegister] = useState("hidden");
  const [pressLogin, setPressLogin] = useState("hidden");

  return (
    <>
      <NavBar />

        <motion.div 
          variants={registerVariants}
          initial="hidden"
          animate={pressRegister}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen "
          onClick={() => {
            setPressRegister("hidden");
          }}
        >
          <Register />
        </motion.div>

      <button
        className="bg-linkIt-400 text-white z-20 absolute top-1/2"
        onClick={() => {
          pressRegister === "visible"
            ? setPressRegister("hidden")
            : setPressRegister("visible");
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

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Recursos from "./components/recursos/recursos";
import QuienesSomos from "./components/quienesSomos/quienesSomos";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Empresas from "./components/Empresas/Empresas";
import Talentos from "./components/Talentos/Talentos";
import Register from "./components/register/Register";
import PreRegisterForm from "./components/register/preRegisterForm";
import PreLogin from "./components/Login/pre-login/PreLogin.tsx";
import LoginTalent from "./components/Login/Login-talent/LoginTalent.tsx";
import Libreria from "./components/recursos/Modulos-Recursos/Libreria/Libreria.tsx";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  setPressSignUp,
  setPressRegister,
} from "./redux/features/registerLoginSlice";
import {
  setResources,
  setBlogs,
  setEbooks,
  setEvents,
} from "./redux/features/ResourcesSlice.ts";
import { motion, Variants } from "framer-motion";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { SUPERADMN_ID } from "./env.ts";
import AdminPanel from "./components/Paneles/AdminProfile/Panel/AdminPanel.tsx";
import Profile from "./components/Profiles/Profile.tsx";
import LoginCompany from "./components/Login/Login-company/LoginCompany.tsx";

type registerLoginState = {
  registerLogin:{
    pressSignUp: string;
    pressLogin: string;
    pressRegister: string;
    pressLoginTalent: string;
    pressLoginCompany: string;
  }
};


const registerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1,
    },
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
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 1,
    },
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

const registerFormVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1,
    },
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
  const dispatch = useDispatch();
  const pressSignUp = useSelector(
    (state: registerLoginState) => state.registerLogin.pressSignUp
  );
  const pressLogin = useSelector(
    (state: registerLoginState) => state.registerLogin.pressLogin
  );
  const pressRegister = useSelector(
    (state: registerLoginState) => state.registerLogin.pressRegister
  );
  const pressLoginTalent = useSelector((state: registerLoginState)=>state.registerLogin.pressLoginTalent);
  const pressLoginCompany = useSelector((state: registerLoginState)=>state.registerLogin.pressLoginCompany);

  useEffect(() => {
    /**
     * Fetches data from the server and sets the job offers in the state.
     */
    const fetchData = async () => {
      try {
        const responseResources = await axios.get(
          "https://linkit-server.onrender.com/posts/find",
          { headers: { Authorization: `Bearer ${SUPERADMN_ID}` } }
        );
        dispatch(setResources(responseResources.data));
        dispatch(setEvents());
        dispatch(setBlogs());
        dispatch(setEbooks());
      } catch (error) {
        if (error instanceof AxiosError) console.log({ error: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />

      <motion.div
        variants={loginVariants}
        initial="hidden"
        animate={pressLogin}
        className="fixed w-screen h-screen z-[100]"
      >
        <PreLogin />
      </motion.div>
      
      <motion.div
        variants={registerVariants}
        initial="hidden"
        animate={pressLoginTalent}
        className="fixed w-screen h-screen z-[100]"
      >
        <LoginTalent />
      </motion.div>

      <motion.div
        variants={registerVariants}
        initial="hidden"
        animate={pressLoginCompany}
        className="fixed w-screen h-screen z-[100]"
      >
        <LoginCompany />
      </motion.div>

      <motion.div
        variants={registerVariants}
        initial="hidden"
        animate={pressSignUp}
        className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
        onClick={() => {
          dispatch(setPressSignUp("hidden"));
        }}
      >
        <PreRegisterForm />
      </motion.div>

      {pressRegister === "visible" ? (
        <motion.div
          variants={registerFormVariants}
          initial="hidden"
          animate={pressRegister}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
          onClick={() => {
            dispatch(setPressRegister("hidden"));
          }}
        >
          <Register />
        </motion.div>
      ) : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soyEmpresa" element={<Empresas />} />
        <Route path="/soyTalento" element={<Talentos />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/recursos/libreria" element={<Libreria />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/AdminDashboard/*" element={<AdminPanel />} />
        <Route path ="/MyProfile/*" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;

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
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setPressLogin, setPressSignUp, setPressCompany, setPressTalent } from "./redux/features/registerLoginSlice";
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
  const dispatch = useDispatch();
  const pressSignUp = useSelector((state: any) => state.registerLogin.pressSignUp);
  const pressLogin = useSelector((state: any) => state.registerLogin.pressLogin);
  const pressCompany = useSelector((state: any) => state.registerLogin.pressCompany);
  const pressTalent = useSelector((state: any) => state.registerLogin.pressTalent);


  return (
    <>
      <NavBar />

        <motion.div 
          variants={loginVariants}
          initial="hidden"
          animate={pressLogin}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
          onClick={() => {
            dispatch(setPressLogin("hidden"));
          }}
        >
          <Login/>
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
          <PreRegisterForm/>
        </motion.div>

        <motion.div 
          variants={registerCompanyVariants}
          initial="hidden"
          animate={pressCompany}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
          onClick={() => {
            dispatch(setPressCompany("hidden"));
          }}
        >
          <RegisterCompany />
        </motion.div>

        <motion.div 
          variants={registerTalentVariants}
          initial="hidden"
          animate={pressTalent}
          className="bg-black bg-opacity-50 fixed top-0 left-0 w-screen h-screen z-[100]"
          onClick={() => {
            dispatch(setPressTalent("hidden"));
          }}
        >
          <RegisterTalent />
        </motion.div>

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
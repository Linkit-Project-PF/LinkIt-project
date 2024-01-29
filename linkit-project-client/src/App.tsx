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
  setResources,
  setBlogs,
  setEbooks,
  setEvents,
  setStackTechnologies,
  setCountries,
  setTechStack,
} from "./redux/features/ResourcesSlice.ts";
import { motion, Variants } from "framer-motion";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { SUPERADMN_ID } from "./env.ts";
import AdminPanel from "./components/Paneles/AdminProfile/Panel/AdminPanel.tsx";
import LoginCompany from "./components/Login/Login-company/LoginCompany.tsx";
import JobDescription from "./components/Talentos/ModulosTalentos/ModuloTalentosG/JobCard/jobDescription/JobDescription.tsx";
import BlogView from "./components/recursos/Modulos-Recursos/blogs/blogs-view/BlogView.tsx";
import TopButton from "./Utils/TopButton.tsx";
import ReactGA from "react-ga4";
import { setAdmins } from "./redux/features/ApplicationSlice.ts";
import JobForm from "./components/Talentos/ModulosTalentos/ModuloTalentosG/JobCard/jobDescription/job-form/JobForm.tsx";
import Footer from "./Utils/Footer/Footer.tsx";
import ProfileContainer from "./components/Profiles/ProfileContainer.tsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.tsx";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions.tsx";

type registerLoginState = {
  registerLogin: {
    pressSignUp: string;
    pressLogin: string;
    pressRegister: string;
    pressLoginTalent: string;
    pressLoginCompany: string;
  };
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
  const pressLoginTalent = useSelector(
    (state: registerLoginState) => state.registerLogin.pressLoginTalent
  );
  const pressLoginCompany = useSelector(
    (state: registerLoginState) => state.registerLogin.pressLoginCompany
  );

  //* GOOGLE ANALYTICS IN PROGRESS
  useEffect(() => {
    const googleAnalytics = async () => {
      try {
        ReactGA.initialize("G-M6F6EHLMX7");
      } catch (error) {
        console.log(error);
      }
    };
    googleAnalytics();
  }, []);

  useEffect(() => {
    /**
     * Fetches data from the server and sets the job offers in the state.
     */
    const fetchData = async () => {
      try {
        const responseResources = await axios.get(
          "https://linkit-server.onrender.com/posts/find",
          {
            headers: {
              Authorization: `Bearer ${SUPERADMN_ID}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );

        const responseTechnologies = await axios.get(
          "https://linkit-server.onrender.com/resources/stackList",
          {
            headers: {
              Authorization: `Bearer ${SUPERADMN_ID}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        const countries = await axios.get(
          "https://linkit-server.onrender.com/resources/countries",
          {
            headers: {
              Authorization: `Bearer ${SUPERADMN_ID}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        const techStack = await axios.get(
          "https://linkit-server.onrender.com/resources/techStack",
          {
            headers: {
              Authorization: `Bearer ${SUPERADMN_ID}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        const responseAdmins = await axios.get(
          "https://linkit-server.onrender.com/admins/find",
          {
            headers: {
              Authorization: `Bearer ${SUPERADMN_ID}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        dispatch(setCountries(countries.data));
        dispatch(setTechStack(techStack.data));
        dispatch(setStackTechnologies(responseTechnologies.data));
        dispatch(setResources(responseResources.data));
        dispatch(setEvents());
        dispatch(setBlogs());
        dispatch(setEbooks());
        dispatch(setAdmins(responseAdmins.data));
      } catch (error) {
        if (error instanceof AxiosError) console.error({ error: error.response?.data });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen h-full">
      <NavBar />

      <motion.div
        variants={loginVariants}
        initial="hidden"
        animate={pressLogin}
        className="fixed w-screen h-screen z-[1000] top-[.0rem]"
      >
        <PreLogin />
      </motion.div>

      <motion.div
        variants={loginVariants}
        initial="hidden"
        animate={pressLoginTalent}
        className="fixed w-screen h-screen z-[100] top-[.0rem]"
      >
        <LoginTalent />
      </motion.div>

      <motion.div
        variants={loginVariants}
        initial="hidden"
        animate={pressLoginCompany}
        className="fixed w-screen h-screen z-[100] top-[.0rem]"
      >
        <LoginCompany />
      </motion.div>

      <motion.div
        variants={registerVariants}
        initial="hidden"
        animate={pressSignUp}
        className="fixed w-screen h-screen z-[100] top-[.0rem]"
      >
        <PreRegisterForm />
      </motion.div>

      {pressRegister === "visible" && (
        <motion.div
          variants={registerVariants}
          initial="hidden"
          animate={pressRegister}
          className="fixed w-screen h-screen z-[100] top-[.0rem]"
        >
          <Register />
        </motion.div>
      )} 

      <Routes>
        <Route path="/" element={<Home Unauth={false} error={false} Verify={false}/>} />
        <Route path="/soyEmpresa" element={<Empresas />} />
        <Route path="/soyTalento" element={<Talentos />} />
        <Route path="/soyTalento/Joboffer/:id" element={<JobDescription />} />
        <Route
          path="/soyTalento/Joboffer/:id/application"
          element={<JobForm />}
        />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/recursos/libreria" element={<Libreria />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/AdminDashboard/*" element={<AdminPanel />} />
        <Route path="/dashboard" element={<ProfileContainer />} />
        {/* <Route path="/verify/:id" element={<VerifyUser />} /> */}
        {/* <Route path="/testing" element={<Loading text={"Hola"} />} /> */}
        <Route path="/blog/:id" element={<BlogView />} />
        <Route
          path="/unauthorized"
          element={<Home Unauth={true} error={false} Verify={false} />}
        />
        <Route path="/verify" element={<Home Verify={true} Unauth={false} error={false} />} />
        <Route path="*" element={<Home Unauth={false} error={true} Verify={false} />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
      </Routes>
      <TopButton />
      <Footer />
    </div>
  );
}

export default App;

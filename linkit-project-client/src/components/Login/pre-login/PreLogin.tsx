import "./PreLogin.css";
import { motion } from "framer-motion";
import { setPressLogin, setPressLoginCompany, setPressLoginTalent } from "../../../redux/features/registerLoginSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

function PreLogin() {
  const dispatch = useDispatch();
  const {t}= useTranslation()
  const handlePressLoginTalent = () => {
    dispatch(setPressLoginTalent("visible"));
    dispatch(setPressLoginCompany("hidden"));
    dispatch(setPressLogin("hidden"));
  }
  
  const handlePressLoginCompany = () => {
        dispatch(setPressLoginTalent("hidden"));
        dispatch(setPressLoginCompany("visible"));
        dispatch(setPressLogin("hidden"));
  }

  return (
    <>
      <div
        className="bg-white bg-opacity-[85%] fixed top-0 left-0 w-screen h-screen"
        onClick={() => dispatch(setPressLogin("hidden"))}
      ></div>
      <div className=" bg-linkIt-500 absolute left-1/2 top-1/2 translate-x-[-50%] rounded-[1.3rem] translate-y-[-50%] min-h-[55vh] p-[2%] w-[35%] flex flex-col justify-center items-center gap-[1.5rem] font-montserrat">
        <img
          src="/Linkit-logo/linkit-logo-blue.svg"
          alt="linkIT-Logo"
          className="w-[40%] mb-[-1rem]"
        />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem]">
            {t('¡Te damos la bienvenida a LinkIT!')}
          </h1>
          <p className="text-linkIt-400 font-[500] text-[.85rem] 2xl:text-[1.2rem]">
            {t('Conectando al talento más destacado')} <br />
            {t('con los mejores proyectos IT.')}
          </p>
        </div>
        <div className="flex flex-col content-center justify-center items-center gap-[.5rem] w-full">
          <button 
          className="bg-linkIt-300 text-white font-semibold text-[.9rem] p-[.5rem] w-[90%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out"
          onClick={handlePressLoginTalent}
          >
            {t('Soy Talento')}
          </button>
          <button 
          className="bg-linkIt-300 text-white font-semibold text-[.9rem] p-[.5rem] w-[90%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out"
          onClick={handlePressLoginCompany}
          >
            {t('Soy Empresa')}
          </button>
        </div>
        <p className="text-[.8rem] 2xl:text-[1rem]">
          {t('¿Necesitas ayuda?')}{" "}
          <motion.a
            href=""
            target="_blank"
            className="text-linkIt-300 underline"
            whileHover={{ textDecoration: "none" }}
          >
            {t('Contáctanos')}
          </motion.a>
        </p>
      </div>
    </>
  );
}

export default PreLogin;

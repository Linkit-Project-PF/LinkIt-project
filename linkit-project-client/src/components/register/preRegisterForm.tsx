import { motion } from "framer-motion";
import {
  setPressRegister,
  setPressSignUp,
} from "../../redux/features/registerLoginSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

function PreLogin() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handlePressSignUpTalent = () => {
    dispatch(setPressRegister("visible"));
    dispatch(setPressSignUp("hidden"));
    sessionStorage.setItem("RegisterType", "user");
  };

  const handlePressSignUpCompany = () => {
    dispatch(setPressRegister("visible"));
    dispatch(setPressSignUp("hidden"));
    sessionStorage.setItem("RegisterType", "company");
  };

  return (
    <>
      <div
        className="bg-white bg-opacity-[85%] fixed top-0 left-0  w-screen h-screen"
        onClick={() => dispatch(setPressSignUp("hidden"))}
      ></div>
      <div className=" bg-linkIt-500 absolute left-1/2 top-1/2 translate-x-[-50%] rounded-[1.3rem] translate-y-[-50%] min-h-[55vh] min-w-[300px] p-[2%] w-[35%] flex flex-col justify-center items-center gap-[1.5rem] font-montserrat">
        <img
          src="/Linkit-logo/linkit-logo-blue.svg"
          alt="linkIT-Logo"
          className="w-[40%] mb-[-1rem]"
        />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem]">
            {t("¡Te damos la bienvenida a LinkIT!")}
          </h1>
          <p className="text-linkIt-400 font-[500] text-[.85rem] 2xl:text-[1.2rem]">
            {t("Conectando al talento más destacado")} <br />
            {t("con los mejores proyectos IT.")}
          </p>
        </div>
        <div className="flex flex-col content-center justify-center items-center gap-[.5rem] w-full">
          <button
            className="bg-linkIt-300 text-white font-semibold text-[.9rem] p-[.5rem] w-[90%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out"
            onClick={handlePressSignUpTalent}
          >
            {t("Soy Talento")}
          </button>
          <button
            className="bg-linkIt-300 text-white font-semibold text-[.9rem] p-[.5rem] w-[90%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out"
            onClick={handlePressSignUpCompany}
          >
            {t("Soy Empresa")}
          </button>
        </div>
        <p className="text-[.8rem] 2xl:text-[1rem]">
          {t("¿Necesitas ayuda?")}{" "}
          <motion.a
            href=""
            target="_blank"
            className="text-linkIt-300 underline"
            whileHover={{ textDecoration: "none" }}
          >
            {t("Contáctanos")}
          </motion.a>
        </p>
      </div>
    </>
  );
}

export default PreLogin;

// import "./PreRegister.css";
// import { useDispatch } from "react-redux/es/hooks/useDispatch";
// import {
//   setPressSignUp,
//   setPressRegister,
// } from "../../redux/features/registerLoginSlice";

// function PreRegisterForm() {
//   const dispatch = useDispatch();

//   const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     event.stopPropagation();
//   };
//   return (
//     <div className="preRegister-container">
//       <div className="preRegister-subContainer">
//         <div className="preRegister-content" onClick={handleClick}>
//           <h1 className="preRegister-title">Selecciona Tu Tipo De Perfil:</h1>
//           <div className="btn-container">
//             <button
//               className="preRegister-btn"
//               onClick={() => {
//                 dispatch(setPressRegister("visible")),
//                   dispatch(setPressSignUp("hidden")),
//                   sessionStorage.setItem("RegisterType", "user");
//               }}
//             >
//               Talento
//             </button>
//             <button
//               className="preRegister-btn"
//               onClick={() => {
//                 dispatch(setPressRegister("visible")),
//                   dispatch(setPressSignUp("hidden")),
//                   sessionStorage.setItem("RegisterType", "company");
//               }}
//             >
//               Empresa
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PreRegisterForm;

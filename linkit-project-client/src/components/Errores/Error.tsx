import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Error() {
  const {t}= useTranslation()
  return (
    <div className="flex flex-col w-full h-[100vh] bg-black bg-opacity-50 absolute z-20">
      <div
          className=" bg-linkIt-500 absolute left-1/2 top-1/2 translate-x-[-50%] rounded-[1.3rem] translate-y-[-50%] h-[500px] p-[2%] w-[800px] flex flex-col justify-center items-center gap-14 font-montserrat"
        >
          <div className="flex flex-col items-center">
            <img
              src="/Linkit-logo/linkit-logo-blue.svg"
              alt="linkIT-Logo"
              className="w-[350px] mb-[-1rem]"
            />
            <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem] text-center">
              No se encuentran registros. Por favor vuelve a intentar o contáctanos para asistencia.
            </h1>
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
    </div>
  );
}
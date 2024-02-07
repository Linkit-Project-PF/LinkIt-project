import { useNavigate } from "react-router-dom";
import "./ModuloF.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ModuloF() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goSoyEmpresa = () => {
    navigate("/SoyEmpresa");
  };
  const goSoyTalento = () => {
    navigate("/SoyTalento");
  };

  return (
    <div className="relative overflow-hidden lg:overflow-visible bg-linkIt-500 dark:bg-linkIt-200 dark:text-white p-[7%] w-screen before:lg:block before:hidden before:bg-linkIt-500 before:dark:bg-linkIt-200 before:w-screen before:lg:h-[14%] before:absolute before:top-[93%] before:left-0 before:skew-y-[-3deg] after:hidden after:lg:block after:bg-white after:dark:bg-linkIt-400 after:w-screen after:lg:h-[10px] after:absolute after:bottom-[-6.3%] after:left-0 after:skew-y-[-3deg]">
      <img
        className="absolute top-[-10%] ssm:top-[-13%] md:top-[-14%] lg:top-[-10%] lg:xl:top-[-14%] left-[50%] w-[70%] z-0 max-w-[1350px]"
        src="/Vectores/linkit-web-vectores-11.svg"
        alt="world map"
      />
      <div className="">
        <h3 className="relative z-10 font-bold xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[5rem] w-[58%] lg:w-[44%] 1xl:w-[40%] justify-self-start leading-tight font-manrope">
          {t("Talento y empresas en más de 50 países")}
        </h3>
        <div className="relative z-10 mt-[3%] space-x-2 mb-[3rem]">
          <motion.button
            className="background-button"
            onClick={goSoyEmpresa}
            whileTap={{ scale: 0.9 }}
          >
            {t("Contrata Talento")}
          </motion.button>
          <motion.button
            className="transparent-background-button"
            onClick={goSoyTalento}
            whileTap={{ scale: 0.9 }}
          >
            {t("Vacantes disponibles")}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

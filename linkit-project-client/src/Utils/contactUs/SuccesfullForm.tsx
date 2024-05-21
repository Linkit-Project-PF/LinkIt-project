import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function SuccesfullForm() {
  const { t } = useTranslation();
  return (
    <div className="bg-linkIt-200 text-white font-montserrat overflow-hidden w-full px-[5%] pt-[11%] pb-[6%] flex justify-center">
      <div className=" text-center">
        <h1 className="font-bold font-manrope mt-2 xs:mt-28 xs:text-[1.0rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.6rem] w-[100%] ssm:w-[100%] sm:w-[100%] lg:w-[100%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[100%] 2xl:text-[4.5rem] 2xl:w-[100%] leading-tight 2xl:mb-12 mb-12 xs:mb-6 ">{t("¡Gracias por completar el formulario!")}</h1>
        <p className="font-monserrat  text-[0.8rem] mt-12 xs:mt-2 xs:text-[0.7rem] ssm:text-[0.9rem] sm:text-[1rem] lg:text-[1.5rem] md:text-[1.4rem] xl:text-[1.8rem] 2xl:text-[2rem] leading-tight mb-12 xs:mb-6">{t("En breve nos contactaremos contigo.")} <br />
          {t("¡No te olvides de revisar tu correo!")}</p>
        <a href="/SoyEmpresa">
          <motion.button className="background-button md:text-[1rem] mt-12 2xl:mt-12 xs:mt-4" whileTap={{ scale: 0.9 }}>{t("Volver a Soy Empresa")}</motion.button>
        </a>
      </div>
    </div>
  );
}


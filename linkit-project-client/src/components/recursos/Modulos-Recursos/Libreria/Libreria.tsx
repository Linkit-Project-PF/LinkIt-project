import "./Libreria.css";
import SideBar from "./sidebar/SideBar";
import AllResources from "./allResources/AllResources";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const goBackVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

function Libreria() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-[6rem] p-[3.5rem]">
        <motion.h3
          variants={goBackVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="inline-flex flex-row gap-[.5rem] font-bold font-montserrat text-[1.3rem] mb-[2rem] cursor-pointer"
          onClick={() => navigate("/recursos")}
        >
          <img
            src="/Vectores/left-arrow.svg"
            alt="go-back"
            className="w-[1.5rem]"
          />
          {t("Volver")}
        </motion.h3>
        <h1 className="text-left text-[2rem] font-bold font-montserrat ">
          {t("Todos los recursos")}
        </h1>
        <div className=" content-display flex flex-col md:flex-row">
          <section>
            <SideBar />
          </section>
          <section>
            <AllResources />
          </section>
        </div>
      </div>
    </>
  );
}

export default Libreria;

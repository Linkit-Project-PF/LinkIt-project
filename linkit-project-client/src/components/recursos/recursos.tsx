import "./recursos.css";
import Blogs from "./Modulos-Recursos/blogs/Blogs";
import Ebooks from "./Modulos-Recursos/ebooks/Ebooks";
import Events from "./Modulos-Recursos/eventos/Events";
import CV from "./Modulos-Recursos/cv/CV";
import FAQ from "./Modulos-Recursos/FAQ/FAQ";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Newsletter from "../../Utils/newsletter/newsletter";
import { motion } from "framer-motion";


export default function Recursos() {
  const { t } = useTranslation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <section id="moduloA">
        <div className="grid grid-cols-2 h-fit w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white  pt-[17vh] lg:pt-[22vh]">
          <div className="space-y-[5%] p-[7%] ml-4">
            <h2 className="font-bold font-manrope xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] w-[150%] ssm:w-[130%] sm:w-[115%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight ">
              {t("Impulsa tu carrera")} {t("en IT con los mejores")}{" "}
              {t("tips y recursos!")}
            </h2>
            <h3 className="ont-monserrat text-[0.8rem] ssm:text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[89%] sm:w-[75%]  lg:w-[90%] xl:w-[85%] leading-tight">
              {t("Blogs, ebooks y webinars para crecer como profesional en el mundo tech.")}{" "}
            </h3>
            <div className="">
              <motion.a
                className="background-button md:text-[1rem]"
                whileTap={{ scale: 0.9 }}
                href="https://airtable.com/appPc8zZP29ez9V2O/shrX7MQRZlgmqP6bq"
              >
                {t("Suscríbete al newsletter")}
              </motion.a>
            </div>
          </div>
          <img
            className="relative self-end content-end w-[90%] left-[15%] xs:left-[3%] md:left-[15%] xs:w-[90%] ssm:w-[90%] ssm:bottom-0 ssm:left-[5%] lg:top-4 lg:w-[85%] lg:left-[7%] xs:mt-6 md:mt-[15%] xl:-mt-4 xl:w-[83%] 2xl:h-[100%]"
            src="/Vectores/linkit-slider-soy-recursos.svg"
            alt="Businessman"
          />
        </div>
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="ebooks">
        <Ebooks />
      </section>
      <section id="webinars">
        <Events />
      </section>
      <section id="CV">
        <CV />
      </section>
      <section id="FAQ">
        <FAQ />
      </section>
      <section id="form">
        <Newsletter />
      </section>
    </div>
  );
}

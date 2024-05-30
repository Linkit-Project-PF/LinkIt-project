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
        <div className="lg:hidden flex justify-start w-screen bg-linkIt-500 dark:bg-linkIt-200 dark:text-white  pt-[17vh] ">
          <h2 className=" font-bold font-manrope xs:text-[1.1rem] min-[350px]:text-[1.2rem] min-[380px]:text-[1.3rem] min-[410px]:text-[1.4rem] ssm:text-[1.9rem] sm:text-[2.2rem] min-[670px]:text-[2.3rem] md:text-[2.7rem] min-[850px]:text-[2.9rem] min-[900px]:text-[3.1rem] min-[950px]:text-[3.2rem] min-[1000px]:text-[3.4rem] w-[85%] leading-tight pl-[3%] ml-4">
            {t("Impulsa tu carrera")} {t("en IT con los mejores")}{" "}
            {t("tips y recursos!")}
          </h2>
        </div>
        <div className="grid grid-cols-2 h-fit md:h-max w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white lg:pt-[22vh]">
          <div className="space-y-[5%] p-[7%] pl-[6%] ml-4">
            <h2 className="hidden lg:block font-bold font-manrope  w-[150%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight ">
              {t("Impulsa tu carrera")} {t("en IT con los mejores")}{" "}
              {t("tips y recursos!")}
            </h2>
            <h3 className="ont-monserrat text-[0.6rem] xs:text-[0.7rem] xs:w-[115%] min-[380px]:text-[0.8rem] min-[420px]:text-[0.9rem] min-[506px]:text-[1rem] ssm:text-[1.2rem] min-[580px]:text-[1.3rem] sm:text-[1.4rem] min-[690px]:text-[1.5rem] md:text-[1.7rem] min-[800px]:text-[1.8rem] min-[850px]:text-[1.9rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[115%] sm:w-[110%] md:w-[110%]  lg:w-[90%] xl:w-[85%] leading-tight">
              {t(
                "Blogs, ebooks y webinars para crecer como profesional en el mundo tech."
              )}{" "}
            </h3>
            <div className="relative top-[5%] ">
              <motion.a
                className="background-button xs:text-[0.5rem] min-[400px]:text-[0.6rem] min-[450px]:text-[0.7rem]  min-[500px]:text-[0.8rem] ssm:text-[0.9rem] min-[600px]:text-[1rem] sm:text-[1.1rem] min-[700px]:text-[1.3rem] min-[900px]:text-[1.4rem] "
                whileTap={{ scale: 0.9 }}
                href="https://airtable.com/appPc8zZP29ez9V2O/shrX7MQRZlgmqP6bq"
              >
                {t("Suscríbete al newsletter")}
              </motion.a>
            </div>
          </div>
          <img
            className="relative self-start content-end w-[90%] left-[15%] xs:left-[6%] xs:w-[80%] xs:mt-4 ssm:w-[80%] ssm:bottom-0 ssm:top[5%] ssm:left-[8%] sm:mt-6 md:content-end  md:w-[80%] md:mt-10 lg:self-end lg:top-4 lg:w-[85%] lg:left-[7%]  xl:-mt-4 xl:w-[83%] 2xl:h-[100%]"
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

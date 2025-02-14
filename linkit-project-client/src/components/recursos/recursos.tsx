
import Blogs from "./Modulos-Recursos/blogs/Blogs";
import Ebooks from "./Modulos-Recursos/ebooks/Ebooks";
import Events from "./Modulos-Recursos/eventos/Events";
import CV from "./Modulos-Recursos/cv/CV";
import FAQ from "./Modulos-Recursos/FAQ/FAQ";
import { useTranslation } from "react-i18next";
import Newsletter from "../../Utils/newsletter/newsletter";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import useWindowWidth from "../../Utils/useWindowWidth";
import { useIntersectionObserver } from "../../Utils/ModuleObserver/IntersectionObserver";

export default function Recursos() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [fixedHeight, setFixedHeight] = useState(0);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const updateFixedHeight = () => {
      const fixedNavbar = document.getElementById("Navbar");
      const fixedPreNavbar = document.getElementById("preNavbar");

      if (fixedNavbar && fixedPreNavbar) {
        setFixedHeight(fixedNavbar.offsetHeight + fixedPreNavbar.offsetHeight);
      }
    };

    updateFixedHeight();

    window.addEventListener("resize", updateFixedHeight);
    return () => {
      window.removeEventListener("resize", updateFixedHeight);
    };
  }, []);

  const refEbooks = useRef<HTMLDivElement>(null);
  const refEvents = useRef<HTMLDivElement>(null);
  const refCV = useRef<HTMLDivElement>(null);
  const refFAQ = useRef<HTMLDivElement>(null);
  const refNewsletter = useRef<HTMLDivElement>(null);

  const isEbooksVisible = useIntersectionObserver(refEbooks);
  const isEventsVisible = useIntersectionObserver(refEvents);
  const isCVVisible = useIntersectionObserver(refCV);
  const isFAQVisible = useIntersectionObserver(refFAQ);
  const isNewsletterVisible = useIntersectionObserver(refNewsletter);

  return (
    <div className="overflow-hidden">
      <section id="moduloA">
        <div
          className="md:hidden flex justify-center w-screen bg-linkIt-500 dark:bg-linkIt-200 dark:text-white md:pt-[17vh] lg:pt-[22vh]"
          style={
            windowWidth <= 767
              ? {
                  marginTop: `${fixedHeight}px`,
                  paddingTop: (fixedHeight * 29) / 100,
                }
              : undefined
          }
        >
          <h1 className=" font-bold font-manrope md:hidden xs:text-[1rem] min-[340px]:text-[1.1rem] min-[360px]:text-[1.2rem] min-[390px]:text-[1.2rem] min-[410px]:text-[1.4rem] min-[435px]:text-[1.4rem] min-[465px]:text-[1.5rem] min-[500px]:text-[1.7rem] ssm:text-[1.9rem] min-[570px]:text-[2rem] min-[600px]:text-[2.1rem] sm:text-[2.2rem] min-[670px]:text-[2.3rem] min-[700px]:text-[2.4rem] w-[90%] leading-tight ">
            {t("Impulsa tu carrera en IT con los")} <br />
            {t("mejores tips y recursos!")}
          </h1>
        </div>
        <div className="grid grid-cols-2 h-max md:h-max w-screen overflow-hidden bg-linkIt-500 dark:bg-linkIt-200 dark:text-white   min-[768px]:pt-[22vh] lg:pt-[22vh]">
          <div className="space-y-[5%] p-[7%] pl-[6%] min-[300px]:ml-[8px] min-[350px]:ml-[9px] min-[400px]:ml-[10px] min-[450px]:ml-3 min-[500px]:ml-3 ssm:ml-4 md:ml-4 ">
            <h1 className="hidden md:block font-bold font-manrope  md:text-[2.3rem] w-[150%] ssm:w-[130%] sm:w-[115%] lg:w-[130%] lg:text-[3rem] xl:text-[3.5rem] xl:w-[112%] 2xl:text-[5rem] leading-tight -pb-[20vh]">
              {t("Impulsa tu carrera")} {t("en IT con los mejores")}{" "}
              {t("tips y recursos!")}
            </h1>
            <h2 className="ont-montserrat hidden md:block md:text-[1.7rem] min-[800px]:text-[1.8rem] min-[850px]:text-[1.9rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.5rem] w-[110%] ssm:w-[115%] sm:w-[110%] md:w-[110%]  lg:w-[90%] xl:w-[85%] leading-tight">
              {t(
                "Blogs, ebooks y webinars para crecer como profesional en el mundo tech."
              )}{" "}
            </h2>
            <h2 className="ont-montserrat md:hidden text-[0.6rem] xs:text-[0.6rem] xs:w-[115%] min-[340px]:text-[0.7rem]  min-[370px]:text-[0.7rem] min-[400px]:text-[0.8rem] min-[430px]:text-[0.9rem] min-[460px]:text-[0.9rem] min-[500px]:text-[1rem] ssm:text-[1.2rem] min-[580px]:text-[1.3rem] sm:text-[1.4rem] min-[700px]:text-[1.5rem] md:text-[1.7rem] w-[110%] ssm:w-[115%] sm:w-[115%] leading-tight">
              {t("Blogs, ebooks y webinars")} <br />
              {t("para crecer como profesional")} <br />
              {t("en el mundo tech.")}{" "}
            </h2>
            <div className="relative top-[5%]  ">
              <motion.a
                className=" md:mb-20 lg:mb-0 background-button xs:text-[0.4rem] min-[350px]:text-[0.4rem] min-[400px]:text-[0.5rem] [430px]:text-[0.6rem] min-[465px]:text-[0.7rem]  min-[500px]:text-[0.8rem] ssm:text-[0.9rem] min-[600px]:text-[0.9rem] sm:text-[1.1rem] min-[700px]:text-[1.2rem] md:text-[1rem] "
                whileTap={{ scale: 0.9 }}
                href="https://airtable.com/appPc8zZP29ez9V2O/shrX7MQRZlgmqP6bq"
              >
                {t("Suscríbete al newsletter")}
              </motion.a>
            </div>
          </div>
          <img
            className="relative self-end h-full w-[90%] left-[15%] xs:left-[6%] xs:w-[80%] xs:mt-4 ssm:w-[80%] ssm:bottom-0 ssm:top[5%] ssm:left-[8%] sm:mt-6 md:self-end  md:left-0 md:w-[95%] lg:mb-0 lg:self-end lg:top-4 lg:w-[85%] lg:left-[7%]  xl:-mt-4 xl:w-[83%] 2xl:h-full"
            src="/2025/Recursos/ModuleA/linkit-slider-soy-recursos.webp"
            loading="eager"
            alt="Businessman"
          />
        </div>
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <div ref={refEbooks} className="min-h-[300px]">
        {isEbooksVisible && (
          <section id="ebooks">
            <Ebooks />
          </section>
        )}
      </div>
      <div ref={refEvents} className="min-h-[300px]">
        {isEventsVisible && (
          <section id="webinars">
            <Events />
          </section>
        )}
      </div>
      <div ref={refCV} className="min-h-[300px]">
        {isCVVisible && (
          <section id="CV">
            <CV />
          </section>
        )}
      </div>
      <div ref={refFAQ} className="min-h-[300px]">
        {isFAQVisible && (
          <section id="FAQ">
            <FAQ />
          </section>
        )}
      </div>
      <div ref={refNewsletter} className="min-h-[300px]">
        {isNewsletterVisible && (
          <section id="form">
            <Newsletter />
          </section>
        )}
      </div>
    </div>
  );
}

import "./recursos.css";
import Blogs from "./Modulos-Recursos/blogs/Blogs";
import Ebooks from "./Modulos-Recursos/ebooks/Ebooks";
import Events from "./Modulos-Recursos/eventos/Events";
import CV from "./Modulos-Recursos/cv/CV";
import FAQ from "./Modulos-Recursos/FAQ/FAQ";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import topLines from "/Vectores/linkit-linea-banner-recursos-superior.svg"
import topLinesMobile from "/Vectores/M_linkit-linea-banner-recursos-superior_grueso.svg"

import bottomLines from "/Vectores/linkit-linea-banner-recursos-inferior.svg"
import bottomLinesMobile from "/Vectores/M_linkit-linea-banner-recursos-inferior_grueso.svg"
import Newsletter from "../../Utils/newsletter/newsletter";
export default function Recursos() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-hidden">
      <section id="moduloA">
        <div className="bg-linkIt-300 dark:bg-linkIt-200 h-[20%] mt-[115px] md:mt-[135px] p-[7%] py-[15%] lg:py-[7%] flex flex-col content-center text-center relative">
          <img src={topLines} alt="lines" className="w-full absolute top-[22%] hidden lg:block" />
          <img src={topLinesMobile} alt="lines" className="w-full absolute top-[22%] lg:hidden" />
          <h1 className="font-bold font-manrope text-white titles-size">
            {t("Recursos de LinkIT")}
          </h1>
          <img src={bottomLines} alt="lines" className="w-full absolute top-[70%] hidden lg:block" />
          <img src={bottomLinesMobile} alt="lines" className="w-full absolute top-[70%]  lg:hidden" />

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

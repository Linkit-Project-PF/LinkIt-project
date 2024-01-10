import "./recursos.css";
import Blogs from "./Modulos-Recursos/blogs/Blogs";
import Ebooks from "./Modulos-Recursos/ebooks/Ebooks";
import Events from "./Modulos-Recursos/eventos/Events";
import CV from "./Modulos-Recursos/cv/CV";
import FAQ from "./Modulos-Recursos/FAQ/FAQ";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export default function Recursos() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="moduloA">
        <div className="bg-linkIt-200 h-[40vh] flex justify-center items-center content-center">
          <h1 className="font-bold font-manrope text-white text-[3rem] mt-[4rem]">
            {t("Recursos de LinkIT")}
          </h1>
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
        <div className="bg-linkIt-300 h-[40vh] text-white font-bold flex justify-center items-center content-center">
          <h1 className="text-[2rem] text-center">EN ESPERA DEL DISEÑO</h1>
        </div>
      </section>
    </>
  );
}

import "./recursos.css";
import Blogs from "./Modulos-Recursos/blogs/Blogs";
import Ebooks from "./Modulos-Recursos/ebooks/Ebooks";
import Events from "./Modulos-Recursos/eventos/Events";
import CV from "./Modulos-Recursos/cv/CV";
import FAQ from "./Modulos-Recursos/FAQ/FAQ";
import Footer from "../../Utils/Footer/Footer";

export default function Recursos() {
  
  return (
    <>
      <section id="moduloA">
        <div className="bg-linkIt-200 h-[60vh] flex justify-center items-center content-center">
          <h1 className="font-bold font-manrope text-white text-[3rem] mt-[4rem]">Recursos de LinkIT</h1>
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
      <section>
        <Footer />
      </section>
    </>
  );
}

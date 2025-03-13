import ModuloA from "./modulosEmpresas/moduloA/ModuloA";
import ModuloB from "./modulosEmpresas/moduloB/moduloBH";
import ModuloC from "./modulosEmpresas/moduloC/ModuloC";
import ModuloD from "./modulosEmpresas/moduloD/ModuloD";
import ModuloE from "./modulosEmpresas/moduloE/ModuloE";
import ModuloF from "./modulosEmpresas/moduloF/ModuloF";
import ModuloG from "./modulosEmpresas/moduloG/ModuloG";
import ModuloH from "./modulosEmpresas/moduloH/ModuloH";
import { useEffect, useState } from "react";
import "./Empresas.css";
import Calculadora from "./modulosEmpresas/calculadora/calculadora";
import ContactUs from "../../Utils/contactUs/contactUs";
import GetInTouch from "../../Utils/contactUs/calendly";
import { useHashNavigation } from "../../Utils/ModuleObserver/useHashObserver";

function Empresas() {
  const [initialLoad, setInitialLoad] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setInitialLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const activeHash = useHashNavigation();

  useEffect(() => {
    if (activeHash && !initialLoad) {
      setTimeout(() => {
        const element = document.getElementById(activeHash);
        if (element) {
          const navbarHeight = 100;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" });
        }
      }, 400);
    }
  }, [activeHash, initialLoad]);

  return (
    <div className="overflow-hidden">
      <ModuloA />
      <div id="contactanosE">
        <ContactUs />
      </div>
      <section id="serviciosE">
        <ModuloB />
      </section>
      <div id="serviciosE">
        <ModuloC />
      </div>
      <div id="casosDeExitoE">
        <ModuloD />
      </div>
      <div id="moduloE">
        <ModuloE />
      </div>
      <div id="moduloF">
        <ModuloF />
      </div>
      <div id="moduloG">
        <ModuloG />
      </div>
      <div id="procesoE">
        <ModuloH />
      </div>
      <div id="calculadora">
        <Calculadora />
      </div>
      <div>
        <GetInTouch />
      </div>
    </div>
  );
}

export default Empresas;

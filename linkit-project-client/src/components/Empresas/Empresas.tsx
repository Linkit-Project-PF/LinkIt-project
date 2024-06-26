
import ModuloA from "./modulosEmpresas/moduloA/ModuloA"
import ModuloB from "./modulosEmpresas/moduloB/moduloBH"
import ModuloC from "./modulosEmpresas/moduloC/ModuloC"
import ModuloD from "./modulosEmpresas/moduloD/ModuloD"
import ModuloE from "./modulosEmpresas/moduloE/ModuloE"
import ModuloF from "./modulosEmpresas/moduloF/ModuloF"
import ModuloG from "./modulosEmpresas/moduloG/ModuloG"
import ModuloH from "./modulosEmpresas/moduloH/ModuloH"
import { useEffect } from "react";
import './Empresas.css'
import Calculadora from "./modulosEmpresas/calculadora/calculadora"
import ContactUs from "../../Utils/contactUs/contactUs"
import GetInTouch from "../../Utils/contactUs/calendly"


function Empresas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    < div className="overflow-hidden">
      <ModuloA />
      <section id="serviciosE">
      <ModuloB />
      </section>
      <ModuloC />
      <section id='casosDeExitoE'>
      <ModuloD />
      </section>
      <ModuloE />
      <ModuloF />
      <ModuloG />
      <section id='procesoE'>
      <ModuloH />
      </section>
      <section id="calculadora">
        <Calculadora/>
      </section>
      <section id="contactanosE">
      <ContactUs />
      </section>
      <section>
        <GetInTouch />
      </section>
      </ div>
  )
}

export default Empresas
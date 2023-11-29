import Footer from "../../Utils/Footer/Footer"
import ModuloA from "./modulosEmpresas/moduloA/ModuloA"
import ModuloB from "./modulosEmpresas/moduloB/moduloB"
import ModuloC from "./modulosEmpresas/moduloC/ModuloC"
import ModuloD from "./modulosEmpresas/moduloD/ModuloD"
import ModuloE from "./modulosEmpresas/moduloE/ModuloE"
import ModuloF from "./modulosEmpresas/moduloF/ModuloF"
import ModuloG from "./modulosEmpresas/moduloG/ModuloG"
import ModuloH from "./modulosEmpresas/moduloH/ModuloH"
import ModuloI from "./modulosEmpresas/moduloI/ModuloI"
import { useEffect } from "react";
import './Empresas.css'


function Empresas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
      <ModuloI />
      <Footer />
      </>
  )
}

export default Empresas
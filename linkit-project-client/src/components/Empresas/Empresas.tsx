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
import './Empresas.css'
function Empresas() {
  return (
    <>
      <ModuloA />
      <section id="serviciosE">
      <ModuloB />
      </section>
      <ModuloC />
      <ModuloD />
      <ModuloE />
      <ModuloF />
      <ModuloG />
      <section id='cotiza'>
      <ModuloH />
      </section>
      <ModuloI />
      <Footer />
      </>
  )
}

export default Empresas
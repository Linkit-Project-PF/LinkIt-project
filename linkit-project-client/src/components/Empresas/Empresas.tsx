import Footer from "../../Utils/Footer/Footer"
import ModuloA from "./modulosEmpresas/moduloA/ModuloA"
import ModuloB from "./modulosEmpresas/moduloB/moduloB"
import ModuloC from "./modulosEmpresas/moduloC/ModuloC"
import ModuloD from "./modulosEmpresas/moduloD/ModuloD"
import ModuloE from "./modulosEmpresas/moduloE/ModuloE"
import ModuloF from "./modulosEmpresas/moduloF/ModuloF"
import ModuloG from "./modulosEmpresas/moduloG/ModuloG"
import ModuloH from "./modulosEmpresas/moduloH/ModuloH"
import MooduloI from "./modulosEmpresas/moduloI/ModuloI"
function Empresas() {
  return (
    <div className="flex flex-col">
      <ModuloA />
      <section id="servicios">
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
      <MooduloI />
      <Footer />
    </div>
  )
}

export default Empresas
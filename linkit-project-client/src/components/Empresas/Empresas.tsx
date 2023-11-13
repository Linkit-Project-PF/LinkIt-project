import ModuloA from "./modulosEmpresas/moduloA/ModuloA"
import ModuloB from "./modulosEmpresas/moduloB/moduloB"
import ModuloC from "./modulosEmpresas/moduloC/ModuloC"
import ModuloD from "./modulosEmpresas/moduloD/ModuloD"
import ModuloE from "./modulosEmpresas/moduloE/ModuloE"
import ModuloF from "./modulosEmpresas/moduloF/ModuloF"
import ModuloG from "./modulosEmpresas/moduloG/moduloG"
function Empresas() {
  return (
    <div className="flex flex-col">
      <ModuloA />
      <ModuloB />
      <ModuloC />
      <ModuloD />
      <ModuloE />
      <ModuloF />
      <ModuloG />
    </div>
  )
}

export default Empresas
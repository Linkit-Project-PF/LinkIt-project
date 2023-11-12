import ModuloD from "./modulosEmpresas/moduloD/ModuloD"
import ModuloA from "./modulosEmpresas/moduloA/ModuloA"
import ModuloB from "./modulosEmpresas/moduloB/ModuloB"
import ModuloC from "./modulosEmpresas/moduloC/ModuloC"
import ModuloE from "./modulosEmpresas/moduloE/ModuloE"
function Empresas() {
  return (
    <div className="flex flex-col">
      <ModuloA />
      <ModuloB />
      <ModuloC />
      <ModuloD />
      <ModuloE />
    </div>
    )
}

export default Empresas
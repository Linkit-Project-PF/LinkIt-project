import ModuloA from "./modulosEmpresas/moduloA/ModuloA"
import ModuloB from "./modulosEmpresas/moduloB/ModuloB"
function Empresas() {
  return (
    <div className="flex flex-col">
      <ModuloA />
      <ModuloB />
    </div>
    )
}

export default Empresas
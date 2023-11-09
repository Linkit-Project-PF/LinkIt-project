import ModuloA from "./Modulos/ModuloA/ModuloA"
import ModuloB from "./Modulos/ModuloB/ModuloB"
import ModuloC from "./Modulos/ModuloC/ModuloC"
import ModuloD from "./Modulos/ModuloD/ModuloD"
import ModuloE from "./Modulos/ModuloE/ModuloE"
import ModuloF from "./Modulos/ModuloF/ModuloF"

function Home() {
    return (
        <div className="flex flex-col">
            <ModuloA />
            <ModuloB />
            <ModuloC />
            <ModuloD />
            <ModuloE />
            <ModuloF />
        </div>

    )
}

export default Home
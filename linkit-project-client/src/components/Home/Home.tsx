import ModuloA from "./Modulos/ModuloA/ModuloA"
import ModuloB from "./Modulos/ModuloB/ModuloB"
import ModuloC from "./Modulos/ModuloC/ModuloC"
import ModuloD from "./Modulos/ModuloD/ModuloD"

function Home() {
    return (
        <div className="flex flex-col">
            <ModuloA />
            <ModuloB />
            <ModuloC />
            <ModuloD />
        </div>

    )
}

export default Home
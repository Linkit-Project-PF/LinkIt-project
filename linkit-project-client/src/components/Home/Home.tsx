import ModuloA from "./Modulos/ModuloA/ModuloA"
import ModuloB from "./Modulos/ModuloB/ModuloB"
import ModuloC from "./Modulos/ModuloC/ModuloC"
import ModuloD from "./Modulos/ModuloD/ModuloD"
import ModuloE from "./Modulos/ModuloE/ModuloE"

function Home() {
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

export default Home
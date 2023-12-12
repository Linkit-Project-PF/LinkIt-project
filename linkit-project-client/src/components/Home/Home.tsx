import Footer from "../../Utils/Footer/Footer"
import TopButton from "../../Utils/TopButton"
import ModuloA from "./Modulos/ModuloA/ModuloA"
import ModuloB from "./Modulos/ModuloB/ModuloB"
import ModuloC from "./Modulos/ModuloC/ModuloC"
import ModuloD from "./Modulos/ModuloD/ModuloD"
import ModuloE from "./Modulos/ModuloE/ModuloE"
import ModuloF from "./Modulos/ModuloF/ModuloF"
import ModuloG from "./Modulos/ModuloG/ModuloG"
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="flex flex-col">
            <ModuloA />
            <ModuloB />
            <ModuloC />
            <ModuloD />
            <ModuloE />
            <ModuloF />
            <ModuloG />
            <TopButton />
            <Footer />
        </div>

    )
}

export default Home
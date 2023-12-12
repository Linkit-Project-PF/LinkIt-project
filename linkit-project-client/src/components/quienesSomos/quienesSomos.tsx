import Footer from "../../Utils/Footer/Footer";
import ModuloA from "./modulosQuienesSomos/moduloA/moduloA";
import ModuloB from "./modulosQuienesSomos/moduloB/moduloB";
import ModuloC from "./modulosQuienesSomos/moduloC/moduloC";
import ModuloD from "./modulosQuienesSomos/moduloD/moduloD";
import ModuloE from "./modulosQuienesSomos/moduloE/ModuloE";
import ModuloF from "./modulosQuienesSomos/moduloF/moduloF";
import ModuloG from "./modulosQuienesSomos/moduloG/moduloG";
import ModuloH from "./modulosQuienesSomos/moduloH/moduloH";
import ModuloI from "./modulosQuienesSomos/moduloI/ModuloI";
import { useEffect } from "react";


export default function QuienesSomos() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <section id="mision">
            <ModuloA />
            </section>
            <section id="vision">
            <ModuloB />
            </section>
            <section id="valores">
            <ModuloC />
            </section>
            <section id="historia">
            <ModuloD />
            </section>
            <ModuloE />
            <ModuloF />
            <section id="talento-Interno">
            <ModuloG />
            </section>
            <ModuloH />
            <ModuloI />
            <Footer />
        </div>
    )
}

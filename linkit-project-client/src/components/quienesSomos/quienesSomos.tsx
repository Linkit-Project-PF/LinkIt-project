import ContactUs from "../../Utils/contactUs/contactUs";
import ModuloA from "./modulosQuienesSomos/moduloA/moduloA";
import ModuloB from "./modulosQuienesSomos/moduloB/moduloB";
import ModuloC from "./modulosQuienesSomos/moduloC/moduloC";
import ModuloD from "./modulosQuienesSomos/moduloD/moduloD";
import ModuloE from "./modulosQuienesSomos/moduloE/ModuloE";
import ModuloF from "./modulosQuienesSomos/moduloF/moduloF";
import ModuloG from "./modulosQuienesSomos/moduloG/moduloG";
import { useIntersectionObserver } from "../../Utils/ModuleObserver/IntersectionObserver";
import { useRef, useEffect } from "react";

export default function QuienesSomos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const refModuloC = useRef<HTMLDivElement>(null);
  const refModuloD = useRef<HTMLDivElement>(null);
  const refModuloE = useRef<HTMLDivElement>(null);
  const refModuloF = useRef<HTMLDivElement>(null);
  const refModuloG = useRef<HTMLDivElement>(null);

  const isModuloCVisible = useIntersectionObserver(refModuloC);
  const isModuloDVisible = useIntersectionObserver(refModuloD);
  const isModuloEVisible = useIntersectionObserver(refModuloE);
  const isModuloFVisible = useIntersectionObserver(refModuloF);
  const isModuloGVisible = useIntersectionObserver(refModuloG);

  return (
    <div className="overflow-hidden">
      <section id="mision">
        <ModuloA />
      </section>

      <section id="vision">
        <ModuloB />
      </section>

      <div className="min-h-[300px]" ref={refModuloC}>
        {isModuloCVisible && (
          <section id="valores">
            <ModuloC />
          </section>
        )}
      </div>

      <div className="min-h-[300px]" ref={refModuloD}>
        {isModuloDVisible && (
          <section id="historia">
            <ModuloD />
          </section>
        )}
      </div>

      <div className="min-h-[300px]" ref={refModuloE}>
        {isModuloEVisible && <ModuloE />}
      </div>

      <div className="min-h-[300px]" ref={refModuloF}>
        {isModuloFVisible && <ModuloF />}
      </div>

      <div className="min-h-[300px]" ref={refModuloG}>
        {isModuloGVisible && (
          <section id="talento-Interno">
            <ModuloG />
          </section>
        )}
      </div>

      {/* <ModuloH /> */}
      <ContactUs />
    </div>
  );
}

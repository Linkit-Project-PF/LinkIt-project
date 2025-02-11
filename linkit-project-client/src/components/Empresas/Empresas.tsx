import ModuloA from "./modulosEmpresas/moduloA/ModuloA"
import ModuloB from "./modulosEmpresas/moduloB/moduloBH"
import ModuloC from "./modulosEmpresas/moduloC/ModuloC"
import ModuloD from "./modulosEmpresas/moduloD/ModuloD"
import ModuloE from "./modulosEmpresas/moduloE/ModuloE"
import ModuloF from "./modulosEmpresas/moduloF/ModuloF"
import ModuloG from "./modulosEmpresas/moduloG/ModuloG"
import ModuloH from "./modulosEmpresas/moduloH/ModuloH"
import { useEffect, useRef } from "react";
import './Empresas.css'
import Calculadora from "./modulosEmpresas/calculadora/calculadora"
import ContactUs from "../../Utils/contactUs/contactUs"
import GetInTouch from "../../Utils/contactUs/calendly"
import { useIntersectionObserver } from "../../Utils/ModuleObserver/IntersectionObserver"


function Empresas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const refC = useRef<HTMLDivElement>(null)
  const refD = useRef<HTMLDivElement>(null)
  const refE = useRef<HTMLDivElement>(null)
  const refF = useRef<HTMLDivElement>(null)
  const refG = useRef<HTMLDivElement>(null)
  const refH = useRef<HTMLDivElement>(null)


  const refCalculadora = useRef<HTMLDivElement>(null)
  const refContactUs = useRef<HTMLDivElement>(null)
  const refGetInTouch = useRef<HTMLDivElement>(null)


  const isCVisible = useIntersectionObserver(refC)
  const isDVisible = useIntersectionObserver(refD)
  const isEVisible = useIntersectionObserver(refE)
  const isFVisible = useIntersectionObserver(refF)
  const isGVisible = useIntersectionObserver(refG)
  const isHVisible = useIntersectionObserver(refH)

  const isCalculadoraVisible = useIntersectionObserver(refCalculadora)
  const isContactUsVisible = useIntersectionObserver(refContactUs)
  const isGetInTouchVisible = useIntersectionObserver(refGetInTouch)


  return (
    < div className="overflow-hidden">
      <ModuloA />
      <section id="serviciosE">
      <ModuloB />
      </section>
      <div ref={refC}>{isCVisible && <ModuloC />}</div>
      <div ref={refD}>{isDVisible && <section id='casosDeExitoE'>
      <ModuloD />
      </section>}</div>
      <div className="min-h-[300px]" ref={refE}>{isEVisible && <ModuloE />}</div>
      <div className="min-h-[300px]" ref={refF}>{isFVisible && <ModuloF />}</div>
      <div className="min-h-[300px]" ref={refG}>{isGVisible && <ModuloG />}</div>
      <div className="min-h-[300px]" ref={refH}>{isHVisible && <section id='procesoE'>
      <ModuloH />
      </section>}</div>
      <div ref={refCalculadora} className="min-h-[300px]">
        {isCalculadoraVisible && (
          <section id="calculadora">
            <Calculadora />
          </section>
        )}
      </div>
      <div ref={refContactUs} className="min-h-[300px]">
        {isContactUsVisible && (
          <section id="contactanosE">
            <ContactUs />
          </section>
        )}
      </div>
      <div ref={refGetInTouch} className="min-h-[300px]">
        {isGetInTouchVisible && (
          <section>
            <GetInTouch />
          </section>
        )}
      </div>
    </div>
  )
}

export default Empresas
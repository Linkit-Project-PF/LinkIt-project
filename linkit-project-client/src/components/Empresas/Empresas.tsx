import ModuloA from "./modulosEmpresas/moduloA/ModuloA"
import ModuloB from "./modulosEmpresas/moduloB/moduloBH"
import ModuloC from "./modulosEmpresas/moduloC/ModuloC"
import ModuloD from "./modulosEmpresas/moduloD/ModuloD"
import ModuloE from "./modulosEmpresas/moduloE/ModuloE"
import ModuloF from "./modulosEmpresas/moduloF/ModuloF"
import ModuloG from "./modulosEmpresas/moduloG/ModuloG"
import ModuloH from "./modulosEmpresas/moduloH/ModuloH"
import { useEffect, useRef, useState } from "react";
import './Empresas.css'
import Calculadora from "./modulosEmpresas/calculadora/calculadora"
import ContactUs from "../../Utils/contactUs/contactUs"
import GetInTouch from "../../Utils/contactUs/calendly"
import { useIntersectionObserver } from "../../Utils/ModuleObserver/IntersectionObserver"
import { useHashNavigation } from "../../Utils/ModuleObserver/useHashObserver"

// Mapa de dependencias: qué módulos deben cargarse para cada hash
const hashDependencies = {
  'contactanosE': [], // Ahora ContactUs es el segundo componente, no tiene dependencias
  'serviciosE': ['contactanosE'],
  'casosDeExitoE': ['contactanosE', 'serviciosE'],
  'procesoE': ['contactanosE', 'serviciosE', 'casosDeExitoE'],
  'calculadora': ['contactanosE', 'serviciosE', 'casosDeExitoE', 'procesoE'],
  'moduloG': ['contactanosE', 'serviciosE', 'casosDeExitoE']
};

function Empresas() {
  const [initialLoad, setInitialLoad] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Después de la carga inicial, establecer initialLoad a false
    const timer = setTimeout(() => setInitialLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // Obtener el hash actual de la URL
  const activeHash = useHashNavigation();

  // Determinar qué módulos deben cargarse basados en el hash activo
  const getDependenciesToLoad = (hash: string | null) => {
    if (!hash || !hashDependencies[hash as keyof typeof hashDependencies]) {
      return [];
    }
    return [hash, ...hashDependencies[hash as keyof typeof hashDependencies]];
  };

  const modulesToLoad = activeHash ? getDependenciesToLoad(activeHash) : [];

  const refC = useRef<HTMLDivElement>(null)
  const refD = useRef<HTMLDivElement>(null)
  const refE = useRef<HTMLDivElement>(null)
  const refF = useRef<HTMLDivElement>(null)
  const refG = useRef<HTMLDivElement>(null)
  const refH = useRef<HTMLDivElement>(null)
  const refCalculadora = useRef<HTMLDivElement>(null)
  const refContactUs = useRef<HTMLDivElement>(null)
  const refGetInTouch = useRef<HTMLDivElement>(null)

  // Verificar si cada sección debe ser forzada a ser visible basado en el hash y sus dependencias
  const shouldForceC = modulesToLoad.includes('serviciosE');
  const shouldForceD = modulesToLoad.includes('casosDeExitoE');
  const shouldForceE = modulesToLoad.includes('moduloE');
  const shouldForceF = modulesToLoad.includes('moduloF');
  const shouldForceG = modulesToLoad.includes('moduloG');
  const shouldForceH = modulesToLoad.includes('procesoE');
  const shouldForceCalculadora = modulesToLoad.includes('calculadora');
  const shouldForceContactUs = modulesToLoad.includes('contactanosE');

  const isCVisible = useIntersectionObserver(refC, 0.001, shouldForceC)
  const isDVisible = useIntersectionObserver(refD, 0.001, shouldForceD)
  const isEVisible = useIntersectionObserver(refE, 0.001, shouldForceE)
  const isFVisible = useIntersectionObserver(refF, 0.001, shouldForceF)
  const isGVisible = useIntersectionObserver(refG, 0.001, shouldForceG)
  const isHVisible = useIntersectionObserver(refH, 0.001, shouldForceH)
  const isCalculadoraVisible = useIntersectionObserver(refCalculadora, 0.001, shouldForceCalculadora)
  const isContactUsVisible = useIntersectionObserver(refContactUs, 0.001, shouldForceContactUs)
  const isGetInTouchVisible = useIntersectionObserver(refGetInTouch, 0.001, false)

  // Desplazarse a la sección si está en el hash, pero solo después de la carga inicial
  useEffect(() => {
    if (activeHash && !initialLoad) {
      // Aumentado a 900ms para dar más tiempo a que los componentes se carguen
      setTimeout(() => {
        const element = document.getElementById(activeHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 900);
    }
  }, [activeHash, initialLoad]);

  return (
    <div className="overflow-hidden">
      <ModuloA />
      
      {/* ContactUs movido a la segunda posición */}
      <div ref={refContactUs} className="min-h-[300px]" id="contactanosE">
        {isContactUsVisible && <ContactUs />}
      </div>
      
      <section id="serviciosE">
        <ModuloB />
      </section>
      <div ref={refC} id="serviciosE">{isCVisible && <ModuloC />}</div>
      <div ref={refD} id="casosDeExitoE">{isDVisible && <ModuloD />}</div>
      <div className="min-h-[300px]" ref={refE} id="moduloE">{isEVisible && <ModuloE />}</div>
      <div className="min-h-[300px]" ref={refF} id="moduloF">{isFVisible && <ModuloF />}</div>
      <div className="min-h-[300px]" ref={refG} id="moduloG">{isGVisible && <ModuloG />}</div>
      <div className="min-h-[300px]" ref={refH} id="procesoE">
        {isHVisible && <ModuloH />}
      </div>
      <div ref={refCalculadora} className="min-h-[300px]" id="calculadora">
        {isCalculadoraVisible && <Calculadora />}
      </div>
      <div ref={refGetInTouch} className="min-h-[300px]">
        {isGetInTouchVisible && <GetInTouch />}
      </div>
    </div>
  )
}

export default Empresas
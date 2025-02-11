import ModuloTalentosA from "./ModulosTalentos/ModuloTalentosA/ModuloTalentosA";
import ModuloTalentosB from "./ModulosTalentos/ModuloTalentosB/ModuloTalentosB";
import ModuloTalentosD from "./ModulosTalentos/ModuloTalentosD/ModuloTalentosD";
import ModuloTalentosE from "./ModulosTalentos/ModuloTalentosE/ModuloTalentosE";
import ModuloTalentosF from "./ModulosTalentos/ModuloTalentosF/ModuloTalentosF";
import ModuloTalentosC from "./ModulosTalentos/ModuloTalentosC/ModuloTalentosC";
import ModuloTalentosG from "./ModulosTalentos/ModuloTalentosG/ModuloTalentosG";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Talentos.css";
import Newsletter from "../../Utils/newsletter/newsletter";
import { useIntersectionObserver } from "../../Utils/ModuleObserver/IntersectionObserver";

function Talentos() {
  const location = useLocation();

  const navigateIntoTalent = (hash: string) => {
    setTimeout(() => {
      window.location.href = hash;
    });
  };

  const refC = useRef<HTMLDivElement>(null);
  const refD = useRef<HTMLDivElement>(null);
  const refE = useRef<HTMLDivElement>(null);
  const refF = useRef<HTMLDivElement>(null);
  const refG = useRef<HTMLDivElement>(null);

  const isCVisible = useIntersectionObserver(refC);
  const isDVisible = useIntersectionObserver(refD);
  const isEVisible = useIntersectionObserver(refE);
  const isFVisible = useIntersectionObserver(refF);
  const isGVisible = useIntersectionObserver(refG);

  useEffect(() => {
    if (location.pathname === "/SoyTalento" && location.hash)
      navigateIntoTalent(location.hash);

    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-hidden">
      <ModuloTalentosA />
      <section id="vacantes">
        <ModuloTalentosG />
      </section>
      <div ref={refC} className="min-h-[300px]">
        {" "}
        {isCVisible && <ModuloTalentosB />}
      </div>
      <div ref={refD} className="min-h-[300px]">
        {isDVisible && <ModuloTalentosC />}
      </div>
      <div ref={refE} className="min-h-[300px]">
        {isEVisible && (
          <section id="serviciosT">
            <ModuloTalentosD />
          </section>
        )}
      </div>

      <div ref={refF} className="min-h-[300px]">
        {isFVisible && (
          <section id="procesoT">
            <ModuloTalentosE />
          </section>
        )}
      </div>
      <div ref={refG} className="min-h-[300px]">
        {isGVisible && (
          <div>
            <ModuloTalentosF />
            <Newsletter />{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Talentos;

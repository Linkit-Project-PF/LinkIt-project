import ModuloTalentosA from "./ModulosTalentos/ModuloTalentosA/ModuloTalentosA";
import ModuloTalentosB from "./ModulosTalentos/ModuloTalentosB/ModuloTalentosB";
import ModuloTalentosD from "./ModulosTalentos/ModuloTalentosD/ModuloTalentosD";
import ModuloTalentosE from "./ModulosTalentos/ModuloTalentosE/ModuloTalentosE";
import ModuloTalentosF from "./ModulosTalentos/ModuloTalentosF/ModuloTalentosF";
import ModuloTalentosC from "./ModulosTalentos/ModuloTalentosC/ModuloTalentosC";
import ModuloTalentosG from "./ModulosTalentos/ModuloTalentosG/ModuloTalentosG";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Talentos.css";
import Newsletter from "../../Utils/newsletter/newsletter";


function Talentos() {
  const location = useLocation()

  const navigateIntoTalent = (hash:string) => {
    setTimeout(() => {
      window.location.href = hash;
    }, );
  };


  useEffect(() => {
    if(location.pathname === "/SoyTalento" && location.hash) navigateIntoTalent(location.hash)


    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-hidden">
      <ModuloTalentosA />
      <section id="vacantes">
        <ModuloTalentosG />
      </section>
      <ModuloTalentosB />
      <ModuloTalentosC />
      <section id="serviciosT">
        <ModuloTalentosD />
      </section>
      <section id="procesoT">
        <ModuloTalentosE />
      </section>
      <ModuloTalentosF />
      <Newsletter /> 
    </div>
  );
}

export default Talentos;

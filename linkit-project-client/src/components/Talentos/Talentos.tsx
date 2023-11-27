import ModuloTalentosA from "./ModulosTalentos/ModuloTalentosA/ModuloTalentosA"
import ModuloTalentosB from "./ModulosTalentos/ModuloTalentosB/ModuloTalentosB"
import ModuloTalentosD from "./ModulosTalentos/ModuloTalentosD/ModuloTalentosD"
import ModuloTalentosE from "./ModulosTalentos/ModuloTalentosE/ModuloTalentosE"
import ModuloTalentosF from "./ModulosTalentos/ModuloTalentosF/ModuloTalentosF"
import ModuloTalentosC from "./ModulosTalentos/ModuloTalentosC/ModuloTalentosC"
import ModuloTalentosG from "./ModulosTalentos/ModuloTalentosG/ModuloTalentosG"
import Footer from "../../Utils/Footer/Footer"

import "./Talentos.css"
function Talentos() {
  return (
<div>
  <ModuloTalentosA/>
  <section id="vacantes">
  <ModuloTalentosG/>
  </section>
  <ModuloTalentosB/>
  <ModuloTalentosC/>
  <section id="serviciosT">
  <ModuloTalentosD/>
  </section>
  <section id="procesoT">
  <ModuloTalentosE/>
  </section>
  <ModuloTalentosF/>
  <Footer/>
</div>
  )
}

export default Talentos
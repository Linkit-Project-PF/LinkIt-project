import ModuloTalentosA from "./ModulosTalentos/ModuloTalentosA/ModuloTalentosA"
import ModuloTalentosB from "./ModulosTalentos/ModuloTalentosB/ModuloTalentosB"
import ModuloTalentosD from "./ModulosTalentos/ModuloTalentosD/ModuloTalentosD"
import ModuloTalentosE from "./ModulosTalentos/ModuloTalentosE/ModuloTalentosE"
import ModuloTalentosF from "./ModulosTalentos/ModuloTalentosF/ModuloTalentosF"
import ModuloTalentosC from "./ModulosTalentos/ModuloTalentosC/ModuloTalentosC"
import ModuloTalentosG from "./ModulosTalentos/ModuloTalentosG/ModuloTalentosG"
import Footer from "../../Utils/Footer/Footer"

function Talentos() {
  return (
<div>
  <ModuloTalentosA/>
  <ModuloTalentosG/>
  <ModuloTalentosB/>
  <ModuloTalentosC/>
  <ModuloTalentosD/>
  <ModuloTalentosE/>
  <ModuloTalentosF/>
  <Footer/>
</div>
  )
}

export default Talentos
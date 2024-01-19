import JobCards from "./JobCard/JobCards"
import JobFilters from "./JobFilters/JobFilters"
import { useTranslation } from "react-i18next";

export default function ModuloTalentosG() {
  const {t} = useTranslation();
  return (
    <div className="bg-white p-[7%] grid justify-items-center items-center">
      <h1 className="font-manrope font-bold text-[1.4rem] ssm:text-[1.8rem] xl:text-[2rem]">{t('Vacantes disponibles')}</h1>
        <JobFilters/>
        <JobCards/>
      <p className="text-center text-3xl xl:whitespace-nowrap">{t('Si ninguna de estas vacantes es para tí, no te preocupes, ¡vendrán muchas más!')}</p>
      <button className="transparent-background-button">{t('Contáctanos para futuras oportunidades')}</button>
    </div>
  )
}

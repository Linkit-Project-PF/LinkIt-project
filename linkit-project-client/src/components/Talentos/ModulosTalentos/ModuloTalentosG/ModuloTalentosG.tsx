import JobCards from "./JobCard/JobCards"
import JobCardsMobile from "./JobCard/JobCardsMobile";
import JobFilters from "./JobFilters/JobFilters"
import { useTranslation } from "react-i18next";

export default function ModuloTalentosG() {
  const {t} = useTranslation();
  return (
    <div className="bg-linkIt-200 p-[7%] justify-center dark:bg-linkIt-400 overflow-hidden">
      <h3 className="titles-size text-center justify-center font-manrope font-bold text-white">{t('Vacantes disponibles')}</h3>
        <div>
        <JobFilters/>
        </div>
        <div className="hidden lg:block w-full">
        <JobCards/>
        </div>
        <div className="lg:hidden">
          <JobCardsMobile/>
        </div>
      <p className="text-center font-montserrat text-size font-semibold text-white">{t('Si ninguna de estas vacantes es para tí, no te preocupes, ¡vendrán muchas más!')}</p>
      <div className="w-full flex justify-center">
      <a className="background-button mt-[2%] hover:text-linkIt-200 hover:bg-white justify-self-center" href="https://airtable.com/appPc8zZP29ez9V2O/shrDb6l9hbaByBAcX" target="_blank">{t('Súmate a nuestra base de datos')}</a>
      </div>
    </div>
  )
}

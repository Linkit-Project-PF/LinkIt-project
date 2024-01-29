import JobCards from "./JobCard/JobCards"
import JobCardsMobile from "./JobCard/JobCardsMobile";
import JobFilters from "./JobFilters/JobFilters"
import { useTranslation } from "react-i18next";

export default function ModuloTalentosG() {
  const {t} = useTranslation();
  return (
    <div className="bg-white p-[7%] grid justify-items-center items-center dark:bg-linkIt-400 ">
      <h1 className="titles-size text-center justify-center font-manrope mb-[5%] font-bold dark:text-white">{t('Vacantes disponibles')}</h1>
        <JobFilters/>
        <div className="hidden lg:block">
        <JobCards/>
        </div>
        <div className="lg:hidden">
          <JobCardsMobile/>
        </div>
      <p className="text-center font-montserrat text-size font-semibold dark:text-white">{t('Si ninguna de estas vacantes es para tí, no te preocupes, ¡vendrán muchas más!')}</p>
      <a className="transparent-background-button mt-[5%] dark:bg-linkIt-300 dark:text-white dark:hover:bg-white" href="https://airtable.com/appPc8zZP29ez9V2O/shrDb6l9hbaByBAcX" target="_blank">{t('Súmate a nuestra base de datos')}</a>
    </div>
  )
}

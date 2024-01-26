import JobCards from "./JobCard/JobCards"
import JobFilters from "./JobFilters/JobFilters"
import { useTranslation } from "react-i18next";

export default function ModuloTalentosG() {
  const {t} = useTranslation();
  return (
    <div className="bg-white p-[7%] grid justify-items-center items-center">
      <h1 className="text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] sm:text-[1.5rem] lg:text-[2rem] xl:text-[2.3rem] text-center justify-center font-manrope mb-[5%] font-bold">{t('Vacantes disponibles')}</h1>
        <JobFilters/>
        <JobCards/>
      <p className="text-center font-montserrat text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] xl:text-[1.3rem] xl:whitespace-nowrap font-semibold">{t('Si ninguna de estas vacantes es para tí, no te preocupes, ¡vendrán muchas más!')}</p>
      <button className="transparent-background-button mt-[5%]">{t('Súmate a nuestra base de datos')}</button>
    </div>
  )
}

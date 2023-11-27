import JobCards from "./JobCard/JobCards"
import JobFilters from "./JobFilters/JobFilters"
import { useTranslation } from "react-i18next";

export default function ModuloTalentosG() {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col pb-32 bg-linkIt-500 p-[4rem]">
      <h1 className="text-center text-5xl font-bold mt-[1rem] mb-[2rem]">{t('Vacantes disponibles')}</h1>
      <div className="w-full flex justify-center mb-10">
        <JobFilters/>
      </div>
      <div className="w-full flex justify-center mb-10">
        <JobCards/>
      </div>
      <p className="text-center text-3xl xl:whitespace-nowrap">{t('Si ninguna de estas vacantes es para tí, no te preocupes, ¡vendrán muchas más!')}</p>
      <button className="border-[0.125rem] border-linkIt-300 p-[0.7rem] mt-[2rem] rounded-md self-center">{t('Contáctanos para futuras oportunidades')}</button>
    </div>
  )
}

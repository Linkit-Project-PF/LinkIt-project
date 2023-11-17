import JobCards from "./JobCard/JobCards"
import JobFilters from "./JobFilters/JobFilters"

export default function ModuloTalentosG() {


    return (
      <div className="flex flex-col pb-32 bg-linkIt-500 p-[4rem]">
            <h1 className="flex justify-center text-5xl font-bold mt-[1rem] mb-[2rem]">Vacantes disponibles</h1>
            <div className="w-[70%] h-[1rem] mb-[5.5rem]">
        <JobFilters/>
            </div>
            <div className="mb-[3rem]">
          <JobCards/>
            </div>
            <p className="text-center text-3xl xl:whitespace-nowrap">Si ninguna de estas vacantes es para tí, no te preocupes, ¡vendrán muchas más!</p>
            <button className="border-[0.125rem] border-linkIt-300 p-[0.7rem] mt-[2rem] rounded-md self-center">Contáctanos para futuras oportunidades</button>
      </div>
    )
  }

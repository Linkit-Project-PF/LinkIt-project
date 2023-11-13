import JobCards from "./JobCard/JobCards"
import JobFilters from "./JobFilters/JobFilters"

export default function ModuloTalentosG() {

    const jobData = [
        {
            id: '1',
            title: 'DevOps Engineer',
            location: 'Colombia, Remoto',
            contractType: 'Full Time',
        },
        {
            id: '1',
            title: 'DevOps Engineer',
            location: 'Colombia, Remoto',
            contractType: 'Full Time',
        },
        {
            id: '1',
            title: 'DevOps Engineer',
            location: 'Colombia, Remoto',
            contractType: 'Full Time',
        },
    ]

    return (
      <div className="pb-32 bg-linkIt-500 p-[4rem]">
            <div className="w-[70%] h-[1rem] relative top-[3rem]">
        <JobFilters/>
            </div>
            <div className="relative top-[10rem]">
          <JobCards jobs={jobData} />
            </div>
      </div>
    )
  }

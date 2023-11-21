// JobCard.tsx

import { FunctionComponent } from 'react'


export type JobCardProps = {
  _id: string
  title: string
  description: string
  modality: string
  schedule: string
  location: string

  archived: boolean

}

export const JobCard: FunctionComponent<JobCardProps> = ({ title, location, modality, schedule }) => {
  return (
    <div className="flex space-x-3 bg-white border border-gray-300 shadow rounded-md p-4 max-w-sm w-full ">
      <div className="animate-pulse rounded-full bg-slate-700 h-12 w-12"></div>
      <div>
        <h3 className="text-gray-900 font-bold">{`${title}`}</h3>
        <span className="text-gray-500 font-medium">{`${location}, ${modality}`}</span>
        <div className="mt-3 h-5 w-fit px-3 py-1 flex items-center rounded-lg bg-blue-400">
          <p className="text-white text-sm">
            {`${schedule}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobCard

// JobCard.tsx

import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'


export type JobCardProps = {
  _id: string
  title: string
  description: string
  modality: string
  type: string
  location: string
  archived: boolean
  code: string
  createdDate: Date;
}

export const JobCard: FunctionComponent<JobCardProps> = ({ title, location, modality, type, code }) => {
  const navigate = useNavigate()
  const handleClick = async() => {
    navigate(`/soyTalento/Joboffer/${code}`)
  }
  
  return (
    <motion.div 
    className="flex space-x-3 bg-transparent border border-gray-300 rounded-md p-4 w-full"
    onClick={handleClick}
    whileHover={{cursor: 'pointer'}}
    >
      <div>
        <h3 className="text-white font-bold text-[0.7rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1.2rem]">{`${title}`}</h3>
        <span className="text-white text-[0.6rem] ssm:text-[0.7rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[1rem]">{`${location}, ${modality}`}</span>
        <div className="mt-3 h-5 w-fit px-3 py-1 flex items-center rounded-lg bg-linkIt-300">
          <p className="text-white  text-[0.5rem] ssm:text-[0.6rem] sm:text-[0.8rem] lg:text-[0.6rem] xl:text-[0.8rem]">
            {`${type}`}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default JobCard

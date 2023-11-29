// JobCard.tsx

import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import axios from 'axios'
import { SUPERADMN_ID } from '../../../../../env'
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
}

export const JobCard: FunctionComponent<JobCardProps> = ({ title, location, modality, type, code }) => {
  const navigate = useNavigate()
  const handleClick = async() => {
    navigate(`/soyTalento/Joboffer/${code}`)
  }
  
  return (
    <motion.div 
    className="flex space-x-3 bg-white border border-gray-300 shadow rounded-md p-4 max-w-sm w-full "
    onClick={handleClick}
    whileHover={{cursor: 'pointer'}}
    >
      <div className="animate-pulse rounded-full bg-slate-700 h-12 w-12"></div>
      <div>
        <h3 className="text-gray-900 font-bold">{`${title}`}</h3>
        <span className="text-gray-500 font-medium">{`${location}, ${modality}`}</span>
        <div className="mt-3 h-5 w-fit px-3 py-1 flex items-center rounded-lg bg-blue-400">
          <p className="text-white text-sm">
            {`${type}`}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default JobCard

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/types"
import axios from "axios"
import { SUPERADMN_ID } from "../../../../env"
import TalentApps from "./TalentApps"

export interface ITalentApp {
  jd: {
    _id: string
    code: string
    title: string
    description: string
    type: string
    location: string
    modality: string
    stack: string[]
    aboutUs: string
    aboutClient: string
    responsabilities: string[]
    requirements: string[]
    niceToHave: string[]
    benefits: string[]
    company: string
    status: string
    users: string[]
    createdDate: string
    __v: number
    recruiter: string
  }
  recruiter: string
  reason: string
  salary: string
  stack: string[]
  status: string
  techStack: string[]
  user: string
  __v: number
  _id: string
}

function MyApps() {

  const [talentApps, setTalentApps] = useState<ITalentApp[]>()

  const userID = useSelector((state: RootState) => state.Authentication.user?._id)

  useEffect(() => {
    const fetchApps = async () => {
      const response = await axios.get(`https://linkit-server.onrender.com/postulations/find?user=${userID}`, {headers: {Authorization: `Bearer ${SUPERADMN_ID}`}})
      setTalentApps(response.data)
    }
    fetchApps();
  }, [])

  if (!talentApps) return null
  return (
    <div className="flex justify-center items-center content-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] min-h-[30vh] min-w-[90%] mt-[4rem] bg-linkIt-500 p-[1rem] rounded-[20px]">
    <TalentApps apps={talentApps}/>

  </div>
  )
}

export default MyApps
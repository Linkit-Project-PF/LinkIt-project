import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/types"
import axios from "axios"
import { SUPERADMN_ID } from "../../../../env"
import TalentApps from "./TalentApps"
import { IUser } from "../../types"

export interface ITalentApp {
  // jd: {
  //   _id: string
  //   code: string
  //   title: string
  //   description: string
  //   type: string
  //   location: string
  //   modality: string
  //   stack: string[]
  //   aboutUs: string
  //   aboutClient: string
  //   responsabilities: string[]
  //   requirements: string[]
  //   niceToHave: string[]
  //   benefits: string[]
  //   company: string
  //   status: string
  //   users: string[]
  //   createdDate: string
  //   __v: number
  //   recruiter: string
  // }
  // recruiter: string
  // reason: string
  // salary: string
  // stack: string[]
  // status: string
  // techStack: string[]
  // user: string
  // __v: number
  // _id: string
}

function MyApps() {

  const [talentApps, setTalentApps] = useState<ITalentApp[]>()

  const user = useSelector((state: RootState) => state.Authentication.user) as IUser
  useEffect(() => {
    const fetchApps = async () => {
      const postulArray: any[] = []
      for (const postul of user.postulations) {
        const response = await axios.get(`https://linkit-server.onrender.com/resources/companyjds?code=${postul}`, {headers: {Authorization: `Bearer ${SUPERADMN_ID}`, 'Accept-Language': sessionStorage.getItem('lang')}})
        postulArray.push(response.data)
        console.log(postulArray)
      }
      setTalentApps(postulArray)
    }
    fetchApps();
  }, [])

  if (!talentApps) return null
  return (
    <div className="flex bg-linkIt-500 p-[1rem] rounded-[20px] md:mx-16 mx-5">
    <TalentApps apps={talentApps}/>
  </div>
  )
}

export default MyApps
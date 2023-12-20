import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/types"
import { SUPERADMN_ID } from "../../../../env"
import CompanyPosts from "./CompanyPosts"


export interface ICompanyPost {
  aboutClient: string
  aboutUs: string
  archived: boolean
  benefits: string[]
  code: string
  company: string
  createdDate: string
  description: string
  location: string
  modality: string
  niceToHave: string[]
  requirements: string[]
  responsabilities: string[]
  stack: string[]
  status: string
  title: string
  type: string
  users: string[]
  __v: number
  recruiter: string
  _id: string
}

function MyPosts() {


  const [companyPosts, setCompanyPosts] = useState<ICompanyPost[]>()

  const companyName = useSelector((state: RootState) => state.Authentication.company?.companyName)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://linkit-server.onrender.com/jds/find?company=${companyName}`, {headers: {Authorization: `Bearer ${SUPERADMN_ID}`}})
      setCompanyPosts(response.data)
    }
    fetchPosts();
  }, [])

  console.log(companyPosts);

  if (!companyPosts) return null
  
  return (
    <div className="flex justify-center items-center content-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] min-h-[30vh] min-w-[90%] mt-[25rem] bg-linkIt-500 p-[3rem] rounded-[20px]">

      <CompanyPosts posts={companyPosts}/>

    </div>
    
  )
}

export default MyPosts
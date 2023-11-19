import './AllResources.css'
import { useSelector } from 'react-redux'

type resourcesState = {
    resources: {
        allresources: resourceType[],
        resources: resourceType[]
    }
}

type resourceType = {
    _id: string,
    id: string,
    title: string,
    description: string,
    createdDate: string,
    type: string,
    archived: boolean,
}

function AllResources() {
    const allresources = useSelector((state: resourcesState) => state.resources.allresources)

  return (
    <div className='mt-[3.55rem]'>
        {
            allresources?.map((resource: resourceType)=>{
                return <h1>{resource.title}</h1>
            })
        }
    </div>
  )
}

export default AllResources
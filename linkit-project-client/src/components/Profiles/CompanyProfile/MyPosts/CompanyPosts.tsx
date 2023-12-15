import CompanyPost from "./CompanyPost"
import { ICompanyPost } from "./MyPosts"

interface IComponentProps {
  posts: ICompanyPost[]
}

function CompanyPosts({posts}: IComponentProps) {
  return (
    <div>
      {posts.map((post) => <CompanyPost post={post} key={`post-${post._id}`}/>)}
    </div>
  )
  }

export default CompanyPosts

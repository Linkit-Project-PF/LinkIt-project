//Renderizar myposts con una card sola, depsues el mapeo de los posts

import { ICompanyPost } from "./MyPosts"

interface IComponentProps {
  post: ICompanyPost
}

export default function CompanyPost({post}: IComponentProps) {

  const formattedDate = new Date(post.createdDate).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div>
       <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center mb-4">
      {/* Left side - Job title, modality, company name */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {/* Placeholder for company logo */}
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
        <div>
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="text-gray-500">{post.modality} | {post.company}</p>
        </div>
      </div>

      {/* Right side - Details */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <p className="text-gray-500 mt-2 sm:mt-0">Location: {post.location}</p>
        <p className="text-gray-500">Users: {post.users.length}</p>
        <p className="text-gray-500">Recruiter: {post.recruiter}</p>
        <p className="text-gray-500">Code: {post.code}</p>
        <p className="text-gray-500">Date: {formattedDate}</p>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.status === "ENVIADA" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"}`}>
          {post.status}
        </span>
      </div>
    </div>
    </div>
  )

}

{/* {JSON.stringify(post)} */}
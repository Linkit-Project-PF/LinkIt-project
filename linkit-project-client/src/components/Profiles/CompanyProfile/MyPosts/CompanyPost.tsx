//Renderizar myposts con una card sola, depsues el mapeo de los posts

import { ICompanyPost } from "./MyPosts"

interface IComponentProps {
  post: ICompanyPost;
}

export default function CompanyPost({ post }: IComponentProps) {
  // Assuming 'created' is the new date field based on your new data structure
  // const formattedDate = new Date(post["Created time Month"]).toLocaleDateString("en-US", {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric'
  // });

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex mb-4">
      {/* Left side - Details in rows */}
      <div className="w-full">
        {/* Status at the top-left */}
        <div className="w-full flex justify-between items-center">

          <span className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 ${post.Status === "Offered" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"}`}>
            {post.Status}
          </span>

          <div className="text-right px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-gray-200 text-gray-800">
            <p className="text-sm font-semibold">{post["Role Code"]}</p>
          </div>

        </div>
        

        {/* Role Name */}
        <h3 className="text-sm font-semibold">{post["Role Name"]}</h3>
        
        {/* Other details */}
        <p className="text-gray-500 text-xs">Responsible: {post.Responsable}</p>
        <p className="text-gray-500 text-xs">Date: {`${post["Created time Month"]}/${post["Created time year"]}`}</p>
        <a href={post.JD} className="text-blue-600 hover:text-blue-800 visited:text-purple-600 text-xs" target="_blank" rel="noopener noreferrer">
          Job Description
        </a>
      </div>

      {/* Right side - Code */}
      {/* <div className="text-right">
        <p className="text-sm font-semibold">{post["Role Code"]}</p>
      </div> */}
    </div>
  );
}


// import { ICompanyPost } from "./MyPosts"

// interface IComponentProps {
//   post: ICompanyPost
// }

// export default function CompanyPost({post}: IComponentProps) {

//   const formattedDate = new Date(post.createdDate).toLocaleDateString("en-US", {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });

//   return (
//     <div>
//        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center mb-4">
//       {/* Left side - Job title, modality, company name */}
//       <div className="flex items-center space-x-4">
//         <div className="flex-shrink-0">
//           {/* Placeholder for company logo */}
//           <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//         </div>
//         <div>
//           <h3 className="text-lg font-bold">{post.title}</h3>
//           <p className="text-gray-500">{post.modality} | {post.company}</p>
//         </div>
//       </div>

//       {/* Right side - Details */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
//         <p className="text-gray-500 mt-2 sm:mt-0">Location: {post.location}</p>
//         <p className="text-gray-500">Users: {post.users.length}</p>
//         <p className="text-gray-500">Recruiter: {post.recruiter}</p>
//         <p className="text-gray-500">Code: {post.code}</p>
//         <p className="text-gray-500">Date: {formattedDate}</p>
//         <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.status === "ENVIADA" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"}`}>
//           {post.status}
//         </span>
//       </div>
//     </div>
//     </div>
//   )

// }

{/* {JSON.stringify(post)} */}
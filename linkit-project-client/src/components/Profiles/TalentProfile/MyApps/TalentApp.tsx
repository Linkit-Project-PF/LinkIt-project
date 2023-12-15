import { ITalentApp } from "./MyApps";

interface IComponentProps {
  app: ITalentApp
}

export default function TalentApp({app}: IComponentProps) {

console.log(app);
  return (
       <div className="bg-white shadow-lg w-[120%] rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center mb-4 relative right-[3.5rem]">
      {/* Left side - Job title, modality, company name */}
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {/* Placeholder for company logo */}
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
        <div>
          <h3 className="text-lg font-bold">{app.jd.title}</h3>
          <p className="text-gray-500">{app.jd.modality} | Users: {app.jd.users?.length}</p>
        </div>
      </div>

      {/* Right side - Details */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <p className="text-gray-500 mt-2 sm:mt-0">Location: {app.jd.location}</p>
        <p className="text-gray-500">Recruiter: {app.recruiter}</p>
        <p className="text-gray-500">Code: {app.jd.code}</p>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${app.status === "ENVIADA" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-800"}`}>
          {app.status}
        </span>
      </div>
    </div>
  )

}
//Renderizar myposts con una card sola, depsues el mapeo de los posts

import { ICompanyPost } from "./MyPosts";
import questionMark from "../../../../assets/question-mark.svg";
import { useState } from "react";
import InformationBox from "./InformationBox";

interface IComponentProps {
  post: ICompanyPost;
}

interface colorsObject {}

export default function CompanyPost({ post }: IComponentProps) {
  const [infoVisible, isInfoVisible] = useState(false);

  const statusColor: colorsObject = {
    "Pre-alignment": "bg-green-200",
    Alignment: "bg-cyan-200",
    Sourcing: "bg-indigo-200",
    Endorsed: "bg-violet-200",
    Offered: "bg-purple-200",
    Stalled: "bg-rose-200",
    "Recruiter int.": "bg-amber-200",
    "Client int.": "bg-amber-200",
    "Pending invoice/ contract": "bg-emerald-200",
    "Partial Payment": "bg-lime-200",
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex mb-4">
      {/* Left side - Details in rows */}
      <div className="w-full">
        {/* Status at the top-left */}
        <div className="w-full flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
              statusColor[post.Status as keyof colorsObject]
            } text-gray-800`}
          >
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
        <p className="text-gray-500 text-xs">
          Date: {`${post["Created time Month"]}/${post["Created time year"]}`}
        </p>
        <div className="flex flex-row justify-between">
          <a
            href={post.JD}
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600 text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Job Description
          </a>
          <img
            src={questionMark}
            className="w-5 hover:cursor-help"
            onMouseEnter={() => isInfoVisible(true)}
            onMouseLeave={() => isInfoVisible(false)}
          />
        </div>
        {infoVisible && <InformationBox status={post.Status} />}
      </div>
    </div>
  );
}

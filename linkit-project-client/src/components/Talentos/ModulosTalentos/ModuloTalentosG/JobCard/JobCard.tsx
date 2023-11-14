// JobCard.tsx

import React from 'react';


type JobCardProps = {
  title: string;
};

const JobCard: React.FC<JobCardProps> = ({ title }) => {
  return (
    <div className="bg-white border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-12 w-12"></div>
      </div>
      <div className="mt-4">
        <h3 className="text-gray-900 font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default JobCard;

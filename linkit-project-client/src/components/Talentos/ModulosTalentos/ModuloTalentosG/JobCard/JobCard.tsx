// JobCard.tsx

import React from 'react';

type JobCardProps = {
  jobTitle: string;
  location: string;
  contractType: string;
};

const JobCard: React.FC<JobCardProps> = ({ jobTitle, location, contractType }) => {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-12 w-12"></div>
      </div>
      <div className="mt-4">
        <h3 className="text-gray-900 font-bold">{jobTitle}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-600">{contractType}</p>
      </div>
    </div>
  );
};

export default JobCard;

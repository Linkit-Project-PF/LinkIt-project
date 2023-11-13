// JobCardList.tsx

import React from 'react';
import JobCard from './JobCard';

type JobCardsProps = {
  jobs: Array<{
    id: string;
    title: string;
    location: string;
    contractType: string;
  }>;
};

const JobCards: React.FC<JobCardsProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} jobTitle={job.title} location={job.location} contractType={job.contractType} />
      ))}
    </div>
  );
};

export default JobCards;

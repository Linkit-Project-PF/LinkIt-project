// JobCardList.tsx

import React from 'react';
import JobCard from './JobCard';
import { useSelector } from 'react-redux';

type stateProps = {
  jobCard: {
    allJobOffers: []
  }
}

type jobOfferProps = {
  title: string
}

const JobCards: React.FC = () => {
  const data = useSelector((state: stateProps) => state.jobCard.allJobOffers);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((jobOffer: jobOfferProps) => {
        return (
          <JobCard title={jobOffer.title}/>
        )
       }) 
      }
    </div>
  );
};

export default JobCards;

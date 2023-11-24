// JobCardList.tsx
import { FunctionComponent, useEffect, useState } from 'react';
import JobCard, {JobCardProps} from './JobCard';
import { getJobOffers } from '../../../../Services/jobOffers.service';
import { useDispatch, useSelector } from 'react-redux';
import { setJobOffers } from '../../../../../redux/features/JobCardsSlice';


const JobCards: FunctionComponent = () => {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(0);
  const jobOffers = useSelector((state: any) => state.jobCard.allJobOffers as JobCardProps[]);
  console.log(jobOffers)

  const jobsPerPage = 6;
  const maxPages = Math.ceil(jobOffers.length / jobsPerPage);
  const handlePrev = () => setCurrent(current === 0 ? maxPages - 1 : current - 1);
  const handleNext = () => setCurrent(current === maxPages - 1 ? 0 : current + 1);

  useEffect(() => {
    const fetchedJobOffers = async () => {
      // Fetch my job offers from backend api
      const fetchedJobOffers = await getJobOffers()
      // Set the job offers in the state

      const activeJobOffers = fetchedJobOffers.filter((jobOffer) => jobOffer.archived === false)
      dispatch(setJobOffers(activeJobOffers))


    }

    fetchedJobOffers()
  }, [])

  const jobOffersToShow = jobOffers.slice(
    current * jobsPerPage,
    (current + 1) * jobsPerPage
  );

  return (
    <div className="flex w-full h-[340px] space-x-6 items-center justify-center">
      <button onClick={handlePrev} className="text-3xl ">{'<'}</button>
      <div className="w-4/6 grid grid-cols-3 grid-rows-2 gap-5">
        {jobOffersToShow.map((jobDescription) => (
          <JobCard key={`card-${jobDescription._id}`} {...jobDescription} />
        ))}
      </div>
      <button onClick={handleNext} className="text-3xl ">{'>'}</button>
    </div>
  );
};

export default JobCards;

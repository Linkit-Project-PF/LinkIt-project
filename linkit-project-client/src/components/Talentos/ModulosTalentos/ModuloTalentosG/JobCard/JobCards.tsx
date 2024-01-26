// JobCardList.tsx
import { FunctionComponent, useEffect, useState } from 'react';
import JobCard, {JobCardProps} from './JobCard';
import { getJobOffers } from '../../../../Services/jobOffers.service';
import { useDispatch, useSelector } from 'react-redux';
import { setJobOffers } from '../../../../../redux/features/JobCardsSlice';
import { motion } from 'framer-motion';


const JobCards: FunctionComponent = () => {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(0);
  const jobOffers = useSelector((state: any) => state.jobCard.jobOffers as JobCardProps[]);
  const jobsPerPage = matchMedia('(max-width: 1023px)').matches ? 3 : 6;
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
    <div className="flex w-full h-full items-center justify-center space-x-[5%] my-[5%]">
      <button onClick={handlePrev} className=""><img src="/Vectores/previus.png" alt="previus" /></button>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2">
        {jobOffers.length === 0
        ? (
          <div className='flex flex-row justify-center items-center content-center w-full h-[20rem] col-span-3 row-span-2'>
            <motion.p 
            className='font-montserrat text-[1rem] ssm:text-[1.5rem] xl:text-[1.5rem] whitespace-nowrap'
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .5, type: 'spring', bounce: 0.25 }}
            >¡Ups! No se encontraron ofertas de trabajo
            </motion.p>
          </div>
          
        )
        : jobOffersToShow.map((jobDescription) => (
        <JobCard key={`card-${jobDescription._id}`} {...jobDescription} />
        ))
      }
      </div>
      <button onClick={handleNext} className=""><img src="/Vectores/next.png" alt="next" /></button>
    </div>
  );
};

export default JobCards;

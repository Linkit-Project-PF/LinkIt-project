// JobCardList.tsx
import { FunctionComponent, useEffect, useState } from 'react';
import JobCard, {JobCardProps} from './JobCard';
import { getJobOffers } from '../../../../Services/jobOffers.service';
import { useDispatch, useSelector } from 'react-redux';
import { setJobOffers } from '../../../../../redux/features/JobCardsSlice';
import { motion } from 'framer-motion';
import whiteArrow from "/Vectores/white-arrow.png"
import { useTranslation } from 'react-i18next';

const JobCardsMobile: FunctionComponent = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(0);


  const jobOffers = useSelector((state: any) => state.jobCard.jobOffers as JobCardProps[]);
  const jobsPerPage = 3;
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
    <div className="flex h-full items-center justify-center my-[5%]">
      <button onClick={handlePrev} className=""><img src={whiteArrow } alt="previus" className="rotate-90 w-[20px] justify-self-start ssm:justify-self-center cursor-pointer" /></button>
      <div className="justify-center items-center w-full">
        {jobOffers.length === 0
        ? (
          <div className='flex flex-row justify-center items-center content-center my-[10%] mx-2 text-white'>
            <motion.p 
            className='font-montserrat subtitles-size text-center'
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .5, type: 'spring', bounce: 0.25 }}
            >{t('No se encontraron vacantes disponibles con las opciones seleccionadas. Prueba nuevos filtros!')}
            </motion.p>
          </div>
          
        )
        :
        <div className='mx-[5%] grid gap-[3%]'>{
         jobOffersToShow.map((jobDescription) => (
        <JobCard key={`card-${jobDescription._id}`} {...jobDescription} />
        ))}
        </div>
      } 
      
      </div>
      <button onClick={handleNext} className=""><img src={whiteArrow } alt="next" className="-rotate-90 w-[20px] justify-self-end ssm:justify-self-center cursor-pointer" /></button>
    </div>
  );
};

export default JobCardsMobile;

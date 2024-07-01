// JobCardList.tsx
import { FunctionComponent, useEffect, useState } from "react";
import JobCard, { JobCardProps } from "./JobCard";
import { getJobOffers } from "../../../../Services/jobOffers.service";
import { useDispatch, useSelector } from "react-redux";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import { motion } from "framer-motion";
import whiteArrow from "/Vectores/white-arrow.png";
import { useTranslation } from "react-i18next";

export function Test ()  {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);

  const jobOffers = useSelector(
    (state: any) => state.jobCard.jobOffers as JobCardProps[]
  );
  const jobsPerPage = 3;
  const maxPages = Math.ceil(jobOffers.length / jobsPerPage);
  const handlePrev = () =>
    setCurrent(current === 0 ? maxPages - 1 : current - 1);
  const handleNext = () =>
    setCurrent(current === maxPages - 1 ? 0 : current + 1);

  useEffect(() => {
    const fetchedJobOffers = async () => {
      // Fetch my job offers from backend api
      const fetchedJobOffers = await getJobOffers();
      // Set the job offers in the state

      const activeJobOffers = fetchedJobOffers
        .reverse()
        .filter((jobOffer) => jobOffer.archived === false);

      dispatch(setJobOffers(activeJobOffers));
    };

    fetchedJobOffers();
  }, []);

  const jobOffersToShow = jobOffers.slice(
    current * jobsPerPage,
    (current + 1) * jobsPerPage
  );

  return (
    <div className="w-[640px] h-[970px] relative bg-white">
    <div className="w-[640px] h-[970px] left-0 top-0 absolute">
      <div className="left-[140.60px] top-[69.40px] absolute text-white text-[32px] font-bold font-['Montserrat']">Vacantes disponibles</div>
      <div className="left-[205px] top-[873.30px] absolute text-center text-white text-sm font-semibold font-['Montserrat']">Súmate a nuestra base de datos</div>
      <div className="left-[186px] top-[305.40px] absolute text-center text-sky-950 text-sm font-semibold font-['Montserrat']">PM</div>
      <div className="left-[59.60px] top-[224.40px] absolute text-white text-[22.70px] font-bold font-['Montserrat']">Sr. Technical PM</div>
      <div className="left-[59.60px] top-[256.10px] absolute text-white text-[17px] font-normal font-['Montserrat']">Uruguay, Remoto (Regional)</div>
      <div className="left-[59.60px] top-[434.80px] absolute text-white text-[17px] font-normal font-['Montserrat']">México, Remoto (Local)</div>
      <div className="left-[184px] top-[632.90px] absolute text-center text-sky-950 text-sm font-semibold font-['Montserrat']">Figma</div>
      <div className="left-[270px] top-[632.90px] absolute text-center text-sky-950 text-sm font-semibold font-['Montserrat']">Sketch</div>
      <div className="left-[361px] top-[632.90px] absolute text-center text-sky-950 text-sm font-semibold font-['Montserrat']">JavaScript</div>
      <div className="left-[59.60px] top-[551.90px] absolute text-white text-[22.70px] font-bold font-['Montserrat']">UX/UI Designer</div>
      <div className="left-[59.60px] top-[583.60px] absolute text-white text-[17px] font-normal font-['Montserrat']">Argentina, Híbrido</div>
      <div className="left-[184px] top-[482.90px] absolute text-center text-sky-950 text-sm font-semibold font-['Montserrat']">SALES</div>
      <div className="left-[269px] top-[482.90px] absolute text-center text-sky-950 text-sm font-semibold font-['Montserrat']">Apollo</div>
      <div className="left-[295.90px] top-[728.90px] absolute text-white text-[17px] font-semibold font-['Montserrat']">1 de 3</div>
      <div className="left-[76px] top-[305.40px] absolute text-center text-white text-sm font-semibold font-['Montserrat']">Full-time</div>
      <div className="left-[76px] top-[482.90px] absolute text-center text-white text-sm font-semibold font-['Montserrat']">Full-time</div>
      <div className="left-[76px] top-[632.90px] absolute text-center text-white text-sm font-semibold font-['Montserrat']">Full-time</div>
      <div className="left-[67.90px] top-[158.50px] absolute text-white text-sm font-semibold font-['Montserrat']">Stack</div>
      <div className="left-[173.40px] top-[158.80px] absolute text-white text-sm font-semibold font-['Montserrat']">Tipo</div>
      <div className="left-[276.60px] top-[158.80px] absolute text-white text-sm font-semibold font-['Montserrat']">Ubicación</div>
      <div className="left-[418.70px] top-[158.80px] absolute text-white text-sm font-semibold font-['Montserrat']">Modalidad</div>
      <div className="left-[479px] top-[632.90px] absolute text-center text-sky-950 text-sm font-semibold font-['Montserrat']">CSS</div>
      <div className="w-[374px] h-[74px] left-[133px] top-[770px] absolute text-center text-white text-[17px] font-medium font-['Montserrat']">Si ninguna de estas vacantes es para ti, no te preocupes, ¡vendrán muchas más!</div>
      <div className="w-[94px] h-[34px] left-[52px] top-[150px] absolute rounded-[100px] border border-white" />
      <div className="w-[132px] h-[34px] left-[402px] top-[150px] absolute rounded-[100px] border border-white" />
      <div className="w-[89px] h-[34px] left-[158px] top-[150px] absolute rounded-[100px] border border-white" />
      <div className="w-[130px] h-[34px] left-[260px] top-[150px] absolute rounded-[100px] border border-white" />
      <div className="w-[99px] h-[34px] left-[60px] top-[297px] absolute rounded-[100px] border border-white" />
      <div className="w-[99px] h-[34px] left-[60px] top-[474px] absolute rounded-[100px] border border-white" />
      <div className="w-[99px] h-[34px] left-[60px] top-[624px] absolute rounded-[100px] border border-white" />
    </div>
    <div className="left-[60.20px] top-[374.10px] absolute text-white text-[22.70px] font-bold font-['Montserrat']">Business Development <br/>Representative</div>
  </div>
  );
};



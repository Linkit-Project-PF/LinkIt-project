// ModuloTalentosG.tsx
import React from 'react';
import TestimonialCards from './TestimonialCard/TestimonialCards'; // Import the JobCards component
import { useTranslation } from "react-i18next";
import TestimonialCardsMobile from './TestimonialCard/TestimonialCardsMobile';
import { Link } from 'react-router-dom';


const ModuloTalentosG: React.FC = () => {
  // This array would come from props or a data fetching function in a real application
  const {t} = useTranslation();

  return (
    <div className="grid justify-items-center bg-linkIt-500 p-[7%] dark:bg-linkIt-200 ">
      <h1 className="titles-size text-center justify-center font-manrope mb-[5%] font-bold dark:text-white">{t('Lo que dicen nuestros talentos')}</h1>
      <div className='hidden lg:block w-full'>
      <TestimonialCards/>
      </div>
      <div className='lg:hidden w-full ssm:w-[80%] md:w-[65%]'>
        <TestimonialCardsMobile />
      </div>
      <Link to='https://es.trustpilot.com/review/linkit-hr.com' target="_blank">
      <button className="transparent-background-button row-start-2 lg:row-start-3 dark:text-white dark:hover:bg-white dark:hover:text-linkIt-200 dark:bg-linkIt-300">
        {t('Conoce los casos de éxito')}
      </button></Link>
    </div>
  );
};

export default ModuloTalentosG;

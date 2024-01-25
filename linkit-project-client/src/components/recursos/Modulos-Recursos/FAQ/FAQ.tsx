import './FAQ.css'
import AccordionFaqs from './FAQS-Accordion/AccordionFaqs'
import { useTranslation } from "react-i18next";

function FAQ() {
  const {t} = useTranslation();
  return (
    <div className='w-full flex flex-col text-center relative z-20 bg-white p-[7%]'>
        <h1 className='font-bold font-manrope text-[0.9rem] xs:text-[1.2rem] ssm:text-[2rem] xl:text-[2.5rem] text-center mb-[5%]'>{t('Preguntas Frecuentes')}</h1>
        <AccordionFaqs/>
        
    </div>
  )
}

export default FAQ
import './FAQ.css'
import AccordionFaqs from './FAQS-Accordion/AccordionFaqs'
import { useTranslation } from "react-i18next";

function FAQ() {
  const {t} = useTranslation();
  return (
    <div className='w-full flex flex-col text-center relative z-20 bg-white p-[7%] dark:bg-linkIt-400'>
        <h1 className='font-bold font-manrope titles-size text-center mb-[5%] dark:text-white'>{t('Preguntas Frecuentes')}</h1>
        <AccordionFaqs/>
        
    </div>
  )
}

export default FAQ
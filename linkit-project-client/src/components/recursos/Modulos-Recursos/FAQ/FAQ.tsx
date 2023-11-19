import './FAQ.css'
import AccordionFaqs from './FAQS-Accordion/AccordionFaqs'

function FAQ() {
  return (
    <div className='w-full flex flex-col text-center  relative mb-[7rem]'>
        <div className='bg-white h-[2rem] w-full skewed-top'></div>
        <div className='bg-white h-[1rem] w-full relative bottom-[1.5rem] skewed-second'></div>
        <div className=' w-full relative text-left'>
        <h1 className='font-bold font-manrope text-[2rem] text-center'>Preguntas Frecuentes</h1>
        <AccordionFaqs/>
        </div>
    </div>
  )
}

export default FAQ
import { useTranslation } from "react-i18next"
import './ModuloD.css'
import peopleSpa from "/Vectores/linkit-web-vectores-home-flechas-ESP-07.svg"
import peopleEn from "/Vectores/linkit-web-vectores-home-flechas-ENG-06.svg"

export default function ModuloD() {
    const {t, i18n}= useTranslation()

    const currentLanguage = i18n.language;

    const isLanguageSpanish = currentLanguage === "es";
    return (
        <div className="grid lg:grid-cols-2 bg-linkIt-500 dark:bg-linkIt-400 dark:text-white p-[6%] items-center">
            <img src={isLanguageSpanish? peopleSpa: peopleEn} alt="people" className="w lg:w-[110%] lg:mr-[8%] lg:-ml-[5%] justify-self-center" />
            <div className=' mb-4'>
                <div className="flex items-center ">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-08.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%] ">
                <h2 className='font-bold font-manrope text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] sm:text-[1.5rem] justify-self-start'>{t('Proceso ágil')}</h2>
                <p className='text-[0.5rem] xs:text-[0.7rem] ssm:text-[1rem] sm:text-[1.2rem] justify-self-start font-montserrat font-medium'>{t('En 5 días hábiles presentaremos talentos previamente entrevistados y calificados.')}</p>
                </div>
                </div>
                <div className='relative division w-[100%] before:left-[99.5%] before:top-[-170%]'></div>

                <div className="flex items-center">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-09.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%]">
                <h2 className='font-bold font-manrope text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] sm:text-[1.5rem] justify-self-start'>{t('Comunicación asertiva')}</h2>
                <p className='text-[0.5rem] xs:text-[0.7rem] ssm:text-[1rem] sm:text-[1.2rem] pr-[20%] justify-self-start font-montserrat font-medium'>{t('Nos comprometemos a mantener una comunicación ágil y efectiva durante todo el proceso de selección.')}</p>
                </div>
                </div>
                <div className='relative division w-[100%] before:left-[99.5%] before:top-[-170%]'></div>

                <div className="flex items-center ">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-10.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%]">
                <h2 className='font-bold font-manrope text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] sm:text-[1.5rem] justify-self-start'>{t('Consultoría')} 360°</h2>
                <p className='text-[0.5rem] xs:text-[0.7rem] ssm:text-[1rem] sm:text-[1.2rem] justify-self-start font-montserrat font-medium'>{t('Te asesoramos desde el perfil ideal, los presupuestos idóneos y procesos de contratación hasta planes de beneficios, retención y mucho más.')}</p>
                </div>
                </div>
                <div className='relative division w-[100%] before:absolute before:left-[99.5%] before:top-[-120%] col-start-2'></div>
            </div>
            </div>
    )
}

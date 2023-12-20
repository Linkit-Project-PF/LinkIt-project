import { useTranslation } from "react-i18next"
import './ModuloD.css'
import peopleSpa from "/Vectores/linkit-web-vectores-new-Mesa de trabajo 7.svg"
import peopleEn from "/Vectores/linkit-web-vectores-new-Mesa de trabajo 6.svg"

export default function ModuloD() {
    const {t, i18n}= useTranslation()

    const currentLanguage = i18n.language;

    const isLanguageSpanish = currentLanguage === "es";
    return (
        <div className="grid grid-cols-2 bg-linkIt-500 dark:bg-linkIt-400 dark:text-white p-[6%]">
            <img src={isLanguageSpanish? peopleSpa: peopleEn} alt="people" className="w-[110%] mr-[8%] -ml-[5%]" />
            <div className='grid'>
                <div className="flex items-center">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-08.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%]">
                <h2 className='font-bold font-manrope text-[1.5vw] justify-self-start'>{t('Proceso ágil')}</h2>
                <p className='text-[1.3vw] justify-self-start font-montserrat font-medium'>{t('En 5 días hábiles presentaremos talentos previamente entrevistados y calificados.')}</p>
                </div>
                </div>
                <div className='relative division w-[100%] before:absolute before:left-[95%] 2xl:before:left-[97%] before:top-[50%]'></div>

                <div className="flex items-center">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-09.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%]">
                <h2 className='font-bold font-manrope text-[1.5vw] justify-self-start'>{t('Comunicación asertiva')}</h2>
                <p className='text-[1.3vw] pr-[20%] justify-self-start font-montserrat font-medium'>{t('Nos comprometemos a mantener una comunicación ágil y efectiva durante todo el proceso de selección.')}</p>
                </div>
                </div>
                <div className='relative division w-[100%] before:absolute before:left-[95%] 2xl:before:left-[97%] before:top-[50%]'></div>

                <div className="flex items-center">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-10.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%]">
                <h2 className='font-bold font-manrope text-[1.5vw] justify-self-start'>{t('Consultoría')} 360°</h2>
                <p className='text-[1.3vw] justify-self-start font-montserrat font-medium'>{t('Te asesoramos desde el perfil ideal, los presupuestos idóneos y procesos de contratación hasta planes de beneficios, retención y mucho más.')}</p>
                </div>
                </div>
            </div>
                <div className='relative division w-[100%] before:absolute before:left-[95%] 2xl:before:left-[97%] before:top-[50%] col-start-2'></div>
            </div>
    )
}

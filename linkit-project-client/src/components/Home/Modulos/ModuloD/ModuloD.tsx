import { useTranslation } from "react-i18next"
import './ModuloD.css'


export default function ModuloD() {
    const {t}= useTranslation()

  
    return (
        <div className="grid lg:grid-cols-2 bg-linkIt-500 dark:bg-linkIt-400 dark:text-white p-[6%] items-center">
            <div className=' mb-4'>
                <div className="flex items-center ">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-08.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%] ">
                <strong className='font-manrope subtitles-size justify-self-start'>{t('Proceso ágil')}</strong>
                <p className=' text-size justify-self-start font-montserrat font-medium'>{t('En 5 días hábiles presentaremos talentos previamente entrevistados y calificados.')}</p>
                </div>
                </div>
                <div className='relative division w-[100%] before:left-[99.5%] before:top-[-170%]'></div>

                <div className="flex items-center">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-09.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%]">
                <strong className='font-manrope subtitles-size justify-self-start'>{t('Comunicación asertiva')}</strong>
                <p className='text-size pr-[20%] justify-self-start font-montserrat font-medium'>{t('Nos comprometemos a mantener una comunicación ágil y efectiva durante todo el proceso de selección.')}</p>
                </div>
                </div>
                <div className='relative division w-[100%] before:left-[99.5%] before:top-[-170%]'></div>

                <div className="flex items-center ">
                <img className='w-1/5' src="/Vectores/linkit-web-vectores-10.svg" alt="" />
                <div className="space-y-[1%] flex flex-col py-[5%]">
                <strong className='font-manrope subtitles-size justify-self-start'>{t('Consultoría')} 360°</strong>
                <p className=' text-size justify-self-start font-montserrat font-medium'>{t('Te asesoramos desde el perfil ideal, los presupuestos idóneos y procesos de contratación hasta planes de beneficios, retención y mucho más.')}</p>
                </div>
                </div>
                <div className='relative division w-[100%] before:absolute before:left-[99.5%] before:top-[-120%] col-start-2'></div>
            </div>
            </div>
    )
}

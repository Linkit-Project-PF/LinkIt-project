import { useTranslation } from "react-i18next"
import './ModuloC.css'
import WhatMakeUsDCarousel from "./WhatMakeUsDCarousel";

export default function ModuloC() {
    const {t}= useTranslation()




    return (
        <div className="p-[7%] dark:bg-linkIt-200 dark:text-white overflow-hidden">
            <h3 className=" titles-size font-bold text-center font-manrope">{t('¿Qué nos hace diferentes?')}</h3>
                <div className="hidden lg:block">
            <div className="grid grid-cols-4">
                        <h4 className="subtitles-size font-manrope font-bold mt-[10%] justify-self-center">{t('Sin riesgos')}</h4>
                        <h4 className="subtitles-size font-manrope font-bold mt-[10%] justify-self-center">{t('Fee a medida')}</h4>
                        <h4 className="subtitles-size font-manrope font-bold mt-[10%] justify-self-center">{t('Garantía')}</h4>
                        <h4 className="subtitles-size font-manrope font-bold mt-[10%] justify-self-center  whitespace-nowrap">{t('Seguimiento continuo')}</h4>
                        <p className="text-center text-size mt-[5%] font-montserrat font-medium px-[15%]">{t('Ofrecemos un servicio de calidad a éxito. No hay anticipos; el pago es al efectivizar la contratación.')}</p>
                        <p className="text-center text-size mt-[5%] font-montserrat font-medium px-[15%]">{t('Personalizamos nuestro fee a tus necesidades y ahorra hasta un 50% en la contratación.')}</p>
                        <p className="text-center text-size mt-[5%] font-montserrat font-medium px-[15%]">{t('Garantía de por vida contratando a través de LinkIT.')}</p>
                        <p className="text-center text-size mt-[5%] font-montserrat font-medium px-[15%]">{t('Asignamos un equipo de trabajo específico proporcionando un servicio integral y personalizado durante todo el proceso.')}</p>

                <ul className="grid grid-cols-4 justify-items-center relative mt-[2vh] font-manrope col-span-4">
                <div className="line top-[8px] md:top-[12px] md:left-[20px] lg:top-[15px] lg:left-[20px] xl:top-[30px] xl:left-[20px] 2xl:top-[30px] 2xl:left-[47px] dark:bg-white"></div>
                    <li className="flex items-center justify-center text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  text-white h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 font-bold  bg-linkIt-200 dark:bg-white dark:text-linkIt-200 rounded-full z-20">1</li>
                    <li className="flex items-center justify-center text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  text-white h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 font-bold  bg-linkIt-200 dark:bg-white dark:text-linkIt-200 rounded-full z-20">2</li>
                    <li className="flex items-center justify-center text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  text-white h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 font-bold  bg-linkIt-200 dark:bg-white dark:text-linkIt-200 rounded-full z-20">3</li>
                    <li className="flex items-center justify-center text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  text-white h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 font-bold  bg-linkIt-200 dark:bg-white dark:text-linkIt-200 rounded-full z-20">4</li>
                </ul>
            </div> 
            </div>
             <div className="block lg:hidden">
                <WhatMakeUsDCarousel />
                </div>
        </div>
    )
}

import { useTranslation } from "react-i18next";
import { useState } from 'react'
export default function ModuloB() { 

    const {t} = useTranslation();
    const [show, setShow] = useState(false)

    const handleClick = () => { setShow(!show) }
    
    return ( <div>
        <div className="hidden lg:block">
        <div className="bg-linkIt-500 lg:flex p-[7%] dark:bg-linkIt-400 h-full ">
            <p className="text-black xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[1.5rem] xl:text-[2rem] 1xl:text-[2.5rem] font-manrope font-extrabold dark:text-white">{t('En LinkIT aspiramos a ser líderes en la')} <span className="bg-linkIt-300 dark:bg-linkIt-600 dark:bg-opacity-[0.3] bg-opacity-[0.3]">{t('transformación digital')}</span> {t('convirtiéndonos en el puente entre el talento y empresas de manera global, creando, reteniendo y gestionando equipos de')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-600 dark:bg-opacity-[0.3]">{t('alto rendimiento.')}</span></p>
            <div className="w-full grid items-end justify-end relative before:w-full before:h-[1px] before:absolute before:bg-linkIt-300 before:dark:bg-white before:top-[100%] lg:col-span-full">
            <p className="text-black relative text-[0.6rem] ssm:text-[1rem] dark:text-white mt-3 font-montserrat">{t('Nuestra Visión')}</p>
            </div>
        </div>
        </div>
        <div className={`lg:hidden ${ show ? "block" : "hidden" }`}>
        <div className="bg-linkIt-500 lg:flex p-[7%] dark:bg-linkIt-400 h-full ">
            <p className="text-black xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[1.5rem] xl:text-[2rem] 1xl:text-[2.5rem] font-manrope font-extrabold dark:text-white">{t('En LinkIT aspiramos a ser líderes en la')} <span className="bg-linkIt-300 dark:bg-linkIt-600 dark:bg-opacity-[0.3] bg-opacity-[0.3]">{t('transformación digital')}</span> {t('convirtiéndonos en el puente entre el talento y empresas de manera global, creando, reteniendo y gestionando equipos de')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-600 dark:bg-opacity-[0.3]">{t('alto rendimiento.')}</span></p>
            <div className="w-full grid items-end justify-end relative before:w-full before:h-[1px] before:absolute before:bg-linkIt-300 before:dark:bg-white before:top-[100%] lg:col-span-full">
            <p className="text-black relative text-[0.6rem] ssm:text-[1rem] dark:text-white mt-3 font-montserrat">{t('Nuestra Visión')}</p>
            </div>
        </div>

    </div>
        <div className=" lg:hidden flex bg-linkIt-500 w-screen h-[3rem] items-center justify-items-center justify-between dark:bg-linkIt-700 px-[5%]">
    <button className={`text-linkIt-300 dark:text-white text-[0.6rem] ssm:text-[1rem] font-extrabold text-start font-montserrat ${show ? '' : ''}`} onClick={handleClick}>{show ? (<a href="#historia">-</a>) : "+"}</button>
    <button className='text-linkIt-300 dark:text-white text-[0.6rem] ssm:text-[1rem] font-montserrat whitespace-nowrap font-bold text-end' onClick={handleClick}>{t('Nuestra Visión')}</button>
    </div>
        </div>
    ) }
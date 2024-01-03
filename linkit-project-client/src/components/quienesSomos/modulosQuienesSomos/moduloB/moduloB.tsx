import { useTranslation } from "react-i18next";
export default function ModuloB() { 
    const {t} = useTranslation();
    return ( 
        <div className="bg-linkIt-500 grid grid-cols-2 gap-[28vw] p-[6vw] dark:bg-linkIt-400 ">
            <div>
            <h1 className="text-black text-[2.6vw] w-[56vw] font-manrope font-extrabold leading-[7.5vh] dark:text-white">{t('En LinkIT aspiramos a ser líderes en la')} <span className="bg-linkIt-300 dark:bg-linkIt-600 dark:bg-opacity-[0.3] bg-opacity-[0.3]">{t('transformación digital')}</span> {t('convirtiéndonos en el puente entre el talento y empresas de manera global, creando, reteniendo y gestionando equipos de')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-600 dark:bg-opacity-[0.3]">{t('alto rendimiento.')}</span></h1>
            </div>
            <p className="text-black self-end after:block after:bg-linkIt-300 dark:after:bg-white after:h-[1px] after:w-[85%] after:left-[15.2%] after:mt-[2%] after:relative text-end text-[1.1vw] dark:text-white">{t('Nuestra Visión')}</p>
        </div>
    ) }
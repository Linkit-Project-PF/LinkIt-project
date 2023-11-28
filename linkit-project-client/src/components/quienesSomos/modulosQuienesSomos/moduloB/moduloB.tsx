import { useTranslation } from "react-i18next";
export default function ModuloB() { 
    const {t} = useTranslation();
    return ( 
        <div className="bg-linkIt-500 grid grid-cols-2 gap-[28vw] p-[6vw]">
            <div>
            <h1 className="text-black text-[2.6vw] w-[56vw] font-manrope font-extrabold leading-[7.5vh]">{t('En LinkIT aspiramos a ser líderes en la')} <span className="bg-linkIt-300 bg-opacity-[0.3]">{t('transformación digital')}</span> {t('convirtiéndonos en el puente entre el talento y empresas de manera global, creando, reteniendo y gestionando equipos de')} <span className="bg-linkIt-300 bg-opacity-[0.3]">{t('alto rendimiento.')}</span></h1>
            </div>
            <p className="text-black self-end after:block after:bg-linkIt-300 after:h-1 after:w-[30vw] text-end text-[1.1vw]">{t('Nuestra Visión')}</p>
        </div>
    ) }
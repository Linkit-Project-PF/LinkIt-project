import { useTranslation } from "react-i18next";
import './ModuloTalentosE.css'
import HowToApplyCarousel from "./HowToApplyCarousel";


export default function ModuloTalentosE() {
    const {t} = useTranslation();
    return (

<div className="p-[7%] dark:bg-linkIt-200 bg-linkIt-500 text-linkIt-200 dark:text-white overflow-hidden">
<div className="hidden lg:block">
<h1 className="text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] sm:text-[1.5rem] lg:text-[2rem] xl:text-[2.3rem] font-bold text-center font-manrope">{t('Cómo aplicar a')}</h1>
<div className="grid grid-cols-4">
        <h2 className="text-[1.3rem] xl:text-[1.5rem] font-manrope font-bold mt-[10%] justify-self-center px-[15%] text-center">{t('Consulta nuestras vacantes')}</h2>
        <h2 className="text-[1.3rem] xl:text-[1.5rem] font-manrope font-bold mt-[10%] justify-self-center px-[15%] text-center">{t('Aplica completando el formulario')}</h2>
        <h2 className="text-[1.3rem] xl:text-[1.5rem] font-manrope font-bold mt-[10%] justify-self-center px-[15%] text-center">{t('Proceso de entrevistas')}</h2>
        <h2 className="text-[1.3rem] xl:text-[1.5rem] font-manrope font-bold mt-[10%] justify-self-center px-[15%] text-center">{t('Consigue el trabajo de tus sueños')}</h2>
        <p className="text-center text-[0.8rem] xl:text-[1rem] mt-[5%] font-montserrat font-medium px-[15%]">{t('Tenemos posiciones abiertas en múltiples áreas de crecimiento.')}</p>
        <p className="text-center text-[0.8rem] xl:text-[1rem] mt-[5%] font-montserrat font-medium px-[15%]">{t('Selecciona tu posición ideal rellenando la solicitud en pocos clicks.')}</p>
        <p className="text-center text-[0.8rem] xl:text-[1rem] mt-[5%] font-montserrat font-medium px-[15%]">{t('Conoce en detalle la oportunidad y prepárate para los próximos pasos.')}</p>
        <p className="text-center text-[0.8rem] xl:text-[1rem] mt-[5%] font-montserrat font-medium px-[15%]">{t('Comienza a trabajar de forma remota y lleva tu carrera al siguiente nivel.')}</p>

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
<h1 className="text-[1.3rem] xs:text-[1.5rem] ssm:text-[2rem] md:text-[2.5rem] font-bold text-center font-manrope">{t('¿Qué nos hace diferentes?')}</h1>
<HowToApplyCarousel />
</div>
</div>
    )
}
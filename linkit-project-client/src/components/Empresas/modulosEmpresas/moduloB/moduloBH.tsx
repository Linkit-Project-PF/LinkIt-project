import { useTranslation } from 'react-i18next'
import './ModuloBH.css'
import useWindowWidth from '../../../../Utils/WindowWidth/WindowWidth';
import OurServicesCarousel from '../../../../Utils/OurServicesCarousel/OurServicesCarousel';


export default function ModuloB() {

    const { t } = useTranslation();
    const windowWidth = useWindowWidth();

        return (
            <div className=''>
                {windowWidth >= 1024 ? ( 
                <div className="skewed-borderBH dark:bg-white">
                    <div className="contentBH flex flex-col p-[7%] pb-[10%] ">
                        <h1 className="font-manrope font-bold self-center text-[2.5rem] xl:text-[3rem] mb-[5%] text-white">{t('Nuestros servicios')}</h1>
                            <div className="">
                                <div className='grid grid-cols-3 mb-[3%] ml-[10%]'>
                                <h2 className="text-white text-[1.5rem] xl:text-[2rem] font-manrope text-start">{t('Reclutamiento')} <br /> {t('y selección')} </h2>

                                <p className="text-white text-[0.9rem] xl:text-[1.2rem] font-montserrat w-[150%] justify-self-center self-center">{t('Identificamos a profesionales con la experiencia adecuada para tus proyectos. Evaluamos habilidades técnicas, experiencia previa, cultura e idioma, para así lograr construir un equipo eficiente y exitoso.')}</p>
                                <img className="w-1/4 justify-self-center" src="/Vectores/people-bg-green.png" alt="reclutamiento" />
                                </div>
                                <hr className='relative col-span-3 '/>

                                <div className='grid grid-cols-3 my-[3%] ml-[10%]'>
                                <h2 className="text-white text-[1.5rem] xl:text-[2rem] font-manrope text-start ">{t('Contratación')}</h2>

                                <p className="text-white text-[0.9rem] xl:text-[1.2rem] font-montserrat w-[150%] justify-self-center self-center ">{t('Agranda tu equipo y reduce tu costos de contratación con talento externo, aumentando la capacidad productiva, sin compromisos a largo plazo. Dedícate a lo que es realmente importante; elimina los tiempos administrativos y operativos de la gestión contractual y de pagos.')}</p>
                                <img className="w-1/4 justify-self-center" src="/Vectores/paper-bg-green.png" alt="contratación" />
                                </div>

                            <hr className='relative col-span-3'/>

                            <div className='grid grid-cols-3 ml-[10%] mt-[3%]'>
                                <h2 className="text-white text-start font-manrope text-[1.5rem] xl:text-[2rem]">{t('Gestión')} <br /> {t('y beneficios')}</h2>

                                <p className="text-white text-[0.9rem] xl:text-[1.2rem] font-montserrat w-[150%] justify-self-center self-center">{t('Implementamos planes de beneficios y estrategias de retención para lograr equipos de alto desempeño, realizando informes y asesoramiento personalizado ayudando a tu empresa a retener talento global de manera escalable.')}</p>
                                <img className="w-1/4 justify-self-center" src="/Vectores/check-bg-green.png" alt="gestión y beneficios" />

                                </div>
                            </div>
                            
                    </div>
                </div> ) : (
                    <OurServicesCarousel />
                )}
            </div>

        )
}

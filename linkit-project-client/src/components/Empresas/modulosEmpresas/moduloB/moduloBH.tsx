import { useTranslation } from 'react-i18next'
import './ModuloBH.css'
import OurServicesCarousel from '../../../../Utils/OurServicesCarousel/OurServicesCarousel';


export default function ModuloB() {

    const { t } = useTranslation();


        return (
            <div className=''>
                <div className="skewed-borderBH hidden lg:block dark:bg-white p-[7%]">
                    <div className="contentBH flex flex-col pb-[10%] ">
                        <h3 className="text-white titles-size text-center justify-center font-manrope mb-[5%] font-bold">{t('Nuestros servicios')}</h3>
                            <div className="">
                                <div className='grid grid-cols-3 mb-[3%] ml-[10%]'>
                                <h4 className="text-white font-bold subtitles-size font-manrope text-start">{t('Reclutamiento')} <br /> {t('y selección')} </h4>

                                <p className="text-white text-size font-montserrat w-[120%] justify-self-center self-center">{t('Identificamos a profesionales con la experiencia adecuada para tus proyectos. Evaluamos habilidades técnicas, experiencia previa, cultura e idioma, para así lograr construir un equipo eficiente y exitoso.')}</p>
                                <img className="w-1/4 justify-self-center" src="/Vectores/people-bg-green.png" alt="reclutamiento" />
                                </div>
                                <hr className='relative col-span-3 '/>

                                <div className='grid grid-cols-3 my-[3%] ml-[10%]'>
                                <h4 className="text-white font-bold subtitles-size font-manrope text-start ">{t('Contratación')}</h4>

                                <p className="text-white text-size font-montserrat w-[120%] justify-self-center self-center ">{t('Agranda tu equipo y reduce tu costo de contratación con talento externo, aumentando la capacidad productiva, sin compromisos a largo plazo. Dedícate a lo que es realmente importante; elimina los tiempos administrativos y operativos de la gestión contractual y de pagos.')}</p>
                                <img className="w-1/4 justify-self-center" src="/Vectores/paper-bg-green.png" alt="contratación" />
                                </div>

                            <hr className='relative col-span-3'/>

                            <div className='grid grid-cols-3 ml-[10%] mt-[3%]'>
                                <h4 className="text-white font-bold subtitles-size font-manrope text-start ">{t('Gestión')} <br /> {t('y beneficios')}</h4>

                                <p className="text-white text-size font-montserrat w-[120%] justify-self-center self-center">{t('Implementamos planes de beneficios y estrategias de fidelización para lograr equipos de alto desempeño, realizando informes y asesoramiento personalizado ayudando a tu empresa a fidelizar talento global de manera escalable.')}</p>
                                <img className="w-1/4 justify-self-center" src="/Vectores/check-bg-green.png" alt="gestión y beneficios" />

                                </div>
                            </div>
                            
                    </div>
                </div> 
                <div className='lg:hidden'>
                    <OurServicesCarousel component='company' />
                    </div>
            </div>

        )
}

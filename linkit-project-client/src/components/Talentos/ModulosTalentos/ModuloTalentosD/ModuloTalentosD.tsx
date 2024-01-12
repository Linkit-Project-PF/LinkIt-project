
 import "./ModuloTalentosD.css"
import { useTranslation } from "react-i18next"
import OurServicesCarousel from "../../../../Utils/OurServicesCarousel/OurServicesCarousel";

export default function ModuloTalentosD() {

    const{t}=useTranslation()

    return (


            <div className='bg-linkIt-500 dark:bg-linkIt-200'>
            <div className="skewed-borderBH after:bg-linkIt-500 after:dark:bg-linkIt-200 hidden lg:block  p-[7%]">
                <div className="contentBH flex flex-col pb-[10%] ">
                    <h1 className="font-manrope font-bold self-center text-[2.5rem] xl:text-[3rem] mb-[5%] text-white">{t('Nuestros servicios')}</h1>
                        <div className="">
                            <div className='grid grid-cols-3 mb-[3%] ml-[10%]'>
                            <h2 className="text-white text-[1.5rem] xl:text-[2rem] font-manrope text-start w-[55%]">{t('Crecimiento y desarrollo')} </h2>

                            <p className="text-white text-[0.9rem] xl:text-[1.2rem] font-montserrat w-[150%] justify-self-center self-center">{t('Trabaja en los mejores proyectos de tecnología con las empresas más destacadas del mundo. Te acompañamos en tu desarrollo profesional asesorándote sobre las tecnologías de vanguardia, competitividad en el mercado y mejores oportunidades globales.')}</p>
                            <img className="w-1/4 justify-self-center" src="/Vectores/people-bg-green.png" alt="reclutamiento" />
                            </div>
                            <hr className='relative col-span-3 '/>

                            <div className='grid grid-cols-3 my-[3%] ml-[10%]'>
                            <h2 className="text-white text-[1.5rem] xl:text-[2rem] font-manrope text-start ">{t('Trabajo remoto')}</h2>

                            <p className="text-white text-[0.9rem] xl:text-[1.2rem] font-montserrat w-[150%] justify-self-center self-center ">{t('Despídete de las largas horas de traslado y trabaja desde la comodidad de tu hogar. Democratizamos oportunidades a nivel global para que encuentres el equilibrio perfecto entre el trabajo y la vida personal.')}</p>
                            <img className="w-1/4 justify-self-center" src="/Vectores/paper-bg-green.png" alt="contratación" />
                            </div>

                        <hr className='relative col-span-3'/>

                        <div className='grid grid-cols-3 ml-[10%] mt-[3%]'>
                            <h2 className="text-white text-start font-manrope text-[1.5rem] xl:text-[2rem] w-[50%]">{t('Facilidades de pago')}</h2>

                            <p className="text-white text-[0.9rem] xl:text-[1.2rem] font-montserrat w-[150%] justify-self-center self-center">{t('Elige dónde y cómo recibir el dinero. Te asesoramos en las mejores formas para recibir el dinero, teniendo en cuenta las contrataciones y legislaciones laborales a nivel global.')}</p>
                            <img className="w-1/4 justify-self-center" src="/Vectores/check-bg-green.png" alt="gestión y beneficios" />

                            </div>
                        </div>
                        
                </div>
            </div> 
            <div className='lg:hidden'>
                <OurServicesCarousel component="talent" />
                </div>
        </div>
    )
}

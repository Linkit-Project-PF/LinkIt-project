import './ModuloTalentosD.css'
import { useTranslation } from "react-i18next";

export default function ModuloTalentosD() {
    const {t} = useTranslation();
    return (
        <div>
            <div className="flex flex-col p-32 skewed-borderC">
                <div className="contentC">
                    <h1 className="flex justify-center text-white text-5xl font-semibold mt-2">{t('Nuestros servicios')}</h1>
                    <ul className="flex flex-col gap-6">
                        <div className="flex  flex-row items-center mt-32 mx-12">
                            
                            <li className=" text-white font-bold text-[2rem] pt-12 self-start relative bottom-[0.8rem]">{t('Crecimiento y desarrollo')}</li>
                            <p className=" text-white py-6 text-2xl text-left p-[9rem]">{t('Trabaja en los mejores proyectos de tecnología con las empresas más destacadas del mundo. Te acompañamos en tu desarrollo profesional asesorándote sobre las tecnologías de vanguardia, competitividad en el mercado y mejores oportunidades globales.')}</p>
                            <img className="bg-white rounded-full w-[7rem] self-start relative top-[1.8rem]" src="/Vectores/linkit-web-vectores-03.svg" alt="reclutamiento" />
                            
                        </div>
                        <hr className="border-[0.1rem] xl:relative xl:top-[4rem]"/>
                        <div className="flex  flex-row items-center mt-32 mx-12">
                            
                            <li className=" text-white font-bold text-[2rem] pt-12 self-start relative bottom-[0.8rem] whitespace-nowrap">{t('Trabajo remoto')}</li>
                            <p className=" text-white py-6 text-2xl text-left p-[9rem] xl:relative xl:right-[2.75rem]">{t('Despídete de las largas horas de traslado y trabaja desde la comodidad de tu hogar. Democratizamos oportunidades a nivel global para que encuentres el equilibrio perfecto entre el trabajo y la vida personal.')}</p>   
                            <img className="bg-white rounded-full w-[7rem] self-start relative top-[1.8rem]" src="/Vectores/linkit-web-vectores-04.svg" alt="contratación" />
                        </div>
                        <hr className="border-[0.1rem] xl:relative xl:top-[4rem]"/>
                        <div className="flex flex-row  items-center mt-32 mx-12">
                           
                            <li className=" text-white font-bold text-[2rem] pt-12 self-start relative bottom-[0.8rem]">{t('Facilidades de pago')}</li>
                            <p className=" text-white py-6 text-2xl text-left p-[9rem] xl:relative xl:left-[.65rem]">{t('Elige dónde y cómo recibir el dinero. Te asesoramos en las mejores formas para recibir el dinero, teniendo en cuenta las contrataciones y legislaciones laborales a nivel global.')}</p>
                            <img className="bg-white rounded-full w-[7rem] self-start relative top-[1.8rem]" src="/Vectores/linkit-web-vectores-05.svg" alt="gestión y beneficios" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    )
}

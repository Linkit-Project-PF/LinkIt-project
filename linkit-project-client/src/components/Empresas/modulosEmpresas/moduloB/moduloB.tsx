
import './ModuloB.css'

export default function ModuloB() {


    return (
        <div>
            <div className="flex flex-col skewed-borderB pb-6 sm:pb-10 md:p-6 md:pb-12 lg:pb-16 xl:pb-24 2xl:pb-32">
                <div className="contentB flex flex-col  space-y-16 pb-14">
                    <h1 className="flex justify-center text-white font-semibold text-sm m-6  lg:text-3xl xl:text-4xl xl:m-12 2xl:text-5xl xl:my-6">Nuestros servicios</h1>
                    <ul className="grid grid-flow-row gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 2xl:gap-16">
                        <div className="flex flex-row justify-around">
                            <h2 className="text-white font-bold text-start text-xs p-2 md:text-sm lg:text-lg lg:mt-2 xl:text-xl xl:mt-6 2xl:text-3xl 2xl:mt-16">Reclutamiento <br /> y selección </h2>
                            <p className="text-white text-start text-[10px] w-[30%] py-1 sm:text-[13px] md:text-[13px] lg:text-sm lg:py-4 xl:text-base 2xl:text-lg 2xl:py-4 2xl:px-24">Identificamos a profesionales con la experiencia adecuada para tus proyectos. Evaluamos habilidades técnicas, experiencia previa, cultura e idioma, para así lograr construir un equipo eficiente y exitoso.</p>
                            <img className="relative bg-white rounded-full w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24" src="/Vectores/linkit-web-vectores-03.svg" alt="reclutamiento" />
                        </div>
                            <hr/>

                        <div className="flex flex-row justify-around">
                            <h2 className="text-white font-bold text-start text-xs p-2 md:text-sm lg:text-lg lg:mt-2 xl:text-xl xl:mt-6 2xl:text-3xl 2xl:mt-16">Contratación</h2>
                            <p className="text-white text-start text-[10px] w-[29%] py-1 sm:text-[13px] md:text-[13px] lg:text-sm lg:py-4 xl:text-base 2xl:text-lg 2xl:py-4 2xl:px-24">Agranda tu equipo y reduce tu costos de contratación con talento externo, aumentando la capacidad productiva, sin compromisos a largo plazo. Dedícate a lo que es realmente importante; elimina los tiempos administrativos y operativos de la gestión contractual y de pagos.</p>
                            <img className="relative bg-white rounded-full  w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24" src="/Vectores/linkit-web-vectores-04.svg" alt="contratación" />
                        </div>
                        <hr/>

                        <div className="flex flex-row justify-around">
                            <h2 className="text-white font-bold text-start text-xs p-2 md:text-sm lg:text-lg lg:mt-2 xl:text-xl xl:mt-6 2xl:text-3xl 2xl:mt-16">Gestión <br /> y beneficios</h2>
                            <p className="text-white text-start text-[10px] w-[28.6%] py-1 sm:text-[13px] md:text-[13px] lg:text-sm lg:py-4 xl:text-base 2xl:text-lg 2xl:py-4 2xl:px-24">Implementamos planes de beneficios y estrategias de retención para lograr equipos de alto desempeño, realizando informes y asesoramiento personalizado ayudando a tu empresa a retener talento global de manera escalable.</p>
                            <img className="relative bg-white rounded-full  w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24" src="/Vectores/linkit-web-vectores-05.svg" alt="gestión y beneficios" />
                        </div>
                        <hr/>
                        </ul>
                </div>
            </div>
        </div>

    )
}

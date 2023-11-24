
import './ModuloB.css'

export default function ModuloB() {


    return (
        <div>
            <div className="skewed-borderB pb-[20vh]">
                <div className="contentB flex flex-col">
                    <h1 className="font-manrope font-bold mt-[10vh] mb-[10vh] text-[2.5vw] self-center text-white">Nuestros servicios</h1>
                        <div className="grid grid-cols-3 gap-[6vh]">
                            <div className='flex justify-end mr-[4vw]'>
                            <h2 className="text-white text-[2vw] text-start">Reclutamiento <br /> y selección </h2>
                            </div>
                            <p className="text-white text-[1.3vw]">Identificamos a profesionales con la experiencia adecuada para tus proyectos. Evaluamos habilidades técnicas, experiencia previa, cultura e idioma, para así lograr construir un equipo eficiente y exitoso.</p>
                            <img className="w-[7vw] ml-[5vw]" src="/Vectores/people-bg-green.png" alt="reclutamiento" />
                            <hr className='relative col-span-3 w-[75vw] left-[10vw]'/>

                            <div className='flex justify-end mr-[4vw]'>
                            <h2 className="text-white text-[2vw] text-center">Contratación</h2>
                            </div>
                            <p className="text-white text-[1.3vw]">Agranda tu equipo y reduce tu costos de contratación con talento externo, aumentando la capacidad productiva, sin compromisos a largo plazo. Dedícate a lo que es realmente importante; elimina los tiempos administrativos y operativos de la gestión contractual y de pagos.</p>
                            <img className="w-[7vw] ml-[5vw]" src="/Vectores/paper-bg-green.png" alt="contratación" />
                            

                        <hr className='relative col-span-3 w-[75vw] left-[10vw]'/>

                        <div className='flex justify-end mr-[4vw]'>
                            <h2 className="text-white text-start text-[2vw]">Gestión <br /> y beneficios</h2>
                            </div>
                            <p className="text-white text-[1.3vw]">Implementamos planes de beneficios y estrategias de retención para lograr equipos de alto desempeño, realizando informes y asesoramiento personalizado ayudando a tu empresa a retener talento global de manera escalable.</p>
                            <img className="w-[7vw] ml-[5vw]" src="/Vectores/check-bg-green.png" alt="gestión y beneficios" />
                        <hr className='relative col-span-3 w-[75vw] left-[10vw]'/>
                        
                        </div>
                        
                </div>
            </div>
        </div>

    )
}

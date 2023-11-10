import './ModuloB.css'

export default function ModuloB() {


    return (
        <div>
            <div className="flex flex-col p-36 skewed-borderB h-[840px]">
                <div className="contentB">
                    <h1 className=" flex justify-center relative bottom-20 text-white text-2xl font-semibold mt-2">Nuestros servicios</h1>
                        <div className="flex flex-row">
                            <h2 className="relative bottom-4 text-white font-normal text-3xl w-36">Reclutamiento y selección </h2>
                            <p className="relative text-white text-sm text-start font-light left-28 bottom-3 w-[310px]">Identificamos a profesionales con la experiencia adecuada para tus proyectos. Evaluamos habilidades técnicas, experiencia previa, cultura e idioma, para así lograr construir un equipo eficiente y exitoso.</p>
                            <img className="relative left-48 bg-white rounded-full w-16 h-16" src="/Vectores/linkit-web-vectores-03.svg" alt="reclutamiento" />
                        </div>
                            <hr className="relative top-6 w-[850px] right-10"/>
                        <div className="flex flex-row">
                            <h2 className="relative text-white font-normal text-3xl top-14 right-0">Contratación</h2>
                            <p className="relative text-white text-sm font-light left-[86px] text-start top-14 w-[310px]">Agranda tu equipo y reduce tu costos de contratación con talento externo, aumentando la capacidad productiva, sin compromisos a largo plazo. Dedícate a lo que es realmente importante; elimina los tiempos administrativos y operativos de la gestión contractual y de pagos.</p>
                            <img className="relative left-[166px] top-[100px] bg-white rounded-full w-16 h-16" src="/Vectores/linkit-web-vectores-04.svg" alt="contratación" />
                        </div>
                        <hr className="relative top-28 w-[850px] right-10"/>
                        <div className="flex flex-row">
                            <h2 className="relative text-white font-normal text-3xl top-36 right-0 w-32">Gestión y beneficios</h2>
                            <p className="relative text-white text-sm font-light left-[127px] text-start top-36 w-[310px]">Implementamos planes de beneficios y estrategias de retención para lograr equipos de alto desempeño, realizando informes y asesoramiento personalizado ayudando a tu empresa a retener talento global de manera escalable.</p>
                            <img className="relative left-[208px] top-[170px] bg-white rounded-full w-16 h-16" src="/Vectores/linkit-web-vectores-05.svg" alt="gestión y beneficios" />
                        </div>
                        <hr className="relative top-48 w-[850px] right-10"/>
                </div>
            </div>
        </div>

    )
}

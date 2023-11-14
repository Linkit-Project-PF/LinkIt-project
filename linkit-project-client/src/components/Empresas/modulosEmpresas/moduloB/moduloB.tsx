
import './ModuloB.css'

export default function ModuloB() {


    return (
        <div>
            <div className="flex flex-col p-16 skewed-borderB h-[63rem] xl:h-[73rem] 2xl:h-[80rem]">
                <div className="contentB flex flex-col justify-center space-y-16">
                    <h1 className="flex justify-center relative text-white text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-20">Nuestros servicios</h1>

                        <div className="flex flex-row justify-center 2xl:justify-around gap-20">
                            <h2 className="relative text-white font-normal text-2xl xl:text-3xl 2xl:text-4xl">Reclutamiento <br /> y selección </h2>
                            <p className="relative text-white text-sm xl:text-lg text 2xl:text-xl text-start font-light">Identificamos a profesionales con la experiencia <br /> adecuada para tus proyectos. Evaluamos habilidades <br /> técnicas, experiencia previa, cultura e idioma, para <br /> así lograr construir un equipo eficiente y exitoso.</p>
                            <img className="relative bg-white rounded-full w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24" src="/Vectores/linkit-web-vectores-03.svg" alt="reclutamiento" />
                        </div>
                            <hr/>

                        <div className="flex flex-row justify-center 2xl:justify-around gap-[6.1rem]">
                            <h2 className="relative text-white font-normal text-2xl xl:text-3xl 2xl:text-4xl">Contratación</h2>
                            <p className="relative text-white text-sm xl:text-lg text 2xl:text-xl text-start font-light">Agranda tu equipo y reduce tu costos de <br /> contratación con talento externo, aumentando la <br /> capacidad productiva, sin compromisos a largo <br /> plazo. Dedícate a lo que es realmente importante; <br /> elimina los tiempos administrativos y operativos <br /> de la gestión contractual y de pagos.</p>
                            <img className="relative bg-white rounded-full  w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24" src="/Vectores/linkit-web-vectores-04.svg" alt="contratación" />
                        </div>
                        <hr/>

                        <div className="flex flex-row justify-center 2xl:justify-around gap-20">
                            <h2 className="relative text-white font-normal text-2xl xl:text-3xl 2xl:text-4xl">Gestión <br /> y beneficios</h2>
                            <p className="relative text-white text-sm xl:text-lg text 2xl:text-xl font-light text-start ml-7">Implementamos planes de beneficios y estrategias <br /> de retención para lograr equipos de alto desempeño, <br /> realizando informes y asesoramiento personalizado <br /> ayudando a tu empresa a retener talento global de <br /> manera escalable.</p>
                            <img className="relative bg-white rounded-full  w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24" src="/Vectores/linkit-web-vectores-05.svg" alt="gestión y beneficios" />
                        </div>
                        <hr/>
                </div>
            </div>
        </div>

    )
}

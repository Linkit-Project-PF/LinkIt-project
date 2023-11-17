import { useNavigate } from "react-router-dom"
import './ModuloB.css'

export default function ModuloB() {
    const navigate = useNavigate();

    const goSoyEmpresa = () => {
        navigate("/SoyEmpresa")
    }

    return (
        <div>
            <div className="flex flex-col skewed-borderB pb-6 sm:pb-10 md:p-6 md:pb-12 lg:pb-16 xl:pb-24 xl:p-32 2xl:pb-32">
                <div className="contentB">
                    <h1 className="flex justify-center text-white font-semibold text-sm m-6  lg:text-3xl xl:text-4xl xl:m-12 2xl:text-5xl xl:my-6">Nuestros servicios</h1>
                    <ul className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-10 2xl:gap-16">
                        <div className="flex  flex-col items-center m-1">
                            <img className="bg-white rounded-full w-4/12" src="/Vectores/linkit-web-vectores-03.svg" alt="reclutamiento" />
                            <li className=" text-white font-bold text-center text-xs p-2 md:text-sm lg:text-lg lg:mt-2 xl:text-xl xl:mt-6 2xl:text-2xl 2xl:mt-16">Reclutamiento y selección </li>
                            <p className=" text-white text-center text-[10px] py-1 sm:text-[13px] md:text-[13px] lg:text-sm lg:py-4 xl:text-base 2xl:text-lg 2xl:py-4 2xl:px-24">Identificamos a profesionales con el stack, habilidades y experiencia adecuada para tus proyectos y así lograr construir un equipo de alto desempeño.</p>
                            <button className="text-[13px] p-[4px] mt-2 md:text-[15px] lg:text-base lg:p-1 xl:text-xl xl:p-2 2xl:text-xl 2xl:p-2 bg-linkIt-300 rounded-lg  text-white font-medium shadow-md active:translate-y-1 hover:bg-white hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300" onClick={goSoyEmpresa}>Ver más</button>
                        </div>
                        <div className="flex  flex-col items-center m-1">
                            <img className="bg-white rounded-full w-4/12" src="/Vectores/linkit-web-vectores-04.svg" alt="contratación" />
                            <li className=" text-white font-bold  text-center text-xs p-2 md:text-sm lg:text-lg lg:mt-2 xl:text-xl xl:mt-6 2xl:text-2xl 2xl:mt-16">Contratación</li>
                            <p className=" text-white text-center text-[10px] py-1 sm:text-[13px] md:text-[13px] lg:text-sm lg:py-4 xl:text-base 2xl:text-lg 2xl:py-4 2xl:px-24">Realizamos la gestión contractual y de pagos del talento. Refuerza tu equipo y aumenta la capacidad productiva sin riesgos.</p>
                            <button className="text-[13px] p-[4px] mt-2 md:text-[15px] lg:text-base lg:p-1 xl:text-xl xl:p-2 2xl:text-xl 2xl:p-2 bg-linkIt-300 rounded-lg  text-white font-medium shadow-md active:translate-y-1  hover:bg-white hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300" onClick={goSoyEmpresa}>Ver más</button>
                        </div>
                        <div className="flex flex-col  items-center m-1">
                            <img className="bg-white rounded-full w-4/12" src="/Vectores/linkit-web-vectores-05.svg" alt="gestión y beneficios" />
                            <li className=" text-white font-bold text-center text-xs p-2 md:text-sm lg:text-lg lg:mt-2 xl:text-xl xl:mt-6 2xl:text-2xl 2xl:mt-16">Gestión y beneficios</li>
                            <p className="text-white text-center text-[10px] py-1 sm:text-[13px] md:text-[13px] lg:text-sm lg:py-4 xl:text-base 2xl:text-lg 2xl:py-4 2xl:px-24">Facilitamos planes de beneficios, asesoramiento en la retención y elaboración de informes y mucho más.</p>
                            <button className="text-[13px] p-[4px] mt-2 md:text-[15px] lg:text-base lg:p-1 xl:text-xl xl:p-2 2xl:text-xl 2xl:p-2 bg-linkIt-300 rounded-lg  text-white font-medium shadow-md active:translate-y-1  hover:bg-white hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 " onClick={goSoyEmpresa}>Ver más</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    )
}

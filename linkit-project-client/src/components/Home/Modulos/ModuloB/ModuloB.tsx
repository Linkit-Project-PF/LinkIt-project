import { useNavigate } from "react-router-dom"
import './ModuloB.css'

export default function ModuloB() {
    const navigate = useNavigate();

    const goSoyEmpresa = () => {
        navigate("/SoyEmpresa")
    }

    return (
        <div>
            <div className="flex flex-col p-32 skewed-border">
                <div className="content">
                    <h1 className="flex justify-center text-white text-5xl font-semibold mt-2">Nuestros servicios</h1>
                    <ul className="grid grid-cols-3 gap-6">
                        <div className="flex  flex-col items-center mt-32 mx-12">
                            <img className="bg-white rounded-full w-5/12" src="/public/vectores/linkit-web-vectores-03.svg" alt="reclutamiento" />
                            <li className=" text-white font-bold text-2xl pt-12">Reclutamiento y selección </li>
                            <p className=" text-white py-6 text-xl text-center px-16">Identificamos a profesionales con el stack, habilidades y experiencia adecuada para tus proyectos y así lograr construir un equipo de alto desempeño.</p>
                            <button className="bg-linkIt-300 rounded-lg p-2 text-white font-medium shadow-md active:translate-y-1 hover:bg-white hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 my-6" onClick={goSoyEmpresa}>Ver más</button>
                        </div>
                        <div className="flex  flex-col items-center mt-32 mx-12">
                            <img className="bg-white rounded-full w-5/12" src="/public/vectores/linkit-web-vectores-04.svg" alt="contratación" />
                            <li className=" text-white font-bold text-2xl pt-12">Contratación</li>
                            <p className=" text-white py-6 text-xl text-center  px-16">Realizamos la gestión contractual y de pagos del talento. Refuerza tu equipo y aumenta la capacidad productiva sin riesgos.</p>
                            <button className="bg-linkIt-300 rounded-lg p-2 text-white font-medium shadow-md active:translate-y-1  hover:bg-white hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 my-6" onClick={goSoyEmpresa}>Ver más</button>
                        </div>
                        <div className="flex flex-col  items-center mt-32 mx-12">
                            <img className="bg-white rounded-full w-5/12" src="/public/vectores/linkit-web-vectores-05.svg" alt="gestión y beneficios" />
                            <li className=" text-white font-bold text-2xl pt-12">Gestión y beneficios</li>
                            <p className="text-white py-6 text-xl text-center px-16">Facilitamos planes de beneficios, asesoramiento en la retención y elaboración de informes y mucho más.</p>
                            <button className="bg-linkIt-300 rounded-lg p-2 text-white font-medium shadow-md active:translate-y-1  hover:bg-white hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 my-6" onClick={goSoyEmpresa}>Ver más</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    )
}

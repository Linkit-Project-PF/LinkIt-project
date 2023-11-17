import './ModuloTalentosE.css'

export default function ModuloTalentosE() {
    return (
        <div className="p-20 bg-linkIt-500">
            <h1 className="text-linkIt-200 flex justify-center text-5xl font-semibold mb-32">Cómo aplicar a</h1>
            <div>
                <ul className="grid grid-cols-4 gap-2">
                    <div className="flex  flex-col items-center mx-12">
                        <li className="text-linkIt-200 font-bold text-xl m-6 text-center w-[12rem]">Consulta nuestras vacantes</li>
                        <p className="text-linkIt-200 text-xl text-center w-[15rem]">Tenemos posiciones abiertas en múltiples áreas de crecimiento.</p>
                        <br />
                    </div>
                    <div className="flex flex-col items-center mx-12">
                        <li className="text-linkIt-200 font-bold text-xl m-6 text-center w-[12rem]">Aplica completando el formulario</li>
                        <p className="text-linkIt-200 text-xl text-center w-[15rem]">Selecciona tu posición ideal rellenando la solicitud en pocos clicks.</p>
                        <br />

                    </div>
                    <div className="flex flex-col items-center mx-12">
                        <li className="text-linkIt-200 font-bold text-xl text-center m-6">Proceso de entrevistas</li>
                        <p className="text-linkIt-200 text-xl  text-center w-[15rem]">Conoce en detalle la oportunidad y prepárate para los próximos pasos.</p>
                        <br />

                    </div>
                    <div className="flex flex-col items-center mx-12">
                        <li className="text-linkIt-200 font-bold text-xl m-6 text-center w-[12rem]">Consigue el trabajo de tus sueños</li>
                        <p className="text-linkIt-200 text-xl text-center w-[15rem]">Comienza a trabajar de forma remota y lleva tu carrera al siguiente nivel.</p>
                        <br />
                    </div>
                </ul>
                <ul className="grid grid-cols-4 gap-64 mx-[7rem] mt-[3rem] justify-items-center">
                <div className=" line "></div>
                    <li className="flex  items-center justify-center text-4xl text-white h-20 w-20 font-bold  bg-linkIt-200 rounded-full">1</li>
                    <li className="flex  items-center justify-center text-4xl text-white h-20 w-20 font-bold  bg-linkIt-200 rounded-full">2</li>
                    <li className="flex  items-center justify-center text-4xl text-white h-20 w-20 font-bold  bg-linkIt-200 rounded-full">3</li>
                    <li className="flex  items-center justify-center text-4xl text-white h-20 w-20 font-bold  bg-linkIt-200 rounded-full">4</li>
                </ul>
                <div className="lineD top-[-33px] left-[-23px] md:top-[-28px] md:left-[-5px] lg:top-[-23px] lg:left-[6px] xl:top-[-10px] xl:left-[20px] 2xl:top-[-9px] 2xl:left-[47px]"></div>
            </div>
        </div>
    )
}
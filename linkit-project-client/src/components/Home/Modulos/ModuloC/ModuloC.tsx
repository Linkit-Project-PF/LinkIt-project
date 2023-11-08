import './ModuloC.css'

export default function ModuloC() {
    return (
        <div className="p-20">
            <h1 className="flex justify-center text-5xl font-semibold mb-32">¿Qué nos hace diferentes?</h1>
            <div>
                <ul className="grid grid-cols-4 gap-2">
                    <div className="flex  flex-col items-center mx-12">
                        <li className="font-bold text-xl m-6">Sin riesgos</li>
                        <p className="text-xl text-center ">Ofrecemos un servicio de calidad a éxito. No hay anticipos; el pago es al efectivizar la contratación.</p>
                        <br />
                    </div>
                    <div className="flex flex-col items-center mx-12">
                        <li className="font-bold text-xl m-6">Fee a medida</li>
                        <p className=" text-xl text-center">Personalizamos nuestro fee a tus necesidades y ahorra hasta un 50% en la contratación.</p>
                        <br />

                    </div>
                    <div className="flex flex-col items-center mx-12">
                        <li className="font-bold text-xl m-6">Garantía</li>
                        <p className="text-xl  text-center">Garantía de por vida contratando a través de LinkIT.</p>
                        <br />

                    </div>
                    <div className="flex flex-col items-center mx-12">
                        <li className="font-bold text-xl m-6">Seguimiento continuo</li>
                        <p className="text-xl text-center">Asignamos un equipo de trabajo específico proporcionando un servicio integral y personalizado durante todo el proceso.</p>
                        <br />
                    </div>
                </ul>
                <ul className="grid grid-cols-4 gap-64 m-28  justify-items-center">
                <div className="flex line "></div>
                    <li className="flex  items-center justify-center text-4xl text-white h-20 w-20 font-bold  bg-linkIt-200 rounded-full">1</li>
                    <li className="flex  items-center justify-center text-4xl text-white h-20 w-20 font-bold  bg-linkIt-200 rounded-full">2</li>
                    <li className="flex  items-center justify-center text-4xl text-white h-20 w-20 font-bold  bg-linkIt-200 rounded-full">3</li>
                    <li className="flex  items-center justify-center text-4xl text-white h-20 w-20 font-bold  bg-linkIt-200 rounded-full">4</li>
                </ul>
            </div>
        </div>
    )
}

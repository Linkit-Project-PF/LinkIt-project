import './ModuloC.css'

export default function ModuloC() {
    return (
        <div className="pb-1 m-2 lg:m-4 xl:pb-12 2xl:mx-12">
            <h1 className="flex justify-center font-semibold text-sm m-6 md:text-2xl lg:text-3xl lg:my-12 xl:text-4xl xl:m-16 2xl:text-5xl 2xl:m-24">¿Qué nos hace diferentes?</h1>
            <div>
                <ul className="grid grid-cols-4 gap-2 md:gap-4 2xl:my-10 2xl:gap-10">
                    <div className="flex  flex-col text-center items-center 2xl:px-6">
                        <li className="font-bold text-xs p-2 md:text-base lg:text-lg xl:text-xl xl:m-4 2xl:text-2xl">Sin riesgos</li>
                        <p className="text-center text-[10px] p-1 md:text-[13px] lg:text-sm xl:text-base xl:py-4 2xl:text-lg">Ofrecemos un servicio de calidad a éxito. No hay anticipos; el pago es al efectivizar la contratación.</p>
                        <br />
                    </div>
                    <div className="flex flex-col text-center items-center 2xl:px-6">
                        <li className="font-bold text-xs p-2 md:text-base lg:text-lg xl:text-xl xl:m-4 2xl:text-2xl">Fee a medida</li>
                        <p className=" text-center text-[10px] p-1 md:text-[13px] lg:text-sm xl:text-base xl:py-4 2xl:text-lg">Personalizamos nuestro fee a tus necesidades y ahorra hasta un 50% en la contratación.</p>
                        <br />

                    </div>
                    <div className="flex flex-col text-center items-center 2xl:px-6">
                        <li className="font-bold text-xs p-2 md:text-base lg:text-lg xl:text-xl xl:m-4 2xl:text-2xl">Garantía</li>
                        <p className="text-center text-[10px] p-1 md:text-[13px] lg:text-sm xl:text-base xl:py-4 2xl:text-lg">Garantía de por vida contratando a través de LinkIT.</p>
                        <br />

                    </div>
                    <div className="flex flex-col text-center items-center 2xl:px-6 ">
                        <li className="font-bold text-xs p-2 md:text-base lg:text-lg xl:text-xl xl:m-4 2xl:text-2xl">Seguimiento continuo</li>
                        <p className="text-center text-[10px] p-1 md:text-[13px] lg:text-sm xl:text-base xl:py-4 2xl:text-lg">Asignamos un equipo de trabajo específico proporcionando un servicio integral y personalizado durante todo el proceso.</p>
                        <br />
                    </div>
                </ul>
                <ul className="grid grid-cols-4 justify-items-center pb-8 relative">
                <div className=" line top-[-33px] left-[-23px] md:top-[-28px] md:left-[-5px] lg:top-[-23px] lg:left-[6px] xl:top-[-10px] xl:left-[20px] 2xl:top-[-9px] 2xl:left-[47px]"></div>
                    <li className="flex  items-center justify-center text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  text-white h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 font-bold  bg-linkIt-200 rounded-full">1</li>
                    <li className="flex  items-center justify-center text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  text-white h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 font-bold  bg-linkIt-200 rounded-full">2</li>
                    <li className="flex  items-center justify-center text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  text-white h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 font-bold  bg-linkIt-200 rounded-full">3</li>
                    <li className="flex  items-center justify-center text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl  text-white h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 font-bold  bg-linkIt-200 rounded-full">4</li>
                </ul>
            </div>
        </div>
    )
}

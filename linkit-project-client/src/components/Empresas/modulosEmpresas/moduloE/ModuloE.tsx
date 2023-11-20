import "./ModuloE.css";

export default function ModuloE() {
  return (
    <div>
      <div className="relative bottom-20 2xl:bottom-32 flex flex-col p-16 skewed-borderBME h-[32rem] xl:h-[33rem] 2xl:h-[50rem]">
        <div className=" text-white contentBME flex flex-col justify-center space-y-10">
        <h1 className="flex justify-center font-semibold text-sm m-6 md:text-2xl lg:text-3xl lg:my-12 xl:text-4xl xl:m-7 2xl:text-5xl 2xl:m-24">¿Qué nos hace diferentes?</h1>
            <div>
                <ul className="grid grid-cols-4 gap-2 md:gap-6 xl:gap-10 2xl:my-12 2xl:gap-12">
                    <div className="flex flex-col text-center items-center 2xl:px-6">
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
                <div className="line top-[-33px] left-[-23px] md:top-[-28px] md:left-[-5px] lg:top-[-23px] lg:left-[6px] xl:top-[-10px] xl:left-[20px] 2xl:top-[28px] 2xl:left-[47px] mb-9"></div>
                    <li className="flex  items-center justify-center text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl  text-linkIt-400 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full">1</li>
                    <li className="flex  items-center justify-center text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl  text-linkIt-400 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full">2</li>
                    <li className="flex  items-center justify-center text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl  text-linkIt-400 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full">3</li>
                    <li className="flex  items-center justify-center text-sm md:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl  text-linkIt-400 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full">4</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

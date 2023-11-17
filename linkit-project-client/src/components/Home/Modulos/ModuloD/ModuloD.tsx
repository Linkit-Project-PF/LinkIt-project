import './ModuloD.css'

export default function ModuloD() {
    return (
        <div className="grid grid-cols-2 gap-1 bg-linkIt-500 p-2 2xl:p-0">
            <div className="flex flex-col relative justify-center">
                <img className="z-0 h-[80%] w-auto" src="/Vectores/linkit-web-vectores-06.svg" alt="360" />
                <img className="absolute h-auto w-6/12 z-1 top-[35%] left-[23%] sm:top-[28%]" src="/Vectores/linkit-web-vectores-07.svg" alt="persons" />
            </div>
            <div className='sm:pt-16 md:pt-10 lg:pt-6 xl:pt-20 2xl:pt-52'>
                <ul>
                    <div className='flex flex-row '>
                            <img className='w-2/12' src="/Vectores/linkit-web-vectores-08.svg" alt="" />
                        <div className='flex flex-col justify-center lg:my-6 xl:my-4'>
                            <li className='font-bold text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Proceso ágil</li>
                            <p className='text-[10px] p-1 md:text-[13px] lg:text-sm xl:text-base xl:py-4 2xl:text-lg xl:p-0 xl:pr-12'>En 5 días hábiles presentaremos talentos previamente entrevistados y calificados.</p>
                        </div>
                    </div>
                    <div className='division'></div>

                    <div className='flex flex-row'>

                            <img className='w-2/12' src="/Vectores/linkit-web-vectores-09.svg" alt="" />

                        <div className='flex flex-col justify-center lg:my-6 xl:my-4'>
                            <li className='font-bold text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Comunicación asertiva</li>
                            <p className='text-[10px] p-1 md:text-[13px] lg:text-sm xl:text-base xl:py-4 2xl:text-lg xl:p-0 xl:pr-20'>Nos comprometemos a mantener una comunicación ágil y efectiva durante todo el proceso de selección.</p>
                        </div>
                    </div>
                    <div className='division'></div>

                    <div className='flex flex-row'>

                            <img className='w-2/12' src="/Vectores/linkit-web-vectores-10.svg" alt="" />

                        <div className='flex flex-col justify-center lg:my-6 xl:my-4'>
                            <li className='font-bold text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Consultoría 360°</li>
                            <p className='text-[10px] p-1 md:text-[13px] lg:text-sm xl:text-base xl:py-4 2xl:text-lg xl:p-0 xl:pr-20'>Te asesoramos desde el perfil ideal, los presupuestos idóneos y procesos de contratación hasta planes de beneficios, retención y mucho más.</p>
                        </div>
                    </div>
                    <div className='division'></div>
                </ul>
            </div>
        </div>
    )
}

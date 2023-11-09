import './ModuloD.css'

export default function ModuloD() {
    return (
        <div className="grid grid-cols-2 gap-2 bg-linkIt-50">
            <div className="flex flex-col m-12 p-6">
                <img className="z-0 " src="/public/vectores/linkit-web-vectores-06.svg" alt="360" />
                <img className="image w-3/12 z-1 " src="/public/vectores/linkit-web-vectores-07.svg" alt="persons" />
            </div>
            <div className='mt-52'>
                <ul>
                    <div className='flex flex-row my-6'>
                            <img className='w-2/12' src="/public/vectores/linkit-web-vectores-08.svg" alt="" />
                        <div className='flex flex-col justify-center'>
                            <li className='font-bold text-2xl'>Proceso ágil</li>
                            <p className='mt-4 text-xl pr-72'>En 5 días hábiles presentaremos talentos previamente entrevistados y calificados.</p>
                        </div>
                    </div>
                    <div className='division'></div>

                    <div className='flex flex-row my-6'>

                            <img className='w-2/12' src="/public/vectores/linkit-web-vectores-09.svg" alt="" />

                        <div className='flex flex-col justify-center'>
                            <li className='font-bold text-2xl'>Comunicación asertiva</li>
                            <p className='mt-4 text-xl pr-72'>Nos comprometemos a mantener una comunicación ágil y efectiva durante todo el proceso de selección.</p>
                        </div>
                    </div>
                    <div className='division'></div>

                    <div className='flex flex-row my-6'>

                            <img className='w-2/12' src="/public/vectores/linkit-web-vectores-10.svg" alt="" />

                        <div className='flex flex-col justify-center'>
                            <li className='font-bold text-2xl'>Consultoría 360°</li>
                            <p className='mt-4 text-xl pr-72'>Te asesoramos desde el perfil ideal, los presupuestos idóneos y procesos de contratación hasta planes de beneficios, retención y mucho más.</p>
                        </div>
                    </div>
                    <div className='division'></div>
                </ul>
            </div>
        </div>
    )
}

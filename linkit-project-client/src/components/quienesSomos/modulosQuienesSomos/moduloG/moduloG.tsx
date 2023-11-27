export default function ModuloG() {
    return (
        <div className="relative h-screen grid grid-col p-[6vw] z-10 bg-white before:absolute before:bg-linkIt-200 before:w-screen before:h-1 before:z-10 before:-skew-y-1 before:-top-2 after:block after:bg-white after:w-screen after:h-[6vh] after:absolute after:-skew-y-1 after:-top-4">
            <h1 className="text-black text-[2.6vw] font-manrope font-bold tracking-wide text-center self-center justify-center">Conoce a alguno de los integrantes de nuestro equipo</h1>
            <div className="grid grid-cols-4 z-30 bg-white" >
                    <img src="/people-LinkIt/philo-perfil.png" className="bg-linkIt-500 rounded-lg" alt="philo-perfil" />
                    <img src="/people-LinkIt/ary-perfil.png" className=" bg-linkIt-500 rounded-lg" alt="ary-perfil" />
                    <img src="/people-LinkIt/gonza-perfil.png" className=" bg-linkIt-500 rounded-lg" alt="gonza-perfil" />
                    <img src="/people-LinkIt/juli-perfil.png" className=" bg-linkIt-500 rounded-lg" alt="juli-perfil" />
                </div>
                <div className="grid grid-cols-3 ">
                    <img src="/people-LinkIt/shay-perfil.png" className=" bg-linkIt-500 rounded-lg" alt="shay-perfil" />
                    <img src="/people-LinkIt/maca-perfil.png" className=" bg-linkIt-500 rounded-lg" alt="maca-perfil" />
                    <img src="/people-LinkIt/ju-perfil.png" className=" bg-linkIt-500 rounded-lg" alt="ju-perfil" />
            </div>
        </div>
    )
 }
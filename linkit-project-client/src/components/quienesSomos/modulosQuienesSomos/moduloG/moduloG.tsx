export default function ModuloG() {
    return (
        <div className="relative px-[7vw] 2xl:px-[15vw] h-screen grid grid-col mb-[25vh] p-[6vw] z-10 bg-white before:absolute before:bg-linkIt-200 before:w-screen before:h-1 before:z-10 before:-skew-y-1 before:-top-2 after:block after:bg-white after:w-screen after:h-[6vh] after:absolute after:-skew-y-1 after:-top-4 gap-11">
            <h1 className="text-black text-[2.6vw] font-manrope font-bold tracking-wide text-center self-center justify-center px-[18vw] 2xl:px-[10vw]">Conoce a alguno de los integrantes de nuestro equipo</h1>
            <div className="grid grid-cols-4 items-center justify-items-center z-30 bg-white px-[2vw]" >
                    <img src="/people-LinkIt/philo-perfil.png" className="bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh]" alt="philo-perfil" />
                    <img src="/people-LinkIt/ary-perfil.png" className=" bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh]" alt="ary-perfil" />
                    <img src="/people-LinkIt/gonza-perfil.png" className=" bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh]" alt="gonza-perfil" />
                    <img src="/people-LinkIt/juli-perfil.png" className=" bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh]" alt="juli-perfil" />
                <p className="text-center font-bold mt-2 text-[1vw] font-montserrat">Philipe Saint-Hubert <br /><span className="font-normal text-[0.8vw]  font-montserrat">Co-Founder</span></p>
                <p className="text-center font-bold mt-2 text-[1vw] font-montserrat">Ary Molchadsky<br /><span className="font-normal text-[0.8vw]  font-montserrat">CEO & Co-Founder</span></p>
                <p className="text-center font-bold mt-2 text-[1vw] font-montserrat">Gonzalo Lein<br /><span className="font-normal text-[0.8vw]  font-montserrat">Sales Development Representative</span></p>
                <p className="text-center font-bold mt-2 text-[1vw] font-montserrat">Julieta Jasin<br /><span className="font-normal text-[0.8vw]  font-montserrat">Talent Acquisition Specialist</span></p>
                </div>
                <div className="grid grid-cols-3 justify-items-center px-[12vw] 2xl:px-[10vw]">
                    <img src="/people-LinkIt/shay-perfil.png" className=" bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh]" alt="shay-perfil" />
                    <img src="/people-LinkIt/maca-perfil.png" className=" bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh]" alt="maca-perfil" />
                    <img src="/people-LinkIt/ju-perfil.png" className=" bg-linkIt-500 rounded-lg w-[18vw] 2xl:w-[15vw] h-[30vh]" alt="ju-perfil" />
                    <p className="text-center font-bold mt-2 text-[1vw] font-montserrat">Shayna Iskandarani<br /><span className="font-normal text-[0.8vw]  font-montserrat">Talent Acquisition Specialist</span></p>
                    <p className="text-center font-bold mt-2 text-[1vw] font-montserrat">Macarena Cuadro<br /><span className="font-normal text-[0.8vw]  font-montserrat">Business Development Specialist</span></p>
                    <p className="text-center font-bold mt-2 text-[1vw] font-montserrat">Julieta Radicich<br /><span className="font-normal text-[0.8vw]  font-montserrat">Growth Marketing Specialist</span></p>
            </div>
        </div>
    )
 }
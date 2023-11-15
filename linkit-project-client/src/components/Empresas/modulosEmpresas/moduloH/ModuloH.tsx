import { motion } from "framer-motion"
import { useState } from "react"

export default function ModuloH() {

    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
      }

    return (
    <div className="flex flex-col items-center bg-white ">
        <h1 className="flex justify-center font-bold text-4xl 2xl:text-5xl mt-16">Nuestra solución</h1>
        <motion.button className="bg-linkIt-300 rounded-lg p-2 xl:p-4 h-7 xl:h-8 2xl:h-11 flex items-center text-white text-[15px] xl:text-sm 2xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-2 mt-6" whileTap={{ scale: 0.9 }}>¡Cotiza con nosotros!</motion.button>
        <div className="flex flex-col justify-center items-center w-[90%] mt-7">
            <nav className="bg-linkIt-500 rounded-md flex justify-around font-semibold text-xs w-[100%] h-8 px-2">
                <button className={`border-t-4 ${activeButton === 1 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(1)}>1. Rol asignado</button>
                <button className={`border-t-4 ${activeButton === 2 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(2)}>2. Pre-alineamiento</button>
                <button className={`border-t-4 ${activeButton === 3 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(3)}>3. Alineamiento</button>
                <button className={`border-t-4 ${activeButton === 4 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(4)}>4. Sourcing y reclutamiento</button>
                <button className={`border-t-4 ${activeButton === 5 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(5)}>5. Presentación de candidatos</button>
                <button className={`border-t-4 ${activeButton === 6 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(6)}>6. Analytics and follow up</button>
            </nav>
            <div className="flex ">
            <div className={`flex flex-row gap-[14rem] mx-24 absolute top-[700vh] ${activeButton === 1 ? "opacity-1" : "opacity-0"}`}>
                <h1 className="flex font-bold text-2xl mt-12">Rol asignado</h1>
                <p className="mt-12">Este es el primer paso de nuestro proceso, aquí es <br /> donde el equipo de ventas abre un nuevo rol <br /> (puede ser de un cliente existente o nuevo). <br /><br />
Se asigna un reclutador y un buscador para liderar <br /> el rol (a veces puede ser solo un reclutador).</p>
            </div>
            <div className={`flex gap-[10rem] mx-24 absolute top-[700vh] ${activeButton === 2 ? "opacity-1" : "opacity-0"}`}>
                <div className="flex flex-col">
                <h1 className="font-bold text-2xl mt-12">Pre-alineamiento</h1>
                <h2>¡Prepárate para conocer al cliente!</h2>
                </div>
                <p className="mt-12 mb-12">
El Alignment es la reunión en la que tienes la oportunidad <br /> de conocer al cliente cara a cara, por lo que es muy <br />  importante que te prepares para ella. 
Aquí hay algunos <br /> consejos que puedes seguir: <br /><br />
<li>Relájate y mantén la calma, recuerda que eres una <br /> estrella, tú puedes hacerlo.
</li>
<li>En esta reunión te ayudará a comprender las prioridades <br /> del cliente y te ayudará a organizar la mayoría de tus <br /> próximos pasos.</li>
<li>Revisá toda la información que nos compartió el equipo <br /> comercial.</li>
<li>Recuerda siempre pedir al BDM la descripción del trabajo <br /> del cliente (la enviarán, pero en caso de que no lo hagan, contáctalos y pídelo).</li>
</p>
            </div>
            <div className={`flex flex-row gap-[12rem] mx-24 absolute top-[700vh] ${activeButton === 3 ? "opacity-1" : "opacity-0"}`}>
            <div className="flex flex-col">
                <h1 className="font-bold text-2xl mt-12">Alineamiento</h1>
                <h2 className="text-start">El BDM te invitará a una <br /> reunión de 30 minutos <br /> con el cliente.</h2>
                </div>
                <p className="mt-12 mb-12">
                En esta reunión, verás: el BDM de LinkIT, nuestro cliente, <br /> y el reclutador líder. <br /><br />
En esta reunión debes: <br /><br />
<li>Presentarte.</li>
<li>Entender los requisitos del rol.</li>
<li>Establecer el tiempo de superposición aceptado para <br /> que los candidatos lo tengan en cuenta (revisa este enlace <br />que te ayudará con ello).</li>
<li>Verificar el presupuesto del cliente y los beneficios para <br /> el rol.</li>
<li>Establecer el Placeholder y el proceso de entrevista <br /> interna del cliente.</li>
<li>Explicar los próximos pasos.</li>
</p>
            </div>
            <div className={`flex flex-row gap-[12rem] mx-24 absolute top-[700vh] ${activeButton === 4 ? "opacity-1" : "opacity-0"}`}>
            <div className="flex flex-col">
                <h1 className="font-bold text-2xl mt-12">Alineamiento</h1>
                <h2 className="text-start">El BDM te invitará a una <br /> reunión de 30 minutos <br /> con el cliente.</h2>
                </div>
                <p className="mt-12 mb-12">
                En esta reunión, verás: el BDM de LinkIT, nuestro cliente, <br /> y el reclutador líder. <br /><br />
En esta reunión debes: <br /><br />
<li>Presentarte.</li>
<li>Entender los requisitos del rol.</li>
<li>Establecer el tiempo de superposición aceptado para <br /> que los candidatos lo tengan en cuenta (revisa este enlace <br />que te ayudará con ello).</li>
<li>Verificar el presupuesto del cliente y los beneficios para <br /> el rol.</li>
<li>Establecer el Placeholder y el proceso de entrevista <br /> interna del cliente.</li>
<li>Explicar los próximos pasos.</li>
</p>
            </div>
            <div className={`flex flex-row gap-[20rem] mx-24 absolute top-[700vh] ${activeButton === 5 ? "opacity-1" : "opacity-0"}`}>
                <h1 className="flex font-bold text-2xl mt-12">Rol asignado</h1>
                <p className="mt-12">Este es el primer paso de nuestro proceso, aquí es <br /> donde el equipo de ventas abre un nuevo rol <br /> (puede ser de un cliente existente o nuevo). <br /><br />
Se asigna un reclutador y un buscador para liderar <br /> el rol (a veces puede ser solo un reclutador).</p>
            </div>
            <div className={`flex flex-row gap-[20rem] mx-24 absolute top-[700vh] ${activeButton === 6 ? "opacity-1" : "opacity-0"}`}>
                <h1 className="flex font-bold text-2xl mt-12">Rol asignado</h1>
                <p className="mt-12">Este es el primer paso de nuestro proceso, aquí es <br /> donde el equipo de ventas abre un nuevo rol <br /> (puede ser de un cliente existente o nuevo). <br /><br />
Se asigna un reclutador y un buscador para liderar <br /> el rol (a veces puede ser solo un reclutador).</p>
            </div>
            </div>
        </div>
    </div>
    )
}
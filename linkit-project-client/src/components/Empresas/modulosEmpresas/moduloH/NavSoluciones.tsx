import { useState } from "react"
import { motion } from "framer-motion"
export default function NavSoluciones() { 
    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
      }

      return (
        <div className="flex flex-col justify-center items-center w-[90%] mt-1 2xl:mb-16 py-6">
        <nav className="bg-linkIt-500 rounded-md flex justify-around font-semibold text-xs 2xl:text-base w-[100%] h-8 px-2">
            <button className={`border-t-4 ${activeButton === 1 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(1)}>1. Rol asignado</button>
            <button className={`border-t-4 ${activeButton === 2 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(2)}>2. Pre-alineamiento</button>
            <button className={`border-t-4 ${activeButton === 3 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(3)}>3. Alineamiento</button>
            <button className={`border-t-4 ${activeButton === 4 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(4)}>4. Sourcing y reclutamiento</button>
            <button className={`border-t-4 ${activeButton === 5 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(5)}>5. Presentación de candidatos</button>
            <button className={`border-t-4 ${activeButton === 6 ? "border-t-4 border-linkIt-300 text-linkIt-300" : "border-t-4 hover:border-t-4  hover:border-linkIt-300 hover:text-linkIt-300" }`} onClick={() => handleClick(6)}>6. Analytics and follow up</button>
        </nav>
        <div className="flex">
        <motion.div className={`flex flex-row gap-[12rem] xl:gap-[32vw] 2xl:gap-[40vw] h-[28rem] ${activeButton === 1 ? "opacity-1 block" : "opacity-0 hidden"}`} 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: activeButton === 1 ? 0 : 30, opacity: activeButton === 1 ? 1 : 0 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <h1 className="flex font-bold text-2xl mt-5 2xl:text-3xl">Rol asignado</h1>
            <p className="mt-5 text-sm 2xl:text-xl">Este es el primer paso de nuestro proceso, aquí es <br /> donde el equipo de ventas abre un nuevo rol <br /> (puede ser de un cliente existente o nuevo). <br /><br />
Se asigna un reclutador y un buscador para liderar <br /> el rol (a veces puede ser solo un reclutador).</p>
        </motion.div>
        <motion.div className={`flex gap-[12rem] xl:gap-[25rem] 2xl:gap-[30vw] mx-16 2xl:mx-[12vw] h-[28rem] ${activeButton === 2 ? "opacity-1 block" : "opacity-0 hidden"}`}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: activeButton === 2 ? 0 : 30, opacity: activeButton === 2 ? 1 : 0 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}>
            <div className="flex flex-col">
            <h1 className="font-bold text-2xl mt-5 2xl:text-3xl">Pre-alineamiento</h1>
            <h2>¡Prepárate para conocer al cliente!</h2>
            </div>
            <p className="mt-5 mb-12 text-sm 2xl:text-xl">
El Alignment es la reunión en la que tienes la oportunidad de conocer al cliente cara a cara, por lo que es muy  importante que te prepares para ella. 
Aquí hay algunos consejos que puedes seguir: <br /><br />
<li>Relájate y mantén la calma, recuerda que eres una estrella, tú puedes hacerlo.
</li>
<li>En esta reunión te ayudará a comprender las prioridadesdel cliente y te ayudará a organizar la mayoría de tus próximos pasos.</li>
<li>Revisá toda la información que nos compartió el equipo comercial.</li>
<li>Recuerda siempre pedir al BDM la descripción del trabajo del cliente (la enviarán, pero en caso de que no lo hagan, contáctalos y pídelo).</li>
</p>
        </motion.div>
        <motion.div className={`flex flex-row gap-[12rem] xl:gap-[25rem] 2xl:gap-[30vw] mx-16 2xl:mx-[12vw] h-[28rem] ${activeButton === 3 ? "opacity-1 block" : "opacity-0 hidden"}`} 
         initial={{ x: 30, opacity: 0 }}
            animate={{ x: activeButton === 3 ? 0: 30, opacity: activeButton === 3 ? 1 : 0 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}>
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl mt-5 2xl:text-3xl ">Alineamiento</h1>
            <h2 className="text-start">El BDM te invitará a una reunión de 30 minutos con el cliente.</h2>
            </div>
            <p className="mt-5 mb-12 text-sm 2xl:text-xl">
            En esta reunión, verás: el BDM de LinkIT, nuestro cliente, y el reclutador líder. <br /><br />
En esta reunión debes: <br /><br />
<li>Presentarte.</li>
<li>Entender los requisitos del rol.</li>
<li>Establecer el tiempo de superposición aceptado para que los candidatos lo tengan en cuenta (revisa este enlaceque te ayudará con ello).</li>
<li>Verificar el presupuesto del cliente y los beneficios para el rol.</li>
<li>Establecer el Placeholder y el proceso de entrevista interna del cliente.</li>
<li>Explicar los próximos pasos.</li>
</p>
        </motion.div>
        <motion.div className={`flex flex-row gap-[12rem] xl:gap-[25rem] 2xl:gap-[30vw] mx-16 2xl:ml-[12vw] h-[28rem] ${activeButton === 4 ? "opacity-1 block" : "opacity-0 hidden"}`}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: activeButton === 4 ? 0 : 30, opacity: activeButton === 4 ? 1 : 0 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}>
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl mt-5 2xl:text-3xl">Sourcing y reclutamiento</h1>
            <h2 className="text-start">Definir estrategia de reclutamiento</h2>
            </div>
            <p className="mt-5 mb-12 text-sm 2xl:text-xl">
            Aquí están algunos puntos clave a tener en cuenta:<br /><br />
<li>Unificar las notas de alineación: ¿a quiénes estamos buscando?</li>
<li>Dónde buscar: candidatos de otros procesos/ATS/mercado.</li>
<li>Cantidad de candidatos necesarios.</li>
<li>Países de donde buscar.</li>
<li>Plazos para la búsqueda de candidatos y entrevistas.</li>
<li>¿Qué debe validarse de los candidatos en las entrevistas? <ul><li>Airtable</li> <li>Buscar candidatos en Airtable.</li> <li>Seguimiento al cliente</li></ul></li>
<li>Establecer un recordatorio para hacer un seguimiento rápido al cliente después de 72 horas de la llamada de alineación (aproximadamente).</li>
<li>Establecer un marcador de posición en caso de que no se haya establecido durante la alineación</li>
</p>
        </motion.div>
        <motion.div className={`flex flex-row gap-[12rem] xl:gap-[20rem] 2xl:gap-[30vw] mx-16 2xl:ml-[12vw] h-[28rem] ${activeButton === 5 ? "opacity-1 block" : "opacity-0 hidden"}`}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: activeButton === 5 ? 0 : 30, opacity: activeButton === 5 ? 1 : 0 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}>
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl mt-5 w-[12rem] 2xl:text-3xl">Presentación de candidatos</h1>
            <h2 className="text-start">Endorsar candidatos</h2>
            </div>
            <p className="mt-5 mb-12 text-sm 2xl:text-xl">
            Este es el momento en el que presentarás candidatos al cliente y programarás las entrevistas.<br /><br />

<li>Antes de enviar
    <ul>
    <li>Preparar a los candidatos para el cliente.</li>
    <br />
    <li>Verificar los requisitos del cliente: Será una ventaja presentar candidatos teniendo en cuenta los requisitos del cliente.</li>
</ul>
</li>
<br />
<li>Endorsar
    <ul>
        <li>Deberíamos tratar de aprobar a los candidatos y programar entrevistas de 7 a 10 días después de la llamada de alineación.</li>
        <br />
        <li>Los clientes deberían entrevistar a los candidatos, seamos muy insistente.</li>
    </ul>
</li>
</p>
        </motion.div>
        <motion.div className={`flex flex-row gap-[12rem] xl:gap-[25rem] 2xl:gap-[30vw] mx-16 2xl:ml-[12vw] h-[28rem] ${activeButton === 6 ? "opacity-1 block" : "opacity-0 hidden"}`}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: activeButton === 6 ? 0 : 30, opacity: activeButton === 6 ? 1 : 0 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.4 }}>
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl mt-5 w-[10rem] 2xl:text-3xl">Analytics and follow up</h1>
            <h2 className="text-start">Presionar y hacer seguimiento</h2>
            </div>
            <p className="mt-5 mb-12 text-sm 2xl:text-xl">
            En este punto, deberíamos estar presionando para que las entrevistas ocurran en caso de que no lo hayan hecho, intentemos ser insistentes con una cara feliz.<br /><br />

<li>Candidatos
    <ul>
    <li>Siempre iremos por la experiencia del candidato, un candidato que quizás no sea adecuado para un rol, puede serlo para otro, mantengámoslos actualizados.
</li>
<br />
    <li>Actualizar si: no hay noticias (3 días después de la entrevista), rechazo o avanza.</li>
</ul>
</li>
<br />
<li>Cliente
    <ul>
        <li>El cliente siempre tiene la razón, así que negociemos con una cara feliz e intentemos desafiar al cliente siempre que sintamos que lo necesitamos.</li>
    </ul>
</li>
</p>
        </motion.div>
        </div>
    </div>
      )
}
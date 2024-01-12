import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
export default function NavSoluciones() { 
    const [activeButton, setActiveButton] = useState(1);
    const { t } = useTranslation();

    const handleClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
      }

      return (
        <div>
        <div className="grid-cols-2 hidden lg:grid">
        <nav className="grid grid-col justify-center font-manrope font-bold text-[1.5rem] xl:text-[2rem] 1xl:text-[2.3rem]">
            <button className={`text-start ${activeButton === 1 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(1)}>1. {t('Rol asignado')}</button>
            <button className={`text-start ${activeButton === 2 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(2)}>2. {t('Pre-alineamiento')}</button>
            <button className={`text-start ${activeButton === 3 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(3)}>3. {t('Alineamiento')}</button>
            <button className={`text-start ${activeButton === 4 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(4)}>4. {t('Sourcing y reclutamiento')}</button>
            <button className={`text-start ${activeButton === 5 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(5)}>5. {t('Presentación de candidatos')}</button>
            <button className={`text-start ${activeButton === 6 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(6)}>6. {t('Analytics and follow up')}</button>
        </nav>
        <div className="flex bg-linkIt-300 rounded-xl text-white text-[0.85rem] xl:text-[1.06rem] 1xl:text-[1.1rem] 2xl:text-[1.3rem] p-[7%] h-[25rem] xl:h-[32rem] 2xl:h-[37rem] w-full font-montserrat">
        <motion.div className={` ${activeButton === 1 ? "opacity-1 block" : "opacity-0 hidden"}`} 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: activeButton === 1 ? 0 : 30, opacity: activeButton === 1 ? 1 : 0 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <p className="">{t('¡Bienvenido a la acción! se enciende la búsqueda de un rol nuevo. En este momento, designamos un Account Manager para orquestar tus necesidades y un reclutador hábil que será el arquitecto de tu equipo de ensueño. ¡Prepárate para una experiencia única donde cada fase es un paso hacia el éxito personalizado!')} 🚀
</p>
        </motion.div>
        <motion.div className={`h-[28rem] ${activeButton === 2 ? "opacity-1 block" : "opacity-0 hidden"}`}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: activeButton === 2 ? 0 : 30, opacity: activeButton === 2 ? 1 : 0 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}>
            <div className="flex flex-col">
            </div>
            <p className="">
            {t('¡Prepárate para la acción! Con la descripción previa del perfil en mano, es el momento perfecto para sumergirnos en los requerimientos a fondo. Vamos más allá: estudiamos tu empresa para formular preguntas clave sobre el perfil y brindarte la asesoría que necesitas. En esta fase, no solo proporcionamos respuestas, sino que también traemos nuestras mejores recomendaciones para satisfacer tus necesidades. ¡Estamos aquí para impulsar tu éxito con estrategia y expertise!')} 💡💼 <br /><br />{t('¡LinkIT, donde cada detalle cuenta para construir juntos un camino hacia el éxito!')} 🚀
</p>
        </motion.div>
        <motion.div className={`h-[28rem] ${activeButton === 3 ? "opacity-1 block" : "opacity-0 hidden"}`} 
         initial={{ x: 30, opacity: 0 }}
            animate={{ x: activeButton === 3 ? 0: 30, opacity: activeButton === 3 ? 1 : 0 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}>
        <div className="flex flex-col">
            </div>
            <p className="">
            {t('¡Es hora de conocernos a fondo! En esta etapa, vamos a sumergirnos en las especificidades del perfil, abordar todas las dudas y, juntos, esculpiremos la definición del perfil con el máximo detalle posible. ¡Es el momento estelar de LinkIT para brillar!')} ✨ {t('¡Vamos a hacer que cada detalle cuente y a crear un perfil que deslumbre!')} 💪🚀
</p>
        </motion.div>
        <motion.div className={`h-[28rem] ${activeButton === 4 ? "opacity-1 block" : "opacity-0 hidden"}`}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: activeButton === 4 ? 0 : 30, opacity: activeButton === 4 ? 1 : 0 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}>
        <div className="flex flex-col">
            </div>
            <p className="">
            {t('¡Prepárate para el momento cumbre! Con el perfil completamente validado después de nuestro encuentro, es hora de encontrar el match perfecto. Hemos trazado nuestros espacios para entrevistas y ahora activamos la máquina de búsqueda potenciada con tecnología de vanguardia. En tan solo 5 días, estaremos marcando los encuentros con los candidatos ideales.')} <br /><br />

{t('Pero eso no es todo: ofrecemos una atención personalizada en todo momento. Cualquier duda que surja en el proceso, estamos aquí para resolverla. ¡En LinkIT, no solo reclutamos, creamos estrategias para el éxito que te impulsarán hacia la cima!')} 💪🌐 {t('Estamos listos para llevar tu equipo al siguiente nivel. ¿Preparado para el salto? ¡Vamos juntos!')} 🚀

</p>
        </motion.div>
        <motion.div className={`h-[28rem] ${activeButton === 5 ? "opacity-1 block" : "opacity-0 hidden"}`}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: activeButton === 5 ? 0 : 30, opacity: activeButton === 5 ? 1 : 0 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}>
        <div className="flex flex-col">
            </div>
            <p className="">
            {t('¡En LinkIT, nos adelantamos a la magia de las entrevistas! Antes del gran encuentro, te entregamos la primicia: información completa de los candidatos seleccionados. Pero eso no es todo, trabajamos arduamente para asegurarnos de que cada candidato brille en cada entrevista.')} <br /> <br />

{t('Queremos que tanto candidato como cliente estén completamente preparados para que este primer encuentro sea fructífero al máximo. En LinkIT, cada paso es crucial, y cada candidato está listo para deslumbrar. ¡Prepárate para la ovación, porque estamos aquí para hacer que cada encuentro sea un evento inolvidable!')} 💼🌟 {t('¡La magia comienza ahora!')} 🚀 {t('¿Listo para la experiencia LinkIT? ¡Es tu momento!')} ✨
</p>
        </motion.div>
        <motion.div className={`h-[28rem] ${activeButton === 6 ? "opacity-1 block" : "opacity-0 hidden"}`}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: activeButton === 6 ? 0 : 30, opacity: activeButton === 6 ? 1 : 0 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.4 }}>
        <div className="flex flex-col">
            </div>
            <p className="">
            {t('En este paso, nuestro compromiso va más allá de la entrevista. Buscamos acompañarte durante todo el proceso, brindando la mejor experiencia tanto a los candidatos como a nuestros clientes. Realizamos un seguimiento detallado en cada etapa, siempre en búsqueda de la excelencia y listos para ajustar el rumbo si es necesario.')} <br /> <br />

{t('En LinkIT, convertimos la presión en progreso y el seguimiento en éxito. Estamos preparados para elevar tus entrevistas y negociaciones al siguiente nivel.')} 💪😊 {t('¡Contáctanos y descubre el poder de la determinación con una sonrisa!')} 🚀
</p>
        </motion.div>
        </div>
        </div>


        <div className="lg:hidden">
          <nav className="font-manrope font-bold grid justify-center  xs:text-[1.2rem] ssm:text-[1.9rem] md:text-[2.3rem]">
          <button className={`text-start  ${activeButton === 1 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(1)}>1. {t('Rol asignado')}</button>
        <p className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[2rem] my-[3%] font-montserrat ${activeButton === 1 ? "opacity-1 block" : "opacity-0 hidden"}`}>{t('¡Bienvenido a la acción! se enciende la búsqueda de un rol nuevo. En este momento, designamos un Account Manager para orquestar tus necesidades y un reclutador hábil que será el arquitecto de tu equipo de ensueño. ¡Prepárate para una experiencia única donde cada fase es un paso hacia el éxito personalizado!')} 🚀 </p>

            <button className={`text-start  ${activeButton === 2 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(2)}>2. {t('Pre-alineamiento')}</button>
            <p className={`font-normal text-[0.8rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[2rem] my-[3%] font-montserrat ${activeButton === 2 ? "opacity-1 block" : "opacity-0 hidden"}`}>
            {t('¡Prepárate para la acción! Con la descripción previa del perfil en mano, es el momento perfecto para sumergirnos en los requerimientos a fondo. Vamos más allá: estudiamos tu empresa para formular preguntas clave sobre el perfil y brindarte la asesoría que necesitas. En esta fase, no solo proporcionamos respuestas, sino que también traemos nuestras mejores recomendaciones para satisfacer tus necesidades. ¡Estamos aquí para impulsar tu éxito con estrategia y expertise!')} 💡💼 <br /><br />{t('¡LinkIT, donde cada detalle cuenta para construir juntos un camino hacia el éxito!')} 🚀
</p>
            <button className={`text-start  ${activeButton === 3 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(3)}>3. {t('Alineamiento')}</button>
            <p className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[2rem] my-[3%] font-montserrat ${activeButton === 3 ? "opacity-1 block" : "opacity-0 hidden"}`}>
            {t('¡Es hora de conocernos a fondo! En esta etapa, vamos a sumergirnos en las especificidades del perfil, abordar todas las dudas y, juntos, esculpiremos la definición del perfil con el máximo detalle posible. ¡Es el momento estelar de LinkIT para brillar!')} ✨ {t('¡Vamos a hacer que cada detalle cuente y a crear un perfil que deslumbre!')} 💪🚀
</p>
            <button className={`text-start  ${activeButton === 4 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(4)}>4. {t('Sourcing y reclutamiento')}</button>
            <p className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[2rem] my-[3%] font-montserrat ${activeButton === 4 ? "opacity-1 block" : "opacity-0 hidden"}`}>
            {t('¡Prepárate para el momento cumbre! Con el perfil completamente validado después de nuestro encuentro, es hora de encontrar el match perfecto. Hemos trazado nuestros espacios para entrevistas y ahora activamos la máquina de búsqueda potenciada con tecnología de vanguardia. En tan solo 5 días, estaremos marcando los encuentros con los candidatos ideales.')} <br /><br />

{t('Pero eso no es todo: ofrecemos una atención personalizada en todo momento. Cualquier duda que surja en el proceso, estamos aquí para resolverla. ¡En LinkIT, no solo reclutamos, creamos estrategias para el éxito que te impulsarán hacia la cima!')} 💪🌐 {t('Estamos listos para llevar tu equipo al siguiente nivel. ¿Preparado para el salto? ¡Vamos juntos!')} 🚀

</p>
            <button className={`text-start  ${activeButton === 5 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(5)}>5. {t('Presentación de candidatos')}</button>
            <p className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[2rem] my-[3%] font-montserrat ${activeButton === 5 ? "opacity-1 block" : "opacity-0 hidden"}`}>
            {t('¡En LinkIT, nos adelantamos a la magia de las entrevistas! Antes del gran encuentro, te entregamos la primicia: información completa de los candidatos seleccionados. Pero eso no es todo, trabajamos arduamente para asegurarnos de que cada candidato brille en cada entrevista.')} <br /> <br />

{t('Queremos que tanto candidato como cliente estén completamente preparados para que este primer encuentro sea fructífero al máximo. En LinkIT, cada paso es crucial, y cada candidato está listo para deslumbrar. ¡Prepárate para la ovación, porque estamos aquí para hacer que cada encuentro sea un evento inolvidable!')} 💼🌟 {t('¡La magia comienza ahora!')} 🚀 {t('¿Listo para la experiencia LinkIT? ¡Es tu momento!')} ✨
</p>
            <button className={`text-start  ${activeButton === 6 ? " text-linkIt-300" : "hover:text-linkIt-300" }`} onClick={() => handleClick(6)}>6. {t('Analytics and follow up')}</button>
            <p className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[2rem] my-[3%] font-montserrat ${activeButton === 6 ? "opacity-1 block" : "opacity-0 hidden"}`}>
            {t('En este paso, nuestro compromiso va más allá de la entrevista. Buscamos acompañarte durante todo el proceso, brindando la mejor experiencia tanto a los candidatos como a nuestros clientes. Realizamos un seguimiento detallado en cada etapa, siempre en búsqueda de la excelencia y listos para ajustar el rumbo si es necesario.')} <br /> <br />

{t('En LinkIT, convertimos la presión en progreso y el seguimiento en éxito. Estamos preparados para elevar tus entrevistas y negociaciones al siguiente nivel.')} 💪😊 {t('¡Contáctanos y descubre el poder de la determinación con una sonrisa!')} 🚀
</p>
          </nav>
        </div>
    </div>
      )
}
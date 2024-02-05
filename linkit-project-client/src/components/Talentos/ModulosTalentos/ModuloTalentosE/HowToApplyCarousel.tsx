import grayArrow from "/Vectores/Gray-Arrow.svg"
import { useTranslation } from "react-i18next"
import { useState } from "react";
import { motion } from "framer-motion";

export default function HowToApplyCarousel() { 
    const {t}= useTranslation()

    const [isActive, setIsActive] = useState(1);
    const [position, setPosition] = useState(0);

    const handleNext = () => {
        if (isActive === 4) {
            setIsActive(1)
            setPosition(0)
        } else {
            setIsActive(isActive + 1)
            setPosition(position - 25)
        }
    }
    const handlePrev = () => {
        if (isActive === 1) {
            setIsActive(4)
            setPosition(-75)
        } else {
            setIsActive(isActive - 1)
            setPosition(position + 25)
        }
    }


    return ( 
        <div className="">
            <div className="flex  dark:text-white text-center space-x-2 ssm:space-x-10 sm:space-x-12"> 
            <img className="relative top-[1.2rem] rotate-180 w-[20px] cursor-pointer" onClick={handlePrev} src={grayArrow} alt="gray-Arrow" />
            <div className="mt-5">
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: isActive === 1 ? 1 : 0, scale: 1}} transition={{duration: 0.3}} className={`${isActive === 1 ? 'block' : 'hidden'} space-y-3`}><h4 className="font-manrope font-bold whitespace-nowrap subtitles-size">{t('Consulta nuestras vacantes')}</h4><p className="font-montserrat font-medium text-size xs:mx-1.5" >{t('Tenemos posiciones abiertas en múltiples áreas de crecimiento.')}</p></motion.div>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: isActive === 2 ? 1 : 0, scale: 1}} transition={{duration: 1}} className={`${isActive === 2 ? 'block' : 'hidden'} space-y-3`}><h4 className="font-manrope font-bold subtitles-size ">{t('Aplica completando el formulario')}</h4><p className="font-montserrat font-medium text-sizexs:mx-1.5 sm:mx-10  ">{t('Selecciona tu posición ideal rellenando la solicitud en pocos clicks.')}</p></motion.div>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: isActive === 3 ? 1 : 0, scale: 1}} transition={{duration: 1}} className={`${isActive === 3 ? 'block' : 'hidden'} space-y-3`}><h4 className="font-manrope font-bold whitespace-nowrap  subtitles-size">{t('Proceso de entrevistas')}</h4><p className="font-montserrat font-medium text-sizexs:mx-1.5 sm:mx-10  ">{t('Conoce en detalle la oportunidad y prepárate para los próximos pasos.')}</p></motion.div>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: isActive === 4 ? 1 : 0, scale: 1}} transition={{duration: 1}} className={`${isActive === 4 ? 'block' : 'hidden'} space-y-3`}><h4 className="font-manrope font-bold subtitles-size">{t('Consigue el trabajo de tus sueños')}</h4><p className="font-montserrat font-medium text-sizexs:mx-1.5 sm:mx-10  ">{t('Comienza a trabajar de forma remota y lleva tu carrera al siguiente nivel.')}</p></motion.div>
            </div>
            <img className="relative top-5 w-[20px] cursor-pointer" onClick={handleNext} src={grayArrow} alt="gray-Arrow" />
            </div>
            <motion.div className="relative w-[335vw] before:bg-linkIt-200 before:dark:bg-white before:w-full before:h-[2px] before:absolute before:rounded-full before:top-[45%]"
            initial={{x: position + '%'}}
            animate={{ x: position + '%' }}>
                <div className="before:bg-linkIt-200 before:dark:bg-white before:w-[0.5rem] before:h-[0.5rem] before:absolute before:rounded-full before:top-[35%] before:xs:top-[39%] before:ssm:top-[40%]"></div>
                <ul className="grid grid-cols-4 justify-items-center relative mt-[2vh] font-manrope col-span-4 text-white dark:text-linkIt-200">
                <li className="flex bg-linkIt-200 dark:bg-white rounded-full xs:text-[1.3rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] font-bold h-[2rem] xs:h-[3rem] ssm:w-[4rem] w-[2rem] xs:w-[3rem] ssm:h-[4rem] justify-center items-center">1</li>
                <li className="flex bg-linkIt-200 dark:bg-white rounded-full xs:text-[1.3rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] font-bold h-[2rem] xs:h-[3rem] ssm:w-[4rem] w-[2rem] xs:w-[3rem] ssm:h-[4rem] justify-center items-center">2</li>
                <li className="flex bg-linkIt-200 dark:bg-white rounded-full xs:text-[1.3rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] font-bold h-[2rem] xs:h-[3rem] ssm:w-[4rem] w-[2rem] xs:w-[3rem] ssm:h-[4rem] justify-center items-center">3</li>
                <li className="flex bg-linkIt-200 dark:bg-white rounded-full xs:text-[1.3rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] font-bold h-[2rem] xs:h-[3rem] ssm:w-[4rem] w-[2rem] xs:w-[3rem] ssm:h-[4rem] justify-center items-center">4</li>
                </ul>
                <div className="before:bg-linkIt-200 before:dark:bg-white before:w-[0.5rem] before:h-[0.5rem] before:absolute before:rounded-full before:left-[100%] before:top-[35%] before:xs:top-[39%] before:ssm:top-[40%]"></div>
                </motion.div>
        </div>
    )
}
import { useTranslation } from "react-i18next";
import "./ModuloE.css";
import { useState } from "react";
import { motion } from "framer-motion";
import whiteArrow from "/Vectores/white-arrow.png"

export default function ModuloE() {
  const { t } = useTranslation();

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
    <div className="p-[7%] relative bg-linkIt-200 text-white">
      <div className=" lg:flex flex-col  justify-center hidden  h-full before:absolute before:w-full before:h-[18%] before:bg-linkIt-500 dark:before:bg-linkIt-400 before:top-[-8%] before:left-0 before:-skew-y-3 after:absolute after:w-full after:h-[5px] after:bg-linkIt-200 after:top-[8%] after:left-0 after:-skew-y-3">
        <h1 className="flex font-bold text-[2.8vw] xl:text-[2vw] justify-center mt-[5%]">{t('¿Qué nos hace diferentes?')}</h1>
            <div>
                <ul className="grid grid-cols-4 gap-[2vw] mt-[6vh]">
                    <div className="flex flex-col text-center items-center">
                        <li className="font-medium text-[2vw] xl:text-[1.4vw]">{t('Sin riesgos')}</li>
                        <p className="text-center mt-[1vh] xl:text-[1vw]">{t('Ofrecemos un servicio de calidad a éxito. No hay anticipos; el pago es al efectivizar la contratación.')}</p>
                        <br />
                    </div>
                    <div className="flex flex-col text-center items-center">
                        <li className="font-medium text-[2vw] xl:text-[1.4vw]">{t('Fee a medida')}</li>
                        <p className="text-center mt-[1vh] xl:text-[1vw]">{t('Personalizamos nuestro fee a tus necesidades y ahorra hasta un 50% en la contratación.')}</p>
                        <br />

                    </div>
                    <div className="flex flex-col text-center items-center">
                        <li className="font-medium text-[2vw] xl:text-[1.4vw]">{t('Garantía')}</li>
                        <p className="text-center mt-[1vh] xl:text-[1vw]">{t('Garantía de por vida contratando a través de LinkIT.')}</p>
                        <br />

                    </div>
                    <div className="flex flex-col text-center items-center">
                        <li className="font-medium text-[2vw] xl:text-[1.4vw]">{t('Seguimiento continuo')}</li>
                        <p className="text-center mt-[1vh] xl:text-[1vw]">{t('Asignamos un equipo de trabajo específico proporcionando un servicio integral y personalizado durante todo el proceso.')}</p>
                        <br />
                    </div>
                </ul>
                <ul className="grid grid-cols-4 justify-items-center relative mt-[2vh] font-manrope">
                <div className="lineE top-[3vh] 2xl:top-[3.5vh]"></div>
                    <li className="flex items-center justify-center text-[2.3vw] xl:text-[1.8vw] text-linkIt-200 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full z-20">1</li>
                    <li className="flex items-center justify-center text-[2.3vw] xl:text-[1.8vw] text-linkIt-200 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full z-20">2</li>
                    <li className="flex items-center justify-center text-[2.3vw] xl:text-[1.8vw] text-linkIt-200 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full z-20">3</li>
                    <li className="flex items-center justify-center text-[2.3vw] xl:text-[1.8vw] text-linkIt-200 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full z-20">4</li>
                </ul>
            </div>
            </div>
            <div className="lg:hidden">
            <div className="flex  dark:text-white text-center space-x-2 items-center ssm:space-x-10 sm:space-x-12"> 
            <img className="relative top-[1.2rem] rotate-90 w-1/12 h-[20px] cursor-pointer" onClick={handlePrev} src={whiteArrow} alt="gray-Arrow" />
            <div className="mt-5">
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: isActive === 1 ? 1 : 0, scale: 1}} transition={{duration: 0.3}} className={`${isActive === 1 ? 'block' : 'hidden'} space-y-3`}><h2 className="font-manrope font-bold text-[1.1rem] xs:text-[1.2rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem]">{t('Sin riesgos')}</h2><p className="font-montserrat font-medium text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] md:text-[1.6rem] xs:mx-1.5" >{t('Ofrecemos un servicio de calidad a éxito. No hay anticipos; el pago es al efectivizar la contratación.')}</p></motion.div>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: isActive === 2 ? 1 : 0, scale: 1}} transition={{duration: 1}} className={`${isActive === 2 ? 'block' : 'hidden'} space-y-3`}><h2 className="font-manrope font-bold text-[1.1rem] xs:text-[1.2rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] ">{t('Fee a medida')}</h2><p className="font-montserrat font-medium text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] md:text-[1.6rem] xs:mx-1.5 sm:mx-10  ">{t('Personalizamos nuestro fee a tus necesidades y ahorra hasta un 50% en la contratación.')}</p></motion.div>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: isActive === 3 ? 1 : 0, scale: 1}} transition={{duration: 1}} className={`${isActive === 3 ? 'block' : 'hidden'} space-y-3`}><h2 className="font-manrope font-bold text-[1.1rem] xs:text-[1.2rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] ">{t('Garantía')}</h2><p className="font-montserrat font-medium text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] md:text-[1.6rem] xs:mx-1.5 sm:mx-10  ">{t('Garantía de por vida contratando a través de LinkIT.')}</p></motion.div>
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: isActive === 4 ? 1 : 0, scale: 1}} transition={{duration: 1}} className={`${isActive === 4 ? 'block' : 'hidden'} space-y-3`}><h2 className="font-manrope font-bold text-[1.1rem] xs:text-[1.2rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] ">{t('Seguimiento continuo')}</h2><p className="font-montserrat font-medium text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] md:text-[1.6rem] xs:mx-1.5 sm:mx-10  ">{t('Asignamos un equipo de trabajo específico proporcionando un servicio integral y personalizado durante todo el proceso.')}</p></motion.div>
            </div>
            <img className="relative top-5  -rotate-90 w-1/12 h-[20px] cursor-pointer" onClick={handleNext} src={whiteArrow} alt="gray-Arrow" />
            </div>
            <motion.div className="relative w-[335vw] before:bg-white before:w-full before:h-[2px] before:absolute before:rounded-full before:top-[45%]"
            initial={{x: position + '%'}}
            animate={{ x: position + '%' }}>
                <div className="before:bg-white before:w-[0.5rem] before:h-[0.5rem] before:absolute before:rounded-full before:top-[35%] before:xs:top-[39%] before:ssm:top-[40%]"></div>
                <ul className="grid grid-cols-4 justify-items-center relative mt-[2vh] font-manrope col-span-4 text-linkIt-200">
                <li className="flex bg-white rounded-full  xs:text-[1.3rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] font-bold h-[2rem] xs:h-[3rem] ssm:w-[4rem] w-[2rem] xs:w-[3rem] ssm:h-[4rem] justify-center items-center">1</li>
                <li className="flex bg-white rounded-full  xs:text-[1.3rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] font-bold h-[2rem] xs:h-[3rem] ssm:w-[4rem] w-[2rem] xs:w-[3rem] ssm:h-[4rem] justify-center items-center">2</li>
                <li className="flex bg-white rounded-full  xs:text-[1.3rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] font-bold h-[2rem] xs:h-[3rem] ssm:w-[4rem] w-[2rem] xs:w-[3rem] ssm:h-[4rem] justify-center items-center">3</li>
                <li className="flex bg-white rounded-full  xs:text-[1.3rem] whitespace-nowrap ssm:text-[1.5rem] md:text-[2rem] font-bold h-[2rem] xs:h-[3rem] ssm:w-[4rem] w-[2rem] xs:w-[3rem] ssm:h-[4rem] justify-center items-center">4</li>
                </ul>
                <div className="before:bg-white before:w-[0.5rem] before:h-[0.5rem] before:absolute before:rounded-full before:left-[100%] before:top-[35%] before:xs:top-[39%] before:ssm:top-[40%]"></div>
                </motion.div>
            </div>
        </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import peopleIcon from "/Vectores/linkit-web-vectores-03.svg";
import letterIcon from "/Vectores/linkit-web-vectores-04.svg";
import checkedIcon from "/Vectores/linkit-web-vectores-05.svg";
import whiteArrow from "/Vectores/white-arrow.png";
import { useTranslation } from "react-i18next"
import { useEffect } from "react";

export default function OurServicesCarousel() {
    const{t}=useTranslation()
    const navigate = useNavigate();
    const goSoyEmpresa = () => {
        navigate("/SoyEmpresa")
    }
  const initialIconsToRender = [
    letterIcon,
    peopleIcon,
    checkedIcon,
    letterIcon,
    peopleIcon,
    checkedIcon,
  ];
  const [iconsToRender, setIconsToRender] = useState(initialIconsToRender);
  const [firstIcon, setFirstIcon] = useState(iconsToRender[0]);
  const [secondIcon, setSecondIcon] = useState(iconsToRender[1]);
  const [thirdIcon, setThirdIcon] = useState(iconsToRender[2]);
  const [IconActive, setIconActive] = useState('peopleIcon');
  const [side, setSide] = useState('' as 'right' | 'left');


  
  const buttonToTheRight = () => {
    setSide('right');

    const updatedIconsToRender = [...iconsToRender];
    const newFirstIcon = updatedIconsToRender.pop();
    updatedIconsToRender.unshift(newFirstIcon as any);
    setIconsToRender(updatedIconsToRender);
    setFirstIcon(updatedIconsToRender[0]);
    setSecondIcon(updatedIconsToRender[1]);
    setThirdIcon(updatedIconsToRender[2]);

    const newIconActive = updatedIconsToRender[1].toString().charAt(31);
    switch (newIconActive) {
        case '3':
            setIconActive('peopleIcon');
            break;
        case '4':
            setIconActive('letterIcon');
            break;
        case '5':
            setIconActive('checkedIcon');
            break;
        default:
            break;
  };
  }
  const buttonToTheLeft = () => {

    setSide('left');

    const updatedIconsToRender = [...iconsToRender];
    const newLastIcon = updatedIconsToRender.shift();
    updatedIconsToRender.push(newLastIcon as any);
    setIconsToRender(updatedIconsToRender);
    setFirstIcon(updatedIconsToRender[0]);
    setSecondIcon(updatedIconsToRender[1]);
    setThirdIcon(updatedIconsToRender[2]);

    const newIconActive = updatedIconsToRender[1].toString().charAt(31);
    switch (newIconActive) {
        case '3':
            setIconActive('peopleIcon');
            break;
        case '4':
            setIconActive('letterIcon');
            break;
        case '5':
            setIconActive('checkedIcon');
            break;
        default:
            break;
  };
  };


  return (
    <div className="grid ">
    <div className="flex items-center my-5 ssm:my-10">
      <motion.button
         className="w-1/5"
       onClick={buttonToTheLeft}
       whileTap={{scale: 1.5}}>
       <motion.img 
       className="rotate-90 inset-0 m-auto w-[50%]" 
      src={whiteArrow} 
      alt="white-Arrow"
      /></motion.button>

     <div className="col-start-2 w-1/5 px-2"><motion.img 
      className="border rounded-full" src={firstIcon} alt="" /></div>
     <div className="col-start-2 w-1/3 mx-3 ssm:mx-4"> <motion.img
     className="border rounded-full bg-white" src={secondIcon} alt="" /></div>
     <div className="col-start-2 w-1/5 px-2"><motion.img 

     className="border rounded-full" src={thirdIcon} alt="" /></div>

      
      
      

      <motion.button
      className="w-1/5"
      whileTap={{scale: 1.5}} onClick={buttonToTheRight}><img className="-rotate-90 inset-0 m-auto w-[50%]" src={whiteArrow} alt="white-Arrow" /></motion.button>
    </div>
    <motion.div
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: IconActive === 'peopleIcon' ? 1 : 0, scale: IconActive  === 'peopleIcon' ? 1 : 0.5}}
    transition={{duration: 0.3}}
     className={`grid justify-items-center space-y-[1rem] ${IconActive === 'peopleIcon' ? 'grid opacity-1' : 'hidden opacity-0'}`}>
<h2 className=" font-montserrat text-[0.8rem] ssm:text-[1.3rem] font-bold">{t('Reclutamiento y selección')}</h2>
        <p className="text-white px-[15%] text-center text-[0.7rem] ssm:text-[1rem] md:text-[1.2rem] font-montserrat w-[130%] md:w-[120%]">{t('Identificamos a profesionales con el stack, habilidades y experiencia adecuada para tus proyectos y así lograr construir un equipo de alto desempeño.')}</p>

    </motion.div>

    <motion.div
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: IconActive === 'checkedIcon' ? 1 : 0, scale: IconActive  === 'checkedIcon' ? 1 : 0.5}}
      className={`grid justify-items-center space-y-[1rem] ${IconActive === 'checkedIcon' ? 'grid' : 'hidden'}`}>
<h2 className=" font-montserrat text-[0.8rem] ssm:text-[1.3rem] font-bold">{t('Gestión y beneficios')}</h2>
        <p className="text-white px-[15%] text-center text-[0.7rem] ssm:text-[1rem] md:text-[1.2rem] font-montserrat w-[125%] xs:w-[106%] sm:w-[100%]">{t('Facilitamos planes de beneficios, asesoramiento en la retención y elaboración de informes y mucho más.')}</p>
    </motion.div>

    <motion.div
     initial={{opacity: 0, scale: 0.5}}
     animate={{opacity: IconActive === 'letterIcon' ? 1 : 0, scale: IconActive  === 'letterIcon' ? 1 : 0.5}}
     className={`grid justify-items-center space-y-[1rem] ${IconActive === 'letterIcon' ? 'grid' : 'hidden'}`}>
<h2 className=" font-montserrat text-[0.8rem] ssm:text-[1.3rem] font-bold">{t('Contratación')}</h2>
        <p className="text-white px-[15%] text-center text-[0.7rem] ssm:text-[1rem] md:text-[1.2rem] font-montserrat w-[120%] sm:w-[100%] md:w-[101%]">{t('Realizamos la gestión contractual y de pagos del talento. Refuerza tu equipo y aumenta la capacidad productiva sin riesgos.')}</p>
    </motion.div>
        <button className="background-button hover:bg-white justify-self-center w-[20%] hover:text-linkIt-300 mt-3 xs:mt-4 sm:mt-5" onClick={goSoyEmpresa}>{t('Ver más')}</button>


    </div>
  );
}
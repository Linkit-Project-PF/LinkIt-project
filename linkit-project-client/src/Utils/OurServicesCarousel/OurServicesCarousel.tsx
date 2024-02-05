import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import peopleIcon_green from "/Vectores/linkit-web-vectores-03.svg";
import letterIcon_green from "/Vectores/linkit-web-vectores-04.svg";
import checkedIcon_green from "/Vectores/linkit-web-vectores-05.svg";
import peopleIcon from "/Vectores/people_white.svg";
import letterIcon from "/Vectores/letter_white.svg";
import checkedIcon from "/Vectores/Checked_white.svg";
import whiteArrow from "/Vectores/white-arrow.png";
import { useTranslation } from "react-i18next"

interface OurServicesCarouselProps {
  component: string;
}

export default function OurServicesCarousel({ component }: OurServicesCarouselProps) {
    const{t}=useTranslation()
    const navigate = useNavigate();


    const goSoyEmpresa = () => {
      if(IconActive === 'letterIcon'){
        navigate("/SoyEmpresa");
        setTimeout(() => {
          window.location.href = "#serviciosE";

        }, 0);
        setTimeout(() => { 
          
        }, 1000);
      }
    };


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
  const [IconActive, setIconActive] = useState('peopleIcon');
  const [thirdIcon, setThirdIcon] = useState(iconsToRender[2]);
  const [IconToRender, setIconToRender] = useState(peopleIcon_green);


  
  const buttonToTheRight = () => {


    const updatedIconsToRender = [...iconsToRender];
    const newFirstIcon = updatedIconsToRender.pop();
    updatedIconsToRender.unshift(newFirstIcon as any);

    setIconsToRender(updatedIconsToRender);
    setFirstIcon(updatedIconsToRender[0]);
    setThirdIcon(updatedIconsToRender[2]);

    const newIconActive = updatedIconsToRender[1].toString().charAt(10);
    switch (newIconActive) {
        case 'p':
            setIconActive('peopleIcon');
            setIconToRender(peopleIcon_green);
            break;
        case 'l':
            setIconActive('letterIcon');
            setIconToRender(letterIcon_green);
            break;
        case 'C':
            setIconActive('checkedIcon');
            setIconToRender(checkedIcon_green);
            break;
        default:
            break;
  };
  }


  const buttonToTheLeft = () => {



    const updatedIconsToRender = [...iconsToRender];
    const newLastIcon = updatedIconsToRender.shift();
    updatedIconsToRender.push(newLastIcon as any);
    setIconsToRender(updatedIconsToRender);
    setFirstIcon(updatedIconsToRender[0]);
    setThirdIcon(updatedIconsToRender[2]);

    const newIconActive = updatedIconsToRender[1].toString().charAt(10);
    switch (newIconActive) {
        case 'p':
            setIconActive('peopleIcon');
            setIconToRender(peopleIcon_green);
            break;
        case 'l':
            setIconActive('letterIcon');
            setIconToRender(letterIcon_green);
            break;
        case 'C':
            setIconActive('checkedIcon');
            setIconToRender(checkedIcon_green);
            break;
        default:
            break;
  };
  };


  return (
    <div className="grid bg-linkIt-200 dark:bg-linkIt-400 text-white p-[10%] font-manrope ">
  <h3 className="titles-size justify-self-center font-bold font-manrope">{t('Nuestros servicios')}</h3>
    <div className="flex items-center justify-center my-5 ssm:my-10 ">
      <motion.button
         className="w-[20px] mr-2"
       onClick={buttonToTheLeft}
       whileTap={{scale: 1.5}}>
       <motion.img 
       className="rotate-90 w-[100%]" 
      src={whiteArrow} 
      alt="white-Arrow"
      /></motion.button>

     <div className="col-start-2 w-1/6 px-2"><motion.img 
      className="border rounded-full" src={firstIcon} alt="" /></div>
     <div className="col-start-2 w-1/4 ssm:mx-2"> <motion.img
     className="border rounded-full bg-white" src={IconToRender} alt="" /></div>
     <div className="col-start-2 w-1/6 px-2"><motion.img 

     className="border rounded-full" src={thirdIcon} alt="" /></div>

      
      
      

      <motion.button
      className="w-[20px] ml-2"
      whileTap={{scale: 1.5}} onClick={buttonToTheRight}><img className="-rotate-90 inset-0 m-auto w-[100%]" src={whiteArrow} alt="white-Arrow" /></motion.button>
    </div>
    <motion.div
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: IconActive === 'peopleIcon' ? 1 : 0, scale: IconActive  === 'peopleIcon' ? 1 : 0.5}}
    transition={{duration: 0.3}}
     className={`grid justify-items-center space-y-[1rem] ${IconActive === 'peopleIcon' ? 'grid opacity-1' : 'hidden opacity-0'}`}>
<h4 className="font-montserrat subtitles-size font-bold">{component === "talent" ? t('Crecimiento y desarrollo') : t('Reclutamiento y selección')}</h4>
        <p className="text-white px-[15%] text-center text-size font-montserrat w-[130%] md:w-[120%]">{component === "talent" ? t('Trabaja en los mejores proyectos de tecnología con las empresas más destacadas del mundo. Te acompañamos en tu desarrollo profesional asesorándote sobre las tecnologías de vanguardia, competitividad en el mercado y mejores oportunidades globales.') : t('Identificamos a profesionales con el stack, habilidades y experiencia adecuada para tus proyectos y así lograr construir un equipo de alto desempeño.')}</p>

    </motion.div>

    <motion.div
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: IconActive === 'checkedIcon' ? 1 : 0, scale: IconActive  === 'checkedIcon' ? 1 : 0.5}}
      className={`grid justify-items-center space-y-[1rem] ${IconActive === 'checkedIcon' ? 'grid' : 'hidden'}`}>
<h4 className=" font-montserrat subtitles-size font-bold">{ component === "talent" ? t('Facilidades de pago') : t('Gestión y beneficios')}</h4>
        <p className="text-white px-[15%] text-center text-size font-montserrat w-[125%] xs:w-[106%] sm:w-[100%]">{ component === "talent" ? t('Elige dónde y cómo recibir el dinero. Te asesoramos en las mejores formas para recibir el dinero, teniendo en cuenta las contrataciones y legislaciones laborales a nivel global.') : t('Facilitamos planes de beneficios, asesoramiento en la retención y elaboración de informes y mucho más.')}</p>
    </motion.div>

    <motion.div
     initial={{opacity: 0, scale: 0.5}}
     animate={{opacity: IconActive === 'letterIcon' ? 1 : 0, scale: IconActive  === 'letterIcon' ? 1 : 0.5}}
     className={`grid justify-items-center space-y-[1rem] ${IconActive === 'letterIcon' ? 'grid' : 'hidden'}`}>
<h4 className=" font-montserrat subtitles-size font-bold">{component === "talent" ? t('Trabajo remoto') : t('Contratación')}</h4>
        <p className="text-white px-[15%] text-center text-size font-montserrat w-[120%] sm:w-[100%] md:w-[101%]">{ component === "talent" ? t('Despídete de las largas horas de traslado y trabaja desde la comodidad de tu hogar. Democratizamos oportunidades a nivel global para que encuentres el equilibrio perfecto entre el trabajo y la vida personal.') : t('Realizamos la gestión contractual y de pagos del talento. Refuerza tu equipo y aumenta la capacidad productiva sin riesgos.')}</p>
    </motion.div>
        <button className={`background-button hover:bg-white justify-self-center w-[20%] hover:text-linkIt-300 mt-3 xs:mt-4 sm:mt-5 ${component !== "home" ? "hidden": "block"}`} onClick={goSoyEmpresa}>{t('Ver más')}</button>


    </div>
  );
}
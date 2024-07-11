import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import peopleIcon_green from "/Vectores/linkit-web-vectores-03.svg";
import letterIcon_green from "/Vectores/linkit-web-vectores-04.svg";
import checkedIcon_green from "/Vectores/linkit-web-vectores-05.svg";

import whiteArrow from "/Vectores/white-arrow.png";
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { TotheLeft, TotheRight } from "../../redux/features/OurServicesSlice";

interface OurServicesCarouselProps {
  component: string;
}

export default function OurServicesCarousel({ component}: OurServicesCarouselProps) {


    const{t}=useTranslation()
    const navigate = useNavigate();
    const iconsToRender = useSelector((state: RootState) => state.ourServices);
    const dispatch = useDispatch();

    const goSoyEmpresa = () => {
        navigate("/SoyEmpresa");
        setTimeout(() => {
          window.location.href = "#serviciosE";
        }, 0);
      
    };


  
  const firstIcon = iconsToRender[0];
  const [IconActive, setIconActive] = useState('peopleIcon');
  const thirdIcon = iconsToRender[2];
  const [IconToRender, setIconToRender] = useState(peopleIcon_green);


  useEffect(() => {
  if (iconsToRender[1].toString().charAt(10) === 'p') {
    setIconActive('peopleIcon');
    setIconToRender(peopleIcon_green);
  }
  if (iconsToRender[1].toString().charAt(10) === 'l') {
    setIconActive('letterIcon');
    setIconToRender(letterIcon_green);
  }
  if (iconsToRender[1].toString().charAt(10) === 'C') {
    setIconActive('checkedIcon');
    setIconToRender(checkedIcon_green);
  }
  }, [iconsToRender]);
  
  const buttonToTheRight = () => {
    dispatch(TotheRight());
  }


  const buttonToTheLeft = () => {
    dispatch(TotheLeft());

  };



  const textForPeopleIcon = () => {
    if (component === "home") {
      return t('Identificamos a profesionales con el stack, habilidades y experiencia adecuada para tus proyectos y así lograr construir un equipo de alto desempeño.');
    } else if (component === "talent") {
      return t('Trabaja en los mejores proyectos de tecnología con las empresas más destacadas del mundo. Te acompañamos en tu desarrollo profesional asesorándote sobre las tecnologías de vanguardia, competitividad en el mercado y mejores oportunidades globales.');
    } else if (component === "company") {
      return t('Identificamos a profesionales con la experiencia adecuada para tus proyectos. Evaluamos habilidades técnicas, experiencia previa, cultura e idioma, para así lograr construir un equipo eficiente y exitoso.');
    }
  }

  const textForLetterIcon = () => {
    if (component === "home") {
      return t('Realizamos la gestión contractual y de pagos del talento. Refuerza tu equipo y aumenta la capacidad productiva sin riesgos.');
    } else if (component === "talent") {
      return t('Despídete de las largas horas de traslado y trabaja desde la comodidad de tu hogar. Democratizamos oportunidades a nivel global para que encuentres el equilibrio perfecto entre el trabajo y la vida personal.');
    } else if (component === "company") {
      return t('Agranda tu equipo y reduce tu costo de contratación con talento externo, aumentando la capacidad productiva, sin compromisos a largo plazo. Dedícate a lo que es realmente importante; elimina los tiempos administrativos y operativos de la gestión contractual y de pagos.');
    }
  }

  const textForCheckedIcon = () => {
    if (component === "home") {
      return t('Facilitamos planes de beneficios, asesoramiento en la retención y elaboración de informes y mucho más.');
    } else if (component === "talent") {
      return t('Elige dónde y cómo recibir el dinero. Te asesoramos en las mejores formas para recibir el dinero, teniendo en cuenta las contrataciones y legislaciones laborales a nivel global.');
    } else if (component === "company") {
      return t('Implementamos planes de beneficios y estrategias de fidelización para lograr equipos de alto desempeño, realizando informes y asesoramiento personalizado ayudando a tu empresa a fidelizar talento global de manera escalable.');
    } else {
      return t('Facilitamos planes de beneficios, asesoramiento en la retención y elaboración de informes y mucho más.');
    }
  }
  
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
        <p className="text-white px-[15%] text-center text-size font-montserrat w-[130%] md:w-[120%]">{
          textForPeopleIcon()
        }</p>

    </motion.div>

    <motion.div
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: IconActive === 'checkedIcon' ? 1 : 0, scale: IconActive  === 'checkedIcon' ? 1 : 0.5}}
      className={`grid justify-items-center space-y-[1rem] ${IconActive === 'checkedIcon' ? 'grid' : 'hidden'}`}>
<h4 className=" font-montserrat subtitles-size font-bold">{ component === "talent" ? t('Facilidades de pago') : t('Gestión y beneficios')}</h4>
        <p className="text-white px-[15%] text-center text-size font-montserrat w-[125%] xs:w-[106%] sm:w-[100%]">{textForCheckedIcon()}</p>
    </motion.div>

    <motion.div
     initial={{opacity: 0, scale: 0.5}}
     animate={{opacity: IconActive === 'letterIcon' ? 1 : 0, scale: IconActive  === 'letterIcon' ? 1 : 0.5}}
     className={`grid justify-items-center space-y-[1rem] ${IconActive === 'letterIcon' ? 'grid' : 'hidden'}`}>
<h4 className=" font-montserrat subtitles-size font-bold">{component === "talent" ? t('Trabajo remoto') : t('Contratación')}</h4>
        <p className="text-white px-[15%] text-center text-size font-montserrat w-[120%] sm:w-[100%] md:w-[101%]">{textForLetterIcon()}</p>
    </motion.div>
        <button className={`background-button hover:bg-white justify-self-center w-[20%] hover:text-linkIt-300 mt-3 xs:mt-4 sm:mt-5 ${component !== "home" ? "hidden": "block"}`} onClick={goSoyEmpresa}>{t('Ver más')}</button>


    </div>
  );
}
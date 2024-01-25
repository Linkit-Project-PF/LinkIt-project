import "./Events.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import EventsCards from "./Events-cards/EventsCards";
import { useTranslation } from "react-i18next";


function Events() {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
      <div
        className="p-[7%] flex flex-col justify-center justify-items-center">
        
          <motion.h1 
          className="mb-[2%] font-manrope font-bold text-[0.9rem] xs:text-[1.2rem] ssm:text-[2rem] xl:text-[2.5rem] text-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, type: "spring"}}
          >{t('Webinars')}
          </motion.h1>

          <motion.p 
          className="mb-[5%] font-montserrat text-[0.7rem] xs:text-[0.9rem] ssm:text-[1.1rem] md:text-[1.3rem] xl:text-[1.5rem] md:mx-[5vw] lg:mx-[10vw] text-center" 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring"}}
          >
            {t('Hablamos de trabajo remoto, oportunidades IT, tus primeros pasos en el empleo, cómo contratar talento internacional y mucho más!')}
          </motion.p>
        
        <EventsCards />
        <div className="flex justify-center">
        <button className="background-button justify-self-center mt-[5%]"
        onClick={()=>navigate("/recursos/libreria")}
        >
          {t('Ver más')}
        </button>
        </div>
      </div>
  );
}

export default Events;

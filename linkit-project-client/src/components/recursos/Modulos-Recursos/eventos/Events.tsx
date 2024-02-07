import "./Events.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import EventsCards from "./Events-cards/EventsCards";
import { useTranslation } from "react-i18next";
import EventsCardsMobile from "./Events-cards/EventsCardsMobile";


function Events() {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
      <div
        className="p-[7%] flex flex-col justify-center justify-items-center dark:bg-linkIt-400">
        
          <motion.h3 
          className="mb-[2%] font-manrope font-bold titles-size text-center dark:text-white"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, type: "spring"}}
          >{t('Webinars')}
          </motion.h3>

          <motion.p 
          className="mb-[5%] font-montserrat subtitles-size text-center dark:text-white" 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring"}}
          >
            {t('Hablamos de trabajo remoto, oportunidades IT, tus primeros pasos en el empleo, cómo contratar talento internacional y mucho más!')}
          </motion.p>
        <div className="hidden lg:block">
        <EventsCards />
        </div>
        <div className="lg:hidden">
        <EventsCardsMobile />
        </div>
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

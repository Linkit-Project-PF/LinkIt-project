import "./Events.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import EventsCards from "./Events-cards/EventsCards";
import { useTranslation } from "react-i18next";


function Events() {
  const navigate = useNavigate();
  const {t} = useTranslation();

  return (
    <>
      <div className="flex flex-col">
        <motion.div
        className="p-[3rem] text-center font-manrope flex flex-col items-center justify-center"
        >
          <motion.h1 
          className="font-bold text-[2.5rem]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, type: "spring"}}
          >{t('Webinars')}
          </motion.h1>

          <motion.p 
          className="w-[43rem] text-[1.2rem] mt-[2rem] font-montserrat font-[500]" 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring"}}
          >
            {t('Hablamos de trabajo remoto, oportunidades IT, tus primeros pasos en el empleo, cómo contratar talento internacional y mucho más!')}
          </motion.p>
        </motion.div>
        <EventsCards />

        <button className="bg-linkIt-300 text-white font-manrope p-[.5rem] rounded-[9px] w-[7rem] self-center mt-[3rem] mb-[5rem] hover:bg-white hover:text-linkIt-300 border-[2px] hover:border-linkIt-300 transition-all duration-300 ease-in-out "
        onClick={()=>navigate("/recursos/libreria")}
        >
          {t('Ver más')}
        </button>
      </div>
    </>
  );
}

export default Events;

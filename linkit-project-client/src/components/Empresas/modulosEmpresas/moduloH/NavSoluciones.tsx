import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function NavSoluciones() {
  const [activeButton, setActiveButton] = useState(1);
  const { t } = useTranslation();

  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };
  return (
    <div>
      <div className="w-3/4">
        <nav className="font-manrope font-bold grid xs:text-[1.2rem] ssm:text-[1.9rem] md:text-[2.0rem]">
          <button
            className={`text-start  ${
              activeButton === 1 ? " text-linkIt-300" : "hover:text-linkIt-300"
            }`}
            onClick={() => handleClick(1)}
          >
            1. {t("Rol asignado")}
          </button>
          <p
            className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[1.7rem] my-[3%] font-montserrat ${
              activeButton === 1 ? "opacity-1 block" : "opacity-0 hidden"
            }`}
          >
            {t(
              "Definimos el pipe line y las acciones a corto-medio plazo en base a tus necesidades y objetivos."
            )}
          </p>

          <button
            className={`text-start  ${
              activeButton === 2 ? " text-linkIt-300" : "hover:text-linkIt-300"
            }`}
            onClick={() => handleClick(2)}
          >
            2. {t("Pre-alineamiento")}
          </button>
          <p
            className={`font-normal text-[0.8rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[1.7rem] my-[3%] font-montserrat ${
              activeButton === 2 ? "opacity-1 block" : "opacity-0 hidden"
            }`}
          >
            {t(
              "Te asesoramos para encontrar juntos el perfil ideal acorde a tu búsqueda y presupuesto gracias a nuestra tecnología y expertise."
            )}
          </p>
          <button
            className={`text-start  ${
              activeButton === 3 ? " text-linkIt-300" : "hover:text-linkIt-300"
            }`}
            onClick={() => handleClick(3)}
          >
            3. {t("Alineamiento")}
          </button>
          <p
            className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[1.7rem] my-[3%] font-montserrat  ${
              activeButton === 3 ? "opacity-1 block" : "opacity-0 hidden"
            }`} 
          >
            {t(
              "Definimos las estrategias y los puntos más importantes a considerar para el sourcing y reclutamiento."
            )} 
          </p>
          <button
            className={`text-start  ${
              activeButton === 4 ? " text-linkIt-300" : "hover:text-linkIt-300"
            }`}
            onClick={() => handleClick(4)}
          >
            4. {t("Sourcing y reclutamiento")}
          </button>
          <p
            className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[1.7rem] my-[3%] font-montserrat ${
              activeButton === 4 ? "opacity-1 block" : "opacity-0 hidden"
            }`}
          >
            {t(
              "Seleccionamos al mejor talento a través de entrevistas y análisis ejecutados por nuestro equipo de expertos en reclutamiento IT."
            )}
          </p>
          <button
            className={`text-start  ${
              activeButton === 5 ? " text-linkIt-300" : "hover:text-linkIt-300"
            }`}
            onClick={() => handleClick(5)}
          >
            5. {t("Presentación de candidatos")}
          </button>
          <p
            className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[1.7rem] my-[3%] font-montserrat ${
              activeButton === 5 ? "opacity-1 block" : "opacity-0 hidden"
            }`}
          >
            {t(
              "En 5 días presentamos candidatos ya entrevistados y calificados junto a una descripción de su perfil y entrevista calendarizada."
            )}
          </p>
          <button
            className={`text-start  ${
              activeButton === 6 ? " text-linkIt-300" : "hover:text-linkIt-300"
            }`}
            onClick={() => handleClick(6)}
          >
            6. {t("Analytics and follow up")}
          </button>
          <p
            className={`font-normal text-[0.75rem] xs:text-[1rem] ssm:text-[1.7rem] md:text-[1.7rem] my-[3%] font-montserrat ${
              activeButton === 6 ? "opacity-1 block" : "opacity-0 hidden"
            }`}
          >
            {t(
              "Realizamos un seguimiento analítico del proceso, entrevistas, calidad del candidato y gestión de la dinámica de trabajo con una comunicación asertiva."
            )}
          </p>
        </nav>
      </div>
    </div>
  );
}

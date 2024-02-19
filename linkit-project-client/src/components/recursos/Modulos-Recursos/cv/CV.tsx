import { useTranslation } from "react-i18next";
import "./CV.css";

function CV() {
  const { t } = useTranslation();

  const redirectToLink = () => {
    const link = "https://cdn-careerservices.fas.harvard.edu/wp-content/uploads/sites/161/2023/08/template_bullet-1.doc";
    window.open(link, "_blank");
  };

  return (
    <div className="bg-linkIt-300 p-[7%] relative grid grid-cols-2 gap-2 ">
      <div className="grid lg:mb-[20%]">
        <h3 className="text-white font-bold font-montserrat mb-[5%] titles-size">
          {t('Arma tu CV')} <br /> {t('con nuestro')} <br /> {t('template')}
        </h3>
        <button 
        onClick={redirectToLink}
        className="text-white border-[2px] border-white rounded-[7px] w-fit p-2 hover:bg-white hover:text-linkIt-300 transition-all duration-300 ease-in-out text-[0.6rem] xs:text-[0.8rem] ssm:text-[1rem] md:text-[1.3rem] lg:text-[0.9rem]"
        >{t('Descargar Plantilla')}</button>
        
      </div>
      <img
        src="CV/cv-prueba.webp"
        alt="cv-template"
        className="absolute w-1/3 lg:w-1/2 left-[60%] lg:left-[40%] top-[30%] xs:top-[20%]"
      />
      {/* Separador */}
      <div className="hidden lg:block before:absolute before:bg-white before:dark:bg-linkIt-400 before:w-full before:h-[20%] before:left-0 before:skew-y-[-3deg] before:top-[88%] after:absolute after:bg-linkIt-300 after:w-full after:h-[3px] after:left-0 after:skew-y-[-3deg] after:top-[89.5%]"></div>
    </div>
  );
}

export default CV;


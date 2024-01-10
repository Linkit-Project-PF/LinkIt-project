import { useTranslation } from "react-i18next";
import "./ModuloE.css";

export default function ModuloE() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative flex flex-col p-[7%] justify-center bg-linkIt-200 text-white h-full before:absolute before:w-full before:h-[18%] before:bg-linkIt-500 dark:before:bg-linkIt-400 before:top-[-8%] before:left-0 before:-skew-y-3 after:absolute after:w-full after:h-[5px] after:bg-linkIt-200 after:top-[8%] after:left-0 after:-skew-y-3">
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
        </div>
  );
}

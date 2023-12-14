import { useTranslation } from "react-i18next";
import "./ModuloE.css";

export default function ModuloE() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative bottom-[11vh] flex flex-col skewed-borderBME px-[5vw]">
        <div className=" text-white contentBME flex flex-col justify-center my-[9vh]">
        <h1 className="flex font-bold text-[2.8vw] xl:text-[2vw] mt-[14vh] justify-center">{t('¿Qué nos hace diferentes?')}</h1>
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
                <div className="line top-[3vh] 2xl:top-[2.5vh]"></div>
                    <li className="flex items-center justify-center text-[2.3vw] xl:text-[1.8vw] text-linkIt-200 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full">1</li>
                    <li className="flex items-center justify-center text-[2.3vw] xl:text-[1.8vw] text-linkIt-200 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full">2</li>
                    <li className="flex items-center justify-center text-[2.3vw] xl:text-[1.8vw] text-linkIt-200 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full">3</li>
                    <li className="flex items-center justify-center text-[2.3vw] xl:text-[1.8vw] text-linkIt-200 h-5 w-5 md:h-7 md:w-7 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 font-bold  bg-white rounded-full">4</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

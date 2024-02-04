import { useTranslation } from "react-i18next";
import { useState } from "react";
import blackArrow from "/Vectores/arrow.png"
import whiteArrow from "/Vectores/white-arrow.png"
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
export default function ModuloG () {
    const { t } = useTranslation();

    const [isActive, setIsActive] = useState(1);
    const isDarkMode = useSelector(
        (state: RootState) => state.darkMode);

    const handleNext = () => { 
        if (isActive === 4) {
            setIsActive(1)
        } else {
            setIsActive(isActive + 1)
        }
    }

    const handlePrev = () => {
        if (isActive === 1) {
            setIsActive(4)
        } else {
            setIsActive(isActive - 1)
        }
    }
        return ( 
            <div className="bg-linkIt-500 p-[7%] dark:bg-linkIt-200 dark:text-white">
                <h3 className="font-bold grid col-span-4 titles-size text-center mb-[5%] font-manrope">{t('¿Por qué elegir LinkIT?')}</h3>
                <div className="grid-cols-4 hidden lg:grid">
                    <h4 className="font-semibold mb-3 text-center subtitles-size font-montserrat">
                    {t('Hasta 5 días')}
                    </h4>
                    <h4 className="font-semibold mb-3 text-center subtitles-size font-montserrat">
                    {t('Más de 50 países')}
                    </h4>
                    <h4 className="font-semibold mb-3 text-center subtitles-size font-montserrat">
                    {t('Más de ')} 100
                    </h4>
                    <h4 className="font-semibold mb-3 text-center subtitles-size font-montserrat">
                    {t('Más de ')} 10.000
                    </h4>
                    <p className="text-center text-size font-montserrat">{t('para contactar a tu')} <br /> {t('próximo talento')}</p>
                    <p className="text-center text-size font-montserrat">{t('para seleccionar ')}<br /> {t('talentos')}</p>
                    <p className="text-center text-size font-montserrat">{t('tipos de lenguajes en los ')} <br />{t('que nos especializamos')}</p>
                    <p className="text-center text-size font-montserrat">{t('candidatos listos para')}<br /> {t('trabajar')}</p>
                    </div>

                    <div className="lg:hidden flex justify-center items-center space-x-4 xs:space-x-10">
                        <img src={isDarkMode ? whiteArrow : blackArrow} className=" w-[20px] rotate-90 cursor-pointer" onClick={handlePrev} alt="arrow" />

                        <div className={`${isActive === 1 ? 'block' : 'hidden'}`}>
                        <h4 className="font-semibold mb-1 text-center subtitles-size font-montserrat">
                    {t('Hasta 5 días')}
                    </h4>
                    <p className="text-center text-size font-montserrat">{t('para contactar a tu')} <br /> {t('próximo talento')}</p>

                        </div>
                        <div className={`${isActive === 2 ? 'block' : 'hidden'}`}>
                        <h4 className="font-semibold mb-1 text-center subtitles-size font-montserrat">
                    {t('Más de 50 países')}
                    </h4>
                    <p className="text-center text-size font-montserrat">{t('para seleccionar ')}<br /> {t('talentos')}</p>

                        </div>
                        <div className={`${isActive === 3 ? 'block' : 'hidden'}`}>
                        <h4 className="font-semibold mb-1 text-center subtitles-size font-montserrat">
                    {t('Más de ')} 100
                    </h4>
                    <p className="text-center text-size font-montserrat">{t('tipos de lenguajes en los ')} <br /> {t('que nos especializamos')}</p>

                        </div>
                        <div className={`${isActive === 4 ? 'block' : 'hidden'}`}>
                        <h4 className="font-semibold mb-1 text-center subtitles-size font-montserrat">
                    {t('Más de ')} 10.000
                    </h4>
                    <p className="text-center  text-size font-montserrat">{t('candidatos listos para')}<br /> {t('trabajar')}</p>
                        </div>
                        <img src={isDarkMode ? whiteArrow : blackArrow} className="w-[20px] -rotate-90 cursor-pointer" onClick={handleNext} alt="arrow" />
                    </div>
                    </div>
    )

}
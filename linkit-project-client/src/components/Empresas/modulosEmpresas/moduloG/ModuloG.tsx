import { useTranslation } from "react-i18next";
import { useState } from "react";
import blackArrow from "/Vectores/arrow.png"
export default function ModuloG () {
    const { t } = useTranslation();

    const [isActive, setIsActive] = useState(1);

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
            <div className="bg-linkIt-500  p-[7%] dark:bg-linkIt-200 dark:text-white">
                <h1 className="font-bold grid col-span-4 text-[1.2rem] xs:text-[1.3rem] ssm:text-[1.7rem] md:text-[2.2rem] xl:text-[2.5rem] text-center mb-[5%] font-manrope">{t('¿Por qué elegir LinkIT?')}</h1>
                <div className="grid-cols-4 hidden lg:grid">
                    <h2 className="font-semibold mb-3 text-center text-[1.3rem] xl:text-[1.5rem] font-montserrat">
                    {t('Hasta 5 días')}
                    </h2>
                    <h2 className="font-semibold mb-3 text-center text-[1.3rem] xl:text-[1.5rem] font-montserrat">
                    {t('Más de 50 países')}
                    </h2>
                    <h2 className="font-semibold mb-3 text-center text-[1.3rem] xl:text-[1.5rem] font-montserrat">
                    {t('Más de ')} 100
                    </h2>
                    <h2 className="font-semibold mb-3 text-center text-[1.3rem] xl:text-[1.5rem] font-montserrat">
                    {t('Más de ')} 10.000
                    </h2>
                    <p className="text-center text-[1rem] xl:text-[1.2rem] font-montserrat">{t('para contactar a tu')} <br /> {t('próximo talento')}</p>
                    <p className="text-center text-[1rem] xl:text-[1.2rem] font-montserrat">{t('para seleccionar ')}<br /> {t('talentos')}</p>
                    <p className="text-center text-[1rem] xl:text-[1.2rem] font-montserrat">{t('tipos de lenguajes en los ')} <br />{t('que nos especializamos')}</p>
                    <p className="text-center  text-[1rem] xl:text-[1.2rem] font-montserrat">{t('candidatos listos para')}<br /> {t('trabajar')}</p>
                    </div>

                    <div className="lg:hidden flex justify-center items-center space-x-4 xs:space-x-10">
                        <img src={blackArrow} className=" w-[15px] xs:w-[20px] h-[15px] xs:h-[20px] rotate-90 cursor-pointer" onClick={handlePrev} alt="arrow" />

                        <div className={`${isActive === 1 ? 'block' : 'hidden'}`}>
                        <h2 className="font-semibold mb-1 text-center text-[1rem] ssm:text-[1.3rem] xl:text-[1.5rem] font-montserrat">
                    {t('Hasta 5 días')}
                    </h2>
                    <p className="text-center text-[0.8rem] xs:text-[1rem] xl:text-[1.2rem] font-montserrat">{t('para contactar a tu')} <br /> {t('próximo talento')}</p>

                        </div>
                        <div className={`${isActive === 2 ? 'block' : 'hidden'}`}>
                        <h2 className="font-semibold mb-1 text-center text-[1rem] ssm:text-[1.3rem] xl:text-[1.5rem] font-montserrat">
                    {t('Más de 50 países')}
                    </h2>
                    <p className="text-center text-[1rem] xl:text-[1.2rem] font-montserrat">{t('para seleccionar ')}<br /> {t('talentos')}</p>

                        </div>
                        <div className={`${isActive === 3 ? 'block' : 'hidden'}`}>
                        <h2 className="font-semibold mb-1 text-center text-[1rem] ssm:text-[1.3rem] xl:text-[1.5rem] font-montserrat">
                    {t('Más de ')} 100
                    </h2>
                    <p className="text-center text-[1rem] xl:text-[1.2rem] font-montserrat">{t('tipos de lenguajes en los ')} {t('que nos especializamos')}</p>

                        </div>
                        <div className={`${isActive === 4 ? 'block' : 'hidden'}`}>
                        <h2 className="font-semibold mb-1 text-center text-[1rem] ssm:text-[1.3rem] xl:text-[1.5rem] font-montserrat">
                    {t('Más de ')} 10.000
                    </h2>
                    <p className="text-center  text-[1rem] xl:text-[1.2rem] font-montserrat">{t('candidatos listos para')}<br /> {t('trabajar')}</p>
                        </div>
                        <img src={blackArrow} className="w-[15px] xs:w-[20px] h-[15px] xs:h-[20px] -rotate-90 cursor-pointer" onClick={handleNext} alt="arrow" />
                    </div>
                    </div>
    )

}
import { useTranslation } from "react-i18next";
export default function ModuloG () {
    const { t } = useTranslation();
        return ( 
            <div className="bg-linkIt-500 grid grid-cols-4 px-[10vw] dark:bg-linkIt-200 dark:text-white">
                <h1 className="font-bold grid col-span-4 text-[2vw] text-center mt-[7vh] mb-[5vh]">{t('¿Por qué elegir LinkIT?')}</h1>
                    <h2 className="font-semibold mb-3 text-center text-[1.2vw]">
                    {t('Hasta 5 días')}
                    </h2>
                    <h2 className="font-semibold mb-3 text-center text-[1.2vw]">
                    {t('Más de 50 países')}
                    </h2>
                    <h2 className="font-semibold mb-3 text-center text-[1.2vw]">
                    {t('Más de ')} 100
                    </h2>
                    <h2 className="font-semibold mb-3 text-center text-[1.2vw]">
                    {t('Más de ')}10.000
                    </h2>
                    <p className="text-center text-[0.9vw]">{t('para contactar a tu')} <br /> {t('próximo talento')}</p>
                    <p className="text-center text-[0.9vw]">{t('para seleccionar ')}<br /> {t('talentos')}</p>
                    <p className="text-center text-[0.9vw]">{t('tipos de lenguajes en los ')} <br />{t('que nos especializamos')}</p>
                    <p className="text-center mb-[10vh] text-[0.9vw]">{t('candidatos listos para')}<br /> {t('trabajar')}</p>
                    </div>
    )

}
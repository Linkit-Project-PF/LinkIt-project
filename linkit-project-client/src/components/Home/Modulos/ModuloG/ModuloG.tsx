import tecnologies from "../../../../Utils/technologies.json"
import { useTranslation } from "react-i18next";
import CardTech from "./CardTech/CardTech"

interface Technology {
    id: number;
    name: string;
    logo: string;
}

export default function ModuloG() {
    const { t } = useTranslation();
        return (
            <div className="dark:bg-linkIt-400 p-[6%] overflow-hidden">
                <h1 className="flex justify-center font-bold font-manrope text-[3vw] mb-[5%] dark:text-white px-[25%] text-center">{t('Talento especializado en más de 100 tecnologías')}</h1>
                <div className="flex flex-row flex-wrap justify-center items-center px-[4%] 2xl:px-[7%] mb-[5%]">
                    {
                        tecnologies.map(({ name, logo, id }: Technology) => {
                            return (
                                <CardTech
                                    key={id}
                                    id={id}
                                    name={name}
                                    logo={logo}
                                />
                            )
                        })
                    }
                </div>
                <div className="flex justify-center items-center mb-12">
                    <button className="background-button">{t('Conoce más')}</button>
                </div>
            </div>
        )
}

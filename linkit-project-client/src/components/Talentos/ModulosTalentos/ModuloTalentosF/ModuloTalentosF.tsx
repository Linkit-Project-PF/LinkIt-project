import CardTech from "../../../Home/Modulos/ModuloG/CardTech/CardTech";
import tecnologies from "../../../../Utils/technologies.json"
import { useTranslation } from "react-i18next";

interface Technology {
    name: string;
    logo: string;
}

export default function ModuloTalentosF() {
    const {t} = useTranslation();
    return (
        <div>
            <h1 className="flex justify-center text-5xl font-bold mt-20">{t('Oportunidades en más de 100 tecnologías')}</h1>
            <div className=" flex  flex-row flex-wrap justify-center items-center p-12 mx-56">
                {
                    tecnologies.map(({ name, logo }: Technology, index) => {
                        return (
                            <CardTech
                                id={index}
                                name={name}
                                logo={logo}
                            />
                        )
                    })
                }
            </div>
            <div className="flex justify-center items-center mb-12">
                <button className="bg-linkIt-300 rounded-lg p-2 h-10 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out mb-2 px-12">{t('Conoce más')}</button>
            </div>
        </div>
    )
}

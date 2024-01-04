import technologies from "../technologies.json";
import { useTranslation } from "react-i18next";
import CardTech from "./CardTech/CardTech";

interface Technology {
    id: number;
    name: string;
    logo: string;
}



export default function Technologies() { 
    const { t } = useTranslation();

    return (
        <div className="p-[7%] dark:bg-linkIt-400">
             <h1 className="flex justify-center font-bold font-manrope text-[1rem] xs:text-[1.1rem] ssm:text-[2.2rem] xs:px-[9%] md:px-[12%] lg:px-[20%] xl:px-[27%] 1xl:px-[28%] 2xl:px-[34%] mb-[5%] dark:text-white text-center">{t('Talento especializado en más de 100 tecnologías')}</h1>
             <div className="flex flex-row flex-wrap justify-center items-center px-[4%] 2xl:px-[7%]">
                    {
                        technologies.map(({ name, logo, id }: Technology) => {
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
        </div>
    )
}
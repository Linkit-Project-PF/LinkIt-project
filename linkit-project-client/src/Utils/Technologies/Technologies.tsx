import technologies from "../technologies.json";
import { useTranslation } from "react-i18next";
import CardTech from "./CardTech/CardTech";
import { useState, useEffect } from "react";
import grayArrow from "/Vectores/Gray-Arrow.svg"


interface Technology {
    id: number;
    name: string;
    logo: string;
}



export default function Technologies() { 

    const { t } = useTranslation();

    const [isActive, setIsActive] = useState(1);

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(12);

    const technologiesToRender = technologies.slice(startIndex, endIndex);

    const handleNext = () => {
        if (isActive < 4) {
          setIsActive(isActive + 1);
        } else {
          setIsActive(1);
        }
      };
      
      const handlePrev = () => {
        if (isActive > 1) {
          setIsActive(isActive - 1);
        } else {
          setIsActive(4);
        }
      };
      
      useEffect(() => {
        switch (isActive) {
          case 1:
            setStartIndex(0);
            setEndIndex(12);
            break;
          case 2:
            setStartIndex(12);
            setEndIndex(24);
            break;
          case 3:
            setStartIndex(24);
            setEndIndex(36);
            break;
          case 4:
            setStartIndex(36);
            setEndIndex(technologies.length);
            break;
          default:
            setStartIndex(0);
            setEndIndex(12);
            break;
        }
      }, [isActive]);

    return (
        <div className="p-[7%] dark:bg-linkIt-400">
             <h1 className="flex justify-center font-bold font-manrope titles-size xs:px-[9%] md:px-[12%] lg:px-[20%] xl:px-[27%] 1xl:px-[28%] 2xl:px-[34%] mb-[5%] dark:text-white text-center">{t('Talento especializado en más de 100 tecnologías')}</h1>
           
                <div className=" hidden lg:grid">
             <div className="flex flex-row flex-wrap justify-center items-center 2xl:px-[7%]">
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
                <span className="flex justify-self-center font-bold"></span>
                </div>
            
                    <div className="flex justify-center lg:hidden">
                        <img className="relative rotate-180 w-[20px] cursor-pointer" onClick={handlePrev} src={grayArrow} alt="gray-Arrow" />
                        <div className="flex flex-wrap justify-center items-center w-[100%] px-2 ssm:w-[83%] ssm:mx-4 md:w-[76%] ">
                        {
                        technologiesToRender.map(({ name, logo, id }: Technology) => {
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
                        <img className="relative w-[20px] cursor-pointer" onClick={handleNext} src={grayArrow} alt="gray-Arrow" />
                    </div>
            
        </div>
    )
}
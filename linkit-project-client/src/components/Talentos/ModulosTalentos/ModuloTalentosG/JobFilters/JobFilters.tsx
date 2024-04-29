import { useEffect, useState } from "react";
import {
  SelectCountryEs,
  SelectCountryEn,
} from "./selectCountry/SelectCountry";
import { JobCardProps } from "../JobCard/JobCard";
import "./JobFilter.css";
import { useTranslation } from "react-i18next";
//import { SUPERADMN_ID } from '../../../../../env';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "../../../../../redux/features/JobCardsSlice";
import { CustomFlowbiteTheme, Dropdown } from "flowbite-react";

const SUPERADMN_ID = import.meta.env.VITE_SUPERADMN_ID

const customTheme: CustomFlowbiteTheme['dropdown'] = {
  "arrowIcon": "ml-2 h-4 w-4",
  "content": "py-1 focus:outline-none text-[0.6rem]  ssm:text-[0.9rem] md:text-[1rem] bg-white text-black lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
  "floating": {
    "animation": "transition-opacity",
    "arrow": {
      "base": "absolute z-10 h-2 w-2 rotate-45",
      "style": {
        "dark": "bg-gray-900 dark:bg-gray-700",
        "light": "bg-white",
        "auto": "bg-white dark:bg-gray-700"
      },
      "placement": "-4px"
    },
    "base": "z-10 w-fit rounded divide-y divide-gray-200 focus:outline-none text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
    "content": "py-1 text-sm text-gray-700 dark:text-gray-200 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
    "divider": "my-1 h-px",
    "header": "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
    "hidden": "invisible opacity-0",
    "item": {
      "container": " text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
      "base": " text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem] flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      "icon": "mr-2 h-4 w-4"
    },
    "style": {
      "dark": "",
      "light": "border",
      "auto": "border text-gray-900 dark:border-none"
    },
    "target": "bg-transparent w-full justify-start text-left focus:outline-none text-[0.4rem] ssm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem]"
  },
  "inlineWrapper": " flex items-center w-full h-fit rounded-md p-3 ssm:p-2.5 sm:p-2 lg:p-2.5 xl:p-2 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]"
};
interface OptionType {
  value: string;
  label: string;
}

const JobFilters = () => {
  
  const {t} = useTranslation();
  
  const allJobOffers = useSelector(
    (state: any) => state.jobCard.allJobOffers as JobCardProps[]
  );
  
  const allStackTechnologies = useSelector(
    (state: any) => state.resources.stackTechnologies as string[]
  );
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { language } = i18n;
  const [stack, setStack] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [modality, setModality] = useState<string>("");

  const [stackValue, setStackValue] = useState<string[]>([]);
  const [typeValue, setTypeValue] = useState<string>("");
  const [modalityValue, setModalityValue] = useState<string>("");


  const [country, setCountry] = useState<OptionType>({ value: "", label: "" });


  const handleFilters = async () => {
    const url = `https://linkit-server.onrender.com/jds/find?${
      stackValue.length >= 1 ? `stack=${stackValue.map((tech) => `${tech}`)}` : ""
    }${
      language === "en"
        ? `${
            type !== "Type" ? `&type=${typeValue.toLocaleLowerCase()}` : ``
          }`
        : `${
            type !== "Tipo" ? `&type=${typeValue.toLocaleLowerCase()}` : ``
          }`
    }${
      language === "en"
        ? `${
            modality !== "Modality"
              ? `&modality=${modalityValue.toLocaleLowerCase()}`
              : ``
          }`
        : `${
            modality !== "Modalidad"
              ? `&modality=${modalityValue.toLocaleLowerCase()}`
              : ``
          }`
    }${country.value !== "" ? `&location=${country.value}` : ""}`

    try {
      const response = await axios.get(url, {
        headers:{
          Authorization: `Bearer ${SUPERADMN_ID}`,
          'Accept-Language': sessionStorage.getItem('lang')
        }
      })
      dispatch(applyFilters(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleStack = (stack: string) => {
    if(stackValue.includes(stack)){
      setStackValue(stackValue.filter((item)=>item!==stack))
    }else{
      setStackValue([...stackValue, stack])
    }
  }


  useEffect(() => {
    setType(language === "en" ? "Type" : "Tipo");
    setStack(language === "en" ? "Stack" : "Stack");
    setModality(language === "en" ? "Modality" : "Modalidad");
    setCountry(
      language === "en"
        ? { value: "", label: "Location" }
        : { value: "", label: "Ubicación" }
    );
  }, [language]);


  return (
    <div className="w-full">
    <div className="hidden lg:flex rounded-[7px] p-4 my-[5%] h-[4rem] items-center whitespace-nowrap bg-white text-linkIt-400">
      <div className="grid grid-cols-4 w-full font-montserrat font-semibold justify-items-center items-center">
        <div>
          <Dropdown label={stack} inline theme={customTheme} className="h-40 overflow-y-scroll font-medium ">
          {allStackTechnologies?.map((stack: any, index: number) => {
            return (
                <li
                  key={index}
                  onClick={() => handleStack(stack.name)}
                  >
                      <input
                      className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0 cursor-pointer font-normal"
                        id={`ch-${index}`}
                        type="checkbox"
                        checked={stackValue.includes(stack.name)}
                        readOnly
                        onClick={(e)=> e.stopPropagation()}
                        />
                        <label htmlFor={stack.name} className="cursor-pointer w-full">
                  {stack.name}</label>
                </li>
              
            );
          })}
          </Dropdown>
          </div>
          <div>
         <Dropdown label={type} inline theme={customTheme} className=" font-medium">
          <li
            onClick={() => {
              setType("Part-time"), setTypeValue("part-time");
            }}
            className="cursor-pointer w-full px-2"
          >
            Part-time
          </li>
          <li
            onClick={() => {
              setType("Full-time"), setTypeValue("full-time");
            }}
            className="cursor-pointer w-full px-2"
          >
            Full-time
          </li>
          <li
            onClick={() => {
              setType("Freelance"), setTypeValue("freelance");
            }}
            className="cursor-pointer w-full px-2"
          >
            Freelance
          </li>
      </Dropdown>
      </div>


      
      <section>
        {language === "en" ? (
          <SelectCountryEn
            setCountry={setCountry}
            country={country}
          />
        ) : (
          <SelectCountryEs
            setCountry={setCountry}
            country={country}
          />
        )}
      </section>
      


      <div>
      <Dropdown label={modality} inline theme={customTheme} className="font-medium"> 
          {language === "en" ? (
            <li
              onClick={() => {
                setModality("Remote (Local)"), setModalityValue("remote-local");
              }}
              className="cursor-pointer w-full px-2"
            >
              Remote (Local)
            </li>
          ) : (
            <li
              onClick={() => {
                setModality("Remoto (Local)"), setModalityValue("remote-local");
              }}
              className="cursor-pointer w-full px-2"
            >
              Remoto (Local)
            </li>
          )}
          {language === "en" ? (
            <li
              onClick={() => {
                setModality("Remote (Regional)"), setModalityValue("remote-regional");
              }}
              className="cursor-pointer w-full px-2"
            >
              Remote (Regional)
            </li>
          ) : (
            <li
              onClick={() => {
                setModality("Remoto (Regional)"), setModalityValue("remote-regional");
              }}
              className="cursor-pointer w-full px-2"
            >
              Remoto (Regional)
            </li>
          )}
           {language === "en" ? (
            <li
              onClick={() => {
                setModality("Hybrid"), setModalityValue("hybrid");
              }}
              className="cursor-pointer w-full px-2"
            >
              Hybrid
            </li>
          ) : (
            <li
              onClick={() => {
                setModality("Híbrido"), setModalityValue("hybrid");
              }}
              className="cursor-pointer w-full px-2"
            >
              Híbrido
            </li>
          )}
</Dropdown>
</div>

</div>
      <button
        className="background-button whitespace-nowrap mr-3"
        onClick={() => handleFilters()}
      >
        {t('Encontrar vacante')}
      </button>
      <button
        className="bg-linkIt-300 text-white rounded-full py-[.4rem] px-[.4rem] border-[2px] border-linkIt-300  transition-all duration-300 ease-in-out font-montserrat font-[500] hover:scale-105"
        onClick={() => {
          dispatch(applyFilters(allJobOffers)),
            setStack("Stack"),
            setType(language === "en" ? "Type" : "Tipo"),
            setModality(language === "en" ? "Modality" : "Modalidad"),
            setCountry(
              language === "en"
                ? { value: "", label: "Location" }
                : { value: "", label: "Ubicación" }
            );
        }}
      >
        <img
          src="/Vectores/reset.svg"
          alt="reset-filters"
          className="w-[1.2rem] p-0.5 hover:rotate-180 transition-all duration-300 ease-in-out"
        />
      </button>
    </div>

  <div className="lg:hidden">
<div className=" flex rounded-[7px] p-4 my-7 h-[3rem] items-center whitespace-nowrap bg-linkIt-500 text-linkIt-400 w-full">
<div className="grid grid-cols-2 w-full font-montserrat font-semibold justify-items-center items-center">
  <div>
<Dropdown label={stack} inline theme={customTheme} className="h-40 overflow-y-scroll font-medium">
          {allStackTechnologies?.map((stack: any, index: number) => {
            return (
                <li
                  key={index}
                  onClick={() => handleStack(stack.name)}
                  >
                      <input
                      className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0 cursor-pointer font-normal"
                        id={`ch-${index}`}
                        type="checkbox"
                        checked={stackValue.includes(stack.name)}
                        readOnly
                        onClick={(e)=> e.stopPropagation()}
                        />
                        <label htmlFor={stack.name} className="cursor-pointer w-full">
                  {stack.name}</label>
                </li>
              
            );
          })}
          </Dropdown>
          </div>
 

        <div>
         <Dropdown label={type} inline theme={customTheme} className=" font-medium">
          <li
            onClick={() => {
              setType("Part-time"), setTypeValue("part-time");
            }}
            className="cursor-pointer w-full px-2"
          >
            Part-time
          </li>
          <li
            onClick={() => {
              setType("Full-time"), setTypeValue("full-time");
            }}
            className="cursor-pointer w-full px-2"
          >
            Full-time
          </li>
          <li
            onClick={() => {
              setType("Freelance"), setTypeValue("freelance");
            }}
            className="cursor-pointer w-full px-2"
          >
            Freelance
          </li>
      </Dropdown>
      </div>

  </div>
  </div>
<div className=" flex rounded-[7px] p-4 my-7 h-[3rem] items-center whitespace-nowrap bg-linkIt-500 text-linkIt-400 w-full">
<div className="grid grid-cols-2 w-full font-montserrat font-semibold justify-items-center items-center">
<section>
        {language === "en" ? (
          <SelectCountryEn
            setCountry={setCountry}
            country={country}
          />
        ) : (
          <SelectCountryEs
            setCountry={setCountry}
            country={country}
          />
        )}
      </section>
      


      <div>
      <Dropdown label={modality} inline theme={customTheme} className="font-medium"> 
          {language === "en" ? (
            <li
              onClick={() => {
                setModality("Remote"), setModalityValue("remote");
              }}
              className="cursor-pointer w-full px-2"
            >
              Remote
            </li>
          ) : (
            <li
              onClick={() => {
                setModality("Remoto"), setModalityValue("remote");
              }}
              className="cursor-pointer w-full px-2"
            >
              Remoto
            </li>
          )}
          {language === "en" ? (
            <li
              onClick={() => {
                setModality("Presential"), setModalityValue("on-site");
              }}
              className="cursor-pointer w-full px-2"
            >
              Presential
            </li>
          ) : (
            <li
              onClick={() => {
                setModality("Presencial"), setModalityValue("on-site");
              }}
              className="cursor-pointer w-full px-2"
            >
              Presencial
            </li>
          )}
</Dropdown>
</div>
  </div>
  </div>

<div className="relative flex items-center justify-center whitespace-nowrap z-[1] w-full">
  
      <button
        className="background-button whitespace-nowrap mr-3 relative hover:text-linkIt-200 hover:bg-white"
        onClick={() => handleFilters()}
      >
        {t('Encontrar vacante')}
      </button>

      <button
        className="bg-linkIt-300 text-white rounded-full py-[.4rem] px-[.4rem] border-[2px] border-linkIt-300  transition-all duration-300 ease-in-out font-montserrat hover:scale-105"
        onClick={() => {
          dispatch(applyFilters(allJobOffers)),
            setStack("Stack"),
            setType(language === "en" ? "Type" : "Tipo"),
            setModality(language === "en" ? "Modality" : "Modalidad"),
            setCountry(
              language === "en"
                ? { value: "", label: "Location" }
                : { value: "", label: "Ubicación" }
            );
        }}
      >
        <img
          src="/Vectores/reset.svg"
          alt="reset-filters"
          className="w-[1.2rem] p-0.5 hover:rotate-180 transition-all duration-300 ease-in-out"
        />
      </button>
  </div>
  </div>
  </div>
  );
};

export default JobFilters;

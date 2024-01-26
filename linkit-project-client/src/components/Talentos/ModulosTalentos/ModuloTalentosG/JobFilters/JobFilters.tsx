import { useEffect, useState } from "react";
import {
  SelectCountryEs,
  SelectCountryEn,
} from "./selectCountry/SelectCountry";
import { JobCardProps } from "../JobCard/JobCard";
import "./JobFilter.css";
import { useTranslation } from "react-i18next";
import { SUPERADMN_ID } from '../../../../../env';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "../../../../../redux/features/JobCardsSlice";
import { Dropdown } from "flowbite-react";

interface OptionType {
  value: string;
  label: string;
}

const JobFilters = () => {

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
    <div>
    <div className="hidden lg:flex rounded-[7px] p-4 my-7 h-[4rem] items-center whitespace-nowrap bg-linkIt-500 text-linkIt-400 w-full">
      <div className="grid grid-cols-4 w-full font-montserrat font-semibold justify-items-center items-center">
          <Dropdown label={stack} inline className="h-40 overflow-y-scroll font-medium">
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
          

         <Dropdown label={type} inline className=" font-medium">
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
      



      <Dropdown label={modality} inline> 
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
      <button
        className="background-button whitespace-nowrap mr-3"
        onClick={() => handleFilters()}
      >
        Encontrar Vacante
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
<div className=" flex rounded-[7px] p-4 my-7 h-[4rem] items-center whitespace-nowrap bg-linkIt-500 text-linkIt-400 w-full">
<div className="grid grid-cols-2 w-full font-montserrat font-semibold justify-items-center items-center">
<Dropdown label={stack} inline className="h-40 overflow-y-scroll font-medium">
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
          

         <Dropdown label={type} inline className=" font-medium">
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
<div className=" flex rounded-[7px] p-4 my-7 h-[4rem] items-center whitespace-nowrap bg-linkIt-500 text-linkIt-400 w-full">
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
      



      <Dropdown label={modality} inline> 
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
<div className=" flex items-center justify-center whitespace-nowrap">
  
      <button
        className="background-button whitespace-nowrap mr-3"
        onClick={() => handleFilters()}
      >
        Encontrar Vacante
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
  </div>
  </div>
  );
};

export default JobFilters;

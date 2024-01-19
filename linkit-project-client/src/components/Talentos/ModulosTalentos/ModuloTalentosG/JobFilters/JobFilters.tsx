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
    <div className=" flex justify-around items-center w-full bg-linkIt-500 font-montserrat text-linkIt-400 font-[500] shadow rounded-lg p-4 h-[4rem]">
      <div className="grid grid-cols-4 w-full">
        <div className="w-full items-center flex">
          <Dropdown label={stack} inline>

          
          {allStackTechnologies?.map((stack: any, index: number) => {
            return (
            
                <li
                  key={index}
                  className="flex flex-row justify-between items-center"
                  onClick={() => handleStack(stack.name)}
                  >
                  {stack.name}
                  <div className="content">
                    <label className="checkBox">
                      <input
                        id={`ch-${index}`}
                        type="checkbox"
                        checked={stackValue.includes(stack.name)}
                        readOnly
                        onClick={(e)=> e.stopPropagation()}
                        />
                      <div className="transition"></div>
                    </label>
                  </div>
                </li>
              
            );
          })}
          </Dropdown>
          </div>

          <div className="w-full items-center flex">
         <Dropdown label={type} inline>
          <li
            onClick={() => {
              setType("Part-time"), setTypeValue("part-time");
            }}
          >
            Part-time
          </li>
          <li
            onClick={() => {
              setType("Full-time"), setTypeValue("full-time");
            }}
          >
            Full-time
          </li>
          <li
            onClick={() => {
              setType("Freelance"), setTypeValue("freelance");
            }}
          >
            Freelance
          </li>
      </Dropdown>
      </div>


      <div className="w-full items-center flex">
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
      </div>


      <div className="w-full items-center flex">
      <Dropdown label={modality} inline> 
          {language === "en" ? (
            <li
              onClick={() => {
                setModality("Remote"), setModalityValue("remote");
              }}
            >
              Remote
            </li>
          ) : (
            <li
              onClick={() => {
                setModality("Remoto"), setModalityValue("remote");
              }}
            >
              Remoto
            </li>
          )}
          {language === "en" ? (
            <li
              onClick={() => {
                setModality("Presential"), setModalityValue("on-site");
              }}
            >
              Presential
            </li>
          ) : (
            <li
              onClick={() => {
                setModality("Presencial"), setModalityValue("on-site");
              }}
            >
              Presencial
            </li>
          )}
</Dropdown>
   </div>

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
  );
};

export default JobFilters;

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

  const [stackOpen, setStackOpen] = useState<boolean>(false);
  const [typeOpen, setTypeOpen] = useState<boolean>(false);
  const [modalityOpen, setModalityOpen] = useState<boolean>(false);

  const stackRef = useRef<HTMLButtonElement | null>(null);
  const typeRef = useRef<HTMLButtonElement | null>(null);
  const modalityRef = useRef<HTMLButtonElement | null>(null);

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

  const dropdownVariants = {};

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

  useEffect(() => {
    const handler = (event: any) =>{
      if(!stackRef.current?.contains(event.target) && !event.target.matches('.dropdown-stack *')){
        setStackOpen(false)
      }
      if(!typeRef.current?.contains(event.target) && !event.target.matches('.dropdown-type *')){
        setTypeOpen(false)
      }
      if(!modalityRef.current?.contains(event.target) && !event.target.matches('.dropdown-modality *')){
        setModalityOpen(false)
      }
    }
    document.addEventListener("mousedown", handler);
  },[])

  return (
    <div className="flex w-[90%] justify-between items-center bg-white font-montserrat text-linkIt-400 font-[500] shadow rounded-lg p-4 h-[3.5rem]">
      <section className="relative">
        <button
          className="flex flex-row justify-center items-center gap-[1rem]"
          ref={stackRef}
          onClick={() => {
            setStackOpen(!stackOpen);
            setTypeOpen(false);
            setModalityOpen(false);
          }}
        >
          {stack}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] mr-[-10%] ${
              stackOpen  ? "rotate" : "normal"
            }`}
          />
          <hr className="w-[5vw] bg-linkIt-500 h-[2px] rotate-90 border-none" />
        </button>
        <motion.ul
          className={`bg-white ${
            stackOpen ? "dropdown-stack" : "hidden"
          } rounded-b-[8px] z-[10]`}
          variants={dropdownVariants}
          initial="closed"
          animate={stackOpen}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {allStackTechnologies?.map((stack: any, index: number) => {
            return (
              <>
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
                        onClick={(e)=> e.stopPropagation()}
                      />
                      <div className="transition"></div>
                    </label>
                  </div>
                </li>
              </>
            );
          })}
        </motion.ul>
      </section>
      <section className="relative">
        <button
          className="flex flex-row justify-center items-center gap-[1rem] whitespace-nowrap"
          onClick={() => {
            setTypeOpen(!typeOpen);
            setStackOpen(false);
            setModalityOpen(false);
          }}
          ref={typeRef}
        >
          {type}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] mr-[-10%] ${
              typeOpen ? "rotate" : "normal"
            }`}
          />
          <hr className="w-[5vw] bg-linkIt-500 h-[2px] rotate-90 border-none" />
        </button>
        <motion.ul
          className={`bg-white ${
            typeOpen ? "dropdown-type" : "hidden"
          } rounded-b-[8px] z-[10]`}
          variants={dropdownVariants}
          initial="closed"
          animate={typeOpen}
          onClick={() => {
            setTypeOpen(false);
          }}
        >
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
        </motion.ul>
      </section>
      <section>
        {language === "en" ? (
          <SelectCountryEn
            setCountry={setCountry}
            country={country}
            setStackOpen={setStackOpen}
            setModalityOpen={setModalityOpen}
            setTypeOpen={setTypeOpen}
          />
        ) : (
          <SelectCountryEs
            setCountry={setCountry}
            country={country}
            setStackOpen={setStackOpen}
            setModalityOpen={setModalityOpen}
            setTypeOpen={setTypeOpen}
          />
        )}
      </section>
      <section className="relative">
        <button
          className="flex flex-row justify-center items-center gap-[1rem] whitespace-nowrap"
          onClick={() => {
            setModalityOpen(!modalityOpen);
            setTypeOpen(false);
            setStackOpen(false);
          }}
          ref={modalityRef}
        >
          {modality}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] mr-[-10%] ${
              modalityOpen  ? "rotate" : "normal"
            }`}
          />
          <hr className="w-[5vw] bg-linkIt-500 h-[2px] rotate-90 border-none" />
        </button>
        <motion.ul
          className={`bg-white ${
            modalityOpen  ? "dropdown-modality" : "hidden"
          } rounded-b-[8px] z-[10]`}
          variants={dropdownVariants}
          initial="closed"
          animate={modalityOpen}
          onClick={() => {
            setModalityOpen(false);
          }}
        >
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
        </motion.ul>
      </section>
      <button
        className=" bg-linkIt-300 text-white rounded-[8px] py-[.4rem] px-[.8rem] border-[2px] border-linkIt-300 hover:bg-white hover:text-linkIt-300 transition-all duration-300 ease-in-out font-montserrat font-[500] ml-[3%]"
        onClick={() => handleFilters()}
      >
        Encontrar Vacante
      </button>
      <button
        className="bg-linkIt-300 text-white rounded-[8px] py-[.4rem] px-[.4rem] border-[2px] border-linkIt-300  transition-all duration-300 ease-in-out font-montserrat font-[500] hover:scale-105"
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
          className="w-[1.4rem] hover:rotate-180 transition-all duration-300 ease-in-out"
        />
      </button>
    </div>
  );
};

export default JobFilters;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SelectCountryEs,
  SelectCountryEn,
} from "./selectCountry/SelectCountry";
import { JobCardProps } from "../JobCard/JobCard";
import "./JobFilter.css";
import { useTranslation } from "react-i18next";
import { SUPERADMN_ID } from "../../../../../env";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "../../../../../redux/features/JobCardsSlice";

interface OptionType {
  value: string;
  label: string;
}

const JobFilters = () => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation();
  const { language } = i18n;
  const [stack, setStack] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [modality, setModality] = useState<string>("");

  const [stackValue, setStackValue] = useState<string>("");
  const [typeValue, setTypeValue] = useState<string>("");
  const [modalityValue, setModalityValue] = useState<string>("");

  const [stackOpen, setStackOpen] = useState<string>("closed");
  const [typeOpen, setTypeOpen] = useState<string>("closed");
  const [modalityOpen, setModalityOpen] = useState<string>("closed");

  const [country, setCountry] = useState<OptionType>({ value: "", label: "" });

  const allJobOffers = useSelector((state: any) => state.jobCard.allJobOffers as JobCardProps[])

  const handleFilters = async () => {
    try {
      const response = await axios.get(
        `https://linkit-server.onrender.com/jds/find?${
          stack !== "Stack" ? `stack=${stackValue}` : ""
        }${
          language === "en"
            ? `${type !== "Type" ? `&type=${typeValue.toLocaleLowerCase()}` : ``}`
            : `${type !== "Tipo" ? `&type=${typeValue.toLocaleLowerCase()}` : ``}`
        }${
          language === 'en'
          ?`${modality !== "Modality" ? `&modality=${modalityValue.toLocaleLowerCase()}` : ``}`
          :`${modality  !== "Modalidad" ? `&modality=${modalityValue.toLocaleLowerCase()}` : ``}`
        }${
          country.value !== ""
            ? `&location=${country.value}`
            : ""
        }`,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
          },
        }
      );
      dispatch(applyFilters(response.data))
    } catch (error) {
      console.log(error)
    }
  };

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

  return (
    <div className="flex w-[90%] justify-between items-center bg-white font-montserrat text-linkIt-400 font-[500] shadow rounded-lg p-4 h-[3.5rem]">
      <section className="relative">
        <button
          className="flex flex-row justify-center items-center gap-[1rem]"
          onClick={() =>
            setStackOpen(stackOpen === "closed" ? "open" : "closed")
          }
        >
          {stack}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] mr-[-10%] ${
              stackOpen === "open" ? "rotate" : "normal"
            }`}
          />
          <hr className="w-[5vw] bg-linkIt-500 h-[2px] rotate-90 border-none" />
        </button>
        <motion.ul
          className={`bg-white ${
            stackOpen === "open" ? "dropdown-stack" : "hidden"
          } rounded-b-[8px]`}
          variants={dropdownVariants}
          initial="closed"
          animate={stackOpen}
          onClick={() => setStackOpen("closed")}
        >
          <li onClick={() => {setStack("Frontend"), setStackValue('frontend')}}>FrontEnd</li>
          <li onClick={() => {setStack("Backend"), setStackValue('backend')}}>BackEnd</li>
          <li onClick={() => {setStack("FullStack"), setStackValue('fullstack')}}>FullStack</li>
        </motion.ul>
      </section>
      <section className="relative">
        <button
          className="flex flex-row justify-center items-center gap-[1rem] whitespace-nowrap"
          onClick={() => setTypeOpen(typeOpen === "closed" ? "open" : "closed")}
        >
          {type}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] mr-[-10%] ${
              typeOpen === "open" ? "rotate" : "normal"
            }`}
          />
          <hr className="w-[5vw] bg-linkIt-500 h-[2px] rotate-90 border-none" />
        </button>
        <motion.ul
          className={`bg-white ${
            typeOpen === "open" ? "dropdown-type" : "hidden"
          } rounded-b-[8px]`}
          variants={dropdownVariants}
          initial="closed"
          animate={typeOpen}
        >
          <li onClick={() => {setType("Part-time"), setTypeValue('part-time')}}>Part-time</li>
          <li onClick={() => {setType("Full-time"), setTypeValue('full-time')}}>Full-time</li>
          <li onClick={() => {setType("Freelance"), setTypeValue('freelance')}}>Freelance</li>
        </motion.ul>
      </section>
      <section>
        {language === "en" ? (
          <SelectCountryEn setCountry={setCountry} country={country} />
        ) : (
          <SelectCountryEs setCountry={setCountry} country={country} />
        )}
      </section>
      <section className="relative">
        <button
          className="flex flex-row justify-center items-center gap-[1rem] whitespace-nowrap"
          onClick={() =>
            setModalityOpen(modalityOpen === "closed" ? "open" : "closed")
          }
        >
          {modality}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] mr-[-10%] ${
              modalityOpen === "open" ? "rotate" : "normal"
            }`}
          />
          <hr className="w-[5vw] bg-linkIt-500 h-[2px] rotate-90 border-none" />
        </button>
        <motion.ul
          className={`bg-white ${
            modalityOpen === "open" ? "dropdown-modality" : "hidden"
          } rounded-b-[8px]`}
          variants={dropdownVariants}
          initial="closed"
          animate={modalityOpen}
        >
          {language === "en" ? (
            <li onClick={() => {setModality("Remote"), setModalityValue('remote')}}>Remote</li>
          ) : (
            <li onClick={() => {setModality("Remoto"), setModalityValue('remote')}}>Remoto</li>
          )}
          {language === "en" ? (
            <li onClick={() => {setModality("Presential"), setModalityValue('on-site')}}>Presential</li>
          ) : (
            <li onClick={() => {setModality("Presencial"), setModalityValue('on-site')}}>Presencial</li>
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
      onClick={()=> {dispatch(applyFilters(allJobOffers)), 
      setStack('Stack'),
      setType(language === 'en' ? 'Type' : 'Tipo'),
      setModality(language === 'en' ? 'Modality' : 'Modalidad'),
      setCountry(language === 'en' ? { value: "", label: "Location" } : { value: "", label: "Ubicación" })
      }}
      >
        <img src="/Vectores/reset.svg" alt="reset-filters" className="w-[1.4rem] hover:rotate-180 transition-all duration-300 ease-in-out" />
      </button>
    </div>
  );
};

export default JobFilters;

import { useState } from "react";
import { motion } from "framer-motion";
import {SelectCountryEs} from "./selectCountry/SelectCountry";
import './JobFilter.css'

const dropdownVariants = {
  open: { 
    opacity: 1,
     y: 0,
    transition: {
      type: "spring",
      duration: .8
    }

    },
  closed: {  opacity: 0,
    y: -10,
    transition: {
      type: "spring",
      duration: .8
    } 
  },
}


const JobFilters = () => {
  const [stack, setStack] = useState<string>("Stack");
  const [type, setType] = useState<string>("Tipo");
  const [location, setLocation] = useState<string>("Ubicación");
  const [modality, setModality] = useState<string>("Modalidad");
  const [stackOpen, setStackOpen] = useState<string>('closed');
  const [typeOpen, setTypeOpen] = useState<string>('closed');
  const [locationOpen, setLocationOpen] = useState<string>('closed');
  const [modalityOpen, setModalityOpen] = useState<string>('closed');

  return (
    <div className="flex w-[90%] justify-between items-center bg-white font-montserrat text-linkIt-400 font-[500] shadow rounded-lg p-4 h-[3.5rem]">
      <section className="relative">
        <button
          className="flex flex-row justify-center items-center gap-[1rem]"
          onClick={() => setStackOpen(stackOpen === 'closed' ? 'open' : 'closed')}
        >
          {stack}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] mr-[-10%] ${stackOpen === 'open' ? "rotate" : "normal"}`}
          />
          <hr
          className="w-[5vw] bg-linkIt-500 h-[2px] rotate-90 border-none" 
          />
        </button>
        <motion.ul 
        className={`bg-white ${stackOpen === 'open' ?'dropdown-stack':'hidden'} rounded-b-[8px]`}
        variants={dropdownVariants}
        initial="closed"
        animate={stackOpen}
        >
          <li onClick={()=>setStack('Frontend')}>FrontEnd</li>
          <li onClick={()=>setStack('Backend')}>BackEnd</li>
          <li onClick={()=>setStack('FullStack')}>FullStack</li>
        </motion.ul>
      </section>
      <section className="relative">
        <button
          className="flex flex-row justify-center items-center gap-[1rem] whitespace-nowrap"
          onClick={() => setTypeOpen(typeOpen === 'closed' ? 'open' : 'closed')}
        >
          {type}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] mr-[-10%] ${typeOpen === 'open' ? "rotate" : "normal"}`}
          />
          <hr
          className="w-[5vw] bg-linkIt-500 h-[2px] rotate-90 border-none" 
          />
        </button>
        <motion.ul 
        className={`bg-white ${typeOpen === 'open' ?'dropdown-type':'hidden'} rounded-b-[8px]`}
        variants={dropdownVariants}
        initial="closed"
        animate={typeOpen}
        >
          <li onClick={()=>setType('Part-time')}>Part-time</li>
          <li onClick={()=>setType('Full-time')}>Full-time</li>
          <li onClick={()=>setType('Freelance')}>Freelance</li>
        </motion.ul>
      </section>
      <section>
        <SelectCountryEs />
      </section>
      <section>
        <button 
        className="flex flex-row justify-center items-center gap-[1rem]"
        onClick={() => setModalityOpen(locationOpen === 'closed' ? 'open' : 'closed')}
        >
          {modality}{" "}
          <img
            src="/Vectores/dropdown.png"
            alt="dropdown-arrow"
            className={`w-[1.1rem] ml-[30%] ${modalityOpen? 'rotate': 'normal'}`} 
          />
        </button>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <button 
      className=" bg-linkIt-300 text-white rounded-[8px] py-[.4rem] px-[.8rem] border-[2px] border-linkIt-300 hover:bg-white hover:text-linkIt-300 transition-all duration-300 ease-in-out font-montserrat font-[500] ml-[3%]"
      >
        Encontrar Vacante
      </button>
    </div>
  );
};

export default JobFilters;

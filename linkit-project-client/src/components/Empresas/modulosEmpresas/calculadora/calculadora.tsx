import { useAnimate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import arrow from "/Vectores/arrow.png";
import axios from "axios";

interface VacancyFirstState {
  [key: string]: string;
  positionV: string;
  englishLevel: string;
  seniorityV: string;
}

interface VacancySecondState {
  technologies: string[];
  frameworks: string[];
  others: string[];
}

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(10% 50% 90% 50% )",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );
  }, [isOpen]);
  return scope;
}

 function Calculadora () {

    const [isOpenPosicion, setIsOpenPosicion] = useState(false);
    const scopePosicion = useMenuAnimation(isOpenPosicion);

    const [isOpenIngles, setIsOpenIngles] = useState(false);
    const scopeIngles = useMenuAnimation(isOpenIngles);

    const [isOpenSeniority, setIsOpenSeniority] = useState(false);
    const scopeSeniority = useMenuAnimation(isOpenSeniority);

    const [isOpenTecnologias, setIsOpenTecnologias] = useState(false);
    const scopeTecnologias = useMenuAnimation(isOpenTecnologias);

    const [isOpenFrameworks, setIsOpenFrameworks] = useState(false);
    const scopeFrameworks = useMenuAnimation(isOpenFrameworks);

    const [isOpenOtros, setIsOpenOtros] = useState(false);
    const scopeOtros = useMenuAnimation(isOpenOtros);

    const [renderedFilters, setRenderedFilters] = useState(Object)

    const [vacancyFirst, setVacancyFirst] = useState<VacancyFirstState>({
      positionV: "",
      englishLevel: "",
      seniorityV: "",
    });
  
    const [vacancySecond, setVacancySecond] = useState<VacancySecondState>({
      technologies: [],
      frameworks: [],
      others: [],
    });
    
    
    const [price, setPrice] = useState({
      min: "$0",
      max: "$0"
    })
  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, checked} = e.target;

      if (name === 'positionV') {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="positionV"]');
        
        
        checkboxes.forEach((checkbox) => {
          if (checkbox.value !== value) {
            checkbox.checked = false;
          }
        });
      }
      if (name === 'englishLevel') {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="englishLevel"]');
        
        
        checkboxes.forEach((checkbox) => {
          if (checkbox.value !== value) {
            checkbox.checked = false;
          }
        });
      }
      if (name === 'seniorityV') {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="seniorityV"]');
        
        
        checkboxes.forEach((checkbox) => {
          if (checkbox.value !== value) {
            checkbox.checked = false;
          }
        });
      }
      if (vacancyFirst.hasOwnProperty(name)) {
        if (!checked) {
          setVacancyFirst((prevVacancyFirst) => {
            const updatedVacancyFirst = { ...prevVacancyFirst };
            updatedVacancyFirst[name] = "";
            return updatedVacancyFirst;
          });
        } else {
          setVacancyFirst((prevVacancyFirst) => ({
            ...prevVacancyFirst,
            [name]: value,
          }));
        }
      } else {
        setVacancySecond((prevVacancySecond) => ({
          ...prevVacancySecond,
          [name]: vacancySecond[name as keyof VacancySecondState].includes(value)
            ? vacancySecond[name as keyof VacancySecondState].filter((item) => item !== value)
            : [...vacancySecond[name as keyof VacancySecondState], value],
        }));
      }
    };

    const CalculatePrice  = async () => {
      try {
        const response = await axios.post(`https://linkit-server.onrender.com/resources/googleSheet/filter?position=${vacancyFirst.positionV}&englishLevel=${vacancyFirst.englishLevel}&seniority=${vacancyFirst.seniorityV}`, vacancySecond)
        if(response.status === 200) {
          const data = response.data
          setPrice(data)
          setVacancyFirst({
            positionV: "",
            englishLevel: "",
            seniorityV: "",
          })
          setVacancySecond({
            technologies: [],
            frameworks: [],
            others: [],
          })
          const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
          checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
          });
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
        axios
          .get('https://linkit-server.onrender.com/resources/googleSheet/DinamicTitles')
          .then((response) => {
            const filtersData = response.data;
            setRenderedFilters(filtersData);
          })
          .catch((error) => {
            throw new Error(error.message);
          });
      }, []);
     
      let tech1 = []
      let tech2 = []
      let frameworksToRender = []
      let othersToRender = []
      let positionsToRender = []

    for (const key in renderedFilters) {
      switch (key) {
        case "techTier1":
          tech1 = renderedFilters[key]
          break
        case "techTier2":
          tech2 = renderedFilters[key]
          break
        case "frameworksTier1":
          frameworksToRender = renderedFilters[key]
          break
        case "othersTier1":
          othersToRender = renderedFilters[key]
          break
        case "allPositions":
          positionsToRender = renderedFilters[key]
          break
      
        default:
          break;
      }
    }
    const tech: [] = tech1.concat(tech2)

    return (

        <div className="bg-linkIt-500 grid justify-center p-[7%]">
            <h1 className="text-black text-[3vw] font-manrope font-bold text-center">Calculadora</h1>
            <div className="bg-white rounded-[7px] p-4 my-7 h-[8vh] items-center flex whitespace-nowrap justify-around">
              <div className="grid grid-cols-6 gap-[0.5vw] h-full font-montserrat font-semibold text-[1vw]">
            <motion.nav
            className="w-[80%] mt-1"
            ref={scopePosicion}
            onMouseEnter={() => setIsOpenPosicion(true)}
            onMouseLeave={() => setIsOpenPosicion(false)}
          >
            <motion.button
              className={`flex items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
              
            >
              Posición
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-28 overflow-y-scroll space-y-[1vh] text-[0.7vw] whitespace-break-spaces px-3 p-1 mt-3"
              style={{
                pointerEvents: isOpenPosicion ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
            {positionsToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((position: string, index: number) => (
                    <li className="flex" key={index}> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm mx-[5%]" type="checkbox" name="positionV" value={position} id={position} onChange={handleChange} />
                    <label htmlFor={position} className="cursor-pointer">{position}</label>
                    </li>
                ))}
                <li></li>
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className="mt-1"
            ref={scopeIngles}
            onMouseEnter={() => setIsOpenIngles(true)}
            onMouseLeave={() => setIsOpenIngles(false)}
          >
            <motion.button
              className={`flex items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Nivel de inglés
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-fit h-fit items-center space-y-[1vh] text-[0.7vw] whitespace-break-spaces px-3 p-2 mt-3"
              style={{
                pointerEvents: isOpenIngles ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <li className="flex"> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm mx-[5%]" type="checkbox" name="englishLevel" value="Basico" id="Basico" onChange={handleChange} />
                    <label htmlFor="Basico" className="cursor-pointer">Básico </label>
                    </li>
                    <li className="flex"> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm mx-[5%]" type="checkbox" name="englishLevel" value="Intermedio" id="Intermedio" onChange={handleChange} />
                    <label htmlFor="Intermedio" className="cursor-pointer">Intermedio</label>
                    </li>
                    <li className="flex"> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm mx-[5%]" type="checkbox" name="englishLevel" value="Avanzado" id="Avanzado" onChange={handleChange} />
                    <label htmlFor="Avanzado" className="cursor-pointer">Avanzado</label>
                    </li>
              
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className="mt-1"
            ref={scopeSeniority}
            onMouseEnter={() => setIsOpenSeniority(true)}
            onMouseLeave={() => setIsOpenSeniority(false)}
          >
            <motion.button
              className={`flex items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Seniority
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-fit h-fit items-center space-y-[1vh] text-[0.7vw] whitespace-break-spaces px-3 p-2 mt-3"
              style={{
                pointerEvents: isOpenSeniority ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <li className="flex"> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm mx-[5%]" type="checkbox" name="seniorityV" value="Junior" id="Junior" onChange={handleChange} />
                    <label htmlFor="Junior" className="cursor-pointer">Junior</label>
                    </li>
              <li className="flex"> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm mx-[5%]" type="checkbox" name="seniorityV" value="Semi-senior" id="Semi-senior" onChange={handleChange} />
                    <label htmlFor="Semi-senior" className="cursor-pointer">Semi-senior</label>
                    </li>
              <li className="flex"> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm mx-[5%]" type="checkbox" name="seniorityV" value="Senior Advance" id="Senior Advance" onChange={handleChange} />
                    <label htmlFor="Senior Advance" className="cursor-pointer">Senior Advance</label>
                    </li>
              <li className="flex"> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm mx-[5%]" type="checkbox" name="seniorityV" value="Manager/Lead" id="Manager/Lead" onChange={handleChange} />
                    <label htmlFor="Manager/Lead" className="cursor-pointer">Manager/Lead</label>
                    </li>
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className="mt-1"
            ref={scopeTecnologias}
            onMouseEnter={() => setIsOpenTecnologias(true)}
            onMouseLeave={() => setIsOpenTecnologias(false)}
          >
            <motion.button
              className={`flex items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Tecnologías
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-fit h-28 overflow-y-scroll items-center space-y-[1vh] text-[0.8vw] px-3 p-1 mt-3"
              style={{
                pointerEvents: isOpenTecnologias ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              {tech?.filter((items: string | null) => ( items !== null && items !== "")).map((tech: string, index: number) => (
                    <li key={index}> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="technologies" value={tech} id={tech} onChange={handleChange} />
                    <label htmlFor={tech} className="cursor-pointer">{tech}</label>
                    </li>
                ))}
                <li></li>
              
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className="mt-1"
            ref={scopeFrameworks}
            onMouseEnter={() => setIsOpenFrameworks(true)}
            onMouseLeave={() => setIsOpenFrameworks(false)}
          >
            <motion.button
              className={`flex items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Frameworks
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-fit h-28 overflow-y-scroll items-center space-y-[1vh] text-[0.8vw] px-3 p-1 mt-3"
              style={{
                pointerEvents: isOpenFrameworks ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              {frameworksToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((frameworks: string, index: number) => (
                    <li key={index}> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="frameworks" value={frameworks} id={frameworks} onChange={handleChange} />
                    <label htmlFor={frameworks} className="cursor-pointer">{frameworks}</label>
                    </li>
                ))}
                <li></li>
              
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className="mt-1"
            ref={scopeOtros}
            onMouseEnter={() => setIsOpenOtros(true)}
            onMouseLeave={() => setIsOpenOtros(false)}
          >
            <motion.button
              className={`flex items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Otros
              <div className="arrow w-[0.7vw] ml-[3vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-fit h-28 overflow-y-scroll items-center space-y-[1vh] text-[0.8vw] px-3 p-1 mt-3"
              style={{
                pointerEvents: isOpenOtros ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              {othersToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((others: string, index: number) => (
                    <li key={index}> 
                    <input className="mr-3 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="others"  value={others} id={others} onChange={handleChange} />
                    <label htmlFor={others} className="cursor-pointer">{others}</label>
                    </li>
                ))}
                <li></li>
              
            </ul>{" "}
          </motion.nav>
          </div>
          <button className="background-button" onClick={CalculatePrice}
           disabled={
            vacancyFirst.englishLevel === "" ||
            vacancyFirst.positionV === ""  ||
            vacancyFirst.seniorityV === "" ||
            vacancySecond.frameworks.length === 0 ||
            vacancySecond.others.length === 0 ||
            vacancySecond.technologies.length === 0
            ? true
          : false
          } >Calcular</button>
          
          </div>
          <div className="grid grid-cols-2">
            <h2 className="text-[2vw] font-semibold pl-[2%]">Pricing</h2>
            <div className="flex justify-end gap-[5%] mx-[1%] pr-[2%]">
                <h2 className="text-[2vw] font-bold font-manrope text-end whitespace-nowrap"><span className=" font-medium text-linkIt-700 text-[0.9vw] font-montserrat mr-[2%]">Mínimo USD</span>{price.min}</h2>
                <h2 className="text-[2vw] font-bold font-manrope text-end whitespace-nowrap"><span className="font-medium text-linkIt-700 text-[0.9vw] font-montserrat mr-[2%]">Máximo USD</span>{price.max}</h2>
            </div>
            <hr className="bg-black h-1 col-span-full mt-[1%]"/>
            <p className=" col-start-2 font-medium mt-3 font-manrope text-[0.8vw] w-[75%] justify-self-end">Los presupuestos dependerán de todos los requerimientos exactos de la búsqueda, beneficios, planes de desarrollo definidos entre otros, contáctanos para concretarlo</p>
          </div>
        </div>
    )
}

export default Calculadora
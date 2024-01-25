import { useState, useEffect} from "react";
import { Dropdown } from 'flowbite-react';
import axios from "axios";
import "./calculadora.css";




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


 function Calculadora () {

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
            <h1 className="text-black text-[1.3rem] ssm:text-[1.8rem] xl:text-[2.5rem] font-manrope font-bold text-center">Calculadora</h1>

            <div className="hidden lg:block">

            <div className="flex bg-white rounded-[7px] p-4 my-7 h-[4rem] items-center whitespace-nowrap justify-around">
              <div className=" grid grid-cols-6 w-full font-montserrat font-semibold">


              <div className="button-style before:left-[75%]">
              <Dropdown label="posicion" inline className="h-40 overflow-y-scroll dropdown-Calculator w-[75%]">
            {positionsToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((position: string, index: number) => (
                    <li key={index}> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 ring-black cursor-pointer" type="checkbox" name="positionV" value={position} id={position} onChange={handleChange} />
                    <label htmlFor={position} className="cursor-pointer w-full">{position}</label>
                    </li>
                    
                ))}
            
          </Dropdown>
          </div>


          <div className="button-style">
          <Dropdown label="ingles" inline className="overflow-y-auto dropdown-Calculator w-[70%]">
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Basico" id="Basico" onChange={handleChange} />
                    <label htmlFor="Basico" className="cursor-pointer w-full">Básico </label>
                    </li>
                    
                    <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Intermedio" id="Intermedio" onChange={handleChange} />
                    <label htmlFor="Intermedio" className="cursor-pointer w-full">Intermedio</label>
                    </li>
                    
                    <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Avanzado" id="Avanzado" onChange={handleChange} />
                    <label htmlFor="Avanzado" className="cursor-pointer w-full">Avanzado</label>
                    </li>
                    </Dropdown>
                    </div>




                    <div className="button-style before:left-[85%]">
          <Dropdown label="seniority" inline className=" overflow-y-auto dropdown-Calculator w-[85%] z-20 ">
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="seniorityV" value="Junior" id="Junior" onChange={handleChange} />
                    <label htmlFor="Junior" className="cursor-pointer w-full">Junior</label>
                    </li>
                  
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="seniorityV" value="Semi-senior" id="Semi-senior" onChange={handleChange} />
                    <label htmlFor="Semi-senior" className="cursor-pointer w-full">Semi-senior</label>
                    </li>
                  
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="seniorityV" value="Senior Advance" id="Senior Advance" onChange={handleChange} />
                    <label htmlFor="Senior Advance" className="cursor-pointer w-full">Senior Advance</label>
                    </li>
                    
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="seniorityV" value="Manager/Lead" id="Manager/Lead" onChange={handleChange} />
                    <label htmlFor="Manager/Lead" className="cursor-pointer w-full">Manager/Lead</label>
                    </li>

    </Dropdown>

          </div>





 <div className="button-style before:left-[85%]">
              <Dropdown label="tecnologia" inline className=" h-28 overflow-y-scroll dropdown-Calculator w-[85%]">
              {tech?.filter((items: string | null) => ( items !== null && items !== "")).map((techs: string, index: number) => (
                
                    <li key={index} className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="technologies" value={techs} id={techs} onChange={handleChange} />
                    <label htmlFor={techs} className="cursor-pointer w-full">{techs}</label>
                    </li>
                   
                   
                ))}
    </Dropdown>
          </div>
           

          <div className="button-style before:left-[85%]">
          <Dropdown label="frameworks" inline className=" h-28 overflow-y-scroll dropdown-Calculator w-[85%]">
              {frameworksToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((frameworks: string, index: number) => (
              
                    <li key={index} className=""> 
                    <input className=" checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="frameworks" value={frameworks} id={frameworks} onChange={handleChange} />
                    <label htmlFor={frameworks} className="cursor-pointer w-full">{frameworks}</label>
                    </li>
                    
                    
                ))}

    </Dropdown>
    </div>

    <div className="button-style before:opacity-0">
          <Dropdown label="otros" inline className=" h-28 overflow-y-scroll dropdown-Calculator w-[85%]">

          {
              
              othersToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((others: string, index: number) => (
                    <li key={index} className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="others" value={others} id={others} onChange={handleChange} />
                    <label htmlFor={others} className="cursor-pointer ">
                    {others}</label>
                    </li>
                ))
                }
    </Dropdown>
    </div>
          </div>
          


          <button className="background-button disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:" onClick={CalculatePrice}
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

        
          </div>
          <div className="lg:hidden">
          <div className="flex bg-white rounded-[7px] p-1 mt-[5%] h-[3rem] items-center whitespace-nowrap px-3">

              <div className="grid grid-cols-3 w-full font-montserrat justify-items-center">

              <div className="button-style">
              <Dropdown label="posicion" inline className="h-28 overflow-y-scroll dropdown-Calculator w-[70%]">
            {positionsToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((position: string, index: number) => (
                    <li key={index}> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 ring-black cursor-pointer" type="checkbox" name="positionV" value={position} id={position} onChange={handleChange} />
                    <label htmlFor={position} className="cursor-pointer w-full">{position}</label>
                    </li>
                    
                ))}
            
          </Dropdown>
          </div>


          <div className="button-style">
          <Dropdown label="ingles" inline className="overflow-y-auto dropdown-Calculator w-[70%]">
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Basico" id="Basico" onChange={handleChange} />
                    <label htmlFor="Basico" className="cursor-pointer w-full">Básico </label>
                    </li>
                    
                    <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Intermedio" id="Intermedio" onChange={handleChange} />
                    <label htmlFor="Intermedio" className="cursor-pointer w-full">Intermedio</label>
                    </li>
                    
                    <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Avanzado" id="Avanzado" onChange={handleChange} />
                    <label htmlFor="Avanzado" className="cursor-pointer w-full">Avanzado</label>
                    </li>
                    </Dropdown>
                    </div>




                    <div className="button-style before:opacity-0">
          <Dropdown label="seniority" inline className=" overflow-y-auto dropdown-Calculator w-[70%] z-20 ">
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="seniorityV" value="Junior" id="Junior" onChange={handleChange} />
                    <label htmlFor="Junior" className="cursor-pointer w-full">Junior</label>
                    </li>
                  
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="seniorityV" value="Semi-senior" id="Semi-senior" onChange={handleChange} />
                    <label htmlFor="Semi-senior" className="cursor-pointer w-full">Semi-senior</label>
                    </li>
                  
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="seniorityV" value="Senior Advance" id="Senior Advance" onChange={handleChange} />
                    <label htmlFor="Senior Advance" className="cursor-pointer w-full">Senior Advance</label>
                    </li>
                    
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="seniorityV" value="Manager/Lead" id="Manager/Lead" onChange={handleChange} />
                    <label htmlFor="Manager/Lead" className="cursor-pointer w-full">Manager/Lead</label>
                    </li>

    </Dropdown>

          </div>
          




</div>
</div>







          <div className="flex bg-white rounded-[7px] p-1 my-[5%] h-[3rem] items-center whitespace-nowrap justify-around px-3">
              <div className="grid grid-cols-3 justify-around w-full font-montserrat">

              <div className="button-style before:left-[85%]">
              <Dropdown label="tecnologia" inline className=" h-28 overflow-y-scroll dropdown-Calculator w-[85%]">
              {tech?.filter((items: string | null) => ( items !== null && items !== "")).map((techs: string, index: number) => (
                
                    <li key={index} className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="technologies" value={techs} id={techs} onChange={handleChange} />
                    <label htmlFor={techs} className="cursor-pointer w-full">{techs}</label>
                    </li>
                   
                   
                ))}
    </Dropdown>
          </div>
           

          <div className="button-style before:left-[85%]">
          <Dropdown label="frameworks" inline className=" h-28 overflow-y-scroll dropdown-Calculator w-[85%]">
              {frameworksToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((frameworks: string, index: number) => (
              
                    <li key={index} className=""> 
                    <input className=" checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="frameworks" value={frameworks} id={frameworks} onChange={handleChange} />
                    <label htmlFor={frameworks} className="cursor-pointer w-full">{frameworks}</label>
                    </li>
                    
                    
                ))}

    </Dropdown>
    </div>

    <div className="button-style before:opacity-0">
          <Dropdown label="otros" inline className=" h-28 overflow-y-scroll dropdown-Calculator w-[85%]">

          {
              
              othersToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((others: string, index: number) => (
                    <li key={index} className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="others" value={others} id={others} onChange={handleChange} />
                    <label htmlFor={others} className="cursor-pointer ">
                    {others}</label>
                    </li>
                ))
                }
    </Dropdown>
    </div>
          </div>
          


          <button className="background-button disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:" onClick={CalculatePrice}
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
          </div>


 

          <div className="grid grid-cols-2 items-end">
            <h2 className="text-[1rem] ssm:text-[1.5rem] xl:text-[2rem] font-montserrat font-semibold pl-[2%]">Pricing</h2>
            <div className="flex justify-end gap-[5%] mx-[1%] pr-[2%] text-[1rem] ssm:text-[1.5rem] xl:text-[2rem]">
                <h2 className="font-bold font-manrope text-end whitespace-nowrap"><span className=" font-medium text-linkIt-700 text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem] font-montserrat mr-[2%]">Mínimo USD</span>{price.min}</h2>
                <h2 className="font-bold font-manrope text-end whitespace-nowrap"><span className="font-medium text-linkIt-700 text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem] font-montserrat mr-[2%]">Máximo USD</span>{price.max}</h2>
            </div>
            <hr className="bg-black h-1 col-span-full mt-[1%]"/>
            <p className={`lg:col-start-2 col-span-2 font-medium mt-3 font-manrope text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1rem] justify-self-end ${price.min === "$0" && price.max === "$0" ? "opacity-0" : "opacity-100"}`}>Los presupuestos dependerán de todos los requerimientos exactos de la búsqueda, beneficios, planes de desarrollo definidos entre otros, contáctanos para concretarlo</p>
          </div>
        </div>
    )
}

export default Calculadora
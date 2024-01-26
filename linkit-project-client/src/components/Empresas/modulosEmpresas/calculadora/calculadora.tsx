import { useState, useEffect} from "react";
import { Dropdown } from 'flowbite-react';
import axios from "axios";
import "./calculadora.css";
import { useTranslation } from "react-i18next";




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
  const { t } = useTranslation();

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
            <h1 className="text-black text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] sm:text-[1.5rem] lg:text-[2rem] xl:text-[2.3rem] font-manrope font-bold text-center">{t('Calculadora')}</h1>

            <div className="hidden lg:block">

            <div className="flex bg-white rounded-[7px] p-4 my-7 h-[4rem] items-center whitespace-nowrap ">

              <div className="grid grid-cols-6 w-full font-montserrat font-semibold justify-items-center">
              <Dropdown label={t('Posición')} inline className="h-40 overflow-y-scroll font-medium">
            {positionsToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((position: string, index: number) => (
                    <li key={index}> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0 cursor-pointer font-normal" type="checkbox" name="positionV" value={position} id={position} onChange={handleChange} />
                    <label htmlFor={position} className="cursor-pointer w-full">{position}</label>
                    </li>
                    
                ))}
            
          </Dropdown>


          <Dropdown label={t('Inglés')} inline className="overflow-y-auto font-medium pr-2">
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0 cursor-pointer" type="checkbox" name="englishLevel" value="Basico" id="Basico" onChange={handleChange} />
                    <label htmlFor="Basico" className="cursor-pointer w-full">{t('Básico')}</label>
                    </li>
                    
                    <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0 cursor-pointer" type="checkbox" name="englishLevel" value="Intermedio" id="Intermedio" onChange={handleChange} />
                    <label htmlFor="Intermedio" className="cursor-pointer w-full">{t('Intermedio')}</label>
                    </li>
                    
                    <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0 cursor-pointer" type="checkbox" name="englishLevel" value="Avanzado" id="Avanzado" onChange={handleChange} />
                    <label htmlFor="Avanzado" className="cursor-pointer w-full">{t('Avanzado')}</label>
                    </li>
                    </Dropdown>
                    

          <Dropdown label="Seniority" inline className=" overflow-y-auto z-20 font-medium pr-2">
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0" type="checkbox" name="seniorityV" value="Junior" id="Junior" onChange={handleChange} />
                    <label htmlFor="Junior" className="cursor-pointer w-full">Junior</label>
                    </li>
                  
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0" type="checkbox" name="seniorityV" value="Semi-senior" id="Semi-senior" onChange={handleChange} />
                    <label htmlFor="Semi-senior" className="cursor-pointer w-full">Semi-senior</label>
                    </li>
                  
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0" type="checkbox" name="seniorityV" value="Senior Advance" id="Senior Advance" onChange={handleChange} />
                    <label htmlFor="Senior Advance" className="cursor-pointer w-full">Senior Advance</label>
                    </li>
                    
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0" type="checkbox" name="seniorityV" value="Manager/Lead" id="Manager/Lead" onChange={handleChange} />
                    <label htmlFor="Manager/Lead" className="cursor-pointer w-full">Manager/Lead</label>
                    </li>
                    </Dropdown>

              <Dropdown label={t('Tecnologías')} inline className=" h-40 overflow-y-scroll font-medium">
              {tech?.filter((items: string | null) => ( items !== null && items !== "")).map((techs: string, index: number) => (
                
                    <li key={index} className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0" type="checkbox" name="technologies" value={techs} id={techs} onChange={handleChange} />
                    <label htmlFor={techs} className="cursor-pointer w-full">{techs}</label>
                    </li>
                   
                   
                ))}
    </Dropdown>
          
          <Dropdown label="Frameworks" inline className=" h-40 overflow-y-scroll font-medium">
              {frameworksToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((frameworks: string, index: number) => (
              
                    <li key={index} className=""> 
                    <input className=" checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0" type="checkbox" name="frameworks" value={frameworks} id={frameworks} onChange={handleChange} />
                    <label htmlFor={frameworks} className="cursor-pointer w-full">{frameworks}</label>
                    </li>
                    
                    
                ))}

    </Dropdown>

          <Dropdown label={t('Otros')} inline className=" h-28 overflow-y-scroll font-medium">

          {
              
              othersToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((others: string, index: number) => (
                    <li key={index} className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 focus:ring-0" type="checkbox" name="others" value={others} id={others} onChange={handleChange} />
                    <label htmlFor={others} className="cursor-pointer ">
                    {others}</label>
                    </li>
                ))
                }
    </Dropdown>
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
          } >{t('Calcular')}</button>
          
          </div>

        
          </div>
          <div className="lg:hidden">


          <div className="flex bg-white rounded-[7px] p-1 mt-[5%] h-[3rem] items-center whitespace-nowrap px-3">

              <div className="grid grid-cols-2 w-full font-montserrat justify-items-start ssm:justify-items-center">
              <Dropdown label={t('Posición')} inline className="h-28 overflow-y-scroll">
            {positionsToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((position: string, index: number) => (
                    <li key={index}> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2 ring-black cursor-pointer" type="checkbox" name="positionV" value={position} id={position} onChange={handleChange} />
                    <label htmlFor={position} className="cursor-pointer w-full">{position}</label>
                    </li>
                    
                ))}
            
          </Dropdown>

          <Dropdown label={t('Inglés')} inline className="overflow-y-auto">
              <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Basico" id="Basico" onChange={handleChange} />
                    <label htmlFor="Basico" className="cursor-pointer w-full">{t('Básico')}</label>
                    </li>
                    
                    <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Intermedio" id="Intermedio" onChange={handleChange} />
                    <label htmlFor="Intermedio" className="cursor-pointer w-full"> {t('Intermedio')}</label>
                    </li>
                    
                    <li className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="englishLevel" value="Avanzado" id="Avanzado" onChange={handleChange} />
                    <label htmlFor="Avanzado" className="cursor-pointer w-full">{t('Avanzado')}</label>
                    </li>
                    </Dropdown>


          




</div>
</div>
<div className="flex bg-white rounded-[7px] p-1 mt-[2%] h-[3rem] items-center whitespace-nowrap px-3">

<div className="grid grid-cols-2 w-full font-montserrat justify-items-start ssm:justify-items-center">
          <Dropdown label="Seniority" inline className=" overflow-y-auto ">
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
   

    <Dropdown label={t('Tecnologías')} inline className=" h-28 overflow-y-scroll">
              {tech?.filter((items: string | null) => ( items !== null && items !== "")).map((techs: string, index: number) => (
                
                    <li key={index} className=""> 
                    <input className="checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="technologies" value={techs} id={techs} onChange={handleChange} />
                    <label htmlFor={techs} className="cursor-pointer w-full">{techs}</label>
                    </li>
                   
                   
                ))}
    </Dropdown>
    
             </div>
              </div>







              <div className="flex bg-white rounded-[7px] p-1 mt-[2%] h-[3rem] items-center whitespace-nowrap px-3">

<div className="grid grid-cols-2 w-full font-montserrat justify-items-start ssm:justify-items-center">

          <Dropdown label="Frameworks" inline className=" h-28 overflow-y-scroll">
              {frameworksToRender?.filter((items: string | null) => ( items !== null && items !== "")).map((frameworks: string, index: number) => (
              
                    <li key={index} className=""> 
                    <input className=" checked:bg-linkIt-300 rounded-sm mx-2" type="checkbox" name="frameworks" value={frameworks} id={frameworks} onChange={handleChange} />
                    <label htmlFor={frameworks} className="cursor-pointer w-full">{frameworks}</label>
                    </li>
                    
                    
                ))}

    </Dropdown>
              

          <Dropdown label={t('Otros')} inline className=" h-28 overflow-y-scroll">

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
          <div className="justify-center flex my-[5%] z-[1]">
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
          } >{t('Calcular')}</button>
            </div>
          </div>


 

          <div className="grid grid-cols-2 items-end">
            <h2 className="text-[1rem] ssm:text-[1.5rem] xl:text-[1.5rem] font-montserrat font-semibold pl-[2%]">Pricing</h2>
            <div className="flex justify-end gap-[5%] mx-[1%] pr-[2%] text-[1rem] ssm:text-[1.5rem] xl:text-[1.5rem]">
                <h2 className="font-bold font-manrope text-end whitespace-nowrap"><span className=" font-medium text-linkIt-700 text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1rem] font-montserrat mr-[2%]">{t(`Mínimo`)} USD</span>{price.min}</h2>
                <h2 className="font-bold font-manrope text-end whitespace-nowrap"><span className="font-medium text-linkIt-700 text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1rem] font-montserrat mr-[2%]">{t('Máximo')} USD</span>{price.max}</h2>
            </div>
            <hr className="bg-black h-1 col-span-full mt-[1%]"/>
            <p className={`lg:col-start-2 col-span-2 font-medium mt-3 font-manrope text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1rem] justify-self-end ${price.min === "$0" && price.max === "$0" ? "opacity-0" : "opacity-100"}`}>Los presupuestos dependerán de todos los requerimientos exactos de la búsqueda, beneficios, planes de desarrollo definidos entre otros, contáctanos para concretarlo</p>
          </div>
        </div>
    )
}

export default Calculadora
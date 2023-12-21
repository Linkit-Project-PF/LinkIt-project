import { FormEvent, useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUncompletedStep,
  setCompletedStep,
} from "../../../../../../../redux/features/ApplicationSlice";
import "./JobForm.css";
import JobFormProgress from "./jobForm-progress/jobForm-progress";
import { SelectCountryFormEs } from './jobFormCountry/JobFormSelectCountry';
import { JobValidations } from "./jobFormValidations/JobValidations";
import CloudinaryUploadWidget from '../../../../../../Services/cloudinaryWidget';
import { motion } from "framer-motion";
import { Stack } from "./technicalStacks";
import axios from "axios";
import Swal from "sweetalert2";


function JobForm() {
  const dispatch = useDispatch();
  
  const admins = useSelector((state: any) => state.application.admins);
  
  const userData = useSelector((state: any) => state.Authentication.user);

  const technologies = useSelector((state: any) => state.resources.stackTechnologies);
  
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [filePublicId, setFilePublicId] = useState<string>("")
  const [fileName, setFileName] = useState<string>("")
  const [country , setCountry] = useState<string>(userData? userData.country : "")
  const [englishLevel , setEnglishLevel] = useState<string>( userData? userData.englishLevel : "")
  const [openEnglishLevel, setOpenEnglishLevel] = useState<boolean>(false)
  const [openStack, setOpenStack] = useState<boolean>(false)
  const [userStack, setUserStack] = useState<string[]>([])
  const [openRecruiter, setOpenRecruiter] = useState<boolean>(false)
  const [recruiter, setRecruiter] = useState<string>("")
  const [openTechnologies, setOpenTechnologies] = useState<boolean>(false)
  const [userTechnologies, setUserTechnologies] = useState<string[]>([])

  const englishLevelRef = useRef<HTMLButtonElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const recruiterRef = useRef<HTMLButtonElement>(null)
  const technologiesRef = useRef<HTMLDivElement>(null)
  
  const [user, setUser] = useState({
    name: userData? userData.firstName : "",
    lastName: userData? userData.lastName : "",
    email: userData? userData.email : "",
    country: country,
    cv: filePublicId? filePublicId : "",
    linkedin: "",
    englishLevel: englishLevel,
    salary: 0,
    technicalStack: userStack,
    recruiter: recruiter,
    availability: "",
    technologies: userTechnologies,
    reason: "",
  })
  
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    country: "",
    cv: "",
    linkedin: "",
    englishLevel: "",
    salary: "",
    technicalStack: "",
    recruiter: "",
    availability: "",
    technologies: "",
    reason: "",
  })
  
  
  const handleNextStep = (step: number) => {
    if (step === 5) return;
    setCurrentStep(step + 1);
  };

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    const userApplicationObject = {
      email: user.email,
      reason: user.reason,
      availability: user.availability,
      salary: user.salary,
      linkedin: user.linkedin,
      stack: user.technologies,
      english: user.englishLevel,
      firstName: user.name,
      lastName: user.lastName,
      country: user.country
    }
    console.log(userApplicationObject)
    try {
      const response = await axios.post('https://linkit-server.onrender.com/postulations/create', userApplicationObject, {headers: {'Accept-Language': sessionStorage.getItem('lang')}})
      if(response.status > 200 && response.status < 300){
        Swal.fire({
          icon: 'success',
          title: '¡Postulación enviada!',
          text: 'Tu postulación ha sido enviada exitosamente',
        })
      }
      
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data,
      })
    }
  };
  
  
  const handlePreviousStep = (step: number) => {
    if (step === 1) return;
    setCurrentStep(step - 1);
  };

  const handleEnglishLevelChange = (level: string) => {
    setEnglishLevel(level);
    setUser(prevUser => ({ ...prevUser, englishLevel: level }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser(prevUser => {
      const updatedUser = { ...prevUser, [e.target.name]: e.target.value };
      const fieldErrors = JobValidations(updatedUser);
  
      setErrors({
        ...errors,
        [e.target.name]: fieldErrors[e.target.name as keyof typeof fieldErrors]
      });

      return updatedUser;
    });
  }

  useEffect(()=>{
    setUser(prevUser => ({ ...prevUser, cv: filePublicId}))

  },[filePublicId])

  const handleStackChange = (stack: string) => {

    if(userStack.includes(stack)) return
    const newUserStack = [...userStack, stack]
    setUserStack(newUserStack)
    setUser(prevUser => ({ ...prevUser, technicalStack: newUserStack }))
    
  }

  const handleDeleteStack = (stack: string) => {
    const newUserStack = userStack.filter(userStack => userStack !== stack)
    setUserStack(newUserStack)
    setUser(prevUser => ({ ...prevUser, technicalStack: newUserStack }))
  }

  const handleTechChange = (tech: any) => {

    if(userTechnologies.includes(tech)) return
    const newUserTechnologies = [...userTechnologies, tech]
    setUserTechnologies(newUserTechnologies)
    setUser(prevUser => ({ ...prevUser, technologies: newUserTechnologies }))
  }

  const handleRecruiterChange = (recruiter: string) => {
    setRecruiter(recruiter);
    setUser(prevUser => ({ ...prevUser, recruiter: recruiter }));
  }

  const handleDeleteTech = (tech: any) => {
    const newUserTechnologies = userTechnologies.filter(userTech => userTech !== tech)
    setUserTechnologies(newUserTechnologies)
    setUser(prevUser => ({ ...prevUser, technologies: newUserTechnologies }))
  }

  useEffect(()=>{
    const handler = (event: any) => {
      if (!englishLevelRef.current?.contains(event.target) && !event.target.matches(".englishDropdown *")) {
        setOpenEnglishLevel(false)
      }
      if (!stackRef.current?.contains(event.target) && !event.target.matches(".technicalDropdown *")) {
        setOpenStack(false)
      }
      if (!recruiterRef.current?.contains(event.target) && !event.target.matches(".recruiterDropdown *")) {
        setOpenRecruiter(false)
      }
      if (!technologiesRef.current?.contains(event.target) && !event.target.matches(".techDropdown *")) {
        setOpenTechnologies(false)
      }
    }
    document.addEventListener("mousedown", handler)
  },[])

  return (
    <form className="  flex flex-col justify-center items-center content-center w-full h-[100%] z-[300]" onSubmit={handleSubmit}>
      <div className="relative bottom-[4rem]">
        <JobFormProgress />
      </div>
      {currentStep === 1 && (
        <>
          <h2 className="font-montserrat text-[2rem] relative bottom-[2rem] text-linkIt-400">
            Información Personal
          </h2>
          <label
            htmlFor="name"
            className="font-montserrat font-[500] relative  text-[1.3rem] w-[75%] flex flex-col"
          >
            <div className="flex">
              Nombre<span className=" text-red-400">*</span>
            </div>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem]"
            />
          </label>

          {
            errors.name && <p className="text-red-500 text-[.8rem]">{errors.name}</p>
          }

          <label
            htmlFor="lastName"
            className="font-montserrat font-[500] relative text-[1.3rem] w-[75%] "
          >
            <div className="flex">
              Apellido<span className=" text-red-400">*</span>
            </div>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem]"
            />
          </label>

          {
            errors.lastName && <p className="text-red-500 text-[.8rem]">{errors.lastName}</p>
          }

          <label
            htmlFor="email"
            className="font-montserrat font-[500] relative text-[1.3rem] w-[75%]"
          >
            <div className="flex">
              Email<span className=" text-red-400">*</span>
            </div>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem]"
            />
          </label>

          {
            errors.email && <p className="text-red-500 text-[.8rem]">{errors.email}</p>
          }

          <label htmlFor="" className="font-montserrat font-[500] relative text-[1.3rem] w-[75%]">
            País<span className="text-red-400 ">*</span>
          <SelectCountryFormEs setCountry={setCountry} country={country}/>
          </label>

          {
            errors.country && <p className="text-red-500 text-[.8rem]">{errors.country}</p>
          }

          <div className="inline-flex w-[75%] justify-between relative top-[1rem]">
            <button
              type="button"
              className="opacity-0"
              disabled={currentStep === 1}
            >
              
            </button>

            <button
              type="button"
              className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                handleNextStep(currentStep);
                dispatch(setCompletedStep(currentStep));
              }}
              disabled={
                errors.name ||
                errors.lastName ||
                errors.email ||
                errors.country ||
                user.name === "" ||
                user.lastName === "" ||
                user.email === "" ||
                country === "" || 
                country === "Ubicación"
                ? true
                : false
              }
            >
              Siguiente
            </button>
          </div>
        </>
      )}
      {currentStep === 2 && (
        <>
          <h2 className="font-montserrat text-[2rem] relative bottom-[2rem] text-linkIt-400">
            Información Profesional
          </h2>
          <label
            htmlFor="cv"
            className="font-montserrat relative text-[1.3rem] w-[75%] flex flex-col "
          >
            <div className="flex">
              CV<span className=" text-red-400">*</span>
            </div>
            <CloudinaryUploadWidget
            setFilePublicId={setFilePublicId}
            setFileName={setFileName}
            >
            <button
              type="button"
              name="cv"
              className="border-linkIt-50 border-[2px] text-opacity-75 text-linkIt-400 font-[500] w-full h-[2.5rem] focus:border-linkIt-200"
            >
              {
                fileName === ""
                ? "Subir CV"
                : fileName.split(".")[0]
              }
            </button>
            </CloudinaryUploadWidget>
          </label>

          {
            errors.cv && <p className="text-red-500 text-[.8rem]">{errors.cv}</p>
          }

          <label
            htmlFor="linkedin"
            className="font-montserrat relative text-[1.3rem] w-[75%]"
          >
            <div className="flex">
              LinkedIn<span className=" text-red-400">*</span>
            </div>
            <input
              type="url"
              name="linkedin"
              onChange={handleInputChange}
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem]"
            />
          </label>

          {
            errors.linkedin && <p className="text-red-500 text-[.8rem]">{errors.linkedin}</p>
          }

          <label
            htmlFor="englishLevel"
            className="font-montserrat relative text-[1.3rem] w-[75%]"
          >
            <div className="flex">
              Nivel de inglés<span className=" text-red-400">*</span>
            </div>
            <button
              type="button"
              name="englishLevel"
              className="border-linkIt-50 flex flex-row justify-center items-center border-[2px] w-full h-[2.5rem] focus:border-linkIt-200 p-[.5rem]"
              onClick={()=> {setOpenEnglishLevel(!openEnglishLevel); setOpenStack(false)}}
              ref={englishLevelRef}
            >
              {
                englishLevel === ""
                ? "Seleccionar"
                : englishLevel
              }
            </button>
            <motion.ul
            className={`${!openEnglishLevel ? "hidden" : "englishDropdown"} font-montserrat`}
            onClick={()=> {setOpenEnglishLevel(!openEnglishLevel)}}
            >
              <li className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer" onClick={()=> handleEnglishLevelChange("Basic")}>Basic</li>
              <hr />
              <li className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer" onClick={()=> handleEnglishLevelChange("Intermediate")}>Intermediate</li>
              <hr />
              <li className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer" onClick={()=> handleEnglishLevelChange("Intermediate (B1)")}>Intermediate{"(B1)"}</li>
              <hr />
              <li className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer" onClick={()=> handleEnglishLevelChange("Intermediate (B2)")}>Intermediate{"(B2)"}</li>
              <hr />
              <li className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer" onClick={()=> handleEnglishLevelChange("Advanced")}>Advanced</li>
              <hr />
              <li className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer" onClick={()=> handleEnglishLevelChange("Professional")}>Professional</li>
            </motion.ul>
          </label>

          {
            errors.englishLevel && <p className="text-red-500 text-[.8rem]">{errors.englishLevel}</p>
          }

          <label
            htmlFor="salary"
            className="font-montserrat relative text-[1.3rem] w-[75%]"
          >
            <div className="flex">
              Expectativa Salarial<span className=" text-red-400">*</span>
            </div>
            <input
              type="number"
              name="salary"
              onChange={handleInputChange}
              placeholder="USD"
              value={user.salary}
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem]"
            />
          </label>

          {
            errors.salary && <p className="text-red-500 text-[.8rem]">{errors.salary}</p>
          }

          <label
            htmlFor="technical-stack"
            className="font-montserrat relative text-[1.3rem] max-w-[75%]"
          >
            <div className="flex">
              Stack Técnico<span className=" text-red-400">*</span>
            </div>
            <div
              id="technical-stack"
              ref={stackRef}
              className={` border-[2px] text-[1rem] flex justify-center items-center content-center gap-[.5rem] text-center  w-[18rem] h-[4rem] overflow-x-scroll hover:cursor-pointer ${openStack ? "border-linkIt-200" : "border-linkIt-50"}`}
              onClick={()=> {setOpenStack(!openStack); setOpenEnglishLevel(false)}}
            > 
            <div className="w-full h-full flex flex-row items-center text-center gap-[1rem] relative px-[.5rem]">
              {
                user.technicalStack.length === 0
                ? <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Seleccionar</span>
                : user.technicalStack?.map((stack, index) => {
                  return (
                    <button 
                    type="button"
                    key={index} 
                    className="text-white bg-linkIt-300 rounded-[8px] p-[.5rem] h-[70%] inline-flex whitespace-nowrap gap-[1rem]"
                    >
                      {stack} <span className="font-manrope relative bottom-[1px]" onClick={()=>{ handleDeleteStack(stack);}}>x</span>
                    </button>
                  )
                })
              }
            </div>
            </div>
            <ul className={`${!openStack ? "hidden" : "technicalDropdown"} font-montserrat`}>
              {
                Stack.map((stack, index) => {
                  return (
                    <li key={index} onClick={()=> handleStackChange(stack)} className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer">{stack}</li>
                  )
                })
              }
            </ul>
          </label>

          {
            errors.technicalStack && <p className="text-red-500 text-[.8rem]">{errors.technicalStack}</p>
          }

<label
            htmlFor="englishLevel"
            className="font-montserrat relative text-[1.3rem] w-[75%]"
          >
            <div className="flex">
              Reclutador/a<span className=" text-red-400">*</span>
            </div>
            <button
              type="button"
              name="Recruiter"
              className="border-linkIt-50 flex flex-row justify-center items-center border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem]"
              onClick={()=> {setOpenRecruiter(!openRecruiter); setOpenStack(false); setOpenEnglishLevel(false)}}
              ref={recruiterRef}
            >
              {
                recruiter === ""
                ? "Seleccionar"
                : recruiter
              }
            </button>
            <motion.ul
            className={`${!openRecruiter ? "hidden" : "recruiterDropdown"} font-montserrat`}
            onClick={()=> {setOpenRecruiter(!openRecruiter)}}
            >
              {
                admins?.map((admin: any, index: number) => {
                  if(index === 0 || index === admins.length-1){
                    return (
                      <li className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer" onClick={()=> handleRecruiterChange(`${admin.firstName}`)}>{admin.firstName}</li>
                    )
                  }
                  return (
                    <>
                      <li className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer" onClick={()=> handleRecruiterChange(`${admin.firstName}`)}>{admin.firstName}</li>
                      <hr />
                    </>
                  )
                })
              }
            </motion.ul>
          </label>

          {
            errors.recruiter && <p className="text-red-500 text-[.8rem]">{errors.recruiter}</p>
          }

          <div className="inline-flex w-[75%] justify-between relative top-[1rem]">
            <button
              type="button"
              className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-linkIt-200 transition-all duration-300 ease-in-out"
                onClick={() => {
                    dispatch(setUncompletedStep(currentStep-1));
                    handlePreviousStep(currentStep);
                }}
            >
              Anterior
            </button>

            <button
              type="button"
              className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-200 transition-all duration-300 ease-in-out"
              onClick={() => {
                dispatch(setCompletedStep(currentStep));
                handleNextStep(currentStep);
              }}
            >
              Siguiente
            </button>
          </div>
        </>
      )}

{currentStep === 3 && (
        <>
          <h2 className="font-montserrat text-[2rem] relative bottom-[2rem] text-linkIt-400">
            Información Profesional
          </h2>
          <label
            htmlFor="availability"
            className="font-montserrat relative  text-[1.3rem] w-[60%] flex flex-col "
          >
            <div className="flex">
              Periodo de aviso<span className=" text-red-400">*</span>
            </div>
            <input
              type="text"
              name="availability"
              onChange={handleInputChange}
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem]"
            />
          </label>

          {
            errors.availability && <p className="text-red-500 text-[.8rem]">{errors.availability}</p>
          }

          <label
            htmlFor="technical-stack"
            className="font-montserrat relative text-[1.3rem] max-w-[75%]"
          >
            <div className="flex">
              Stack de tecnologías<span className=" text-red-400">*</span>
            </div>
            <div
              id="technical-stack"
              ref={technologiesRef}
              className={` border-[2px] text-[1rem] flex justify-center items-center content-center gap-[.5rem] text-center  w-[20.5rem] h-[4rem] overflow-x-scroll hover:cursor-pointer ${openTechnologies ? "border-linkIt-200" : "border-linkIt-50"}`}
              onClick={()=> {setOpenTechnologies(!openTechnologies); setOpenEnglishLevel(false)}}
            > 
            <div className="w-full h-full flex flex-row items-center text-center gap-[1rem] relative px-[.5rem]">
              {
                user.technologies.length === 0
                ? <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Seleccionar</span>
                : user.technologies?.map((tech: any, index) => {
                  return (
                    <button 
                    type="button"
                    key={index} 
                    className="text-white bg-linkIt-300 rounded-[8px] p-[.5rem] h-[70%] inline-flex whitespace-nowrap gap-[1rem]"
                    >
                      {tech} <span className="font-manrope relative bottom-[1px]" onClick={()=>{ handleDeleteTech(tech);}}>x</span>
                    </button>
                  )
                })
              }
            </div>
            </div>
            <ul className={`${!openTechnologies ? "hidden" : "techDropdown"} font-montserrat`}>
              {
                technologies.map((tech: any, index: number) => {
                  return (
                    <li key={index} onClick={()=> handleTechChange(tech.name)} className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer">{tech.name}</li>
                  )
                })
              }
            </ul>
          </label>

          {
            errors.technologies && <p className="text-red-500 text-[.8rem]">{errors.technologies}</p>
          }

          <label
            htmlFor="reason"
            className="font-montserrat relative text-[1.3rem] w-[60%]"
          >
            <div className="flex">
            ¿Por qué estás buscando una nueva oportunidad laboral?
            </div>
            <textarea 
            name="reason" 
            id="reason" 
            cols={10} 
            rows={10} 
            placeholder="Escribe aquí tu respuesta"
            onChange={handleInputChange}
            className=" resize-none border-linkIt-50 border-[2px] w-full h-[10rem] focus:outline-linkIt-200 p-[.5rem]"
            ></textarea>
          </label>

          {
            errors.reason && <p className="text-red-500 text-[.8rem]">{errors.reason}</p>
          }

          <div className="inline-flex w-[60%] justify-between relative top-[1rem]">
            <button
              type="button"
              className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out"
                onClick={() => {
                    dispatch(setUncompletedStep(currentStep-1));
                    handlePreviousStep(currentStep);
                }}
            >
              Anterior
            </button>

            <button
              type="submit"
              className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out"
              onClick={() => {
                
              }}
            >
              Enviar
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default JobForm;

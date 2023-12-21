import { FormEvent, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setUncompletedStep,
  setCompletedStep,
} from "../../../../../../../redux/features/ApplicationSlice";
import "./JobForm.css";
import JobFormProgress from "./jobForm-progress/jobForm-progress";
import { SelectCountryFormEs } from "./jobFormCountry/JobFormSelectCountry";
import { JobValidations } from "./jobFormValidations/JobValidations";
import CloudinaryUploadWidget from "../../../../../../Services/cloudinaryWidget";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { Stack } from "./technicalStacks";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SUPERADMN_ID } from "../../../../../../../env";
import Swal from "sweetalert2";
import {
  handleRecruiterChange,
} from "./job-form-types-handlers/jobFormHandlers";
import Select from "react-select";
import FormTransition from "./job-form-types-handlers/FormTransition";

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 0.5,
    },
  },
};

function JobForm() {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const isFormVisible = useSelector(
    (state: any) => state.application.isFormVisible
  );

  const allJobOffers = useSelector((state: any) => state.jobCard.allJobOffers);
  const jobOffer = allJobOffers.find((job: any) => job.code === id);

  const jobOfferId = jobOffer?._id;

  const admins = useSelector((state: any) => state.application.admins);

  const userData = useSelector((state: any) => state.Authentication.user);

  const objectsTechnologies = useSelector(
    (state: any) => state.resources.stackTechnologies
  );

  const technologies = objectsTechnologies.map((tech: any) => {
    return { value: tech.name, label: tech.name}
  })

  const technicalStack = Stack.map((tech: any) => {
    return { value: tech, label: tech}
  })

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [filePublicId, setFilePublicId] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [country, setCountry] = useState<string>(
    userData ? userData.country : ""
  );
  const [englishLevel, setEnglishLevel] = useState<string>(
    userData ? userData.englishLevel : ""
  );
  const [openEnglishLevel, setOpenEnglishLevel] = useState<boolean>(false);
  const [userStack, setUserStack] = useState<string[]>([]);
  const [openRecruiter, setOpenRecruiter] = useState<boolean>(false);
  const [recruiter, setRecruiter] = useState<string>("");
  const [userTechnologies, setUserTechnologies] = useState<string[]>([]);

  const englishLevelRef = useRef<HTMLButtonElement>(null);
  const recruiterRef = useRef<HTMLButtonElement>(null);

  const [user, setUser] = useState({
    name: userData ? userData.firstName : "",
    lastName: userData ? userData.lastName : "",
    email: userData ? userData.email : "",
    country: country,
    cv: filePublicId ? filePublicId : "",
    linkedin: "",
    englishLevel: englishLevel,
    salary: 0,
    technicalStack: userStack,
    recruiter: recruiter,
    availability: "",
    technologies: userTechnologies,
    reason: "",
  });

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
  });

  const handleNextStep = (step: number) => {
    if (step === 4) return;
    setCurrentStep(step + 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let userApplicationObject = {
      reason: user.reason,
      availability: user.availability,
      salary: user.salary,
      country: user.country,
      techStack: user.technicalStack,
      stack: user.technologies,
      recruiter: user.recruiter,
      jd: jobOfferId,
      user: userData._id,
      status: "open",
    };
    console.log(userApplicationObject)
    try {
      const response = await axios.post(
        "https://linkit-server.onrender.com/postulations/create",
        userApplicationObject,
        {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
          },
        }
      );
      if (response.status > 200 && response.status < 300) {
        Swal.fire({
          icon: "success",
          title: "¡Postulación enviada!",
          text: "Tu postulación ha sido enviada exitosamente",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal, por favor intentalo de nuevo",
      });
    }
  };

  const handlePreviousStep = (step: number) => {
    if (step === 1) return;
    setCurrentStep(step - 1);
  };

  const handleEnglishLevelChange = (level: string) => {
    setEnglishLevel(level);
    setUser((prevUser) => ({ ...prevUser, englishLevel: level }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, [e.target.name]: e.target.value };
      const fieldErrors = JobValidations(updatedUser);

      setErrors({
        ...errors,
        [e.target.name]: fieldErrors[e.target.name as keyof typeof fieldErrors],
      });

      return updatedUser;
    });
  };

  useEffect(() => {
    setUser((prevUser) => ({ ...prevUser, cv: filePublicId }));
  }, [filePublicId]);

  useEffect(() => {
    let handler = (event: any) => {
      if (
        !englishLevelRef.current?.contains(event.target) &&
        !event.target.matches(".englishDropdown *")
      ) {
        setOpenEnglishLevel(false);
      }
      if (
        !recruiterRef.current?.contains(event.target) &&
        !event.target.matches(".recruiterDropdown *")
      ) {
        setOpenRecruiter(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isFormVisible && (
        <>
          <FormTransition />
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className=" bg-white absolute w-full h-full flex flex-col pt-[6%] justify-center items-center content-center z-[300] overflow-x-hidden"
            onSubmit={handleSubmit}
          >
            <button
              type="button"
              className="font-montserrat font-[500] text-linkIt-400 text-[1.3rem] absolute top-[5%] left-[1rem] hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out flex flex-row justify-center items-center gap-[.5rem]"
              onClick={() => navigate(-1)}
            >
              <img
                src="/Vectores/left-arrow.svg"
                alt="go-back"
                className="w-[1.5rem]"
              />{" "}
              Volver
            </button>
            <section className="absolute top-[8%] left-[50%] translate-x-[-50%] ">
              <JobFormProgress />
            </section>

            {/*-----------------------------------------------------------------STEP 1-----------------------------------------------------------*/}

            {currentStep === 1 && (
              <section className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col content-center items-center justify-center gap-[1rem]">
                <h2 className="font-montserrat text-[1.7rem] text-linkIt-400 relative whitespace-nowrap">
                  Información Personal
                </h2>
                <label
                  htmlFor="name"
                  className="font-montserrat font-[500] relative  text-[1.3rem] w-full flex flex-col"
                >
                  <div className="flex">
                    Nombre<span className=" text-red-400">*</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                  />
                </label>

                {errors.name && (
                  <p className="text-red-500 text-[.8rem]">{errors.name}</p>
                )}

                <label
                  htmlFor="lastName"
                  className="font-montserrat font-[500] relative text-[1.3rem] w-full "
                >
                  <div className="flex">
                    Apellido<span className=" text-red-400">*</span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                    className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                  />
                </label>

                {errors.lastName && (
                  <p className="text-red-500 text-[.8rem]">{errors.lastName}</p>
                )}

                <label
                  htmlFor="email"
                  className="font-montserrat font-[500] relative text-[1.3rem] w-full"
                >
                  <div className="flex">
                    Email<span className=" text-red-400">*</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                  />
                </label>

                {errors.email && (
                  <p className="text-red-500 text-[.8rem]">{errors.email}</p>
                )}

                <label
                  htmlFor=""
                  className="font-montserrat font-[500] relative text-[1.3rem] w-full"
                >
                  País<span className="text-red-400 ">*</span>
                  <SelectCountryFormEs
                    setCountry={setCountry}
                    country={country}
                  />
                </label>

                {errors.country && (
                  <p className="text-red-500 text-[.8rem]">{errors.country}</p>
                )}

                <div className="inline-flex w-full justify-between relative top-[1rem]">
                  <button
                    type="button"
                    className="opacity-0"
                    disabled={currentStep === 1}
                  ></button>

                  <button
                    type="button"
                    className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] rounded-[5px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800  transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
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
              </section>
            )}

            {/*-----------------------------------------------------------------STEP 2-----------------------------------------------------------*/}

            {currentStep === 2 && (
              <section className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col content-center items-center justify-center gap-[1rem]">
                <h2 className="font-montserrat text-[1.7rem] text-linkIt-400 relative whitespace-nowrap">
                  Información Profesional
                </h2>

                <label
                  htmlFor="cv"
                  className="font-montserrat relative text-[1.3rem] w-full flex flex-col "
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
                      className="border-linkIt-50 border-[2px] text-opacity-75 text-linkIt-400 font-[500] w-full h-[2.5rem] focus:border-linkIt-200 rounded-[5px]"
                    >
                      {fileName === "" ? "Subir CV" : fileName.split(".")[0]}
                    </button>
                  </CloudinaryUploadWidget>
                </label>

                {errors.cv && (
                  <p className="text-red-500 text-[.8rem]">{errors.cv}</p>
                )}

                <label
                  htmlFor="linkedin"
                  className="font-montserrat relative text-[1.3rem] w-full"
                >
                  <div className="flex">
                    LinkedIn<span className=" text-red-400">*</span>
                  </div>
                  <input
                    type="url"
                    name="linkedin"
                    onChange={handleInputChange}
                    value={user.linkedin}
                    placeholder="https://www.linkedin.com/in/username/"
                    className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                  />
                </label>

                {errors.linkedin && (
                  <p className="text-red-500 text-[.8rem]">{errors.linkedin}</p>
                )}

                <label
                  htmlFor="englishLevel"
                  className="font-montserrat relative text-[1.3rem] w-full"
                >
                  <div className="flex">
                    Nivel de inglés<span className=" text-red-400">*</span>
                  </div>
                  <button
                    type="button"
                    name="englishLevel"
                    className="border-linkIt-50 flex flex-row justify-center items-center border-[2px] w-full h-[2.5rem] focus:border-linkIt-200 p-[.5rem] rounded-[5px]"
                    onClick={() => {
                      setOpenEnglishLevel(!openEnglishLevel);
                    }}
                    ref={englishLevelRef}
                  >
                    {englishLevel === "" ? "Seleccionar" : englishLevel}
                  </button>

                  <motion.ul
                    className={`${
                      !openEnglishLevel ? "hidden" : "englishDropdown"
                    } font-montserrat`}
                    onClick={() => {
                      setOpenEnglishLevel(!openEnglishLevel);
                    }}
                  >
                    <li
                      className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                      onClick={() => handleEnglishLevelChange("Basic")}
                    >
                      Basic
                    </li>
                    <hr />
                    <li
                      className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                      onClick={() => handleEnglishLevelChange("Intermediate")}
                    >
                      Intermediate
                    </li>
                    <hr />
                    <li
                      className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                      onClick={() =>
                        handleEnglishLevelChange("Intermediate (B1)")
                      }
                    >
                      Intermediate{"(B1)"}
                    </li>
                    <hr />
                    <li
                      className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                      onClick={() =>
                        handleEnglishLevelChange("Intermediate (B2)")
                      }
                    >
                      Intermediate{"(B2)"}
                    </li>
                    <hr />
                    <li
                      className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                      onClick={() => handleEnglishLevelChange("Advanced")}
                    >
                      Advanced
                    </li>
                    <hr />
                    <li
                      className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                      onClick={() => handleEnglishLevelChange("Professional")}
                    >
                      Professional
                    </li>
                  </motion.ul>
                </label>

                {errors.englishLevel && (
                  <p className="text-red-500 text-[.8rem]">
                    {errors.englishLevel}
                  </p>
                )}

                <label
                  htmlFor="salary"
                  className="font-montserrat relative text-[1.3rem] w-full"
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
                    className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                  />
                </label>

                {errors.salary && (
                  <p className="text-red-500 text-[.8rem]">{errors.salary}</p>
                )}

                <div className="inline-flex w-full justify-between relative top-[1rem]">
                  <button
                    type="button"
                    className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-linkIt-200 transition-all duration-300 ease-in-out rounded-[5px]"
                    onClick={() => {
                      dispatch(setUncompletedStep(currentStep - 1));
                      handlePreviousStep(currentStep);
                    }}
                  >
                    Anterior
                  </button>

                  <button
                    type="button"
                    className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-linkIt-200 transition-all duration-300 ease-in-out rounded-[5px] disabled:opacity-80"
                    onClick={() => {
                      dispatch(setCompletedStep(currentStep));
                      handleNextStep(currentStep);
                    }}
                    disabled={
                      errors.cv ||
                      errors.linkedin ||
                      errors.englishLevel ||
                      errors.salary ||
                      user.linkedin === "" ||
                      englishLevel === "" ||
                      user.cv === "" ||
                      user.salary === 0 ||
                      !user.salary
                        ? true
                        : false
                    }
                  >
                    Siguiente
                  </button>
                </div>
              </section>
            )}

            {/*-----------------------------------------------------------------STEP 3-----------------------------------------------------------*/}

            {currentStep === 3 && (
              <section className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col content-center items-center justify-center gap-[1rem]">
                <h2 className="font-montserrat text-[2rem] text-linkIt-400">
                  Información Profesional
                </h2>

                <label
                  htmlFor="technologies"
                  className="font-montserrat relative text-[1.3rem] w-full"
                >
                  Selecciona Tus Tecnologías<span className=" text-red-400">*</span>
               <Select 
                  options={technologies}
                  isMulti={true}
                  name="technologies"
                  closeMenuOnSelect={false}
                  value={user.technologies.map((tech: any) => ({value: tech, label: tech}))}
                  styles={{
                    multiValue: (provided) => ({
                      ...provided,
                      backgroundColor: "#01A28B",
                      color: "#FFF",
                      borderRadius: "5px",
                      height: "1.3rem",
                      fontSize: ".8rem",
                    }),
                    multiValueLabel: (provided) => ({
                      ...provided,
                      color: "#FFF",
                    }),
                    control: (provided) => ({
                      ...provided,
                      maxHeight: "6rem",
                      overflowY: "scroll"
                    }),
                  }}
                  onChange={(e) => {
                    setUserTechnologies(e?.map((tech: any) => tech.value));
                    setUser((prevUser)=> {
                      return {...prevUser, technologies: e?.map((tech: any) => tech.value)}
                    })
                  }}
               />
                </label>

                <label
                  htmlFor="technologies"
                  className="font-montserrat relative text-[1.3rem] w-full"
                >
                  Selecciona Stack Técnico<span className=" text-red-400">*</span>
               <Select 
                  options={technicalStack}
                  isMulti={true}
                  name="technicaStack"
                  value={user.technicalStack.map((tech: any) => ({value: tech, label: tech}))}
                  closeMenuOnSelect={false}
                  styles={{
                    multiValue: (provided) => ({
                      ...provided,
                      backgroundColor: "#01A28B",
                      color: "#FFF",
                      borderRadius: "5px",
                      height: "1.3rem",
                      fontSize: ".8rem",
                    }),
                    multiValueLabel: (provided) => ({
                      ...provided,
                      color: "#FFF",
                    }),
                    control: (provided) => ({
                      ...provided,
                      maxHeight: "6rem",
                      overflowY: "scroll"
                    }),
                  }}
                  onChange={(e) => {
                    setUserStack(e?.map((tech: any) => tech.value));
                    setUser((prevUser)=> {
                      return {...prevUser, technicalStack: e?.map((tech: any) => tech.value)}
                    })
                  }}
               />
                </label>

                <label
                  htmlFor="Recruiter"
                  className="font-montserrat relative text-[1.3rem] w-full"
                >
                  <div className="flex">
                    Reclutador/a<span className=" text-red-400">*</span>
                  </div>

                  <button
                    type="button"
                    name="Recruiter"
                    className="border-linkIt-50 flex flex-row justify-center items-center border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                    onClick={() => {
                      setOpenRecruiter(!openRecruiter);
                      setOpenEnglishLevel(false);
                    }}
                    ref={recruiterRef}
                  >
                    {recruiter === "" ? "Seleccionar" : recruiter}
                  </button>

                  <motion.ul
                    className={`${
                      !openRecruiter ? "hidden" : "recruiterDropdown"
                    } font-montserrat`}
                    onClick={() => {
                      setOpenRecruiter(!openRecruiter);
                    }}
                  >
                    {admins?.map((admin: any, index: number) => {
                      if (index === 0 || index === admins.length - 1) {
                        return (
                          <li
                            className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                            onClick={() =>
                              handleRecruiterChange(
                                `${admin.firstName}`,
                                setRecruiter,
                                setUser
                              )
                            }
                          >
                            {admin.firstName}
                          </li>
                        );
                      }
                      return (
                        <>
                          <li
                            className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                            onClick={() =>
                              handleRecruiterChange(
                                `${admin.firstName}`,
                                setRecruiter,
                                setUser
                              )
                            }
                          >
                            {admin.firstName}
                          </li>
                          <hr />
                        </>
                      );
                    })}
                  </motion.ul>
                </label>

                {errors.recruiter && (
                  <p className="text-red-500 text-[.8rem]">
                    {errors.recruiter}
                  </p>
                )}

                <div className="inline-flex w-full justify-between relative top-[1rem]">
                  <button
                    type="button"
                    className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-linkIt-200 transition-all duration-300 ease-in-out rounded-[5px]"
                    onClick={() => {
                      dispatch(setUncompletedStep(currentStep - 1));
                      handlePreviousStep(currentStep);
                    }}
                  >
                    Anterior
                  </button>

                  <button
                    type="button"
                    className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-linkIt-200 transition-all duration-300 ease-in-out disabled:opacity-80 rounded-[5px]"
                    onClick={() => {
                      dispatch(setCompletedStep(currentStep));
                      handleNextStep(currentStep);
                    }}
                    disabled={
                      errors.technicalStack ||
                      errors.technologies ||
                      errors.recruiter ||
                      user.technologies[0] === undefined ||
                      !recruiter
                        ? true
                        : false
                    }
                  >
                    Siguiente
                  </button>
                </div>
              </section>
            )}

            {/*-----------------------------------------------------------------STEP 4-----------------------------------------------------------*/}

            {currentStep === 4 && (
              <section className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col content-center items-center justify-center gap-[1rem]">
                <h2 className="font-montserrat text-[2rem] text-linkIt-400">
                  Información Profesional
                </h2>
                <label
                  htmlFor="availability"
                  className="font-montserrat relative  text-[1.3rem] w-full flex flex-col "
                >
                  <div className="flex">
                    Periodo de aviso<span className=" text-red-400">*</span>
                  </div>
                  <input
                    type="text"
                    name="availability"
                    onChange={handleInputChange}
                    value={user.availability}
                    className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                  />
                </label>

                {errors.availability && (
                  <p className="text-red-500 text-[.8rem]">
                    {errors.availability}
                  </p>
                )}

                <label
                  htmlFor="reason"
                  className="font-montserrat relative text-[1.3rem] w-full"
                >
                  <div className="flex">
                    ¿Por qué estás buscando una nueva oportunidad laboral?
                  </div>
                  <textarea
                    name="reason"
                    id="reason"
                    cols={10}
                    rows={10}
                    value={user.reason}
                    placeholder="Escribe aquí tu respuesta"
                    onChange={handleInputChange}
                    className=" resize-none border-linkIt-50 border-[2px] w-full h-[10rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                  ></textarea>
                </label>

                {errors.reason && (
                  <p className="text-red-500 text-[.8rem]">{errors.reason}</p>
                )}

                <div className="inline-flex w-full justify-between relative top-[1rem]">
                  <button
                    type="button"
                    className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out rounded-[5px]"
                    onClick={() => {
                      dispatch(setUncompletedStep(currentStep - 1));
                      handlePreviousStep(currentStep);
                    }}
                  >
                    Anterior
                  </button>

                  <button
                    type="submit"
                    className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out disabled:opacity-80 rounded-[5px]"
                    onClick={() => {
                      handleSubmit;
                    }}
                    disabled={
                      errors.availability ||
                      errors.reason ||
                      !user.availability ||
                      !user.reason
                        ? true
                        : false
                    }
                  >
                    Enviar
                  </button>
                </div>
              </section>
            )}
          </motion.form>
        </>
      )}
    </AnimatePresence>
  );
}

export default JobForm;

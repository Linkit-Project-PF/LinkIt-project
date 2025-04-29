import { FormEvent, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setUncompletedStep,
  setCompletedStep,
  resetForm,
} from "../../../../../../../redux/features/ApplicationSlice";
import "./JobForm.css";
import JobFormProgress from "./jobForm-progress/jobForm-progress";
import { SelectCountryFormEs } from "./jobFormCountry/JobFormSelectCountry";
import { JobValidations } from "./jobFormValidations/JobValidations";
import CloudinaryUploadWidget from "../../../../../../Services/cloudinaryWidget";
import { AnimatePresence, Variants, motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import { handleRecruiterChange } from "./job-form-types-handlers/jobFormHandlers";
import Select from "react-select";
import FormTransition from "./job-form-types-handlers/FormTransition";
import { useTranslation } from "react-i18next";
//import { SUPERADMN_ID } from "../../../../../../../env";
import {
  setUser,
  loginSuccess,
} from "../../../../../../../redux/features/AuthSlice";
import { RootState } from "../../../../../../../redux/types";
import { IUser } from "../../../../../../Profiles/types";
import Loading from "../../../../../../Loading/Loading";

const SUPERADMN_ID = import.meta.env.VITE_SUPERADMN_ID;

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
  const dispatch = useDispatch();
  const isAPostulation = true;

  const isFormVisible = useSelector(
    (state: any) => state.application.isFormVisible
  );

  const { t } = useTranslation();

  const userData = useSelector(
    (state: RootState) => state.Authentication.user as IUser
  );

  const objectsTechnologies = useSelector(
    (state: any) => state.resources.stackTechnologies
  );

  const technologies = objectsTechnologies.map((tech: any) => {
    return { value: tech.name, label: tech.name };
  });

  const technicalStack = useSelector(
    (state: RootState) => state.resources.techStack
  ).map((tech: any) => {
    return { value: tech.name, label: tech.name };
  });

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [filePublicId, setFilePublicId] = useState<string>(
    userData.cv.cloudinaryId
  );
  const [fileName, setFileName] = useState<string>(userData.cv.fileName);
  const [country, setCountry] = useState<string>(userData.country ?? "");
  const [englishLevel, setEnglishLevel] = useState<string>(() =>
    t("Selecciona tu nivel de inglés")
  );
  const [openEnglishLevel, setOpenEnglishLevel] = useState<boolean>(false);
  const [userStack, setUserStack] = useState<string[]>([]);
  const [openRecruiter, setOpenRecruiter] = useState<boolean>(false);
  const [recruiter, setRecruiter] = useState<string>("");
  const [userTechnologies, setUserTechnologies] = useState<string[]>(
    userData.technologies
  );
  const [loading, isLoading] = useState(false);

  const englishLevelRef = useRef<HTMLButtonElement>(null);
  const recruiterRef = useRef<HTMLButtonElement>(null);

  const [user, setLocalUser] = useState({
    cv: [
      {
        filename: userData.cv.fileName,
        url: `https://res.cloudinary.com/dquhriqz3/image/upload/${userData.cv.cloudinaryId}`,
      },
    ],
    firstName: userData.firstName,
    lastName: userData.lastName ?? "",
    email: userData.email,
    country: country,
    linkedin: userData.linkedin ?? "",
    englishLevel: englishLevel,
    salary: Number(),
    technicalStack: userStack,
    recruiter: recruiter,
    availability: "",
    technologies: userTechnologies,
    reason: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
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
    isLoading(true);
    const userApplicationObject = {
      cv: user.cv,
      email: user.email,
      reason: user.reason,
      availability: user.availability,
      salary: Number(user.salary),
      country: user.country,
      linkedin: user.linkedin,
      stack: user.technologies,
      techStack: user.technicalStack,
      english: user.englishLevel,
      firstName: user.firstName,
      lastName: user.lastName,
      recruiter: user.recruiter !== "-" ? user.recruiter : undefined,
      code: window.location.href
        .split("Joboffer/")[1]
        .split("/")[0], 
    };
    try {
      const response = await axios.post(
        `https://linkit-server.onrender.com/postulations/create?user=${userData._id}`,
        userApplicationObject,
        { headers: { "Accept-Language": sessionStorage.getItem("lang") } }
      );
      if (response.status > 200 && response.status < 400) {
        dispatch(setUser(response.data));
        isLoading(false);
        Swal.fire({
          icon: "success",
          title: "¡Postulación enviada!",
          text: "Tu postulación ha sido enviada exitosamente",
          confirmButtonText: "Seguir viendo vacantes",
          confirmButtonColor: "#01A28B",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const getUserData = await axios.get(
              `https://linkit-server.onrender.com/users/find?email=${userData.email}`,
              {
                headers: {
                  Authorization: `Bearer ${SUPERADMN_ID}`,
                  "Accept-Language": sessionStorage.getItem("lang"),
                },
              }
            );
            if (getUserData.data[0]) {
              dispatch(loginSuccess(getUserData.data[0]));
            }
            dispatch(resetForm());
            navigate("/soyTalento");
            navigate("/SoyTalento");
            setTimeout(() => {
              window.location.href = "#vacantes";
            }, 0);
          }
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
        confirmButtonColor: "#01A28B",
      });
      isLoading(false);
    }
  };

  const handlePreviousStep = (step: number) => {
    if (step === 1) return;
    setCurrentStep(step - 1);
  };

  const handleEnglishLevelChange = (level: string) => {
    setEnglishLevel(level);
    setLocalUser((prevUser) => ({ ...prevUser, englishLevel: level }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLocalUser((prevUser) => {
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
    setLocalUser((prevUser) => ({
      ...prevUser,
      cv: [
        {
          filename: fileName,
          url: `https://res.cloudinary.com/dquhriqz3/image/upload/${filePublicId}`,
        },
      ],
    }));
  }, [filePublicId]);

  useEffect(() => {
    const handler = (event: any) => {
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

  const handleGoBack = () => {
    Swal.fire({
      title: t("¿Estás seguro/a?"),
      text: t("Si vuelves atrás perderás todo el progreso"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("Volver atrás"),
      cancelButtonText: t("Seguir postulando"),
      confirmButtonColor: "#01A28B",
      cancelButtonColor: "#173951",
      iconColor: "#F87171",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetForm());
        navigate(-1);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: t("Cancelado"),
          text: t("Tu postulación sigue en curso"),
          icon: "info",
          confirmButtonText: "OK",
          confirmButtonColor: "#01A28B",
        });
      }
    });
  };

  return (
    <>
      {loading && <Loading text={t("Enviando tu postulación")} />}
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
                onClick={() => handleGoBack()}
              >
                <img
                  src="/Vectores/left-arrow.svg"
                  alt="go-back"
                  className="w-[1.5rem]"
                />{" "}
                {t("Volver")}
              </button>
              <section className="absolute top-[8%] left-[50%] translate-x-[-50%] ">
                <JobFormProgress />
              </section>

              {/*-----------------------------------------------------------------STEP 1-----------------------------------------------------------*/}

              {currentStep === 1 && (
                <section className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col content-center items-center justify-center gap-[1rem]">
                  <h2 className="font-montserrat text-[1.7rem] text-linkIt-400 relative whitespace-nowrap">
                    {t("Información Personal")}
                  </h2>
                  <label
                    htmlFor="firstName"
                    className="font-montserrat font-[500] relative  text-[1.3rem] w-full flex flex-col"
                  >
                    <div className="flex">
                      {t("Nombre")}
                      <span className=" text-red-400">*</span>
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleInputChange}
                      className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-linkIt-200 p-[.5rem] rounded-[5px]"
                    />
                  </label>

                  {errors.firstName && (
                    <p className="text-red-500 text-[.8rem]">
                      {errors.firstName}
                    </p>
                  )}

                  <label
                    htmlFor="lastName"
                    className="font-montserrat font-[500] relative text-[1.3rem] w-full "
                  >
                    <div className="flex">
                      {t("Apellido")}
                      <span className=" text-red-400">*</span>
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
                    <p className="text-red-500 text-[.8rem]">
                      {errors.lastName}
                    </p>
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
                    {t("País")}
                    <span className="text-red-400 ">*</span>
                    <SelectCountryFormEs
                      setCountry={setCountry}
                      country={country}
                      setUser={setLocalUser}
                    />
                  </label>

                  {errors.country && (
                    <p className="text-red-500 text-[.8rem]">
                      {errors.country}
                    </p>
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
                        errors.firstName ||
                        errors.lastName ||
                        errors.email ||
                        errors.country ||
                        user.firstName === "" ||
                        user.lastName === "" ||
                        user.email === "" ||
                        country === "" ||
                        country === "Ubicación"
                          ? true
                          : false
                      }
                    >
                      {t("Siguiente")}
                    </button>
                  </div>
                </section>
              )}

              {/*-----------------------------------------------------------------STEP 2-----------------------------------------------------------*/}

              {currentStep === 2 && (
                <section className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col content-center items-center justify-center gap-[1rem]">
                  <h2 className="font-montserrat text-[1.7rem] text-linkIt-400 relative whitespace-nowrap">
                    {t("Información Profesional")}
                  </h2>

                  <label
                    htmlFor="cv"
                    className="font-montserrat relative text-[1.3rem] w-full flex flex-col "
                  >
                    <div className="flex">
                      CV<span className=" text-red-400">*</span>
                    </div>
                    <CloudinaryUploadWidget
                      isAPostulation={isAPostulation}
                      setFilePublicId={setFilePublicId}
                      setFileName={setFileName}
                    >
                      <button
                        type="button"
                        name="cv"
                        className="border-linkIt-50 border-[2px] text-opacity-75 text-linkIt-400 font-[500] w-full h-[2.5rem] focus:border-linkIt-200 rounded-[5px]"
                      >
                        {fileName === "" ? t("Subir CV") : fileName}
                      </button>
                    </CloudinaryUploadWidget>
                  </label>

                  {/* {errors.cv && (
                  <p className="text-red-500 text-[.8rem]">{errors.cv}</p>
                )} */}

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
                    <p className="text-red-500 text-[.8rem]">
                      {errors.linkedin}
                    </p>
                  )}

                  <label
                    htmlFor="englishLevel"
                    className="font-montserrat relative text-[1.3rem] w-full"
                  >
                    <div className="flex">
                      {t("Nivel de inglés")}
                      <span className=" text-red-400">*</span>
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
                      {englishLevel}
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
                          handleEnglishLevelChange("intermediate (B1)")
                        }
                      >
                        Intermediate{"(B1)"}
                      </li>
                      <hr />
                      <li
                        className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                        onClick={() =>
                          handleEnglishLevelChange("intermediate (B2)")
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
                      {t("Expectativa Salarial mensual en USD")}
                      <span className=" text-red-400">*</span>
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
                      {t("Anterior")}
                    </button>

                    <button
                      type="button"
                      className="w-[45%] border-linkIt-200 bg-linkIt-200 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-linkIt-200 transition-all duration-300 ease-in-out rounded-[5px] disabled:opacity-80"
                      onClick={() => {
                        dispatch(setCompletedStep(currentStep));
                        handleNextStep(currentStep);
                      }}
                      disabled={
                        !fileName ||
                        errors.linkedin ||
                        errors.englishLevel ||
                        errors.salary ||
                        user.linkedin === "" ||
                        englishLevel === "" ||
                        Number(user.salary) === 0 ||
                        !user.salary
                          ? true
                          : false
                      }
                    >
                      {t("Siguiente")}
                    </button>
                  </div>
                </section>
              )}

              {/*-----------------------------------------------------------------STEP 3-----------------------------------------------------------*/}

              {currentStep === 3 && (
                <section className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col content-center items-center justify-center gap-[1rem]">
                  <h2 className="font-montserrat text-[2rem] text-linkIt-400">
                    {t("Información Profesional")}
                  </h2>

                  <label
                    htmlFor="technologies"
                    className="font-montserrat relative text-[1.3rem] w-full"
                  >
                    {t("Selecciona Tus Tecnologías")}
                    <span className=" text-red-400">*</span>
                    <Select
                      options={technologies}
                      isMulti={true}
                      name="technologies"
                      closeMenuOnSelect={false}
                      value={user.technologies.map((tech: any) => ({
                        value: tech,
                        label: tech,
                      }))}
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
                          overflowY: "scroll",
                          border: "2px solid #CBDAE8",
                          ":hover": {
                            border: "2px solid #173951",
                          },
                        }),
                      }}
                      onChange={(e) => {
                        setUserTechnologies(e?.map((tech: any) => tech.value));
                        setLocalUser((prevUser) => {
                          return {
                            ...prevUser,
                            technologies: e?.map((tech: any) => tech.value),
                          };
                        });
                      }}
                    />
                  </label>

                  <label
                    htmlFor="technologies"
                    className="font-montserrat relative text-[1.3rem] w-full"
                  >
                    {t("Selecciona Stack Técnico")}
                    <span className=" text-red-400">*</span>
                    <Select
                      options={technicalStack}
                      isMulti={true}
                      name="technicaStack"
                      value={user.technicalStack.map((tech: any) => ({
                        value: tech,
                        label: tech,
                      }))}
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
                          overflowY: "scroll",
                          border: "2px solid #CBDAE8",
                          ":hover": {
                            border: "2px solid #173951",
                          },
                          ":focus": {
                            border: "2px solid #173951",
                          },
                        }),
                      }}
                      onChange={(e) => {
                        setUserStack(e?.map((tech: any) => tech.value));
                        setLocalUser((prevUser) => {
                          return {
                            ...prevUser,
                            technicalStack: e?.map((tech: any) => tech.value),
                          };
                        });
                      }}
                    />
                  </label>

                  <label
                    htmlFor="Recruiter"
                    className="font-montserrat relative text-[1.3rem] w-full"
                  >
                    <div className="flex">
                      {t("¿Estás haciendo el proceso con algún reclutador/a?")}
                      <span className=" text-red-400">*</span>
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
                      {recruiter === "" ? t("Seleccionar") : recruiter}
                    </button>

                    <motion.ul
                      className={`${
                        !openRecruiter ? "hidden" : "recruiterDropdown"
                      } font-montserrat`}
                      onClick={() => {
                        setOpenRecruiter(!openRecruiter);
                      }}
                    >
                      <li
                        className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                        onClick={() =>
                          handleRecruiterChange("-", setRecruiter, setLocalUser)
                        }
                      >
                        Ninguno
                      </li>
                      {["Julieta", "Shayna", "Ramiro", "Tobias"].map(
                        (recruiter: string, index: number) => {
                          return (
                            <li
                              key={index}
                              className="p-[.5rem] hover:bg-gray-100 hover:cursor-pointer"
                              onClick={() =>
                                handleRecruiterChange(
                                  recruiter,
                                  setRecruiter,
                                  setLocalUser
                                )
                              }
                            >
                              {recruiter}
                            </li>
                          );
                        }
                      )}
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
                      {t("Anterior")}
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
                      {t("Siguiente")}
                    </button>
                  </div>
                </section>
              )}

              {/*-----------------------------------------------------------------STEP 4-----------------------------------------------------------*/}

              {currentStep === 4 && (
                <section className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] flex flex-col content-center items-center justify-center gap-[1rem]">
                  <h2 className="font-montserrat text-[2rem] text-linkIt-400">
                    {t("Información Profesional")}
                  </h2>
                  <label
                    htmlFor="availability"
                    className="font-montserrat relative  text-[1.3rem] w-full flex flex-col "
                  >
                    <div className="flex">
                      {t("Periodo de aviso")}
                      <span className=" text-red-400">*</span>
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
                      {t(
                        "¿Por qué estás buscando una nueva oportunidad laboral?"
                      )}
                      <span className=" text-red-400">*</span>
                    </div>
                    <textarea
                      name="reason"
                      id="reason"
                      cols={10}
                      rows={10}
                      value={user.reason}
                      placeholder={t("Escribe aquí tu respuesta")}
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
                      {t("Anterior")}
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
                      {t("Enviar")}
                    </button>
                  </div>
                </section>
              )}
            </motion.form>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default JobForm;

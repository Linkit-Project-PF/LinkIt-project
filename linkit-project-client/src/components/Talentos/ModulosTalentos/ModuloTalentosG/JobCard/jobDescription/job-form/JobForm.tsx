import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setUncompletedStep,
  setCompletedStep,
} from "../../../../../../../redux/features/ApplicationSlice";
import "./JobForm.css";
import JobFormProgress from "./jobForm-progress/jobForm-progress";

function JobForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNextStep = (step: number) => {
    if (step === 5) return;
    setCurrentStep(step + 1);
  };

  const handlePreviousStep = (step: number) => {
    if (step === 1) return;
    setCurrentStep(step - 1);
  };
  return (
    <form className="bg-white absolute flex flex-col justify-center items-center content-center w-[100%] h-[100%] z-[300]">
      <div className="absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-10%]">
        <JobFormProgress />
      </div>
      {currentStep === 1 && (
        <>
          <h2 className="font-montserrat text-[2rem] relative bottom-[4rem] text-linkIt-400">
            Información Personal
          </h2>
          <label
            htmlFor="name"
            className="font-montserrat relative  text-[1.3rem] w-[25%] flex flex-col"
          >
            <div className="flex">
              Nombre<span className=" text-red-400">*</span>
            </div>
            <input
              type="text"
              name="name"
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-sky-900"
            />
          </label>

          <label
            htmlFor="lastName"
            className="font-montserrat relative text-[1.3rem] w-[25%] "
          >
            <div className="flex">
              Apellido<span className=" text-red-400">*</span>
            </div>
            <input
              type="text"
              name="lastName"
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-sky-900 "
            />
          </label>

          <label
            htmlFor="email"
            className="font-montserrat relative text-[1.3rem] w-[25%]"
          >
            <div className="flex">
              Email<span className=" text-red-400">*</span>
            </div>
            <input
              type="email"
              name="email"
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-sky-900 "
            />
          </label>
          <div className="inline-flex w-[25%] justify-between relative top-[5%]">
            <button
              type="button"
              className="opacity-0"
              disabled={currentStep === 1}
            >
              
            </button>

            <button
              type="button"
              className="w-[45%] border-sky-800 bg-sky-800 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out"
              onClick={() => {
                handleNextStep(currentStep);
                dispatch(setCompletedStep(currentStep));
              }}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
      {currentStep === 2 && (
        <>
          <h2 className="font-montserrat text-[2rem] relative bottom-[4rem] text-linkIt-400">
            Información Personal
          </h2>
          <label
            htmlFor="name"
            className="font-montserrat relative  text-[1.3rem] w-[25%] flex flex-col "
          >
            <div className="flex">
              Nombre<span className=" text-red-400">*</span>
            </div>
            <input
              type="text"
              name="name"
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-sky-900"
            />
          </label>

          <label
            htmlFor="lastName"
            className="font-montserrat relative text-[1.3rem] w-[25%]"
          >
            <div className="flex">
              Apellido<span className=" text-red-400">*</span>
            </div>
            <input
              type="text"
              name="lastName"
              className="border-linkIt-50 border-[2px] w-full h-[2.5rem] focus:outline-sky-900 "
            />
          </label>
          <div className="inline-flex w-[25%] justify-between relative top-[5%]">
            <button
              type="button"
              className="w-[45%] border-sky-800 bg-sky-800 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out"
                onClick={() => {
                    dispatch(setUncompletedStep(currentStep-1));
                    handlePreviousStep(currentStep);
                }}
            >
              Anterior
            </button>

            <button
              type="button"
              className="w-[45%] border-sky-800 bg-sky-800 text-white border-[2px] font-montserrat font-[600] p-[.5rem] hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out"
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
    </form>
  );
}

export default JobForm;

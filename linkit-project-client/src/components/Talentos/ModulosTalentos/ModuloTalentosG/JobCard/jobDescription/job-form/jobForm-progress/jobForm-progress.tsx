import { useSelector } from "react-redux";
import { ApplicationState } from "../../../../../../../../redux/features/ApplicationSlice";

function JobFormProgress() {
  const formSteps = useSelector(
    (state: ApplicationState) => state.application.steps
  );
  //   const [currentStep, setCurrentStep] = useState<number>(1)

  //     const handleNextStep = (step: number) => {
  //         if(step === 5) return
  //         setCurrentStep(step + 1)
  //     }

  //     const handlePreviousStep = (step: number) => {
  //         if(step === 1) return
  //         setCurrentStep(step - 1)
  //     }

  return (
    <>
      <div className="p-[.00001rem] max-h-[.001rem] bg-linkIt-500 flex flex-row items-center content-center justify-between">
        {formSteps.map((step, index) => {
          return (
            <div className="flex flex-row items-center" key={index}>
              <div
                className={`rounded-full w-[3.5rem] h-[3.5rem] border-[3px]  ${
                  step.completed
                    ? "bg-linkIt-200 border-linkIt-200 text-white"
                    : "bg-linkIt-300 border-linkIt-300 text-white"
                } font-montserrat font-bold text-[1.2rem] flex flex-col items-center justify-center transition-all duration-300 ease-in-out`}
              >
                {!step.completed ? (
                  index + 1
                ) : (
                  <img
                    src="/Vectores/check.svg"
                    alt="completed"
                    className="w-[2rem] rotate-[10deg]"
                  />
                )}
              </div>
              {index < formSteps.length - 1 && (
                <div
                  className={`w-[3.5rem] h-[.2rem] transition-all duration-300 ease-in-out ${
                    formSteps[index].completed
                      ? "bg-linkIt-200"
                      : "bg-linkIt-300"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      {/* <button className="border-2px border-black text-black w-[2rem] "
        onClick={()=>{
            dispatch(setCompletedStep(currentStep))
            handleNextStep(currentStep)
        }}
      >
        siguiente
      </button>
      <button
        className="border-2px border-black text-black w-[2rem] relative top-[2rem]"
        onClick={()=>{
            handlePreviousStep(currentStep);
            dispatch(setUncompletedStep(currentStep))
        }}
    >
        volver
    </button> */}
    </>
  );
}

export default JobFormProgress;

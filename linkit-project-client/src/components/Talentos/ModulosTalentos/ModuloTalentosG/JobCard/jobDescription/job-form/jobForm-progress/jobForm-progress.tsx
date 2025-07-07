import { useSelector } from "react-redux";
import { ApplicationState } from "../../../../../../../../redux/features/ApplicationSlice";
import { motion, AnimatePresence } from "framer-motion";

function JobFormProgress() {
  const formSteps = useSelector(
    (state: ApplicationState) => state.application.steps
  );

  return (
    <nav className="w-full flex justify-center items-center mt-2 mb-6 select-none">
      <div className="flex flex-row items-center gap-0 sm:gap-2 w-full max-w-[400px] px-2">
        {formSteps.map((step, index) => (
          <div className="flex flex-row items-center w-full" key={index}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative z-10 flex items-center justify-center rounded-full border-2
                ${step.completed
                  ? "bg-linkIt-200 border-linkIt-200 text-white shadow-lg"
                  : "bg-linkIt-50 border-linkIt-300 text-linkIt-400 shadow-sm"
                }
                font-montserrat font-bold text-[1.1rem] w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300`}
            >
              <AnimatePresence mode="wait">
                {!step.completed ? (
                  <motion.span
                    key={`step-${index}`}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {index + 1}
                  </motion.span>
                ) : (
                  <motion.img
                    key={`check-${index}`}
                    src="/Vectores/check.svg"
                    alt="completed"
                    className="w-6 h-6"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: 10 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
            {/* Línea de conexión */}
            {index < formSteps.length - 1 && (
              <motion.div
                initial={{ width: 0, opacity: 0.5 }}
                animate={{
                  width: "2.2rem",
                  opacity: 1,
                  backgroundColor: formSteps[index].completed
                    ? "#01A28B"
                    : "#CBDAE8",
                }}
                transition={{ duration: 0.4, type: "spring" }}
                className="h-1 mx-1 sm:mx-2 rounded-full"
                style={{
                  minWidth: "1.5rem",
                  maxWidth: "2.2rem",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default JobFormProgress;
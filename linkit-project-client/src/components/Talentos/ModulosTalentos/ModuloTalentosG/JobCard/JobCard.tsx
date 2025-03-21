import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import RenderizarElementos from "./renderStack";
import HasH3TwoLines from "./hasH3TwoLines";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export type JobCardProps = {
  _id: string;
  title: string;
  description: string;
  modality: string;
  type: string;
  location: string;
  archived: boolean;
  code: string;
  createdDate: Date;
  stack?: string[];
  index: number;
  current: number;
};

export const JobCard: FunctionComponent<JobCardProps> = ({
  title,
  location,
  modality,
  type,
  code,
  stack,
  index,
  current,
}) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const slug = title
  ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
  : "sin-titulo";
  
    navigate(`/soyTalento/Joboffer/${code}/${slug}`);
  };
  

  const bigContainer = useRef(null);
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const translateModality = (modality: string): string => {
    if (modality === "remote-regional") {
      if (language === "es") return "Remoto (Regional)";
      else return t("Remoto (Regional)");
    } else if (modality === "remote-local") {
      if (language === "es") return "Remoto (Local)";
      else return t("Remoto (Local)");
    } else if (modality === "hybrid") {
      if (language === "es") return "Híbrido";
      else return t("Híbrido");
    } else if (modality === "on-site") {
      if (language === "es") return "Presencial";
      else return "On-site";
    } else return modality;
  };

  return (
    <div>
 <motion.div
        className="hidden lg:block w-full h-[250px] bg-transparent border-2 border-gray-300 rounded-md p-4 font-montserrat"
        onClick={handleClick}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: index * 0.1 },
        }}
        ref={bigContainer}
      >
        <div className="w-full h-full flex flex-col" id={`big-container-${index}`}>
          <div className="h-[100px]">
            <HasH3TwoLines text={title} />
            <span className="text-white text-[0.6rem] ssm:text-[0.7rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[1rem] font-montserrat">
              {`${location}, ${translateModality(modality)}`}
            </span>
          </div>
          <div className="flex-grow flex flex-col justify-end">
            <div className="mt-3 h-5 w-fit px-3 py-1 flex items-center rounded-lg bg-linkIt-300">
              <p className="text-white text-[0.5rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] font-montserrat">
                {`${type}`}
              </p>
            </div>
            <div className="h-[90px] w-full overflow-hidden mt-2">
              <RenderizarElementos stack={stack} index={index} bigContainer={bigContainer} current={current} />
            </div>
          </div>
        </div>
      </motion.div>
      {/* mobile version */}
      <div className="lg:hidden ">
        <div className=" border-b-2 border-white flex flex-col gap-4 sm:-ml-[3vh] sm:-mr-[3vh] ">
          <div className="flex justify-between items-center">
            
            <div className="p-2">
              <h3 className="text-xl font-bold text-[#FFFFFF] font-montserrat">
                {title}
              </h3>
              <span className="text-white text-base font-montserrat">{`${location}, ${translateModality(
                modality
              )}`}</span>
            </div>
            <div className="item-end justify-end mr-1">
              <button
                className="bg-[#01A28B] text-white p-2 rounded-full"
                onClick={handleClick}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-5 p-2">
            <span className=" text-white py-1 px-3 rounded-full text-sm font-semibold border-2">
              <p className="text-white font-montserrat text-[0.8rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem]">
                {`${type.charAt(0).toUpperCase() + type.slice(1)}`}
              </p>
            </span>
            {stack?.length !== undefined &&
              stack?.length > 0 &&
              stack.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm font-montserrat"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

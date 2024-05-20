import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import RenderizarElementos from "./renderStack";
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
  current:number
};

export const JobCard: FunctionComponent<JobCardProps> = ({
  title,
  location,
  modality,
  type,
  code,
  stack,
  index,
  current
}) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate(`/soyTalento/Joboffer/${code}`);
  };

  const bigContainer = useRef(null)
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
    } else return modality
  };

  return (
    <motion.div
      className="flex  bg-transparent border-2 border-gray-300 rounded-md p-4 w-full h-44"
      onClick={handleClick}
      whileHover={{ cursor: "pointer" }}
      ref={bigContainer}
    >
      <div className="w-full"  id={`big-container-${index}`}>
        <div className="h-3/6">
          <h3 className="text-white font-bold text-[0.7rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1.2rem] leading-5">{`${title}`}</h3>
          <span className="text-white text-[0.6rem] ssm:text-[0.7rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[1rem]">{`${location}, ${translateModality(modality)}`}</span>
        </div>
        <div
          className="h-3/6 w-max "
          id={`medium-container-${index}`}
        >
          <div className="mt-3 h-5 w-fit px-3 py-1 flex items-center rounded-lg bg-linkIt-300">
            <p className="text-white  text-[0.5rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem]">
              {`${type}`}
            </p>
          </div>
          {stack?.length !== undefined && stack?.length > 0 && (
            <RenderizarElementos
              stack={stack}
              index={index}
              bigContainer={bigContainer}
              current={current}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;

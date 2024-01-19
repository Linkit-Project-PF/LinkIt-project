import { motion } from "framer-motion";
import { FunctionComponent } from "react";

export type TestimonialCardProps = {
  _id: string;
  name: string;
  rol: string;
  createdDate: string;
  country: string;
  detail: string;
  archived: boolean;
};

const TestimonialCard: FunctionComponent<TestimonialCardProps> = ({
  detail,
  name,
  rol,
  country,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-[13rem] xs:h-[15rem] ssm:h-[20rem] lg:h-full w-full p-[8%] border-[0.13rem] rounded-[7px] font-montserrat bg-white shadow-lg flex flex-col"
    >
      <div className="h-[90%] lg:h-[70%] border-b-[2px] border-linkIt-500">
        <p className="font-semibold text-[0.7rem] xs:text-[0.9rem] ssm:text-[1.2rem] 1xl:text-[1.3rem]">{detail}</p>
      </div>
      <div className="mt-3">
        <p className="font-bold text-[0.7rem] xs:text-[0.9rem] ssm:text-[1.2rem] 1xl:text-[1.3rem]">{name}</p>
        <p className="text-[0.7rem] xs:text-[0.9rem] ssm:text-[1rem]  1xl:text-[1.1rem] font-semibold">{rol}</p>
        <p className="text-[0.7rem] xs:text-[0.9rem] ssm:text-[1rem] 1xl:text-[1.1rem] font-semibold">{country}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

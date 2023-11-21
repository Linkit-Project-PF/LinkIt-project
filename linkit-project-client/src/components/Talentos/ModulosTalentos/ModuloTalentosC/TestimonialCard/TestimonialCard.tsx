import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

export type TestimonialCardProps = {
  _id: string,
  nameUserOrCompany: string,
  rol: string,
  createdDate: string,
  country: string,
  detail: string,
  archived: boolean
};

const TestimonialCard: FunctionComponent<TestimonialCardProps> = ({ detail, nameUserOrCompany, rol, country }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col w-full h-full px-5 py-8  border-[0.13rem] rounded-[0.625rem] font-montserrat text-[1.5rem] bg-white shadow-lg"
    >
      <div className="h-4/6 pb-2 border-b border-gray-300 overflow-x-auto">
        <p className="text-base font-semibold">{detail}</p>
      </div>
      <div className="flex flex-col justify-start h-2/6 mt-3">
        <p className="font-semibold">{nameUserOrCompany}</p>
        <p className="text-[0.9rem]">{rol}</p>
        <p className="text-[0.9rem]">{country}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
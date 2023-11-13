// TestimonialCard.tsx
import { motion } from 'framer-motion';
import React from 'react';

export type TestimonialCardProps = {
    testimonial: string;
    name: string;
    role: string;
    country: string;
  };

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, name, role, country }) => {
  return (
    <motion.div
      className="flex flex-col border-[0.13rem] w-full rounded-[0.625rem] font-montserrat text-[1.5rem] items-center justify-center bg-white shadow-lg"
    >
      <p className="p-[3rem]">{testimonial}</p>
      <div className="w-full px-[3rem] pb-[3rem] text-center">
        <p className="font-semibold">{name}</p>
        <p className="text-[0.9rem]">{role}</p>
        <p className="text-[0.9rem]">{country}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

// TestimonialCards.tsx
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import TestimonialCard, { TestimonialCardProps } from './TestimonialCard'; // Assuming both files are in the same directory
 // Import the TestimonialCard component

type TestimonialCardsProps = {
    testimonials: Array<TestimonialCardProps>;
};

const TestimonialCards: React.FC<TestimonialCardsProps> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  const handleNext = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <div className="flex justify-center items-center">
      <button onClick={handlePrev} className="text-3xl">{'<'}</button>
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
      >
        <TestimonialCard {...testimonials[current]} />
      </motion.div>
      <button onClick={handleNext} className="text-3xl">{'>'}</button>
    </div>
  );
};

export default TestimonialCards;

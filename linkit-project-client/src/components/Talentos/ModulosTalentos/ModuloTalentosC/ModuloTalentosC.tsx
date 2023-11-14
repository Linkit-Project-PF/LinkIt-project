// ModuloTalentosG.tsx
import React from 'react';
import TestimonialCards from './TestimonialCard/TestimonialCards'; // Import the JobCards component
import { TestimonialCardProps } from './TestimonialCard/TestimonialCard';

const ModuloTalentosG: React.FC = () => {
  // This array would come from props or a data fetching function in a real application
  const testimonials: TestimonialCardProps[] = [
    // ... populate with your testimonial data
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-linkIt-500 h-[40rem]">
      <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros talentos</h2>
      <TestimonialCards testimonials={testimonials} />
      <button className="mt-4 px-4 py-2 rounded bg-linkIt-300 hover:bg-linkIt-400 transition-colors duration-300 ease-in-out">
        Conoce los casos de éxito
      </button>
    </div>
  );
};

export default ModuloTalentosG;

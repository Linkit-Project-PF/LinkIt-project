import React, { useState, useEffect, useRef } from 'react';

interface hasH3TwoLinesprops{
  text:string
}
const HasH3TwoLines: React.FC<hasH3TwoLinesprops> = ({text}) => {
  const [isWrapped, setIsWrapped] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const checkIfWrapped = () => {
      if (headingRef.current) {
        const singleLineHeight = parseInt(window.getComputedStyle(headingRef.current).lineHeight, 16);
        const headingHeight = headingRef.current.offsetHeight;
        setIsWrapped(headingHeight > singleLineHeight);
      }
    };

    checkIfWrapped();

    window.addEventListener('resize', checkIfWrapped);
    return () => {
      window.removeEventListener('resize', checkIfWrapped);
    };
  }, []);

  return (
    <div>
      <h3 ref={headingRef} className='text-white font-bold text-[0.7rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1.2rem] leading-5 font-montserrat'>{`${text}`}</h3>
      {!isWrapped && <p className='text-white font-bold text-[0.7rem] ssm:text-[0.8rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1.2rem] leading-5 font-montserrat opacity-0'>Relleno</p>}
    </div>
  );
};

export default HasH3TwoLines;

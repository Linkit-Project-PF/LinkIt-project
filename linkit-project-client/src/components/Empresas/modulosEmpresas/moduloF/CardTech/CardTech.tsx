
import React from 'react';

interface CardTechProps {
  name: string;
  logo: string;
}

const CardTech: React.FC<CardTechProps> = ({ name, logo }) => {
  return (
    <div className='border-2 2xl:border-[3px] rounded-xl flex justify-center items-center border-linkIt-300 m-2 p-2 2xl:p-6 h-10 2xl:h-20 hover:scale-110' >
        { logo != '-' || !logo ? <img className="h-full w-full object-contain" src={logo} alt={name} /> : <h1 className='font-bold'>{name}</h1>}
    </div>
  );
};

export default CardTech;

import React from 'react';

interface CardTechProps {
  id: number;
  name: string;
  logo: string;
}

const CardTech: React.FC<CardTechProps> = ({ name, logo, id }) => {
  return (
    <div key={id} className='border-2 rounded-md border-linkIt-300 m-1 p-1 h-6 sm:m-1 md:h-8 lg:h-10  hover:scale-110' >
        { logo != '-' || !logo ? <img className="h-full w-full object-contain" src={logo} alt={name} title={name}/> : <h1 className='font-bold'>{name}</h1>}
    </div>
  );
};

export default CardTech;

import React from 'react';

interface CardTechProps {
  id: number;
  name: string;
  logo: string;
}

const CardTech: React.FC<CardTechProps> = ({ name, logo, id }) => {
  return (
    <div key={id} className='border-2 rounded-md border-linkIt-300 m-2 p-2 h-12 hover:scale-110' >
        { logo != '-' || !logo ? <img className="h-full w-full object-contain" src={logo} alt={name} /> : <h1 className='font-bold'>{name}</h1>}
    </div>
  );
};

export default CardTech;
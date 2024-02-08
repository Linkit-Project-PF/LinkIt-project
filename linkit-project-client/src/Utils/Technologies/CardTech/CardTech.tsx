import React from 'react';

interface CardTechProps {
  id: number;
  name: string;
  logo: string;
}

const CardTech: React.FC<CardTechProps> = ({ name, logo, id }) => {
  return (
    <div key={id} className='border-2 rounded-xl border-linkIt-300 m-1 ssm:m-2 p-1 h-[2rem] ssm:h-[3rem] lg:p-[0.50rem] lg:m-[0.40rem] hover:scale-110 dark:border-transparent dark:bg-white' >
        { logo != '-' || !logo ? <img className="h-full w-fit object-contain" src={logo} alt={name} title={name}/> : <h1 className='font-bold'>{name}</h1>}
    </div>
  );
};

export default CardTech;
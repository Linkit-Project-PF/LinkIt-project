// JobFilters.tsx
import { useState, useEffect, useRef, FC } from 'react';
import { useTranslation } from "react-i18next";

type DropdownProps = {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
  isLast?: boolean;
};

const Dropdown: FC<DropdownProps> = ({ title, options, onSelect, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelectedOption(option === selectedOption ? '' : option);
    setIsOpen(false);
    onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  const borderStyle = isLast ? '' : 'border-r border-gray-300';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className={`inline-flex items-center h-[2rem] pr-[1rem] ${borderStyle}`}>
        <button onClick={handleToggle} className="bg-white text-sm font-medium text-gray-700 focus:outline-none flex gap-[1rem]">
          {selectedOption || title} 
          <span className="ml-2">
            <img className="w-[1rem] relative top-[2px]" src="Vectores/arrow.png" alt="" />
          </span>
        </button>
      </div>
      {isOpen && (
        <ul className="origin-top-left absolute left-0 mt-1 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          {options.map((option) => (
            <li key={option} className="text-gray-700 flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect(option)}>
              {option}
              {selectedOption === option && <span className="text-green-500">✔</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const JobFilters: FC = () => {
  const [filters, setFilters] = useState({
    stack: '',
    type: '',
    location: '',
    modality: '',
  });
  const {t} = useTranslation();
  const [dropdownTitles, setDropdownTitles] = useState({
    
    stack: 'Stack',
    type: 'Tipo',
    location: 'Ubicación',
    modality: 'Modalidad',
  });

  const handleSelect = (category: keyof typeof filters) => (option: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: option,
    }));
    setDropdownTitles((prevTitles) => ({
      ...prevTitles,
      [category]: option,
    }));
  };


  return (
    <div className="flex w-4/6 justify-between items-center bg-white shadow rounded-lg p-4 h-[3.5rem]">
      <Dropdown title={dropdownTitles.stack} options={['Frontend', 'Backend', 'Fullstack']} onSelect={handleSelect('stack')} />
      <Dropdown title={dropdownTitles.type} options={['Permanent', 'Contract', 'Internship']} onSelect={handleSelect('type')} />
      <Dropdown title={dropdownTitles.location} options={['Remote', 'Onsite', 'Hybrid']} onSelect={handleSelect('location')} />
      <Dropdown title={dropdownTitles.modality} options={['Full-time', 'Part-time', 'Freelance']} onSelect={handleSelect('modality')} isLast={true} />
      <button className="bg-linkIt-300 rounded-lg p-2 h-10 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out ">
        {t('Encontrar Vacante')}
      </button>
    </div>
  );
};

export default JobFilters;

import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import espanish from 'i18n-iso-countries/langs/es.json';
import { CustomFlowbiteTheme, Dropdown } from "flowbite-react";

const customTheme: CustomFlowbiteTheme['dropdown'] = {
  "arrowIcon": "ml-2 h-4 w-4",
  "content": "py-1 focus:outline-none text-[0.6rem]  ssm:text-[0.9rem] md:text-[1rem] bg-white text-black lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
  "floating": {
    "animation": "transition-opacity",
    "arrow": {
      "base": "absolute z-10 h-2 w-2 rotate-45",
      "style": {
        "dark": "bg-gray-900 dark:bg-gray-700",
        "light": "bg-white",
        "auto": "bg-white dark:bg-gray-700"
      },
      "placement": "-4px"
    },
    "base": "z-10 w-fit rounded divide-y divide-gray-200 focus:outline-none text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
    "content": "py-1 text-sm text-gray-700 dark:text-gray-200 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
    "divider": "my-1 h-px",
    "header": "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
    "hidden": "invisible opacity-0",
    "item": {
      "container": " text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
      "base": " text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem] flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      "icon": "mr-2 h-4 w-4"
    },
    "style": {
      "dark": "",
      "light": "border",
      "auto": "border text-gray-900 dark:border-none"
    },
    "target": "bg-transparent w-full justify-start text-left focus:outline-none text-[0.4rem] ssm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem]"
  },
  "inlineWrapper": " flex items-center w-full h-fit rounded-md p-3 ssm:p-2.5 sm:p-2 lg:p-2.5 xl:p-2 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]"
};

interface OptionType {
  value: string;
  label: string;
}


countries.registerLocale(english);
countries.registerLocale(espanish);



const countryOptionsEs: OptionType[] = [
  // Paises de habla hispana
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Bolivia', label: 'Bolivia' },
  { value: 'Chile', label: 'Chile' },
  { value: 'Colombia', label: 'Colombia' },
  { value: 'Costa Rica', label: 'Costa Rica' },
  { value: 'Dominican Republic', label: 'República Dominicana' },
  { value: 'Ecuador', label: 'Ecuador' },
  { value: 'Spain', label: 'España' },
  { value: 'Guatemala', label: 'Guatemala' },
  { value: 'Honduras', label: 'Honduras' },
  { value: 'Mexico', label: 'México' },
  { value: 'Nicaragua', label: 'Nicaragua' },
  { value: 'Panama', label: 'Panamá' },
  { value: 'Peru', label: 'Perú' },
  { value: 'Puerto Rico', label: 'Puerto Rico' },
  { value: 'Paraguay', label: 'Paraguay' },
  { value: 'El Salvador', label: 'El Salvador' },
  { value: 'Uruguay', label: 'Uruguay' },
  { value: 'Venezuela', label: 'Venezuela' },
  // Otros países
  { value: 'United States', label: 'Estados Unidos' },
  { value: 'Canada', label: 'Canadá' },
];

const countryOptionsEn : OptionType[] = [
  // Paises de habla hispana
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Bolivia', label: 'Bolivia' },
    { value: 'Chile', label: 'Chile' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Costa Rica', label: 'Costa Rica' },
    { value: 'Dominican Republic', label: 'Dominican Republic' },
    { value: 'Ecuador', label: 'Ecuador' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Guatemala', label: 'Guatemala' },
    { value: 'Honduras', label: 'Honduras' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Nicaragua', label: 'Nicaragua' },
    { value: 'Panama', label: 'Panama' },
    { value: 'Peru', label: 'Peru' },
    { value: 'Puerto Rico', label: 'Puerto Rico' },
    { value: 'Paraguay', label: 'Paraguay' },
    { value: 'El Salvador', label: 'El Salvador' },
    { value: 'Uruguay', label: 'Uruguay' },
    { value: 'Venezuela', label: 'Venezuela' },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
  
];


export function SelectCountryEs({setCountry, country}: any) {
  
  
  const handleChange = (selectedOption: OptionType|null) => {
    setCountry(selectedOption as OptionType)
  }

  return (
    <div>
    <Dropdown label={country ? country.label : 'Ubicación'} inline className="h-28 lg:h-40 overflow-y-scroll font-medium" theme={customTheme} >
    {countryOptionsEs.sort((a, b) => a.label.localeCompare(b.label)).map(option => (
              <a key={option.value} className="block px-2 cursor-pointer"  onClick={() => handleChange(option)}>{option.label}</a>
            ))}
    </Dropdown>
    </div>
  );
}

export function SelectCountryEn({setCountry, country}: any) {

  
  const handleChange = (selectedOption: OptionType|null) => {
    setCountry(selectedOption as OptionType)
  }




  return (
    <div>
    <Dropdown label={country ? country.label : 'Location'} inline className="h-28 lg:h-40 overflow-y-scroll font-medium" theme={customTheme} >
    {countryOptionsEn.sort((a, b) => a.label.localeCompare(b.label)).map(option => (
              <a key={option.value} className="block px-2 cursor-pointer"  onClick={() => handleChange(option)}>{option.label}</a>
            ))}
    </Dropdown>
    </div>
  );
}

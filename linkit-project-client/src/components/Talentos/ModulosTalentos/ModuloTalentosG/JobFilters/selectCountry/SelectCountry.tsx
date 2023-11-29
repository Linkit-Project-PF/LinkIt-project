import Select from "react-select";
import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import espanish from 'i18n-iso-countries/langs/es.json';
import { useState } from "react";
import { components } from "react-select";

interface OptionType {
  value: string;
  label: string;
}


countries.registerLocale(english);
countries.registerLocale(espanish);

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src="/Vectores/dropdown.png"
        alt="dropdown-arrow"
        className={`w-[1.1rem] ml-[30%] mr-[-10%]`}
      />
    </components.DropdownIndicator>
  );
}

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

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: '#fff',
    border: 'none',
    minHeight: '2rem',
    height: '2rem',
    boxShadow: 'none',
    width: '100%',
  }),

  container: (provided: any) => ({
    ...provided,
    borderRight: '2px solid #ECEEF0',
    height: '2.4rem',
    paddingRight: '2rem'
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    height: '30px',
    padding: '0 3rem 0 0',
    maxWidth: '100%',
    overflow: 'hidden',
  }),

  input: (provided: any) => ({
    ...provided,
    margin: '0px',
    maxWidth: '100%',
    overflow: 'hidden',
  }),

  indicatorsContainer: (provided: any) => ({
    ...provided,
    height: '30px',
  }),
  menu: (provided: any) => ({
    ...provided,
    fontFamily: 'Montserrat',
    width: '150%',
    maxWidth: '150%',
    marginLeft: '-40%'
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: '#2E2D2C',
  }),
};

export function SelectCountryEs({setCountry, country}: any) {
  
  
  const handleChange = (selectedOption: OptionType|null) => {
    setCountry(selectedOption as OptionType)
  }


  return (
    <Select
      options={countryOptionsEs.sort((a, b) => a.label.localeCompare(b.label))}
      value={country}
      styles={customStyles}
      placeholder= 'Ubicación'
      onChange={handleChange}
      components={{ DropdownIndicator }}
    />
  );
}

export function SelectCountryEn({setCountry, country}: any) {

  
  const handleChange = (selectedOption: OptionType|null) => {
    setCountry(selectedOption as OptionType)
  }


  return (
    <Select
      options={countryOptionsEn.sort((a, b) => a.label.localeCompare(b.label))}
      value={country}
      styles={customStyles}
      placeholder= 'Ubicación'
      onChange={handleChange}
      components={{ DropdownIndicator }}
    />
  );
}

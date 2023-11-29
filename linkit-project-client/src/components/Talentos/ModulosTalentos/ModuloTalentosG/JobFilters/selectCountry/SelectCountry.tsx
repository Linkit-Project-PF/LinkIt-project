import Select from "react-select";
import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import espanish from 'i18n-iso-countries/langs/es.json';
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
  { value: 'AR', label: 'Argentina' },
  { value: 'BO', label: 'Bolivia' },
  { value: 'CL', label: 'Chile' },
  { value: 'CO', label: 'Colombia' },
  { value: 'CR', label: 'Costa Rica' },
  { value: 'CU', label: 'Cuba' },
  { value: 'DO', label: 'República Dominicana' },
  { value: 'EC', label: 'Ecuador' },
  { value: 'ES', label: 'España' },
  { value: 'GT', label: 'Guatemala' },
  { value: 'HN', label: 'Honduras' },
  { value: 'MX', label: 'México' },
  { value: 'NI', label: 'Nicaragua' },
  { value: 'PA', label: 'Panamá' },
  { value: 'PE', label: 'Perú' },
  { value: 'PR', label: 'Puerto Rico' },
  { value: 'PY', label: 'Paraguay' },
  { value: 'SV', label: 'El Salvador' },
  { value: 'UY', label: 'Uruguay' },
  { value: 'VE', label: 'Venezuela' },
  // Otros países
  { value: 'US', label: 'Estados Unidos' },
  { value: 'CA', label: 'Canadá' },
];

const countryOptionsEn : OptionType[] = [
  // Paises de habla hispana
  { value: 'AR', label: 'Argentina' },
  { value: 'BO', label: 'Bolivia' },
  { value: 'CL', label: 'Chile' },
  { value: 'CO', label: 'Colombia' },
  { value: 'CR', label: 'Costa Rica' },
  { value: 'CU', label: 'Cuba' },
  { value: 'DO', label: 'Dominican Republic' },
  { value: 'EC', label: 'Ecuador' },
  { value: 'ES', label: 'Spain' },
  { value: 'GT', label: 'Guatemala' },
  { value: 'HN', label: 'Honduras' },
  { value: 'MX', label: 'Mexico' },
  { value: 'NI', label: 'Nicaragua' },
  { value: 'PA', label: 'Panama' },
  { value: 'PE', label: 'Peru' },
  { value: 'PR', label: 'Puerto Rico' },
  { value: 'PY', label: 'Paraguay' },
  { value: 'SV', label: 'El Salvador' },
  { value: 'UY', label: 'Uruguay' },
  { value: 'VE', label: 'Venezuela' },
  // Otros países
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
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
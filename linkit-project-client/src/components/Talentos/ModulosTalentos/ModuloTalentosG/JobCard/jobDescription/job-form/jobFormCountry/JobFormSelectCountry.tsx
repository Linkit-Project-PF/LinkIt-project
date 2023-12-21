import Select from "react-select";
import countries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json';
import espanish from 'i18n-iso-countries/langs/es.json';
import { components } from "react-select";
import { useTranslation } from "react-i18next";

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
    border: '2px solid #CBDAE8',
    height: '2.5rem',
    paddingRight: '2rem',
    paddingLeft: '.5rem',
    borderRadius: '5px',
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
    width: '90%',
    maxWidth: '100%',
    marginLeft: ''
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: '#2E2D2C',
    position: 'relative',
    left: '1.5rem',
    top: '0.2rem'
  }),
};

export function SelectCountryFormEs({setCountry, country}: any) {
  const { t } = useTranslation();

  const countryOptionsEs: OptionType[] = [
    // Paises de habla hispana
    { value: 'Argentina', label: t('Argentina') },
    { value: 'Bolivia', label: t('Bolivia') },
    { value: 'Chile', label: t('Chile') },
    { value: 'Colombia', label: t('Colombia') },
    { value: 'Costa Rica', label: t('Costa Rica') },
    { value: 'Dominican Republic', label: t('República Dominicana') },
    { value: 'Ecuador', label: t('Ecuador') },
    { value: 'Spain', label: t('España') },
    { value: 'Guatemala', label: t('Guatemala') },
    { value: 'Honduras', label: t('Honduras') },
    { value: 'Mexico', label: t('México') },
    { value: 'Nicaragua', label: t('Nicaragua') },
    { value: 'Panama', label: t('Panamá') },
    { value: 'Peru', label: t('Perú') },
    { value: 'Puerto Rico', label: t('Puerto Rico') },
    { value: 'Paraguay', label: t('Paraguay') },
    { value: 'El Salvador', label: t('El Salvador') },
    { value: 'Uruguay', label: t('Uruguay') },
    { value: 'Venezuela', label: t('Venezuela') },
    // Otros países
    { value: 'United States', label: t('Estados Unidos') },
    { value: 'Canada', label: t('Canadá') },
  ];
  
  
  const handleChange = (selectedOption: OptionType|null) => {
    setCountry(selectedOption as OptionType)
  }
  
  return (
    <Select
    options={countryOptionsEs.sort((a, b) => a.label.localeCompare(b.label))}
    value={country}
    defaultInputValue={country}
      styles={customStyles}
      placeholder= {t('Ubicación')}
      onChange={handleChange}
      components={{ DropdownIndicator }}
    />
  );
}

import { useState } from "react";
import validations from "./validations";
import { validateContact } from "./errors/validation";
import { ValidationError } from "./errors/errors";
import { SUPERADMN_ID } from "../../env";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2'
import "./contactUs.css"
import { contacts } from "./typeContacts";
import { CustomFlowbiteTheme, Dropdown } from "flowbite-react";


export default function ContactUs() {


  const customTheme: CustomFlowbiteTheme['dropdown'] = {
      "arrowIcon": "ml-2 h-4 w-4",
      "content": "py-1 focus:outline-none text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] bg-white text-black lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
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
        "divider": "my-1 h-px bg-gray-100 dark:bg-gray-600",
        "header": "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
        "hidden": "invisible opacity-0",
        "item": {
          "container": "text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]",
          "base": "text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem] flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
          "icon": "mr-2 h-4 w-4"
        },
        "style": {
          "dark": "bg-gray-900 text-white dark:bg-gray-700",
          "light": "border border-red-200 text-gray-900",
          "auto": "border border-gray-200  text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
        },
        "target": "w-fit bg-transparent border border-white w-full justify-start text-left focus:outline-none text-[0.4rem] ssm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem]"
      },
      "inlineWrapper": "flex items-center w-full h-fit rounded-md border border-white p-3 ssm:p-2.5 sm:p-2 lg:p-2.5 xl:p-2 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]"
  };
const { t } = useTranslation();



  const [contacts, setContacts] = useState<contacts>({
    firstName: "",
    lastName: "",
    company: "",
    service: [] as string[],
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    company: "",
    service: "",
    email: "",
    message: "",
  });

const handleChange = (e:  React.ChangeEvent<HTMLInputElement> ) => {
  const { name, value, type, checked } = e.target;

  const fieldErrors = validations({
    ...contacts,
    [name]: value,
  });

  if (type === "checkbox") {
    if (checked) {
      setContacts(prevContacts => {
        if (!prevContacts.service.includes(value)) {
          return {
            ...prevContacts,
            service: [...prevContacts.service, value],
          };
        } else {
          return prevContacts;
        }
      });
    } else {
      setContacts(prevContacts => ({
        ...prevContacts,
        service: prevContacts.service.filter((service) => service !== value),
      }));
    }
  } else {
    setContacts({
      ...contacts,
      [name]: value,
    });
  }
  setErrors({
    ...errors,
    [name]: fieldErrors[name as keyof typeof fieldErrors],
  });

}

const contactsBtn = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    try {
      validateContact(contacts);
      const response = await axios.post('https://linkit-server.onrender.com/resources/contactus', contacts,
      {
        headers: {
          Authorization: `Bearer ${SUPERADMN_ID}`,
          "Accept-Language": sessionStorage.getItem("lang"),
        },
      })
      if(response.status === 200) {
        Swal.fire({ 
          customClass: {
            confirmButton: 'background-button bg-linkIt-300'
          },
          title: t("¡Gracias por contactarnos!"),
          text: t("Nos estaremos comunicando a la brevedad"),
          allowOutsideClick: true,
          showConfirmButton: true,
          buttonsStyling: false,
          icon: "success" }),
          

        setContacts({
          firstName: "",
          lastName: "",
          company: "",
          service: [] as string[],
          email: "",
          message: "",
        })
      }
      return response
    } catch (error) {
      Swal.fire({ 
        customClass: {
          confirmButton: 'background-button'
        },
        title: "<h1 style='color: black; font-family: Manrope'>Faltan datos del formulario!</h1>",
        html: "<span style='font-family: Montserrat'>Por favor, completa todos los campos</span>",
        icon: 'error',
        showConfirmButton: true,
        buttonsStyling: false,
        })
        
      throw new ValidationError(`Faltan datos del formulario: ${(error as Error).message}`);
    }
}
  return (
    <div className="bg-linkIt-300 text-white grid lg:flex p-[7%] lg:gap-[10%] dark:bg-linkIt-400">
      <h3 className="font-bold text-[0.9rem] xs:text-[1.2rem] ssm:text-[1.7rem] sm:text-[1.9rem] md:text-[2.3rem] xl:text-[2.5rem] leading-tight justify-self-center font-manrope">{t('Contáctanos para escalar tu equipo')}</h3>
      <form className="grid grid-cols-2 gap-y-[4%] gap-x-[2%] pt-[2%] font-montserrat whitespace-nowrap w-full" onSubmit={contactsBtn}>
        <div>
        <input className={`${errors.firstName ? ' border-black' : 'border-white'} border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full ring-0 focus:border-white focus:ring-0 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]`} type="text" placeholder={t("Nombre")} name="firstName" value={contacts.firstName} onChange={handleChange} onBlur={handleChange} />
        {errors.firstName && (
              <p className="text-white ml-3 italic text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]">{errors.firstName}</p>
            )}
        </div>
        <div>
        <input className={`${errors.lastName ? 'border-black' : 'border-white' } border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full focus:border-white focus:ring-0 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]`} type="text" placeholder={t("Apellido")} name="lastName" value={contacts.lastName} onChange={handleChange} onBlur={handleChange} />
        {errors.lastName && (
              <p className="text-white ml-3 italic text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]">{errors.lastName}</p>
            )}
        </div>

        <div>
        <input className={`${errors.company ? 'border-black' : 'border-white' } border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full focus:border-white focus:ring-0 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]`} type="text" placeholder={t("Empresa")} name="company" value={contacts.company} onChange={handleChange} onBlur={handleChange} />
        {errors.company && (
              <p className="text-white ml-3 italic text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]">{errors.company}</p>
            )}
        </div>
          <Dropdown label={t('¿Qué servicio te interesa?')} theme={customTheme} inline> 
              <li className="flex items-center">
              <input className=" checked:bg-linkIt-300 rounded-sm mr-1 focus:ring-0" type="checkbox" name="Gestión y beneficios" value='Gestión y beneficios' id="Gestión y beneficios" checked={contacts.service.includes('Gestión y beneficios')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Gestión y beneficios" className="cursor-pointer w-full hover:text-linkIt-300">{t('Gestión y beneficios')}</label>
              </li>
              <hr className="w-[100%]" />
              <li className="flex items-center">
              <input className=" checked:bg-linkIt-300 rounded-sm mr-1 focus:ring-0" type="checkbox" name="Reclutamiento y selección" value='Reclutamiento y selección' id="Reclutamiento y selección" checked={contacts.service.includes('Reclutamiento y selección')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Reclutamiento y selección" className="cursor-pointer w-full hover:text-linkIt-300">{t('Reclutamiento y selección')}</label>
              </li>
              <hr className="w-[100%]" />
              <li className="flex items-center">
              <input className=" checked:bg-linkIt-300 rounded-sm mr-1 focus:ring-0" type="checkbox" name="Contratación" value='Contratación' id="Contratación" checked={contacts.service.includes('Contratación')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Contratación" className="cursor-pointer w-full hover:text-linkIt-300">{t('Contratación')}</label>
              </li>
          </Dropdown >
          {errors.service && (
              <p className="text-white ml-3 italic text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]">{errors.service}</p>
            )}
          
          <div className="flex flex-col">
        <input className={`${errors.email ? 'border-black' : 'border-white' } border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full focus:border-white focus:ring-0 text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]`} type="text" placeholder="Email" name="email" value={contacts.email} onChange={handleChange} onBlur={handleChange}/>
        {errors.email && (
              <p className="text-white ml-3 italic text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]">{errors.email}</p>
            )}
            <div className="flex h-full items-end">
        <button className="bg-white text-linkIt-200 font-bold rounded-[7px] p-1 ssm:p-2 xl:p-2.5 w-[50%] ssm:w-[40%] md:w-[30%] items-end disabled:cursor-not-allowed disabled:opacity-[0.8]" type="submit" disabled={
          errors.firstName ||
          errors.lastName ||
          errors.company ||
          errors.service ||
          errors.email ||
          errors.message ||
          contacts.firstName === "" ||
          contacts.lastName === "" ||
          contacts.company === "" ||
          contacts.service.length === 0 ||
          contacts.email === "" ||
          contacts.message === ""
          ? true
          : false
        }>{t('Enviar')}</button>
        </div>
        </div>
        <div>
        <input className={`message-box ${errors.message ? 'border-black' : 'border-white' } text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]`} type="textArea" placeholder={t("Mensaje")} name="message" value={contacts.message} onChange={handleChange} onBlur={handleChange} />
        {errors.message && (
              <p className="text-white ml-3 italic text-[0.6rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem]">{errors.message}</p>
            )}
        </div>
      </form>
      </div>
  );
}
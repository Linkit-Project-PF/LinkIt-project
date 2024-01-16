import arrow from "/Vectores/white-arrow.png";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import validations from "./validations";
import { validateContact } from "./errors/validation";
import { ValidationError } from "./errors/errors";
import { SUPERADMN_ID } from "../../env";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2'
import "./contactUs.css"
import { contacts } from "./typeContacts";

const staggerMenuItems = stagger(0.03, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(10% 50% 90% 50% )",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.1,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function ContactUs() {

const { t } = useTranslation();

const [isOpen, setIsOpen] = useState(false);
const scope = useMenuAnimation(isOpen);

  const [contacts, setContacts] = useState<contacts>({
    firstName: "",
    lastName: "",
    company: "",
    service: [] as string[],
    email: "",
    message: "",
  });
  console.log(contacts)
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
      setContacts({
        ...contacts,
        service: [...contacts.service, value],
      });
    } else {
      setContacts({
        ...contacts,
        service: contacts.service.filter((service) => service !== value),
      });
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
          title: "¡Gracias por contactarnos!",
          text: "Nos estaremos comunicando a la brevedad",
          icon: "success" })

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
      <h1 className="font-semibold text-[1rem] xs:text-[1.2rem] ssm:text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] justify-self-center font-montserrat">{t('Contáctanos')}</h1>
      <form className="grid grid-cols-2 gap-y-[4%] gap-x-[2%] pt-[2%] text-[0.5rem] ssm:text-[0.7rem] md:text-[0.9rem] xl:text-[1.2rem] font-montserrat whitespace-nowrap w-full" onSubmit={contactsBtn}>
        <div>
        <input className={`${errors.firstName ? ' border-black' : ''} border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full`} type="text" placeholder="Nombre"  name="firstName" value={contacts.firstName} onChange={handleChange} onBlur={handleChange} />
        {errors.firstName && (
              <p className="text-white ml-3 italic">{errors.firstName}</p>
            )}
        </div>
        <div>
        <input className={`${errors.lastName ? 'border-black' : '' } border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full`} type="text" placeholder="Apellido" name="lastName" value={contacts.lastName} onChange={handleChange} onBlur={handleChange} />
        {errors.lastName && (
              <p className="text-white ml-3 italic">{errors.lastName}</p>
            )}
        </div>

        <div>
        <input className={`${errors.company ? 'border-black' : '' } border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full`} type="text" placeholder="Empresa" name="company" value={contacts.company} onChange={handleChange} onBlur={handleChange} />
        {errors.company && (
              <p className="text-white ml-3 italic">{errors.company}</p>
            )}
        </div>
        <div>
        <motion.nav
            className={`${errors.service ? 'border-black' : '' } placeholder-white bg-transparent outline-none w-full relative`}
            ref={scope}
            onClick={(e) => { 
              e.preventDefault();
              setIsOpen(!isOpen);
              }}
              
          >
            <motion.button
              className={`text-white flex justify-between items-center text-center w-full border rounded-md p-2 relative`}
              whileTap={{ scale: 0.97 }}
            >
              {t('¿Qué servicio te interesa?')}
              <div className="arrow w-3 ml-1 mt-[2px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="absolute top-[86%] z-10 border-white border border-t-0 bg-white rounded-xl text-black p-1 h-fit placeholder-white w-full rounded-t-none items-center space-y-1.5"
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
              onClick={(e) => e.stopPropagation()}
              
            >
              <li className="flex items-center">
              <input className=" checked:bg-linkIt-300 rounded-sm  w-[8%] mr-1" type="checkbox" name="Gestión y beneficios" value='Gestión y beneficios' id="Gestión y beneficios" checked={contacts.service.includes('Gestión y beneficios')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Gestión y beneficios" className="cursor-pointer w-full hover:text-linkIt-300">Gestión y beneficios</label>
              </li>
              <hr className="w-[100%]" />
              <li className="flex items-center">
              <input className=" checked:bg-linkIt-300 rounded-sm w-[8%] mr-1" type="checkbox" name="Reclutamiento y selección" value='Reclutamiento y selección' id="Reclutamiento y selección" checked={contacts.service.includes('Reclutamiento y selección')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Reclutamiento y selección" className="cursor-pointer w-full hover:text-linkIt-300">Reclutamiento y selección</label>
              </li>
              <hr className="w-[100%]" />
              <li className="flex items-center">
              <input className=" checked:bg-linkIt-300 rounded-sm w-[8%] mr-1" type="checkbox" name="Contratación" value='Contratación' id="Contratación" checked={contacts.service.includes('Contratación')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Contratación" className="cursor-pointer w-full hover:text-linkIt-300">Contratación</label>
              </li>
            </ul>{" "}
          </motion.nav>
          {errors.service && (
              <p className="text-white ml-3 italic">{errors.service}</p>
            )}
          </div>
          <div className="flex flex-col">
        <input className={`${errors.email ? 'border-black' : '' } border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full`} type="text" placeholder="Email" name="email" value={contacts.email} onChange={handleChange} onBlur={handleChange}/>
        {errors.email && (
              <p className="text-white ml-3 italic">{errors.email}</p>
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
        <input className={`message-box ${errors.message ? 'border-black' : '' } `} type="textArea" placeholder="Mensaje" name="message" value={contacts.message} onChange={handleChange} onBlur={handleChange} />
        {errors.message && (
              <p className="text-white ml-3 italic">{errors.message}</p>
            )}
        </div>
      </form>
      </div>
  );
}
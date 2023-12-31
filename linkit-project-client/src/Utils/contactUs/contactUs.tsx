import arrow from "/Vectores/white-arrow.png";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import validations from "./validations";
import { validateContact } from "./errors/validation";
import { ValidationError } from "./errors/errors";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2'
import "./contactUs.css"

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

  const [contacts, setContacts] = useState({
    name: "",
    lastName: "",
    company: "",
    service: [] as string[],
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
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
      await validateContact(contacts);
      const response = await axios.post('https://linkit-server.onrender.com/resources/contactus', contacts)
      if(response.status === 200) {
        Swal.fire({ 
          title: "¡Gracias por contactarnos!",
          text: "Nos estaremos comunicando a la brevedad",
          icon: "success" })

        setContacts({
          name: "",
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
    <div className="bg-linkIt-300 text-white flex p-[5%] gap-[10%] dark:bg-linkIt-400">
      <h1 className="font-semibold text-[3.5vw]">{t('Contáctanos')}</h1>
      <form className="grid grid-cols-2 gap-y-[4%] gap-x-[2%] pt-[2%] text-[1.1vw] xl:text-[0.9vw] whitespace-nowrap w-full" onSubmit={contactsBtn}>
        <div>
        <input className={`${errors.name ? ' border-black' : ''} border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full`} type="text" placeholder="Nombre"  name="name" value={contacts.name} onChange={handleChange} onBlur={handleChange} />
        {errors.name && (
              <p className="text-white ml-3 italic">{errors.name}</p>
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
            className={`${errors.service ? 'border-black' : '' } placeholder-white bg-transparent outline-none w-full h-[5.8vh] xl:h-[4.3vh]`}
            ref={scope}
            onClick={(e) => { 
              e.preventDefault();
              setIsOpen(!isOpen);
              }}
              
          >
            <motion.button
              className={`text-white flex justify-between items-center text-center w-full border rounded-md p-2`}
              whileTap={{ scale: 0.97 }}
            >
              {t('¿Qué servicio te interesa?')}
              <div className="arrow w-3 ml-1 mt-[2px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative z-[10] border-white border border-t-0 bg-white rounded-xl text-black p-1 placeholder-white w-full 2xl:text-xl rounded-t-none top-[-7%]"
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setIsOpen(false)}
            >
              <li className="my-2 text-base items-center">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="Recruiting" value='Recruiting' id="Recruiting" checked={contacts.service.includes('Recruiting')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Recruiting" className="cursor-pointer">Recruiting</label>
              </li>
              <hr className="w-[100%]" />
              <li className="my-2 text-base">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="Staff Augmentation" value='Staff Augmentation' id="Staff Augmentation" checked={contacts.service.includes('Staff Augmentation')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Staff Augmentation" className="cursor-pointer">Staff Augmentation</label>
              </li>
              <hr className="w-[100%]" />
              <li className="my-2 text-base">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="Payroll Management" value='Payroll Management' id="Payroll Management" checked={contacts.service.includes('Payroll Management')}
              onChange={handleChange} onBlur={handleChange} />
              <label htmlFor="Payroll Management" className="cursor-pointer">Payroll Management</label>
              </li>
            </ul>{" "}
          </motion.nav>
          {errors.service && (
              <p className="text-white ml-3 italic">{errors.service}</p>
            )}
          </div>
          <div className=" flex flex-col">
        <input className={`${errors.email ? 'border-black' : '' } border placeholder-white rounded-md bg-transparent text-white outline-none p-2 w-full`} type="text" placeholder="Email" name="email" value={contacts.email} onChange={handleChange} onBlur={handleChange}/>
        {errors.email && (
              <p className="text-white ml-3 italic">{errors.email}</p>
            )}
        <button className=" mt-[18%] bg-white text-linkIt-200 text-sm font-bold rounded-[7px] p-3 px-5 text-[0.8vw] w-[30%] disabled:cursor-not-allowed disabled:opacity-[0.8]" type="submit" disabled={
          errors.name ||
          errors.lastName ||
          errors.company ||
          errors.service ||
          errors.email ||
          errors.message ||
          contacts.name === "" ||
          contacts.lastName === "" ||
          contacts.company === "" ||
          contacts.service.length === 0 ||
          contacts.email === "" ||
          contacts.message === ""
          ? true
          : false
        }>{t('Enviar')}</button>
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
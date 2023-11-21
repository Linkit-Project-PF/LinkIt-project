import arrow from "/Vectores/arrow.png";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import validations from "./validations";
import axios from "axios";
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

export default function ModuloI() {



const [isOpen, setIsOpen] = useState(false);
const scope = useMenuAnimation(isOpen);
// const [focusedField, setFocusedField] = useState("");

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

  // useEffect(() => {
  //   const validateErrors = validations(contacts);
  //   setErrors(validateErrors);
  // }, [contacts]);

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
// const handleFieldFocus = (fieldName: string) => {
//   setFocusedField(fieldName);
// }
const contactsBtn = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (Object.values(errors).every((error) => error === "")) {
    try {
      const response = await axios.post('https://linkit-server.onrender.com/resources/contactus', contacts)
      if(response.status === 200) {
        alert('Ahora eres uno de nuestros contactos!')
      }
      return response
    } catch (error) {
      alert(error)
    }
}
}

  return (
    <div className="bg-linkIt-300 text-white flex flex-row p-10 2xl:p-32 gap-[10vw] 2xl:gap-[10vw]">
      <h1 className="font-semibold text-[2.5rem] 2xl:text-8xl">Contáctanos</h1>
      <div className=" w-[80vw] 2xl:w-[60vw]">
      <form className="flex flex-wrap gap-4 2xl:gap-6 mt-4" onSubmit={contactsBtn}>
        <div>
        <input className={`${errors.name ? 'placeholder-red-500 border-red-500' : 'placeholder-white border-white' } border rounded-lg bg-transparent text-white  p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm 2xl:text-xl`} type="text" placeholder="Nombre"  name="name" value={contacts.name} onChange={handleChange} />
        {errors.name && (
              <p className="text-red-500 ml-4 text-sm 2xl:text-xl italic">{errors.name}</p>
            )}
        </div>
        <div>
        <input className={`${errors.lastName ? 'placeholder-red-500 border-red-500' : 'placeholder-white border-white' } border rounded-lg bg-transparent text-white p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm 2xl:text-xl`} type="text" placeholder="Apellido" name="lastName" value={contacts.lastName} onChange={handleChange} />
        {errors.lastName && (
              <p className="text-red-500 ml-4 text-sm 2xl:text-xl italic">{errors.lastName}</p>
            )}
        </div>
        <div>
        <input className={`${errors.company ? 'placeholder-red-500 border-red-500' : 'placeholder-white border-white' } border rounded-lg bg-transparent text-white  p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm 2xl:text-xl`} type="text" placeholder="Empresa" name="company" value={contacts.company} onChange={handleChange} />
        {errors.company && (
              <p className="text-red-500 ml-4 text-sm 2xl:text-xl italic">{errors.company}</p>
            )}
        </div>
        <div>
        <motion.nav
            className={`${errors.service ? 'placeholder-red-500 border-red-500' : 'placeholder-white border-white' } border rounded-lg bg-transparent p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm h-[6.5vh] xl:h-[5vh] 2xl:text-xl`}
            ref={scope}
            onClick={(e) => { 
              e.preventDefault();
              setIsOpen(!isOpen);
              }}
              
          >
            <motion.button
              className={`text-white flex justify-between items-center w-full`}
              whileTap={{ scale: 0.97 }}
              
            >
              ¿Qué servicio te interesa?
              <div className="arrow w-3 ml-1 mt-[2px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative border-white border border-t-0 bg-white rounded-xl text-black p-1 placeholder-white 2xl:w-[25vw] 2xl:text-xl right-2 mt-3"
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setIsOpen(false)}
            >
              <li className="my-2 text-base items-center">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="Recruiting" value='Recruiting' id="Recruiting" checked={contacts.service.includes('Recruiting')}
              onChange={handleChange} />
              <label htmlFor="Recruiting" className="cursor-pointer">Recruiting</label>
              </li>
              <hr className="w-[100%]" />
              <li className="my-2 text-base">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="Staff Augmentation" value='Staff Augmentation' id="Staff Augmentation" checked={contacts.service.includes('Staff Augmentation')}
              onChange={handleChange} />
              <label htmlFor="Staff Augmentation" className="cursor-pointer">Staff Augmentation</label>
              </li>
              <hr className="w-[100%]" />
              <li className="my-2 text-base">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="Payroll Management" value='Payroll Management' id="Payroll Management" checked={contacts.service.includes('Payroll Management')}
              onChange={handleChange} />
              <label htmlFor="Payroll Management" className="cursor-pointer">Payroll Management</label>
              </li>
            </ul>{" "}
          </motion.nav>
          {errors.service && (
              <p className="text-red-500 ml-4 text-sm 2xl:text-xl italic">{errors.service}</p>
            )}
          </div>
          <div className=" flex flex-col">
        <input className={`${errors.email ? 'placeholder-red-500 border-red-500' : 'placeholder-white border-white' } border rounded-lg bg-transparent text-white  p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm 2xl:text-xl`} type="text" placeholder="Email" name="email" value={contacts.email} onChange={handleChange}/>
        {errors.email && (
              <p className="text-red-500 ml-4 text-sm 2xl:text-xl italic">{errors.email}</p>
            )}
        <button className=" mt-12 2xl:mt-[11vh] bg-white text-linkIt-200 text-sm font-medium 2xl:font-bold p-1 2xl:p-3 w-[8vw] 2xl:w-[5vw] rounded-lg disabled:cursor-not-allowed disabled:opacity-[0.8]" type="submit" disabled={
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
        }>Enviar</button>
        </div>
        <div>
        <input className={`${errors.message ? 'placeholder-red-500 border-red-500' : 'placeholder-white border-white' } border rounded-lg bg-transparent text-white p-2 2xl:p-3 pb-20 xl:pb-32 2xl:pb-[17vh] outline-none w-[28vw] 2xl:w-[25vw] text-sm h-[20vh] 2xl:text-xl break-words`} type="textArea" placeholder="Mensaje" name="message" value={contacts.message} onChange={handleChange} />
        {errors.message && (
              <p className="text-red-500 ml-4 text-sm 2xl:text-xl italic">{errors.message}</p>
            )}
        </div>
      </form>
      </div>
    </div>
  );
}
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
const [focusedField, setFocusedField] = useState("");

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

  useEffect(() => {
    const validateErrors = validations(contacts);
    setErrors(validateErrors);
  }, [contacts]);

const handleChange = (e:  React.ChangeEvent<HTMLInputElement> ) => {
  const { name, value, type, checked } = e.target;

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

}
const handleFieldFocus = (fieldName: string) => {
  setFocusedField(fieldName);
}
const contactsBtn = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (Object.values(errors).every((error) => error === "")) {
    try {
      const response = await axios.post('https://linkit-server.onrender.com/resources/contactus', contacts)
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
}
}

  return (
    <div className="bg-linkIt-300 text-white flex flex-row p-10 2xl:p-32 gap-[10vw] 2xl:gap-[10vw]">
      <h1 className="font-semibold text-[2.5rem] 2xl:text-8xl">Contáctanos</h1>
      <div className=" w-[80vw] 2xl:w-[60vw]">
      <form className="flex flex-wrap gap-4 2xl:gap-6 mt-4" onSubmit={contactsBtn}>
        <div>
        <input className={`${errors.name ? 'border-red-600 placeholder-red-600' : 'border-white placeholder-white'} border rounded-lg bg-transparent text-white  p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm 2xl:text-xl`} type="text" placeholder="Nombre"  name="name" value={contacts.name} onChange={handleChange} onFocus={() => handleFieldFocus("name")} />
        <p className={`ml-4 text-sm 2xl:text-xl text-red-600 ${focusedField === "name" && errors.name ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "name" && errors.name ? errors.name : ""}
            </p>
        </div>
        <div>
        <input className={`${errors.lastName ? 'border-red-600 placeholder-red-600' : 'border-white placeholder-white'} border rounded-lg bg-transparent text-white p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm 2xl:text-xl`} type="text" placeholder="Apellido" name="lastName" value={contacts.lastName} onChange={handleChange} onFocus={() => handleFieldFocus("lastName")} />
        <p className={`ml-4 text-sm 2xl:text-xl text-red-600  ${focusedField === "lastName" && errors.lastName ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "lastName" && errors.lastName ? errors.lastName : ""}
            </p>
        </div>
        <div>
        <input className={`${errors.company ? 'border-red-600 placeholder-red-600' : 'border-white placeholder-white'} border rounded-lg bg-transparent text-white  p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm 2xl:text-xl`} type="text" placeholder="Empresa" name="company" value={contacts.company} onChange={handleChange} onFocus={() => handleFieldFocus("company")} />
        <p className={`ml-4 text-sm 2xl:text-xl text-red-600 ${focusedField === "company" && errors.company ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "company" && errors.company ? errors.company : ""}
            </p>
        </div>
        <div>
        <motion.nav
            className={`${errors.service ? 'border-red-600 ' : 'border-white '}border-white border rounded-lg bg-transparent p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm h-[6.5vh] xl:h-[5vh] 2xl:text-xl`}
            ref={scope}
            onClick={(e) => { 
              e.preventDefault();
              setIsOpen(!isOpen);
              }}
              
          >
            <motion.button
              className={`${errors.service ? 'border-red-600 text-red-600' : 'border-white text-white'} flex justify-between items-center w-full`}
              whileTap={{ scale: 0.97 }}
              onFocus={() => handleFieldFocus("service")}
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
              onChange={handleChange} onFocus={() => handleFieldFocus("service")} />
              <label htmlFor="Recruiting" className="cursor-pointer">Recruiting</label>
              </li>
              <hr className="w-[100%]" />
              <li className="my-2 text-base">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="Staff Augmentation" value='Staff Augmentation' id="Staff Augmentation" checked={contacts.service.includes('Staff Augmentation')}
              onChange={handleChange} onFocus={() => handleFieldFocus("service")} />
              <label htmlFor="Staff Augmentation" className="cursor-pointer">Staff Augmentation</label>
              </li>
              <hr className="w-[100%]" />
              <li className="my-2 text-base">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="Payroll Management" value='Payroll Management' id="Payroll Management" checked={contacts.service.includes('Payroll Management')}
              onChange={handleChange} onFocus={() => handleFieldFocus("service")} />
              <label htmlFor="Payroll Management" className="cursor-pointer">Payroll Management</label>
              </li>
            </ul>{" "}
          </motion.nav>
          <p className={`ml-4 text-sm 2xl:text-xl text-red-600 ${focusedField === "service" && errors.service ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "service" && errors.service ? errors.service : ""}
            </p>
          </div>
          <div className=" flex flex-col">
        <input className={`${errors.email ? 'border-red-600 placeholder-red-600' : 'border-white placeholder-white'} border rounded-lg bg-transparent text-white  p-2 2xl:p-3 outline-none w-[28vw] 2xl:w-[25vw] text-sm 2xl:text-xl`} type="text" placeholder="Email" name="email" value={contacts.email} onChange={handleChange} onFocus={() => handleFieldFocus("email")}/>
        <p className={`ml-4 text-sm 2xl:text-xl text-red-600 ${focusedField === "email" && errors.email ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "email" && errors.email ? errors.email : ""}
            </p>
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
        <input className={`${errors.message ? 'border-red-600 placeholder-red-600' : 'border-white placeholder-white'} border rounded-lg bg-transparent text-white p-2 2xl:p-3 pb-20 2xl:pb-[17vh] outline-none w-[28vw] 2xl:w-[25vw] text-sm h-[20vh] 2xl:text-xl break-words`} type="textArea" placeholder="Mensaje" name="message" value={contacts.message} onChange={handleChange} onFocus={() => handleFieldFocus("message")} />
        <p className={`ml-4 text-sm 2xl:text-xl text-red-600 ${focusedField === "message" && errors.message ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "message" && errors.message ? errors.message : ""}
            </p>
        </div>
      </form>
      </div>
    </div>
  );
}
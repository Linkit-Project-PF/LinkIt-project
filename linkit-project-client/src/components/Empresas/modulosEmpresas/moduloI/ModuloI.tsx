import arrow from "/Vectores/arrow.png";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import validations from "./validations";
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

 
const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
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
    const isAnyServiceSelected = checked || contacts.service.length > 1;
    setErrors({
      ...errors,
      service: isAnyServiceSelected ? "" : "Seleccione al menos un servicio",
    });
  } else {
    setContacts({
      ...contacts,
      [name]: value,
    });
  }

  const validateErrors = validations({
    ...contacts,
    [name]: value,
  });
  setErrors({ ...errors, ...validateErrors });

};
const handleFieldFocus = (fieldName: string) => {
  setFocusedField(fieldName);
}


  return (
    <div className="bg-linkIt-300 text-white flex flex-row p-32 gap-[10vw] 2xl:gap-[10vw]">
      <h1 className="font-semibold text-3xl 2xl:text-7xl ">Contáctanos</h1>
      <div className="w-[60vw]">
      <form className="flex flex-wrap gap-6">
        <div>
        <input className="border-white border rounded-xl bg-transparent text-white placeholder-white p-1 2xl:p-3 outline-none w-[25vw] 2xl:text-xl" type="text" placeholder="Nombre"  name="name" value={contacts.name} onChange={handleChange} onFocus={() => handleFieldFocus("name")} />
        <p className={`ml-4 text-xl ${focusedField === "name" && errors.name ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "name" && errors.name ? errors.name : ""}
            </p>
        </div>
        <div>
        <input className="border-white border rounded-xl bg-transparent text-white placeholder-white p-1 2xl:p-3 outline-none w-[25vw] 2xl:text-xl" type="text" placeholder="Apellido" name="lastName" value={contacts.lastName} onChange={handleChange} onFocus={() => handleFieldFocus("lastName")} />
        <p className={`ml-4 text-xl ${focusedField === "lastName" && errors.lastName ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "lastName" && errors.lastName ? errors.lastName : ""}
            </p>
        </div>
        <div>
        <input className="border-white border rounded-xl bg-transparent text-white placeholder-white p-1 2xl:p-3 outline-none w-[25vw] 2xl:text-xl" type="text" placeholder="Empresa" name="company" value={contacts.company} onChange={handleChange} onFocus={() => handleFieldFocus("company")} />
        <p className={`ml-4 text-xl ${focusedField === "company" && errors.company ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "company" && errors.company ? errors.company : ""}
            </p>
        </div>
        <div>
        <motion.nav
            className="border-white border rounded-xl bg-transparent text-white placeholder-white p-1 2xl:p-3 outline-none w-[25vw] h-[6vh] xl:h-[5vh] 2xl:text-xl"
            ref={scope}
            onClick={(e) => { e.preventDefault();
              setIsOpen(!isOpen);
              }}
              
          >
            <motion.button
              className='flex justify-between items-center w-full'
              whileTap={{ scale: 0.97 }}
              onFocus={() => handleFieldFocus("service")}
            >
              ¿Qué servicio te interesa?
              <div className="arrow w-3 ml-1 mt-[2px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative border-white border border-t-0 bg-white rounded-xl text-black p-1 placeholder-white w-[25vw] 2xl:text-xl right-2 mt-3"
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
          <p className={`ml-4 text-xl ${focusedField === "service" && errors.service ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "service" && errors.service ? errors.service : ""}
            </p>
          </div>
          <div className=" flex flex-col">
        <input className="border-white border rounded-xl bg-transparent text-white placeholder-white p-1 2xl:p-3 outline-none w-[25vw] 2xl:text-xl" type="text" placeholder="Email" name="email" value={contacts.email} onChange={handleChange} onFocus={() => handleFieldFocus("email")}/>
        <p className={`ml-4 text-xl ${focusedField === "email" && errors.email ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "email" && errors.email ? errors.email : ""}
            </p>
        <button className=" mt-[11vh] bg-white text-linkIt-200 font-bold p-3 w-[5vw] rounded-xl">Enviar</button>
        </div>
        <div>
        <input className="border-white border rounded-xl bg-transparent text-white placeholder-white p-1 2xl:p-3 pb-20 2xl:pb-[17vh] outline-none w-[25vw] h-[20vh] 2xl:text-xl flex flex-wrap" type="text" placeholder="Mensaje" name="message" value={contacts.message} onChange={handleChange} onFocus={() => handleFieldFocus("message")} />
        <p className={`ml-4 text-xl ${focusedField === "message" && errors.message ? "opacity-1" : "opacity-0"}`}>
              {focusedField === "message" && errors.message ? errors.message : ""}
            </p>
        </div>
      </form>
      </div>
    </div>
  );
}
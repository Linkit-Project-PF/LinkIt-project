import arrow from "/Vectores/arrow.png";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

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

export default function MooduloI() {



const [isOpen, setIsOpen] = useState(false);
const scope = useMenuAnimation(isOpen);


  const [contactos, setContactos] = useState({
    Nombre: "",
    Apellido: "",
    Empresa: "",
    Servicio: [],
    Email: "",
    Mensaje: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setContactos({
      ...contactos,
      [e.target.name]: e.target.value,
    });
    }


  return (
    <div className="bg-linkIt-300 text-white flex flex-row py-12 px-20 gap-[15vw] 2xl:gap-[25vw]">
      <h1 className="font-semibold text-3xl 2xl:text-4xl ">Contáctanos</h1>
      <form className="grid grid-cols-2 gap-3 mb-20">
        <input className="border-white border rounded-md bg-transparent text-white placeholder-white p-1 2xl:p-2 outline-none w-[25vw] 2xl:text-xl" type="text" placeholder="Nombre"  name="Nombre" value={contactos.Nombre} onChange={handleChange} />
        <input className="border-white border rounded-md bg-transparent text-white placeholder-white p-1 2xl:p-2 outline-none w-[25vw] 2xl:text-xl" type="text" placeholder="Apellido" name="Apellido" value={contactos.Apellido} onChange={handleChange} />
        <input className="border-white border rounded-md bg-transparent text-white placeholder-white p-1 2xl:p-2 outline-none w-[25vw] 2xl:text-xl" type="text" placeholder="Empresa" name="Empresa" value={contactos.Empresa} onChange={handleChange} />
        <motion.nav
            className="border-white border rounded-md bg-transparent text-white placeholder-white p-1 2xl:p-2 outline-none w-[25vw] h-[6vh] xl:h-[4vh] 2xl:text-xl"
            ref={scope}
            onClick={(e) => { e.preventDefault();
               setIsOpen(!isOpen);
              }}
          >
            <motion.button
              className='flex justify-between items-center w-full'
              whileTap={{ scale: 0.97 }}
            >
              ¿Qué servicio te interesa?
              <div className="arrow w-3 ml-1 mt-[2px]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative border-white border border-t-0 bg-white rounded-md text-black p-1 placeholder-white w-[25vw] 2xl:text-xl right-2 mt-3"
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setIsOpen(false)}
            >
              <li className="my-2 text-base items-center">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="" id="Recruiting" />
              <label htmlFor="Recruiting" className="cursor-pointer">Recruiting</label>
              </li>
              <hr className="w-[100%]" />
              <li className="my-2 text-base">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="" id="StaffA" />
              <label htmlFor="StaffA" className="cursor-pointer">Staff Augmentation</label>
              </li>
              <hr className="w-[100%]" />
              <li className="my-2 text-base">
              <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name="" id="PayM" />
              <label htmlFor="PayM" className="cursor-pointer">Payroll Management</label>
              </li>
            </ul>{" "}
          </motion.nav>
        <div>
        <input className="border-white border rounded-md bg-transparent text-white placeholder-white p-1 2xl:p-2 outline-none w-[25vw] 2xl:text-xl" type="text" placeholder="Email" name="Email" value={contactos.Email} onChange={handleChange}/>
        </div>
        <div>
        <input className="border-white border rounded-md bg-transparent text-white placeholder-white p-1 2xl:p-2 pb-20 2xl:pb-20 outline-none w-[25vw] h-28 2xl:text-xl" type="text" placeholder="Mensaje" name="Mensaje" value={contactos.Mensaje} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}
import { useAnimate, stagger, motion } from "framer-motion";
import { useState, useEffect } from "react";
import arrow from "/Vectores/arrow.png";
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

 function Calculadora () {

    const [isOpenPosicion, setIsOpenPosicion] = useState(false);
    const scopePosicion = useMenuAnimation(isOpenPosicion);

    const [isOpenIngles, setIsOpenIngles] = useState(false);
    const scopeIngles = useMenuAnimation(isOpenIngles);

    const [isOpenSeniority, setIsOpenSeniority] = useState(false);
    const scopeSeniority = useMenuAnimation(isOpenSeniority);

    const [isOpenTecnologias, setIsOpenTecnologias] = useState(false);
    const scopeTecnologias = useMenuAnimation(isOpenTecnologias);

    const [isOpenFrameworks, setIsOpenFrameworks] = useState(false);
    const scopeFrameworks = useMenuAnimation(isOpenFrameworks);

    const [isOpenOtros, setIsOpenOtros] = useState(false);
    const scopeOtros = useMenuAnimation(isOpenOtros);

    const [renderedFilters, setRenderedFilters] = useState(Object)

    useEffect(() => {
        axios
          .get('https://linkit-server.onrender.com/resources/googleSheet/DinamicTitles')
          .then((response) => {
            const filtersData = response.data;
            setRenderedFilters(filtersData);
          })
          .catch((error) => {
            throw new Error(error.message);
          });
      }, []);
     
      let tech1 = []
      let tech2 = []
      let frameworks = []
      let others = []

    for (const key in renderedFilters) {
        if (key === "techTier1" ) {
             tech1 = renderedFilters[key];
        }
        else if (key === "techTier2") {
             tech2 = renderedFilters[key];
        }
        else if (key === "frameworksTier1"){
        frameworks = renderedFilters[key];
    }
        else if (key === "othersTier1") {
            others = renderedFilters[key];
        }
    }
    const tech: [] = tech1.concat(tech2)

    return (

        <div className="bg-linkIt-500 grid justify-center p-[7%]">
            <h1 className="text-black text-[3vw] font-manrope font-bold text-center">Calculadora</h1>
            <div className="bg-white rounded-[7px] flex justify-around whitespace-nowrap gap-[2vw] px-6 py-1 my-7">
            <motion.nav
            className=""
            ref={scopePosicion}
            onClick={(e) => { 
                e.preventDefault();
                setIsOpenPosicion(!isOpenPosicion);
            }}
          >
            <motion.button
              className={`flex h-full items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Posicion
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-28 overflow-y-scroll p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenPosicion ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setIsOpenPosicion(false)}
            >
                <li></li>
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className=""
            ref={scopeIngles}
            onMouseEnter={() => setIsOpenIngles(true)}
            onMouseLeave={() => setIsOpenIngles(false)}
          >
            <motion.button
              className={`flex h-full items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Nivel de ingles
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenIngles ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <li className={`hover:text-linkIt-300`}>
                <button>Basico</button>
              </li>
              <li className={`hover:text-linkIt-300`}>
                <button>Intermedio</button>
              </li>
              <li className={`hover:text-linkIt-300`}>
                <button>Avanzado</button>
              </li>
              
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className=""
            ref={scopeSeniority}
            onMouseEnter={() => setIsOpenSeniority(true)}
            onMouseLeave={() => setIsOpenSeniority(false)}
          >
            <motion.button
              className={`flex h-full items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Seniority
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenSeniority ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              <li className={`hover:text-linkIt-300`}>
                <button  >epa</button>
              </li>
              
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className=""
            ref={scopeTecnologias}
            onMouseEnter={() => setIsOpenTecnologias(true)}
            onMouseLeave={() => setIsOpenTecnologias(false)}
          >
            <motion.button
              className={`flex h-full items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Tecnologias
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenTecnologias ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              {tech?.filter((items: string | null) => ( items !== null)).map((tech: string) => (
                    <li> 
                    <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name={tech} value={tech} id={tech} />
                    <label htmlFor={tech} className="cursor-pointer">{tech}</label>
                    </li>
                ))}
                <li></li>
              
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className=""
            ref={scopeFrameworks}
            onMouseEnter={() => setIsOpenFrameworks(true)}
            onMouseLeave={() => setIsOpenFrameworks(false)}
          >
            <motion.button
              className={`flex h-full items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Frameworks
              <div className="arrow w-[0.7vw] ml-[1vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenFrameworks ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              {frameworks?.filter((items: string | null) => ( items !== null)).map((frameworks: string) => (
                    <li> 
                    <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name={frameworks} value={frameworks} id={frameworks} />
                    <label htmlFor={frameworks} className="cursor-pointer">{frameworks}</label>
                    </li>
                ))}
                <li></li>
              
            </ul>{" "}
          </motion.nav>

            <motion.nav
            className=""
            ref={scopeOtros}
            onMouseEnter={() => setIsOpenOtros(true)}
            onMouseLeave={() => setIsOpenOtros(false)}
          >
            <motion.button
              className={`flex h-full items-center hover:text-linkIt-300`}
              whileTap={{ scale: 0.97 }}
              
            >
              Otros
              <div className="arrow w-[0.7vw] ml-[3vw]">
                <img src={arrow} alt="arrow" />
              </div>
            </motion.button>
            <ul
              className="relative bg-white rounded-b-[7px] w-full h-fit p-[0.5vw] font-semibold items-center space-y-[1vh]"
              style={{
                pointerEvents: isOpenOtros ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50%)",
              }}
            >
              {others?.filter((items: string | null) => ( items !== null && items !== "")).map((others: string) => (
                    <li> 
                    <input className="ml-4 mr-4 checked:bg-linkIt-300 rounded-sm" type="checkbox" name={others} value={others} id={others} />
                    <label htmlFor={others} className="cursor-pointer">{others}</label>
                    </li>
                ))}
                <li></li>
              
            </ul>{" "}
          </motion.nav>
          <button className="bg-linkIt-300 rounded-[7px] text-white p-5 h-[50%] flex items-center self-center">Calcular</button>
          </div>
          <div className="grid grid-cols-2">
            <h2 className="text-[2vw] font-semibold">Princing</h2>
            <div className="grid grid-cols-2">
                <h2 className="text-[2vw] font-bold font-manrope text-end"><span className="font-light text-[0.9vw]">Minimo</span> $99</h2>
                <h2 className="text-[2vw] font-bold font-manrope text-end"><span className="font-light text-[0.9vw]">Maximo</span> $200</h2>
            </div>
            <hr className="bg-black h-1 col-span-full"/>
          </div>
        </div>
    )
}

export default Calculadora
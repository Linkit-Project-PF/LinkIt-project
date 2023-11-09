import "./NavBar.css"
import Logo from "/Linkit-logo/linkit-logos-web_4-logo-horizontal-azul.svg"
import arrow from "/Vectores/arrow.png"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {

    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0%)"
          : "inset(10% 50% 90% 50% )"
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
  }, [isOpen]);

  return scope;
}

function NavBar() {
    const navigate = useNavigate()

    const [isOpenEmpresa, setIsOpenEmpresa] = useState(false);
    const [isOpenRecursos, setIsOpenRecursos] = useState(false);
    const [isOpenQS, setIsOpenQS] = useState(false);

    const scopeQS = useMenuAnimation(isOpenQS);
    const scopeRecursos = useMenuAnimation(isOpenRecursos);
    const scopeEmpresa = useMenuAnimation(isOpenEmpresa);


    const goHome = () => {
        navigate("/")
    }
    const goSoyEmpresa = () => {
        navigate("/SoyEmpresa")
    }
    const goSoyTalento = () => {
        navigate("/SoyTalento")
    }
    return (
        <div>
        <div className="preNavbar">
            <span className="">Contrata y gestiona talentos de forma global con LinkIt | </span>
            <NavLink to="https://calendly.com/linkit-project-henry/30min" className="ml-2">Comienza ahora! →</NavLink>
            </div>
        <nav className="navBar">
        <img src={Logo} alt="" className="static h-20 xl:h-24 2xl:h-32 mr-2 xl:mr-6 2xl:mr-16 ml-2 xl:ml-6 2xl:ml-14"/>
        <div className="containerLinksNavBar">
        <motion.button onClick={()=> goHome()}>Home</motion.button>

        <nav className="relative top-[6px] xl:top-[4px] w-[100px] xl:w-[110px] h-7" ref={scopeEmpresa}>
        <motion.button className=" w-30 flex items-center"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpenEmpresa(!isOpenEmpresa)}
      >
        Soy Empresa
        <div className="arrow w-3 ml-1 mt-1">
          <img src={arrow} alt="" />
          </div>
      </motion.button>
      <ul
      className="bg-white mt-5 rounded-b-[7px] w-24 xl:w-32 h-[100px]"
      style={{
        pointerEvents: isOpenEmpresa ? "auto" : "none",
      }}
      >
        <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs">Servicios </li>
        <hr className="w-[90px] ml-4"/>
        <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs">Proceso </li>
        <hr className="w-[90px] ml-4 text-xs"/>
        <li className="ml-4 mt-3 text-[10px] xl:text-xs">Cotiza </li>
      </ul>{" "}
      </nav>


        <NavLink className=" relative" to='/soyTalento'>Soy Talento</NavLink>


        <nav className="relative top-[6px] xl:top-[4px] w-[75px] xl:w-[85px] h-7" ref={scopeRecursos}>
        <motion.button className="w-30 flex items-center"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpenRecursos(!isOpenRecursos)}
      >
        Recursos
        <div className="arrow w-3 ml-1 mt-1">
          <img src={arrow} alt="" />
          </div>
      </motion.button>
      <ul className="bg-white mt-5 rounded-b-[7px] w-24 xl:w-32 h-[100px]"
        style={{
          pointerEvents: isOpenRecursos ? "auto" : "none",
        }}
      >
        <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs">Blogs</li>
        <hr className="w-[90px] ml-4"/>
        <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs">Ebooks</li>
        <hr className="w-[90px] ml-4"/>
        <li className="ml-4 mt-3 text-[10px] xl:text-xs">Eventos</li>
      </ul>{" "}


      </nav>
        <nav className="relative top-[6px] xl:top-[4px] w-[115px] xl:w-[130px] h-7" ref={scopeQS}>
        <motion.button className="w-30 flex items-center"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpenQS(!isOpenQS)}
      >Quiénes Somos
        <div className="arrow w-3 ml-1 mt-1">
          <img src={arrow} alt="" />
          </div>
      </motion.button>
      <ul className="bg-white flex flex-col mt-2 w-26 xl:w-36 rounded-b-[7px] h-[150px]"
        style={{
          pointerEvents: isOpenQS ? "auto" : "none",
        }}
      >
        <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs">Misión</li>
        <hr className="w-[90px] ml-4"/>
        <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs">Visión</li>
        <hr className="w-[90px] ml-4"/>
        <li className="mb-2 mt-3 ml-4 text-[10px] xl:text-xs">Valores e Historia</li>
        <hr className="w-[90px] ml-4"/>
        <li className="ml-4 mt-3 text-[10px] xl:text-xs">Talento interno</li>
      </ul>{" "}
      </nav>
        <span className=" font-medium">Inglés</span>
        </div>
        <div className="containerBtnsNavbar">
        <motion.button className="contrataBtnNavB" onClick={()=> goSoyEmpresa()} whileTap={{ scale: 0.9}}>Contrata Talento</motion.button>
        <motion.button className="vacanteBtnNavB" onClick={()=> goSoyTalento()} whileTap={{ scale: 0.9}}>Vacantes disponibles</motion.button>
        </div>
        </nav>
</div>
    )
}

export default NavBar
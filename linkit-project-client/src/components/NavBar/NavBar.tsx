import "./NavBar.css"
import Logo from "/Linkit-logo/linkit-logos-web_4-logo-horizontal-azul.svg"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)"
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
        <img src={Logo} alt="" className="h-40"/>
        <div className="containerBtnsNavBar">
        <motion.button onClick={()=> goHome()}>Home</motion.button>
        <nav className="relative top-10" ref={scopeEmpresa}>
        <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpenEmpresa(!isOpenEmpresa)}
      >
        Soy Empresa
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
        </div>
      </motion.button>
      <ul className="bg-white flex flex-col"
        style={{
          pointerEvents: isOpenEmpresa ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)"
        }}
      >
        <li className="border-gray border-b-2 mb-2">Servicios </li>
        <li className="border-gray border-b-2 mb-2">Proceso </li>
        <li>Cotiza </li>
      </ul>{" "}
      </nav>


        <NavLink className="hover:border-b-4 hover:border-linkIt-300" to='/soyTalento'>Soy Talento</NavLink>


        <nav className="relative top-10" ref={scopeRecursos}>
        <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpenRecursos(!isOpenRecursos)}
      >
        Recursos
      </motion.button>
      <ul className="bg-white flex flex-col"
        style={{
          pointerEvents: isOpenRecursos ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)"
        }}
      >
        <li className="border-gray border-b-2 mb-2">Blogs</li>
        <li className="border-gray border-b-2 mb-2">Ebooks</li>
        <li>Eventos</li>
      </ul>{" "}


      </nav>
        <nav className="relative top-20" ref={scopeQS}>
        <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpenQS(!isOpenQS)}
      >
        Quienes Somos
        <div className="relative left-44 bottom-6">
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul className="bg-white flex flex-col"
        style={{
          pointerEvents: isOpenQS ? "auto" : "none",
        }}
      >
        <li className="border-gray border-b-2 mb-2">Mision</li>
        <li className="border-gray border-b-2 mb-2">Vision</li>
        <li className="border-gray border-b-2 mb-2">Valores e Historia</li>
        <li>Talento interno</li>
      </ul>{" "}
      </nav>
        <span className=" font-medium">Inglés</span>
        <motion.button className="contrataBtnNavB" onClick={()=> goSoyEmpresa()} whileTap={{ scale: 0.9}}>Contrata Talento</motion.button>
        <motion.button className="vacanteBtnNavB" onClick={()=> goSoyTalento()} whileTap={{ scale: 0.9}}>Vacantes disponibles</motion.button>
        </div>
        </nav>
</div>
    )
}

export default NavBar
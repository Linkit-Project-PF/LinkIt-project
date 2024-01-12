import { useNavigate } from "react-router-dom";
import TopButton from "../../Utils/TopButton";
import Error from "../Errores/Error";
import Unauthorized from "../Errores/SinAutorizacion";
import ModuloA from "./Modulos/ModuloA/ModuloA";
import ModuloB from "./Modulos/ModuloB/ModuloB";
import ModuloC from "./Modulos/ModuloC/ModuloC";
import ModuloD from "./Modulos/ModuloD/ModuloD";
import ModuloE from "./Modulos/ModuloE/ModuloE";
import ModuloF from "./Modulos/ModuloF/ModuloF";
import ModuloG from "./Modulos/ModuloG/ModuloG";
import { useEffect, useState } from "react";

function Home({ error, Unauth }: { error: boolean; Unauth: boolean }) {
  const nav = useNavigate();
  const [errorVisible, setErrorVisible] = useState(false);
  const [unauthVisible, setUnauthVisible] = useState(false);

  if (errorVisible || unauthVisible) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "visible";

  useEffect(() => {
    if (error) {
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
        nav("/");
      }, 2500);
    } else if (Unauth) {
      setUnauthVisible(true);
      setTimeout(() => {
        setUnauthVisible(false);
        nav("/");
      }, 2500);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      {errorVisible && <Error />}
      {unauthVisible && <Unauthorized />}
      <ModuloA />
      <ModuloB />
      <ModuloC />
      <ModuloD />
      <ModuloE />
      <ModuloF />
      <ModuloG />
      <TopButton />
    </div>
  );
}

export default Home;

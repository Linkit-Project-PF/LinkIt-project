import "./Libreria.css";
import SideBar from "./sidebar/SideBar";
import AllResources from "./allResources/AllResources";
import { useEffect } from "react";


function Libreria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mt-[6rem] p-[3.5rem]">
        <h1 className="text-left text-[2rem] font-bold font-montserrat ">
          Todos los recursos
        </h1>
        <div className=" content-display">
          <section>
            <SideBar />
          </section>
          <section>
            <AllResources />
          </section>
        </div>
      </div>
    </>
  );
}

export default Libreria;

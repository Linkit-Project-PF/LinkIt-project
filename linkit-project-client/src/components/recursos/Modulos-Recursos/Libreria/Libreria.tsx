import "./Libreria.css";
import SideBar from "./sidebar/SideBar";
import AllResources from "./allResources/AllResources";

function Libreria() {
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

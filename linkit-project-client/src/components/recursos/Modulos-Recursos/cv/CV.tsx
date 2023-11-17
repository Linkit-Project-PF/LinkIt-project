import "./CV.css";

function CV() {
  return (
    <div className="bg-linkIt-300 overflow-hidden">
      <div className="flex flex-col p-[2rem] h-[45rem]">
        <div className="flex gap-[30rem]">
          <div className="flex flex-col justify-center gap-[1rem]">
            <h1 className="text-white font-bold font-montserrat text-[3rem] w-[20rem] relative left-[3rem]">
              Arma tu CV con nuestro template
            </h1>
            <button className="text-white border-[2px] border-white rounded-[7px] p-[.3rem] inline-flex self-center relative right-[2.2rem] hover:bg-white hover:text-linkIt-300 transition-all duration-300 ease-in-out">
              Descargar Plantilla
            </button>
          </div>
          <img
            src="CV/cv-prueba.webp"
            alt="cv-template"
            className="w-[35rem] relative top-[7rem] right-[15rem] custom-shadow "
          />
        </div>
      </div>
      <div className="skew-white"></div>
      <div className="skew-green"></div>
    </div>
  );
}

export default CV;

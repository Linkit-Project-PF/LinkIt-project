import "./ModuloE.css";

export default function ModuloE() {
  return (
    <div>
      <div className="relative bottom-20 2xl:bottom-32 flex flex-col p-16 skewed-borderBME h-[32rem] xl:h-[33rem] 2xl:h-[50rem]">
        <div className="contentBME flex flex-col justify-center space-y-16">
          <h1 className="flex justify-center  relative text-white text-3xl xl:text-4xl 2xl:text-5xl font-semibold mt-20 2xl:mt-28">
            ¿Qué nos hace diferentes?
          </h1>
          <div className="flex flex-row justify-between 2xl:justify-around">
            <div className="flex flex-col items-center">
              <h2 className="relative text-white font-normal text-lg xl:text-xl 2xl:text-4xl mb-3">
                Sin riesgos
              </h2>
              <p className="text-white text-center text-xs 2xl:text-base">
                Ofrecemos un servicio <br /> de calidad a éxito. No hay <br />{" "}
                anticipos; el pago es al <br /> efectivizar la contratación.
              </p>
              <div className="relative flex justify-center items-center text-2xl 2xl:text-3xl font-bold text-[#173951] bg-white rounded-[100%] w-10 2xl:w-16 h-10 2xl:h-16 mt-10">
                1
              </div>
            </div>
            <div className="flex flex-col justify-center items-center 2xl:justify-around">
              <h2 className="relative text-white font-normal text-lg xl:text-xl 2xl:text-4xl mb-3">
                Fee a medida
              </h2>
              <p className="text-white text-center text-xs 2xl:text-base">
                Personalizamos nuestro <br /> fee a tus necesidades y <br />{" "}
                ahorra hasta un 50% en <br /> la contratación.
              </p>
              <div className="relative flex justify-center items-center text-2xl 2xl:text-3xl font-bold text-[#173951] bg-white rounded-[100%] w-10 2xl:w-16 h-10 2xl:h-16 mt-10">
                2
              </div>
            </div>
            <div className="flex flex-col items-center justify-center 2xl:justify-around ">
              <h2 className="relative text-white font-normal text-lg xl:text-xl 2xl:text-4xl mb-3">
                Garantía
              </h2>
              <p className="text-white text-center text-xs 2xl:text-base">
                Garantía de por <br /> vida contratando a <br /> través de
                LinkIT.
              </p>
              <div className="relative flex justify-center items-center text-2xl 2xl:text-3xl font-bold text-[#173951] bg-white rounded-[100%] w-10 2xl:w-16 h-10 2xl:h-16 mt-14">
                3
              </div>
            </div>
            <div className="flex flex-col items-center justify-center 2xl:justify-around">
              <h2 className="relative text-white font-normal text-lg xl:text-xl 2xl:text-4xl mb-3">
                Seguimiento continuo
              </h2>
              <p className="text-white text-center text-xs 2xl:text-base">
                Asignamos un equipo de trabajo <br /> específico proporcionando
                un <br /> servicio integral y personalizado <br /> durante todo
                el proceso.
              </p>
              <p className="relative flex justify-center items-center text-2xl 2xl:text-3xl font-bold text-[#173951] bg-white rounded-[100%] w-10 2xl:w-16 h-10 2xl:h-16 mt-10">
                4{" "}
              </p>
            </div>
          </div>
          <p className="relative bottom-[5.8rem] 2xl:bottom-[6.8rem] right-9 bg-white w-4 2xl:w-6 h-4 2xl:h-6 rounded-full">
            ㅤ
          </p>
          <hr className="relative bottom-[10.3rem] 2xl:bottom-[11.5rem] w-[108%] xl:w-[95vw] right-8 -z-10" />
          <p className="relative bottom-[14.8rem] 2xl:bottom-[16.3rem] left-[58rem] xl:left-[92vw] 2xl:left-[93vw] bg-white w-4 2xl:w-6 h-4 2xl:h-6 rounded-full">
            ㅤ
          </p>
        </div>
      </div>
    </div>
  );
}

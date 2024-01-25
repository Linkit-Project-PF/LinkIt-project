import topLines from "/Vectores/linkit-linea-banner-suscripcion-superior.svg"
import bottomLines from "/Vectores/linkit-linea-banner-suscripcion-inferior.svg"
export default function Newsletter() {

    return (
        <div className="bg-linkIt-300 pt-[7%] relative">
            <img src={topLines} alt="lines" className="w-full absolute top-[17%]"/>
            <h1 className="font-manrope font-bold text-[0.8rem] xs:text-[1.1rem] ssm:text-[1.8rem] xl:text-[2.5rem] text-center text-white mt-[6%]">¡Suscríbete para recibir novedades!</h1>
            <div className="relative w-full items-center justify-center flex">
      <img src={bottomLines} alt="lines" className="absolute w-[75%] h-full top-[5%] left-[35%]" />
        <button
        className="font-manrope relative z-10 border border-white bg-white text-linkIt-200 rounded-[7px] p-1 xs:p-1.5 sm:p-2 2xl:p-3 px-1 xs:px-2 text-[0.45rem] xs:text-[0.5rem] sm:text-[0.6rem] xl:text-[0.9rem] 2xl:text-[1rem] hover:bg-linkIt-200 hover:border-linkIt-200 hover:text-white transition-all duration-300 ease-in-out font-bold dark:hover:border-white dark:hover:bg-white dark:hover:text-linkIt-300 cursor-pointer my-[5%]"
        >
          Suscribirme
        </button>
        </div>
        </div>
    )
 }
import { useTranslation } from "react-i18next";
 import email from "/Vectores/linkit-web-vectores-12.svg"
 import linkedin from "/Vectores/linkit-web-vectores-13.svg"

 export default function ModuloF() { 
  const {t} = useTranslation();

        return (
            <div className="relative bg-linkIt-200 p-[12%] lg:p-[7%] dark:bg-linkIt-400">
               <div className="hidden lg:flex flex-col before:absolute before:bg-linkIt-500 dark:before:bg-linkIt-700 before:w-[100%] before:h-[100%] before:z-[1] before:rotate-[40deg] before:right-[45%] before:top-[20%]">
                <img src="/people-LinkIt/ary-perfil.png" alt="ary-perfil" className="absolute top-[0%] col-start-1 row-start-1 w-1/3 z-[10]" />
                <div className="flex relative left-[30%]">
                <img src="/Vectores/comillas-blancas.svg" alt="Comillas" className="relative w-[40px] h-[40px]" />
                <h1 className="relative text-white font-montserrat text-[1rem] xl:text-[1.2rem] 2xl:text-[1.5rem] text-start w-[50%] ">
                {t('LinkIT nace para encontrar una solución clara, conectar al talento mas destacado con los mejores proyectos IT. Actuamos como enlace para simplificar la experiencia en el proceso de contratación, con el objetivo de formar equipos de alto rendimiento.')}
               
                </h1>
                
                </div>
                <div className="left-[34%] relative mt-3 grid grid-cols-2">
                <p className="text-white text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem] text-start font-montserrat font-bold ">Ary Molchadsky <br />
                <span className="text-white col-start-2 text-start font-manrope font-normal">CEO & Co-Founder</span></p>
                <div className="flex ">
                <img src={email} alt="email" className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]" />
                <img src={linkedin} alt="linkedIn" className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]" />
                </div>
                </div>
                <div className="before:absolute before:bg-white before:dark:bg-linkIt-300 before:w-screen before:h-[20%] before:left-0 before:z-20 before:-skew-y-[3deg] before:top-[90%] after:left-0 after:z-20 after:bg-linkIt-200 dark:after:bg-white after:w-screen after:h-[4px] after:absolute after:-skew-y-[3deg] after:top-[93%]"></div>
                </div>


            <div className="lg:hidden flex flex-col relative before:bg-linkIt-500 before:w-[100%] before:h-[100%] before:absolute before:rotate-[-38deg] before:top-[73%] before:left-[55%]">
                <h1 className="relative text-white font-montserrat text-[0.65rem] xs:text-[0.85rem] ssm:text-[1.2rem] md:text-[1.5rem] text-start">
                {t('LinkIT nace para encontrar una solución clara, conectar al talento mas destacado con los mejores proyectos IT. Actuamos como enlace para simplificar la experiencia en el proceso de contratación, con el objetivo de formar equipos de alto rendimiento.')}
               
                </h1>
                
                
                
                <p className="text-white text-[0.6rem] xs:text-[0.8rem] ssm:text-[1.2rem] md:text-[1.4rem] mt-3 text-start font-montserrat font-bold ">Ary Molchadsky <br />
                <span className="text-white text-start font-manrope font-normal">CEO & Co-Founder</span></p>
                <div className="flex mt-3">
                <img src={email} alt="email" className="w-[30px] h-[30px] ssm:h-[40px] ssm:w-[40px] md:w-[50px] md:h-[50px]" />
                <img src={linkedin} alt="linkedIn" className="w-[30px] h-[30px] ssm:h-[40px] ssm:w-[40px] md:w-[50px] md:h-[50px]" />
                
                </div>
              <img src="/people-LinkIt/ary-perfil.png" alt="ary-perfil" className="absolute w-[70%] ssm:w-[50%] left-[50%] ssm:left-[65%] md: top-[55%]" />
            </div>
            </div>
        )
 }
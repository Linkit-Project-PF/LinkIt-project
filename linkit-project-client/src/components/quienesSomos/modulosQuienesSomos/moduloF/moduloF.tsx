import { useTranslation } from "react-i18next";
 
 export default function ModuloF() { 
  const {t} = useTranslation();

        return (
            <div className="relative bg-linkIt-200 z-10 px-[6vw] grid grid-cols-4 before:absolute before:bg-linkIt-500 before:w-[90vh] xl:before:w-[75vh] before:top-[35vh] xl:before:top-[26vh] 2xl:before:w-[60vh] before:h-[75vh] xl:before:h-[65vh] 2xl:before:h-[60vh] before:-z-[1] before:skew-y-[40deg] before:left-0 2xl:before:top-[20vh] gap-x-4">
                <img src="/people-LinkIt/ary-perfil.png" alt="ary-perfil" className="relative bottom-0 col-start-1 row-start-1" />
                <div className="grid grid-cols-2 mb-3">
                <img src="/Vectores/comillas-blancas.svg" alt="Comillas" className="w-1/4 object-contain mt-[8vh] 2xl:mt-[10vh] col-start-1" />
                <h1 className="text-white font-montserrat w-[40vw] text-[1vw] mt-[10vh] 2xl:mt-[12vh] -ml-[7vw] text-start grid-cols-2">
                {t('LinkIT nace para encontrar una solución clara, conectar al talento mas destacado con los mejores proyectos IT. Actuamos como enlace para simplificar la experiencia en el proceso de contratación, con el objetivo de formar equipos de alto rendimiento.')}
               
                </h1>
                <p className="text-white text-[1vw] col-start-2 text-start font-montserrat font-bold -ml-[7vw] 2xl:-mt-10">Ary Molchadsky <br />
                <span className="text-white col-start-2 text-start font-manrope font-normal">CEO & Co-Founder</span></p>
                </div>
            </div>
        )
 }
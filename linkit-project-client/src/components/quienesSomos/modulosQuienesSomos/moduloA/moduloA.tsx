import { useTranslation } from "react-i18next";

export default function ModuloA() {
    const {t} = useTranslation();
    return (
        <div className="bg-linkIt-200 flex flex-col lg:grid lg:grid-cols-2 p-[7%] pb-[2%] pt-[20vh] lg:pt-[23vh] items-center">
            <div className="">
            <h2 className="text-white text-[1.2rem] ssm:text-[2rem] lg:text-[1.5rem] xl:text-[2rem] 1xl:text-[2.5rem]  font-manrope font-bold tracking-wide leading-tight">{t('En LinkIT buscamos conectar al talento más destacado con los mejores proyectos de tecnología de manera global.')}</h2>
            <p className="col-start-1 text-white text-[0.8rem] ssm:text-[1.5rem] lg:text-[1.2rem] xl:text-[1.5rem] 1xl:text-[1.8rem]  font-montserrat mt-[5%]">{t('Tenemos el compromiso de generar un mundo más inclusivo, democratizando oportunidades, y facilitando la adquisición y gestión de los equipos.')}</p>
            </div>
        <img src="/Vectores/LinkIt-Logotipo-2024-white.svg" alt="logo-ppal-blanco" className="w-[73%] justify-self-end items-center hidden lg:block " />
        <div className="w-full flex justify-end my-[5%] relative before:w-full before:h-[1px] before:absolute before:bg-linkIt-500 before:top-[100%] lg:col-span-full">
        <span className=" text-white relative text-end text-[0.6rem] ssm:text-[1rem] justify-self-end ">{t('Nuestra Misión')}</span>
        </div>
        </div>
    )
}
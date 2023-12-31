import { useTranslation } from "react-i18next";

export default function ModuloA() {
    const {t} = useTranslation();
    return (
        <div className="bg-linkIt-200 h-screen grid grid-cols-2 p-[6%]">
            <div>
            <h1 className="text-white text-[2.6vw] mt-[13vh] font-manrope font-bold tracking-wide leading-tight">{t('En LinkIT buscamos conectar al talento más destacado con los mejores proyectos de tecnología de manera global.')}</h1>
            <p className="col-start-1 text-white text-[1.6vw] font-montserrat mt-[3vh]">{t('Tenemos el compromiso de generar un mundo más inclusivo, democratizando oportunidades, y facilitando la adquisición y gestión de los equipos.')}</p>
            </div>
        <img src="/Linkit-logo/linkit-logos-web_2-logo-ppal-blanco.svg" alt="logo-ppal-blanco" className="ml-[7vw] w-5/6 mt-[2vh]" />
        <span className="text-white col-start-2 relative text-end text-[1.1vw]">{t('Nuestra Misión')}</span>
        <hr className="col-span-2 "/>
        </div>
    )
}
import { useTranslation } from "react-i18next";
import { useState } from 'react'
import darkValues from "/Vectores/valores-oscuro.svg"
import values from "/Vectores/valores.svg"
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";

export default function ModuloC() {
    const {t} = useTranslation();
    const [show, setShow] = useState(false)
    const isDarkMode = useSelector(
        (state: RootState) => state.darkMode);

    const handleClick = () => { setShow(!show) }

    return (
        <div>
            <div className="hidden lg:block">
        <div className="lg:grid grid-cols-2 p-[7%] dark:bg-linkIt-200 dark:text-white">
            <div className="flex flex-col lg:flex-row w-full items-end justify-end relative lg:col-span-full mb-5">
                <h1 className="text-black dark:text-white xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[1.5rem] xl:text-[2rem] 1xl:text-[2.5rem] font-manrope font-extrabold">{t('LinkIT tiene una')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('dedicación')}</span> {t('con el talento y la excelencia tecnológica. Nos esforzamos constantemente por ofrecer soluciones que')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('marquen la diferencia.')}</span></h1>
                <div className="w-full grid items-end justify-end relative before:w-full before:h-[1px] before:absolute before:bg-linkIt-300 before:dark:bg-white before:top-[100%] lg:col-span-full">
<p className="text-black dark:text-white  text-[0.6rem] ssm:text-[1rem] text-end">{t('Nuestros Valores')}</p>
</div>
</div>
                <p className="col-start-1 text-black dark:text-white text-[0.8rem] ssm:text-[1.5rem] lg:text-[1.2rem] xl:text-[1.5rem] 1xl:text-[1.8rem] font-montserrat mt-[5%] ">{t('Nuestra búsqueda incesante de la innovación es impulsada por')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('nuestra pasión por el talento')}</span>, {t('que reconocemos como el corazón de nuestra organización. Creemos en nutrir y potenciar a los mejores equipos de trabajo creando un ambiente cálido y ameno para así poder ayudar a desarrollar los mejores proyectos gracias a la')} <strong>{t('precisión, calidad de datos y procesos efectuados.')}</strong> <br /><br />

 <span className="bg-linkIt-300bg-opacity-[0.3]">{t('La confianza y la transparencia')}</span> {t('son los pilares de nuestra relación con nuestros partners. Trabajamos incansablemente para construir y mantener sinergias a través de una')} <strong>{t('comunicación asertiva.')}</strong> {t('Nuestro compromiso con las partes es inquebrantable; su éxito es nuestro éxito. Estamos aquí para superar sus expectativas y brindarles soluciones personalizadas que satisfagan sus necesidades específicas.')} <br /><br />

<span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('Fomentar la colaboración global')}</span> {t('es parte de nuestro ADN. Reconocemos la riqueza de perspectivas y talento que se encuentra en todo el mundo, y trabajamos en conjunto en un ambiente')} <strong>{t('diverso e inclusivo.')}</strong> {t('Además, creemos en el')} <strong>{t('trabajo remoto,')}</strong> {t('lo que nos permite')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('democratizar oportunidades,')}</span> {t('y facilitando la conexión entre talentos y empresas de primer nivel de manera global.')} <br /><br />

{t('En nuestra búsqueda incansable por brindar una experiencia excepcional, aspiramos a dejar una huella imborrable en cada momento. Estamos comprometidos a')} <strong>{t('superar las expectativas de nuestros partners y talentos')}</strong> {t('en cada paso del camino, ofreciendo constantemente un rendimiento que supera el 100%.')}
</p>
<img src={isDarkMode ? darkValues : values} className="self-center hidden lg:block w-[90%] justify-self-center" alt="" />
        </div>
        </div>

            <div className={`lg:hidden ${ show ? "block" : "hidden" }`}>
        <div className="lg:grid grid-cols-2 p-[7%] dark:bg-linkIt-200 dark:text-white">
            <div className="flex flex-col lg:flex-row w-full items-end justify-end relative lg:col-span-full mb-5">
                <h1 className="text-black dark:text-white xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[1.5rem] xl:text-[2rem] 1xl:text-[2.5rem] font-manrope font-extrabold">{t('LinkIT tiene una')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('dedicación')}</span> {t('con el talento y la excelencia tecnológica. Nos esforzamos constantemente por ofrecer soluciones que')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('marquen la diferencia.')}</span></h1>
                <div className="w-full grid items-end justify-end relative before:w-full before:h-[1px] before:absolute before:bg-linkIt-300 before:dark:bg-white before:top-[100%] lg:col-span-full">
<p className="text-black dark:text-white  text-[0.6rem] ssm:text-[1rem] text-end">{t('Nuestros Valores')}</p>
</div>
</div>
                <p className="col-start-1 text-black dark:text-white text-[0.8rem] ssm:text-[1.5rem] lg:text-[1.2rem] xl:text-[1.5rem] 1xl:text-[1.8rem] font-montserrat mt-[5%] ">{t('Nuestra búsqueda incesante de la innovación es impulsada por')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('nuestra pasión por el talento')}</span>, {t('que reconocemos como el corazón de nuestra organización. Creemos en nutrir y potenciar a los mejores equipos de trabajo creando un ambiente cálido y ameno para así poder ayudar a desarrollar los mejores proyectos gracias a la')} <strong>{t('precisión, calidad de datos y procesos efectuados.')}</strong> <br /><br />

 <span className="bg-linkIt-300bg-opacity-[0.3]">{t('La confianza y la transparencia')}</span> {t('son los pilares de nuestra relación con nuestros partners. Trabajamos incansablemente para construir y mantener sinergias a través de una')} <strong>{t('comunicación asertiva.')}</strong> {t('Nuestro compromiso con las partes es inquebrantable; su éxito es nuestro éxito. Estamos aquí para superar sus expectativas y brindarles soluciones personalizadas que satisfagan sus necesidades específicas.')} <br /><br />

<span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('Fomentar la colaboración global')}</span> {t('es parte de nuestro ADN. Reconocemos la riqueza de perspectivas y talento que se encuentra en todo el mundo, y trabajamos en conjunto en un ambiente')} <strong>{t('diverso e inclusivo.')}</strong> {t('Además, creemos en el')} <strong>{t('trabajo remoto,')}</strong> {t('lo que nos permite')} <span className="bg-linkIt-300 bg-opacity-[0.3] dark:bg-linkIt-100 dark:bg-opacity-[0.3]">{t('democratizar oportunidades,')}</span> {t('y facilitando la conexión entre talentos y empresas de primer nivel de manera global.')} <br /><br />

{t('En nuestra búsqueda incansable por brindar una experiencia excepcional, aspiramos a dejar una huella imborrable en cada momento. Estamos comprometidos a')} <strong>{t('superar las expectativas de nuestros partners y talentos')}</strong> {t('en cada paso del camino, ofreciendo constantemente un rendimiento que supera el 100%.')}
</p>
<img src="/Vectores/valores.svg" className="self-center hidden lg:block w-[90%] justify-self-center" alt="" />
        </div>
        </div>

        <div className=" lg:hidden flex bg-linkIt-300 w-screen h-[3rem] items-center justify-items-center justify-between dark:bg-linkIt-300 px-[5%]">
    <button className={`text-white text-[0.6rem] ssm:text-[1rem] font-extrabold text-start font-montserrat ${show ? '' : ''}`} onClick={handleClick}>{show ? (<a href="#historia">-</a>) : "+"}</button>
    <button className='text-white text-[0.6rem] ssm:text-[1rem] font-montserrat whitespace-nowrap font-bold text-end' onClick={handleClick}>{t('Nuestros Valores')}</button>
    </div>

    </div>
    )
}
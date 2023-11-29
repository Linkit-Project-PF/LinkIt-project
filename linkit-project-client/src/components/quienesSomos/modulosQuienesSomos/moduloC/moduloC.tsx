import { useTranslation } from "react-i18next";

export default function ModuloC() {
    const {t} = useTranslation();
    return (
        <div className="grid grid-cols-2 p-[6vw] gap-x-[28vw]">
                <h1 className="text-black text-[2.6vw] font-manrope font-extrabold leading-[7.5vh] w-[56vw]">{t('LinkIT tiene una')} <span className="bg-linkIt-300 bg-opacity-[0.3]">{t('dedicación')}</span> {t('con el talento y la excelencia tecnológica. Nos esforzamos constantemente por ofrecer soluciones que')} <span className="bg-linkIt-300 bg-opacity-[0.3]">{t('marquen la diferencia.')}</span></h1>
<p className="text-black after:block after:bg-linkIt-300 after:h-1 after:w-[25vw] text-[1.1vw] after:ml-[5vw] text-end self-end">{t('Nuestros Valores')}</p>
                <p className="col-start-1 text-black text-[1.6vw] font-montserrat mt-[10vh] w-[50vw] ">{t('Nuestra búsqueda incesante de la innovación es impulsada por')} <span className="bg-linkIt-300 bg-opacity-[0.3]">{t('nuestra pasión por el talento')}</span>, {t('que reconocemos como el corazón de nuestra organización. Creemos en nutrir y potenciar a los mejores equipos de trabajo creando un ambiente cálido y ameno para así poder ayudar a desarrollar los mejores proyectos gracias a la')} <strong>{t('precisión, calidad de datos y procesos efectuados.')}</strong> <br /><br />

 <span className="bg-linkIt-300bg-opacity-[0.3]">{t('La confianza y la transparencia')}</span> {t('son los pilares de nuestra relación con nuestros partners. Trabajamos incansablemente para construir y mantener sinergias a través de una')} <strong>{t('comunicación asertiva.')}</strong> {t('Nuestro compromiso con las partes es inquebrantable; su éxito es nuestro éxito. Estamos aquí para superar sus expectativas y brindarles soluciones personalizadas que satisfagan sus necesidades específicas.')} <br /><br />

<span className="bg-linkIt-300 bg-opacity-[0.3]">{t('Fomentar la colaboración global')}</span> {t('es parte de nuestro ADN. Reconocemos la riqueza de perspectivas y talento que se encuentra en todo el mundo, y trabajamos en conjunto en un ambiente')} <strong>{t('diverso e inclusivo.')}</strong> {t('Además, creemos en el')} <strong>{t('trabajo remoto,')}</strong> {t('lo que nos permite')} <span className="bg-linkIt-300 bg-opacity-[0.3]">{t('democratizar oportunidades,')}</span> {t('y facilitando la conexión entre talentos y empresas de primer nivel de manera global.')} <br /><br />

{t('En nuestra búsqueda incansable por brindar una experiencia excepcional, aspiramos a dejar una huella imborrable en cada momento. Estamos comprometidos a')} <strong>{t('superar las expectativas de nuestros partners y talentos')}</strong> {t('en cada paso del camino, ofreciendo constantemente un rendimiento que supera el 100%.')}
</p>
<img src="/Vectores/valores.svg" className="self-center" alt="" />
        </div>
    )
}
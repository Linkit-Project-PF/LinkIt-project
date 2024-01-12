import { useState } from 'react'
import { useTranslation } from "react-i18next";

export default function ModuloD() {
    const {t} = useTranslation();
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const handleClick = () => { setShow(!show) }

    const handleClick2 = () => { setShow2(!show2) }
    return ( 
    <div>
        <div className='hidden lg:block'>
<div className="grid lg:grid-cols-2 p-[7%] bg-linkIt-300 dark:bg-linkIt-400">
    <div className='flex flex-col lg:flex-row w-full items-end justify-end relative lg:col-span-full mb-[5%]'>
<h1 className="text-white xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[1.5rem] xl:text-[2rem] 1xl:text-[2.5rem] font-manrope font-extrabold">
{t('Todo nace luego de la pandemia, más precisamente allí por mediados del 2021, luego de reiteradas conversaciones de unos amigos hablando de encontrar')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('el lugar ideal')}</span> {t('para trabajar, si el mismo existiera, cómo hacer para sentirse')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('pleno y realmente feliz')}</span> {t('en el trabajo, no cómodo o contento... desde ese entonces nace LinkIT.')}
</h1>
<div  className="w-full grid items-end justify-end relative before:w-full before:h-[1px] before:absolute before:bg-white before:top-[100%] lg:col-span-full">
<p className="text-white  text-[0.6rem] ssm:text-[1rem] text-end">{t('Nuestra Historia')}</p>
</div>
</div>


<p className={`col-span-full text-white text-[0.8rem] ssm:text-[1.5rem] lg:text-[1.2rem] xl:text-[1.5rem] 1xl:text-[1.8rem] font-montserrat mt-[5%] ${show ? "block" : "hidden"} transition-all ease-in-out duration-300`}>
{t('Así comenzaron a co-crear el espacio donde uno aspiraría a trabajar, no sólo desde lo amplio de sus conocimientos y valores, sino que también desde su desconocimiento, desde la intriga,')} <span className="bg-neutral-100 bg-opacity-[0.2]"> {t('las ganas de innovar,')}</span> {t('la perseverancia y, gracias a sus expertises y de tantas charlas y consultas con profesionales, adquirieron con claridad cómo no debían hacerse las cosas, siempre uno piensa que debe saber cómo se hacen pero hay otro punto de vista que te lo da la experiencia, el saber cómo no se hacen o cómo no salen las cosas también es un gran camino al éxito; así nacemos, así ')}<strong>{t('los errores no son negativos, todos se miran como oportunidades de mejorar y crecer.')}</strong> <br /><br />
{t('Esto los llevo a')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('diferenciarse,')}</span> {t('buscando que LinkIT sea un lugar donde se disfrute del trabajo, exista la transparencia y la posibilidad de desarrollarse, que aspire a siempre crecer y se apoye en su equipo para hacerlo, logrando grandes sinergias para poder crear un lugar donde')} <strong>{t('empresas de todo el mundo puedan confiar y apoyarse para escalar.')}</strong> <br /><br />
<strong>{t('¿Y por qué tanto foco en el lugar dónde trabajar y estar contentos?')}</strong> <br /> 
{t('Claro, muchas veces en la vorágine no nos damos cuenta pero, en promedio, desde los 18 a los 70 años trabajamos el 30% de nuestro tiempo!! En búsqueda de')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('aspirar a crecer,')}</span> {t('desarrollarse y transmitir, estos amigos comenzaron a emprender.')} <br /><br />
{t('Tras notar que el mundo estaba en plena')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('transformación')}</span> {t('y que cada empresa, sin importar su industria, estaba empezando a darse cuenta de la necesidad de incorporar productos tecnológicos y talento')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('para su funcionamiento efectivo,')}</span> {t('estos founders deciden encontrar la forma de hacer la diferencia mediante la <strong>asignación y gestión de los mejores talentos a nivel global,</strong> buscando democratizar las oportunidades de todo el mundo, tanto de empresas para escalar y mejorar sus proyectos, como de talentos que busquen su mundo ideal.')} <br /> <br />
{t('Habiendo identificado inicialmente que la demanda de talento tecnológico estaría en auge, notaron que había un problema creciente, los procesos para la adquisición y gestión de talentos.')} <br /> <br />
{t('La gente no sabe exactamente cómo y dónde buscar')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('talento real,')}</span> {t('las plataformas de búsqueda de empleo habituales estaban saturadas con información, y a menudo, las oportunidades prometedoras no se terminan materializando para los talentos que buscan un lugar en el mundo tecnológico entre otras cosas.')} <br /> <br />
{t('Probando distintos procesos de empresas notaron que')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('los tiempos eran demasiado largos,')}</span> {t('la comunicación no era asertiva, el asesoramiento no era el pertinente, el talento presentado no era idóneo y, sobre todo, se quitaba mucho tiempo a los líderes para que participaran de dichos procesos cuando en realidad')} <strong>{t('debían enfocarse en los temas más importantes y poder descansar en un tercero.')}</strong>  {t('Además de ello, pocas eran las que brindaban un servicio extra de asesoramiento para la contratación con planes de retención y beneficios entre otras grandes cosas que lograban que los talentos encuentren su mundo.')} <br /> <br />
{t('En este contexto de cambio y desafío')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('nace LinkIT.')}</span> {t('Un grupo de emprendedores apasionados por la tecnología se reunió con una visión clara:')} <strong>{t('resolver el problema')}</strong> {t('de la desconexión entre las empresas que necesitaban talento de calidad mientras encuentra las oportunidades ideales para democratizarlas al talento de todo el mundo, buscando')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('cambiarles la calidad de vida y su cotidianeidad.')} </span> <br /> <br />
{t('Así nace, en búsqueda de una')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('solución,')}</span> {t('conectar estas dos partes y lograr su misión, servir como puente entre el talento tecnológico y las empresas en busca de esas personas')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('simplificando')}</span> {t('la experiencia durante el proceso de contratación')} <strong>{t('logrando equipos de alto desempeño.')}</strong> <br /> <br />
{t('Con su')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('compromiso y pasión por el talento,')}</span> {t('la excelencia tecnológica, la transparencia y la confianza, el compromiso con el cliente, la colaboración global y la promoción del trabajo remoto,')} <strong>{t('LinkIT busca convertirse en un líder en la industria.')}</strong> {t('Ayudando a empresas de todos los tamaños a encontrar el talento adecuado y permitiendo que los profesionales avanzaran en sus carreras.')}

</p>
</div> 
<div className="flex bg-linkIt-500 w-screen h-[3rem] items-center justify-items-center justify-between dark:bg-linkIt-700 px-[5%]">
    <button className={`text-linkIt-300 dark:text-white text-[0.6rem] ssm:text-[1rem] font-extrabold text-start font-montserrat ${show ? '' : ''}`} onClick={handleClick}>{show ? (<a href="#historia">-</a>) : "+"}</button>
    <button className='text-linkIt-300 dark:text-white text-[0.6rem] ssm:text-[1rem] font-montserrat whitespace-nowrap font-bold text-end' onClick={handleClick}>{show ? (<a href="#historia">{t('Leer menos')}</a>) : "Leer más"}</button>
</div>
</div>


    <div className={`lg:hidden ${ show2 ? "block" : "hidden" }`}>
<div className="grid lg:grid-cols-2 p-[7%] bg-linkIt-300 dark:bg-linkIt-400">
    <div className='flex flex-col lg:flex-row w-full items-end justify-end relative lg:col-span-full mb-[5%]'>
<h1 className="text-white xs:text-[1.3rem] ssm:text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[1.5rem] xl:text-[2rem] 1xl:text-[2.5rem] font-manrope font-extrabold">
{t('Todo nace luego de la pandemia, más precisamente allí por mediados del 2021, luego de reiteradas conversaciones de unos amigos hablando de encontrar')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('el lugar ideal')}</span> {t('para trabajar, si el mismo existiera, cómo hacer para sentirse')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('pleno y realmente feliz')}</span> {t('en el trabajo, no cómodo o contento... desde ese entonces nace LinkIT.')}
</h1>
<div  className="w-full grid items-end justify-end relative before:w-full before:h-[1px] before:absolute before:bg-white before:top-[100%] lg:col-span-full">
<p className="text-white  text-[0.6rem] ssm:text-[1rem] text-end">{t('Nuestra Historia')}</p>
</div>

</div>


<p className={`col-span-full text-white text-[0.8rem] ssm:text-[1.5rem] lg:text-[1.2rem] xl:text-[1.5rem] 1xl:text-[1.8rem] font-montserrat mt-[5%] transition-all ease-in-out duration-300`}>
{t('Así comenzaron a co-crear el espacio donde uno aspiraría a trabajar, no sólo desde lo amplio de sus conocimientos y valores, sino que también desde su desconocimiento, desde la intriga,')} <span className="bg-neutral-100 bg-opacity-[0.2]"> {t('las ganas de innovar,')}</span> {t('la perseverancia y, gracias a sus expertises y de tantas charlas y consultas con profesionales, adquirieron con claridad cómo no debían hacerse las cosas, siempre uno piensa que debe saber cómo se hacen pero hay otro punto de vista que te lo da la experiencia, el saber cómo no se hacen o cómo no salen las cosas también es un gran camino al éxito; así nacemos, así ')}<strong>{t('los errores no son negativos, todos se miran como oportunidades de mejorar y crecer.')}</strong> <br /><br />
{t('Esto los llevo a')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('diferenciarse,')}</span> {t('buscando que LinkIT sea un lugar donde se disfrute del trabajo, exista la transparencia y la posibilidad de desarrollarse, que aspire a siempre crecer y se apoye en su equipo para hacerlo, logrando grandes sinergias para poder crear un lugar donde')} <strong>{t('empresas de todo el mundo puedan confiar y apoyarse para escalar.')}</strong> <br /><br />
<strong>{t('¿Y por qué tanto foco en el lugar dónde trabajar y estar contentos?')}</strong> <br /> 
{t('Claro, muchas veces en la vorágine no nos damos cuenta pero, en promedio, desde los 18 a los 70 años trabajamos el 30% de nuestro tiempo!! En búsqueda de')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('aspirar a crecer,')}</span> {t('desarrollarse y transmitir, estos amigos comenzaron a emprender.')} <br /><br />
{t('Tras notar que el mundo estaba en plena')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('transformación')}</span> {t('y que cada empresa, sin importar su industria, estaba empezando a darse cuenta de la necesidad de incorporar productos tecnológicos y talento')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('para su funcionamiento efectivo,')}</span> {t('estos founders deciden encontrar la forma de hacer la diferencia mediante la <strong>asignación y gestión de los mejores talentos a nivel global,</strong> buscando democratizar las oportunidades de todo el mundo, tanto de empresas para escalar y mejorar sus proyectos, como de talentos que busquen su mundo ideal.')} <br /> <br />
{t('Habiendo identificado inicialmente que la demanda de talento tecnológico estaría en auge, notaron que había un problema creciente, los procesos para la adquisición y gestión de talentos.')} <br /> <br />
{t('La gente no sabe exactamente cómo y dónde buscar')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('talento real,')}</span> {t('las plataformas de búsqueda de empleo habituales estaban saturadas con información, y a menudo, las oportunidades prometedoras no se terminan materializando para los talentos que buscan un lugar en el mundo tecnológico entre otras cosas.')} <br /> <br />
{t('Probando distintos procesos de empresas notaron que')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('los tiempos eran demasiado largos,')}</span> {t('la comunicación no era asertiva, el asesoramiento no era el pertinente, el talento presentado no era idóneo y, sobre todo, se quitaba mucho tiempo a los líderes para que participaran de dichos procesos cuando en realidad')} <strong>{t('debían enfocarse en los temas más importantes y poder descansar en un tercero.')}</strong>  {t('Además de ello, pocas eran las que brindaban un servicio extra de asesoramiento para la contratación con planes de retención y beneficios entre otras grandes cosas que lograban que los talentos encuentren su mundo.')} <br /> <br />
{t('En este contexto de cambio y desafío')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('nace LinkIT.')}</span> {t('Un grupo de emprendedores apasionados por la tecnología se reunió con una visión clara:')} <strong>{t('resolver el problema')}</strong> {t('de la desconexión entre las empresas que necesitaban talento de calidad mientras encuentra las oportunidades ideales para democratizarlas al talento de todo el mundo, buscando')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('cambiarles la calidad de vida y su cotidianeidad.')} </span> <br /> <br />
{t('Así nace, en búsqueda de una')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('solución,')}</span> {t('conectar estas dos partes y lograr su misión, servir como puente entre el talento tecnológico y las empresas en busca de esas personas')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('simplificando')}</span> {t('la experiencia durante el proceso de contratación')} <strong>{t('logrando equipos de alto desempeño.')}</strong> <br /> <br />
{t('Con su')} <span className="bg-neutral-100 bg-opacity-[0.2]">{t('compromiso y pasión por el talento,')}</span> {t('la excelencia tecnológica, la transparencia y la confianza, el compromiso con el cliente, la colaboración global y la promoción del trabajo remoto,')} <strong>{t('LinkIT busca convertirse en un líder en la industria.')}</strong> {t('Ayudando a empresas de todos los tamaños a encontrar el talento adecuado y permitiendo que los profesionales avanzaran en sus carreras.')}

</p>
</div> 
</div>
<div className=" lg:hidden flex bg-linkIt-200 w-screen h-[3rem] items-center justify-items-center justify-between dark:bg-linkIt-700 px-[5%]">
    <button className={`text-white text-[0.6rem] ssm:text-[1rem] font-extrabold text-start font-montserrat ${show ? '' : ''}`} onClick={handleClick2}>{show ? (<a href="#historia">-</a>) : "+"}</button>
    <button className='text-white text-[0.6rem] ssm:text-[1rem] font-montserrat whitespace-nowrap font-bold text-end' onClick={handleClick2}>{t('Nuestra Historia')}</button>
    </div>
</div>) }

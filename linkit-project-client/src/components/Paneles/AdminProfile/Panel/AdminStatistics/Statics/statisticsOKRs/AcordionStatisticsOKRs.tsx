import { Accordion, AccordionItem } from "@szhsin/react-accordion";

function AccordionStatisticsOKRsLinkIt(){
    return(
        <div>
            <Accordion transition transitionTimeout={250}>

                <h2>Mercado: Posicionamiento a nivel LATAM y España</h2>
                <AccordionItem header=" + Resultado Clave 1: Expandirnos por país" className="accordion-item">
                - Nuevos clientes = 13 <br />
                - Uruguay: 3 <br />
                - México: 3 <br />
                - Chile: 3 <br />
                - Colombia + Perú + Ecuador + Centroamérica: 4<br />
                </AccordionItem>

                <AccordionItem header=" + Resultado Clave 2: Cantidad de posiciones nuevas por país">
                - Cantidad de talentos contratados = 17<br />
                - Uruguay: 4<br />
                - México: 4<br />
                - Chile: 4<br />
                - Colombia + Perú + Ecuador + Centroamérica: 4
                - Otros países: 1<br />
                </AccordionItem>

                <AccordionItem header=" + Resultado Clave 3: Generar reuniones comerciales, recruiters, partners + interacciones">
                - Debemos tener al menos 350 cantidad de reuniones por país para comenzar a expandirnos y hacernos conocidos, independientemente de los cierres.<br />
                - Uruguay: 90<br />
                - México: 120<br />
                - Chile: 90<br />
                - Colombia + Perú + Ecuador + Centroamérica: 50<br />
                </AccordionItem>

                <h2>Negocio: Aumentar el revenue en un 10% vs el primer semestre</h2>
                <AccordionItem header=" + Resultado Clave 1: Roles por cliente">
                - Aumentar los roles por cliente a 1,5<br />
                </AccordionItem>

                <AccordionItem header=" + Resultado Clave 2: Staff Augmentation">
                - Cantidad de talentos contratados = 6<br/>
                - Uruguay: 2<br/>
                - México: 2<br/>
                - Chile: 2<br/>
                - Colombia + Perú + Ecuador + Centroamérica: -<br/>
                </AccordionItem>

                <AccordionItem header=" + Resultado Clave 3: Net Retention Revenue (Staff augmentation)">
                - Tiempo de contratación por talento en cada país {">"} 12 meses (Life Time Value: Ponderación $ y tiempo)<br />
                - Uruguay: <br />
                - México: <br />
                - Chile: <br />
                - Colombia + Perú + Ecuador + Centroamérica: -<br />
                </AccordionItem>

                <AccordionItem header=" + Resultado Clave 4: Annual Recurring Revenue (Staff Augmentation)">
                - Apuntar a USD 1.8k por mes llevándolo a un promedio anual de USD 3.5k<br />
                </AccordionItem>

                <h4>Equipo y experiencias: Cumplir con nuestra misión de forma extraordinaria</h4> 
                <AccordionItem header=" + Resultado Clave 1: Equipo de alto desempeño, súper comprometido y que performe de manera eficiente">
                - NPS del equipo {'>'} 70%
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 2: El 90% de los clientes debe completar las encuestas llegando a un rate promedio > 4 estrellas ">
                - Tiempos de presentación<br/>
                - Seguimiento y comunicación hasta el cierre<br/>
                - Calidad de los talentos presentados<br/>
                - Proceso post venta<br/>
                - ¿Lo recomendarías (programa de referidos)?<br/>
                - ¿Te interesaría tercerizar las contrataciones?<br/>
                </AccordionItem>
                <AccordionItem header= " + Resultado Clave 3: El 50% de los talentos que entrevistamos debe completar las encuestas llegando a un rate promedio > 4 estrellas">
                - Entrevista con recruiter<br/>
                - Tiempos y calidad del proceso del cliente<br/>
                - Seguimiento del equipo de recruiting<br/>
                - ¿Lo recomendarías (programa de referidos)?<br/>
                - ¿Te interesaría continuar para otros procesos futuros?<br/>
                </AccordionItem>
                <AccordionItem header= " + Resultado Clave 4: Tomar decisiones a través de la información útil">
                - Reportings mensuales automatizados por área en tiempo y forma<br/>
                - Tener distribuida a nuestra comunidad en los países líderes en LATAM para poder incorporar información a través de ellxs.<br/>
                - Nuevas unidades de negocios<br/>
                - Incrementar nuestra comunidad mediante nuevas experiencias, servicios y contenido: Realizar 1 webinar mensual (sobre recruiting, ventas, el rubro, emprendedurismo, armado de tu CV, etcéteera)<br/>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

function AccordionStatisticsOKRsSales(){
    return(
        <div>
            <Accordion transition transitionTimeout={250}>

                <h4>Mercado: Posicionamiento a nivel LATAM y España</h4> 
                <AccordionItem header=" + Resultado Clave 1: Expandirnos por país">
                - Nuevos clientes = 13<br/>
                - Uruguay: 3<br/>
                - México: 3<br/>
                - Chile: 3<br/>
                - Colombia + Perú + Ecuador + Centroamérica: 4<br/>
                </AccordionItem>

                <AccordionItem header=" + Resultado Clave 2: Cantidad de posiciones cerradas por país">
                - Cantidad de talentos contratados = 17<br/>
                - Uruguay: 4<br/>
                - México: 4<br/>
                - Chile: 4<br/>
                - Colombia + Perú + Ecuador + Centroamérica: 4<br/>
                - Otros países: 1<br/>
                </AccordionItem>

                <AccordionItem header=" + Resultado Clave 3: Generar reuniones comerciales + interacciones">
                - Debemos tener al menos 100 cantidad de reuniones<br/>
                - Uruguay: 30<br/>
                - México: 30<br/>
                - Chile: 30<br/>
                - Colombia + Perú + Ecuador + Centroamérica: 10<br/>
                </AccordionItem>
          
                <h4>Negocio: Aumentar el revenue en un 10% vs el primer semestre</h4>
                <AccordionItem header=" + Resultado Clave 1: Roles por cliente">
                - Aumentar los roles por cliente a 1,5<br/>
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 2: Staff Augmentation">
                - Cantidad de talentos contratados = 6<br/>
                - Uruguay: 2<br/>
                - México: 2<br/>
                - Chile: 2<br/>
                - Colombia + Perú + Ecuador + Centroamérica: -<br/>
                - Proponer a empresas grandes el servicio, independientemente de reclutarles o no.<br/>
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 3: Ticket medio de cierre (Hiring Fee)">
                - Cerrar el promedio mensual en USD 3k<br/>
                - Uruguay: <br/>
                - México: <br/>
                - Chile: <br/>
                - Colombia + Perú + Ecuador + Centroamérica: -<br/>
                </AccordionItem>
                <AccordionItem header='Resultado Clave 4: Tipo de cliente'>
                - El 70% de los roles cerrados deben venir del cliente tipo A <br/>
                </AccordionItem>

                <h4>Equipo y experiencias: Cumplir con nuestra misión de forma extraordinaria</h4>
                <AccordionItem header=" + Resultado Clave 1: Equipo de alto desempeño, súper comprometido y que performe de manera eficiente">
                - NPS del equipo{'>'}70% <br/>
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 2: El 90% de los clientes debe completar las encuestas llegando a un rate promedio > 4 estrellas">
                - Tiempos de presentación<br/>
                - Seguimiento y comunicación hasta el cierre<br/>
                - Calidad de los talentos presentados<br/>
                - Proceso post venta<br/>
                - ¿Lo recomendarías (programa de referidos)?<br/>
                - ¿Te interesaría tercerizar las contrataciones?<br/>
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 3: Tomar decisiones a través de la información útil">
                - Reportings mensuales automatizados por área en tiempo y forma<br/>
                - Cumplir el plan de contenido de modo tal que generemos comunidad y experiencias (al menos 1 cliente debemos conseguir)<br/>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

function AccordionStatisticsOKRsQ4Recruiting(){
    return(
        <div>
            <Accordion transition transitionTimeout={250}>

                <h4>Mercado: Posicionamiento a nivel LATAM y España</h4> 
                <AccordionItem header=" + Resultado Clave 1: Aumentar un 70% el talent pool por todo LATAM (Escalabilidad)">
                - Nuevos talentos entrevistados en AIRTABLE = 640 (Inicio 879)<br/>
                - Nuevos Argentina: 100 mínimo<br/>
                - Nuevos Colombia: 100 mínimo<br/>
                - Nuevos Chile: 100 mínimo<br/>
                - Nuevos resto LATAM: 100 mínimo<br/>
                </AccordionItem>
                <h4>Negocio: Aumentar el revenue en un 10% vs el primer semestre</h4> 
                <AccordionItem header=" + Resultado Clave 1: Cantidad de talento endorsado (Cantidad)">
                - Mantener un promedio de 4 candidatos endorsados por posicion<br/>
                - 4 candidatos promedio<br/>
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 2: Tiempos de procesos (Velocidad)">
                - Todo esto es para clientes A y B<br/>
                - Tiempo para endorsar = Menor a 5 días hábiles<br/>
                - Tiempo hasta primera entrevista de cliente = Menor o igual a 5 días hábiles<br/>
                - Tiempo hasta cierre de proceso = Menor a 25 días hábiles<br/>
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 3: Funnel de proceso de selección (Calidad)">
                - Aumentar un Cantidad de oportunidades ganadas de clientes tipo A y B.<br/>
                - Alineados<br/>
                - Endorsados<br/>
                - 1st Cl. Interview<br/>
                - 2nd Cl. Interview<br/>
                -  Offer<br/>
                - Start date/Won<br/>
                </AccordionItem>
                <h4>Equipo y experiencias: Cumplir con nuestra misión de forma extraordinaria</h4>
                <AccordionItem header=" + Resultado Clave 1: Desarrollar un punto de información para entender el mercado con el que trabajamos (Mejora de procesos)">
                - Conseguir un total de 200 respuestas sobre experiencia de talento entrevistado<br/>
                - Entender 3 puntos de mejora para el proceso de selección según la experiencia de talento<br/>
                - Entender 3 puntos positivos de nuestro proceso de selección según la experiencia de talento<br/>
                - Entender 2 puntos altamente valorados sobre nuestras ofertas a talento de LATAM<br/>
                - Entender 2 puntos de mejora sobre nuestras ofertas a talento de LATAM<br/>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

function AccordionStatisticsRecruiting(){
    return(
        <div>
            <Accordion transition transitionTimeout={250}>

                <h4>Mercado: Posicionamiento a nivel LATAM y España</h4> 
                <AccordionItem header=" + Resultado Clave 1: Aumentar un 70% el talent pool por todo LATAM">
                - Nuevos talentos entrevistados en AIRTABLE = 640 (Inicio 879)<br/>
                - Nuevos Argentina: 100 mínimo (Inicio 490)<br/>
                - Nuevos Colombia: 100 mínimo (Inicio 116)<br/>
                -  Nuevos Chile: 100 mínimo (Inicio 73)<br/>
                - Nuevos resto LATAM: 100 mínimo (Inicio 200)<br/>
                </AccordionItem>
                <h4>Negocio: Aumentar el revenue en un 10% vs el primer semestre</h4> 
                <AccordionItem header="Resultado Clave 1: Cantidad de talento endorsado">
                - Mantener un promedio de al menos 3.5 talentos endosados por posición<br/>
                -  3.5 candidatos promedio<br/>
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 2: Tiempos de procesos">
                - Todo esto es para clientes A y B<br/>
                -  Tiempo para endorsar = Menor a 5 días hábiles<br/>
                -  Tiempo hasta primera entrevista de cliente = Menor o igual a 5 días hábiles<br/>
                - Tiempo hasta cierre de proceso = Menor a 25 días hábiles<br/>
                </AccordionItem>
                <AccordionItem header=" + Resultado Clave 3: Funnel de proceso de selección">
                - Cantidad de oportunidades ganadas de clientes tipo A y B.<br/>
                -  Alineados: 100%<br/>
                -  Endorsados: 85%<br/>
                -   1st Cl. Interview: 55%<br/>
                -   2nd Cl. Interview: X% (Nueva fecha)<br/>
                -  Offer: 18%<br/>
                -  Start date/Won: 18%<br/>
                </AccordionItem>
                <h4>Equipo y experiencias: Cumplir con nuestra misión de forma extraordinaria</h4> 
                <AccordionItem header=" + Resultado Clave 1: Desarrollar un punto de información para entender el mercado con el que trabajamos">
                -  Conseguir un total de 200 respuestas sobre experiencia de talento entrevistado<br/>
                -  Entender 3 puntos de mejora para el proceso de selección según la experiencia de talento<br/>
                -   Entender 3 puntos positivos de nuestro proceso de selección según la experiencia de talento<br/>
                -   Entender 2 puntos altamente valorados sobre nuestras ofertas a talento de LATAM<br/>
                -   Entender 2 puntos de mejora sobre nuestras ofertas a talento de LATAM<br/>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export {AccordionStatisticsOKRsLinkIt,AccordionStatisticsOKRsSales,AccordionStatisticsOKRsQ4Recruiting,AccordionStatisticsRecruiting};
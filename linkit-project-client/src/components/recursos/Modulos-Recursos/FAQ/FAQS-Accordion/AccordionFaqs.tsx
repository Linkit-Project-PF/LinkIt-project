import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import "./Accordion.css"


function AccordionFaqs() {
  return (
    <div>
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header="+ ¿Qué es LinkIT?" className="accordion-item">
          LinkIT es tu recruitment partner que, sin importar las distancias,
          conecta a las empresas con el mejor talento tech a lo largo del mundo.
        </AccordionItem>

        <AccordionItem header="+ ¿Por qué LinkIT?" className="accordion-item">
          Linkit no es una agencia de recursos humanos, es tu Partner que te
          ayudará a escalar en tu negocio. Nuestros pilares son Agilidad,
          Calidad y Excelencia tiro cualquier pilar porque da para pensar esto.
        </AccordionItem>

        <AccordionItem header="+ ¿De qué parte del mundo encuentran talento?" className="accordion-item">
          LinkIT no tiene barrera, busca talento en todo el globo sin importar
          la ubicación ni la nacionalidad, el foco está en el talento, la
          experiencia y el match con los objetivos marcados.
        </AccordionItem>

        <AccordionItem header="+ ¿Piden pagos antes de concretar el servicio?" className="accordion-item">
          Una de las cosas que hace único a LinkIT es que se centra 100% en la
          confianza y la transparencia con sus partners, es por esto por lo que
          no hay ningún pago hasta que el talento comience a trabajar.
        </AccordionItem>

        <AccordionItem header="+ ¿Cómo encontrar talento en un mercado tan competitivo como el de la tecnología?" className="accordion-item">
          Gracias a nuestro gran equipo experto y multidisciplinario, junto con
          el dominio en herramientas de búsqueda y bolsas de datos internas,
          logramos cruzar las barreras del talento y de ubicación yendo a
          indagar sobre a candidatos en búsqueda activa así como también a
          aquellos que no lo estén.
        </AccordionItem>

        <AccordionItem header="+ ¿Qué tipo de roles son los más trabajados por LinkIT?" className="accordion-item">
          LinkIT llega en un 360º de perfiles técnicos, encontrando los mejores
          diseñadores de producto, front-end, back-end, full-stack y mucho más.
        </AccordionItem>

        <AccordionItem header="+ ¿En cuánto tiempo presentan los primeros candidatos cualificados?" className="accordion-item">
          Tardamos no más de 7 a 10 días hábiles en presentar los primeros
          candidatos, previamente seleccionados y entrevistados.
        </AccordionItem>

        <AccordionItem header="+ ¿Sólo se dedican a reclutamiento Tech?" className="accordion-item">
          No, si bien nos especializamos en este área, tenemos una red de
          partners que están dispuestos a brindar el servicio para otras áreas
          otorgando los mismos beneficios que nosotros.
        </AccordionItem>

        <AccordionItem header="+ ¿Qué modalidades de contratación se trabajan?" className="accordion-item">
          Gracias a los partners que tenemos con distintas empresas del mundo,
          podemos alinear los requisitos legales del país donde radique la
          empresa, así como donde esté el talento. Los tipos de relaciones
          laborales más frecuentes pueden ser: <br />
          <br />
          - Como trabajador autónomo
          modalidad freelance <br />
          <br />
          - Mediante un contrato temporal <br />
          <br />
          - En relación de dependencia En caso de no avanzar con el proceso, ¿me tendrán en
          cuenta futuras oportunidades? Por supuesto! Aceptando los términos y
          condiciones entrarás en nuestra gran base de datos para poder
          asignarte el proyecto a tu medida, alineado con tus talentos y
          necesidades.
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionFaqs;

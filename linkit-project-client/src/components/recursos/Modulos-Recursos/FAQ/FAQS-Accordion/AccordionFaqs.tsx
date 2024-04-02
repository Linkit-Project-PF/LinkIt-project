import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useTranslation } from "react-i18next";
import "./Accordion.css"


function AccordionFaqs() {
  const {t} = useTranslation();
  return (
    <div className="font-manrope font-bold text-start dark:bg-linkIt-400">
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header={t("+ ¿Qué es LinkIT?")} className="subtitles-size font-montserrat dark:bg-linkIt-400 dark:text-white">
          {t('LinkIT es tu recruitment partner que, sin importar las distancias, conecta a las empresas con el mejor talento tech a lo largo del mundo.')}
        </AccordionItem>

        <AccordionItem header={t("+ ¿Por qué LinkIT?")} className="subtitles-size font-montserrat dark:bg-linkIt-400 dark:text-white">
          {t('LinkIT no es una agencia de recursos humanos, es tu partner que te ayudará a escalar en tu negocio. Nuestros pilares son agilidad, calidad y excelencia.')}
        </AccordionItem>

        <AccordionItem header={t("+ ¿De qué parte del mundo encuentran talento?")} className="subtitles-size font-montserrat text-start dark:bg-linkIt-400 dark:text-white">
          {t('LinkIT no tiene barrera, busca talento en todo el globo sin importar la ubicación ni la nacionalidad, el foco está en el talento, la experiencia y el match con los objetivos marcados.')}
        </AccordionItem>

        <AccordionItem header={t("+ ¿Piden pagos antes de concretar el servicio?")} className="subtitles-size font-montserrat dark:bg-linkIt-400 dark:text-white">
          {t('Una de las cosas que hace único a LinkIT es que se centra 100% en la confianza y la transparencia con sus partners, es por esto por lo que no hay ningún pago hasta que el talento comience a trabajar.')}
        </AccordionItem>

        <AccordionItem header={t("+ ¿Cómo encontrar talento en un mercado tan competitivo como el de la tecnología?")} className="subtitles-size font-montserrat dark:bg-linkIt-400 dark:text-white">
          {t('Gracias a nuestro gran equipo experto y multidisciplinario, junto con el dominio en herramientas de búsqueda y bolsas de datos internas,logramos cruzar las barreras del talento y de ubicación yendo a indagar sobre a candidatos en búsqueda activa así como también a aquellos que no lo estén.')}
        </AccordionItem>

        <AccordionItem header={t("+ ¿Qué tipo de roles son los más trabajados por LinkIT?")} className="subtitles-size font-montserrat dark:bg-linkIt-400 dark:text-white">
          {t('LinkIT llega en un 360º de perfiles técnicos, encontrando los mejores diseñadores de producto, front-end, back-end, full-stack y mucho más.')}
        </AccordionItem>

        <AccordionItem header={t("+ ¿En cuánto tiempo presentan los primeros candidatos cualificados?" )}className="subtitles-size font-montserrat dark:bg-linkIt-400 dark:text-white">
          {t('Tardamos solo 5 días en presentar los primeros candidatos, previamente seleccionados y entrevistados.')}
        </AccordionItem>

        <AccordionItem header={t("+ ¿Sólo se dedican a reclutamiento Tech?")} className="subtitles-size font-montserrat dark:bg-linkIt-400 dark:text-white">
          {t('No, si bien nos especializamos en este área, tenemos una red de partners que están dispuestos a brindar el servicio para otras áreas otorgando los mismos beneficios que nosotros.')}
        </AccordionItem>

        <AccordionItem header={t("+ ¿Qué modalidades de contratación se trabajan?")} className="subtitles-size font-montserrat dark:bg-linkIt-400 dark:text-white">
          {t('Gracias a los partners que tenemos con distintas empresas del mundo, podemos alinear los requisitos legales del país donde radique la empresa, así como donde esté el talento. Los tipos de relaciones laborales más frecuentes pueden ser:')} <br />
          <br />
          - {t('Como trabajador autónomo modalidad freelance')} <br />
          <br />
          - {t('Mediante un contrato temporal')} <br />
          <br />
          - {t('En relación de dependencia En caso de no avanzar con el proceso, ¿me tendrán en cuenta futuras oportunidades? Por supuesto! Aceptando los términos y condiciones entrarás en nuestra gran base de datos para poder asignarte el proyecto a tu medida, alineado con tus talentos y necesidades.')}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionFaqs;

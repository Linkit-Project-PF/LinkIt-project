import "./FAQ.css"
import AccordionFaqs from "./FAQS-Accordion/AccordionFaqs"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet-async"

function FAQ() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  const isSpanish = currentLanguage.startsWith("es")

  // Generar el schema JSON-LD para FAQPage
  const generateFAQSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: isSpanish ? "¿Qué es LinkIT?" : "What is LinkIT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "LinkIT es tu recruitment partner que, sin importar las distancias, conecta a las empresas con el mejor talento tech a lo largo del mundo."
              : "LinkIT is your recruitment partner that, regardless of distances, connects companies with the best tech talent throughout the world.",
          },
        },
        {
          "@type": "Question",
          name: isSpanish ? "¿Por qué LinkIT?" : "Why LinkIT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "LinkIT no es una agencia de recursos humanos, es tu partner que te ayudará a escalar en tu negocio. Nuestros pilares son agilidad, calidad y excelencia."
              : "LinkIT is not a human resources agency, it is your partner that will help you scale your business. Our pillars are agility, quality and excellence.",
          },
        },
        {
          "@type": "Question",
          name: isSpanish
            ? "¿De qué parte del mundo encuentran talento?"
            : "From which part of the world do you find talent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "LinkIT no tiene barrera, busca talento en todo el globo sin importar la ubicación ni la nacionalidad, el foco está en el talento, la experiencia y el match con los objetivos marcados."
              : "LinkIT has no barrier, it seeks talent throughout the globe regardless of location or nationality, the focus is on talent, experience and matching with the marked objectives.",
          },
        },
        {
          "@type": "Question",
          name: isSpanish
            ? "¿Piden pagos antes de concretar el servicio?"
            : "Do you request payments before finalizing the service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "Una de las cosas que hace único a LinkIT es que se centra 100% en la confianza y la transparencia con sus partners, es por esto por lo que no hay ningún pago hasta que el talento comience a trabajar."
              : "One of the things that makes LinkIT unique is that it focuses 100% on trust and transparency with its partners, which is why there is no payment until the talent begins to work.",
          },
        },
        {
          "@type": "Question",
          name: isSpanish
            ? "¿Cómo encontrar talento en un mercado tan competitivo como el de la tecnología?"
            : "How to find talent in such a competitive market as technology?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "Gracias a nuestro gran equipo experto y multidisciplinario, junto con el dominio en herramientas de búsqueda y bolsas de datos internas, logramos cruzar las barreras del talento y de ubicación yendo a indagar sobre a candidatos en búsqueda activa así como también a aquellos que no lo estén."
              : "Thanks to our great expert and multidisciplinary team, together with mastery in search tools and internal data pools, we manage to cross the barriers of talent and location by investigating active job seekers as well as those who are not.",
          },
        },
        {
          "@type": "Question",
          name: isSpanish
            ? "¿Qué tipo de roles son los más trabajados por LinkIT?"
            : "What type of roles are most worked on by LinkIT?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "LinkIT llega en un 360º de perfiles técnicos, encontrando los mejores diseñadores de producto, front-end, back-end, full-stack y mucho más."
              : "LinkIT reaches a 360º of technical profiles, finding the best product designers, front-end, back-end, full-stack and much more.",
          },
        },
        {
          "@type": "Question",
          name: isSpanish
            ? "¿En cuánto tiempo presentan los primeros candidatos cualificados?"
            : "How long does it take to present the first qualified candidates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "Tardamos solo 5 días en presentar los primeros candidatos, previamente seleccionados y entrevistados."
              : "We take only 5 days to present the first candidates, previously selected and interviewed.",
          },
        },
        {
          "@type": "Question",
          name: isSpanish ? "¿Sólo se dedican a reclutamiento Tech?" : "Do you only dedicate to Tech recruitment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "No, si bien nos especializamos en este área, tenemos una red de partners que están dispuestos a brindar el servicio para otras áreas otorgando los mismos beneficios que nosotros."
              : "No, although we specialize in this area, we have a network of partners who are willing to provide the service for other areas, granting the same benefits as us.",
          },
        },
        {
          "@type": "Question",
          name: isSpanish
            ? "¿Qué modalidades de contratación se trabajan?"
            : "What hiring modalities do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "Gracias a los partners que tenemos con distintas empresas del mundo, podemos alinear los requisitos legales del país donde radique la empresa, así como donde esté el talento. Los tipos de relaciones laborales más frecuentes pueden ser: - Como trabajador autónomo modalidad freelance - Mediante un contrato temporal - En relación de dependencia"
              : "Thanks to the partners we have with different companies around the world, we can align the legal requirements of the country where the company is based, as well as where the talent is. The most frequent types of labor relationships can be: - As a self-employed freelancer - Through a temporary contract - In an employment relationship",
          },
        },
        {
          "@type": "Question",
          name: isSpanish
            ? "En caso de no avanzar con el proceso, ¿me tendrán en cuenta futuras oportunidades?"
            : "In case of not advancing with the process, will you consider me for future opportunities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: isSpanish
              ? "Por supuesto! Aceptando los términos y condiciones entrarás en nuestra gran base de datos para poder asignarte el proyecto a tu medida, alineado con tus talentos y necesidades."
              : "Of course! By accepting the terms and conditions, you will enter our large database to be able to assign you the project tailored to you, aligned with your talents and needs.",
          },
        },
      ],
    }
  }

  return (
    <div className="w-full flex flex-col text-center relative z-20 bg-white p-[7%] dark:bg-linkIt-400">
      {/* Schema.org para FAQPage */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(generateFAQSchema())}</script>
      </Helmet>

      <h3 className="font-bold font-manrope titles-size text-center mb-[5%] dark:text-white">
        {t("Preguntas Frecuentes")}
      </h3>

      {/* Componente de acordeón con atributos semánticos */}
      <div itemScope itemType="https://schema.org/FAQPage">
        <AccordionFaqs />
      </div>
    </div>
  )
}

export default FAQ


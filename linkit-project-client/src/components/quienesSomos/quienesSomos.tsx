import ContactUs from "../../Utils/contactUs/contactUs"
import ModuloA from "./modulosQuienesSomos/moduloA/moduloA"
import ModuloB from "./modulosQuienesSomos/moduloB/moduloB"
import ModuloC from "./modulosQuienesSomos/moduloC/moduloC"
import ModuloD from "./modulosQuienesSomos/moduloD/moduloD"
import ModuloE from "./modulosQuienesSomos/moduloE/ModuloE"
import ModuloF from "./modulosQuienesSomos/moduloF/moduloF"
import ModuloG from "./modulosQuienesSomos/moduloG/moduloG"
import { useIntersectionObserver } from "../../Utils/ModuleObserver/IntersectionObserver"
import { useRef, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import BreadcrumbsWithSchema from "../../Utils/Breadcrumbs/Breadcrumbs"
import teamMembers from "../../Utils/TeamMembers.json"
import GetInTouch from "../../Utils/contactUs/calendly"

export default function QuienesSomos() {
  const {i18n } = useTranslation()
  const currentLanguage = i18n.language
  const isSpanish = currentLanguage.startsWith("es")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const refModuloC = useRef<HTMLDivElement>(null)
  const refModuloD = useRef<HTMLDivElement>(null)
  const refModuloE = useRef<HTMLDivElement>(null)
  const refModuloF = useRef<HTMLDivElement>(null)
  const refModuloG = useRef<HTMLDivElement>(null)

  const isModuloCVisible = useIntersectionObserver(refModuloC)
  const isModuloDVisible = useIntersectionObserver(refModuloD)
  const isModuloEVisible = useIntersectionObserver(refModuloE)
  const isModuloFVisible = useIntersectionObserver(refModuloF)
  const isModuloGVisible = useIntersectionObserver(refModuloG)

  // Generar el schema JSON-LD para la página "Quienes Somos"
  const generateAboutUsSchema = () => {
    // Schema para la organización
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.linkit-hr.com/#organization",
      name: "LinkIT",
      url: "https://www.linkit-hr.com/",
      logo: "https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg",
      description: isSpanish
        ? "LinkIT es tu recruitment partner que, sin importar las distancias, conecta a las empresas con el mejor talento tech a lo largo del mundo."
        : "LinkIT is your recruitment partner that, regardless of distances, connects companies with the best tech talent throughout the world.",
      sameAs: ["https://www.linkedin.com/company/linkit-hr/", "https://www.instagram.com/linkit.hr/"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "ary@linkit-hr.com",
        availableLanguage: ["Spanish", "English"],
      },
      foundingDate: "2020", 
      founder: {
        "@type": "Person",
        name: "Philippe Saint-Hubert", 
      },
    }

    // Schema para la página "Acerca de nosotros"
    const aboutPageSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.linkit-hr.com/quienesSomos/#webpage",
      url: "https://www.linkit-hr.com/quienesSomos",
      name: isSpanish ? "Quiénes Somos | LinkIT" : "About Us | LinkIT",
      description: isSpanish
        ? "Conoce más sobre LinkIT, nuestra misión, visión, valores y el equipo detrás de nuestro servicio de reclutamiento IT."
        : "Learn more about LinkIT, our mission, vision, values and the team behind our IT recruitment service.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.linkit-hr.com/#website",
        name: "LinkIT",
        url: "https://www.linkit-hr.com",
      },
      about: {
        "@id": "https://www.linkit-hr.com/#organization",
      },
      // Añadir información sobre las secciones principales
      mainContentOfPage: [
        {
          "@type": "WebPageElement",
          name: isSpanish ? "Misión" : "Mission",
          description: isSpanish
            ? "Nuestra misión es conectar a las empresas con el mejor talento tech a nivel global."
            : "Our mission is to connect companies with the best tech talent globally.",
        },
        {
          "@type": "WebPageElement",
          name: isSpanish ? "Visión" : "Vision",
          description: isSpanish
            ? "Nuestra visión es ser el referente global en reclutamiento IT, eliminando barreras geográficas."
            : "Our vision is to be the global reference in IT recruitment, eliminating geographical barriers.",
        },
        {
          "@type": "WebPageElement",
          name: isSpanish ? "Valores" : "Values",
          description: isSpanish
            ? "Nuestros valores incluyen agilidad, calidad, excelencia, transparencia y confianza."
            : "Our values include agility, quality, excellence, transparency and trust.",
        },
        {
          "@type": "WebPageElement",
          name: isSpanish ? "Historia" : "History",
          description: isSpanish
            ? "La historia de cómo LinkIT se convirtió en un referente en el reclutamiento IT."
            : "The story of how LinkIT became a reference in IT recruitment.",
        },
        {
          "@type": "WebPageElement",
          name: isSpanish ? "Nuestro Equipo" : "Our Team",
          description: isSpanish
            ? "Conoce al equipo de profesionales que hace posible LinkIT."
            : "Meet the team of professionals that makes LinkIT possible.",
        },
      ],
    }

    // Schema para el equipo
    const teamSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://www.linkit-hr.com/quienesSomos/#team",
      name: isSpanish ? "Equipo de LinkIT" : "LinkIT Team",
      itemListElement: teamMembers.map((member, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: member.name,
          jobTitle: member.position,
          image: `https://www.linkit-hr.com${member.img}`,
          sameAs: member.link,
          worksFor: {
            "@id": "https://www.linkit-hr.com/#organization"
          }
        }
      }))
    }

    return [organizationSchema, aboutPageSchema, teamSchema]
  }

  return (
    <>
      {/* Implementación de Schema.org con Helmet */}
      <Helmet>
        <title>{isSpanish ? "Quiénes Somos | LinkIT" : "About Us | LinkIT"}</title>
        <meta
          name="description"
          content={
            isSpanish
              ? "Conoce más sobre LinkIT, nuestra misión, visión, valores y el equipo detrás de nuestro servicio de reclutamiento IT."
              : "Learn more about LinkIT, our mission, vision, values and the team behind our IT recruitment service."
          }
        />
        <link rel="alternate" hrefLang="en" href="https://www.linkit-hr.com/about-us" />
        <link rel="alternate" hrefLang="es" href="https://www.linkit-hr.com/quienesSomos" />
        <script type="application/ld+json">{JSON.stringify(generateAboutUsSchema())}</script>
      </Helmet>

      {/* Breadcrumbs para mejorar la navegación y SEO */}
      <div className="sr-only">
        <div className="container mx-auto px-4 sm:px-6">
          <BreadcrumbsWithSchema
            items={[
              { label: isSpanish ? "Inicio" : "Home", path: "/" },
              {
                label: isSpanish ? "Quiénes Somos" : "About Us",
                path: "/quienesSomos",
                active: true,
              },
            ]}
          />
        </div>
      </div>

      <div className="overflow-hidden">
        <section id="mision" itemScope itemType="https://schema.org/WebPageElement">
          <meta itemProp="name" content={isSpanish ? "Misión" : "Mission"} />
          <ModuloA />
        </section>

        <section id="vision" itemScope itemType="https://schema.org/WebPageElement">
          <meta itemProp="name" content={isSpanish ? "Visión" : "Vision"} />
          <ModuloB />
        </section>

        <div className="min-h-[300px]" ref={refModuloC}>
          {isModuloCVisible && (
            <section id="valores" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content={isSpanish ? "Valores" : "Values"} />
              <ModuloC />
            </section>
          )}
        </div>

        <div className="min-h-[300px]" ref={refModuloD}>
          {isModuloDVisible && (
            <section id="historia" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content={isSpanish ? "Historia" : "History"} />
              <ModuloD />
            </section>
          )}
        </div>

        <div className="min-h-[300px]" ref={refModuloE}>
          {isModuloEVisible && <ModuloE />}
        </div>

        <div className="min-h-[300px]" ref={refModuloF}>
          {isModuloFVisible && <ModuloF />}
        </div>

        <div className="min-h-[300px]" ref={refModuloG}>
          {isModuloGVisible && (
            <section id="talento-Interno" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content={isSpanish ? "Nuestro Equipo" : "Our Team"} />
              <ModuloG />
            </section>
          )}
        </div>

        {/* <ModuloH /> */}
        <div>
        <ContactUs />
        </div>
        <div>
          <GetInTouch />
        </div>
      </div>
    </>
  )
}


import { useEffect, useState } from "react"
import "./JobDescription.css"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import type { JobDescriptionProps, State } from "./typesJobs"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { setFormVisible } from "../../../../../../redux/features/ApplicationSlice"
import Swal from "sweetalert2"
import { setPressLogin } from "../../../../../../redux/features/registerLoginSlice"
import Newsletter from "../../../../../../Utils/newsletter/newsletter"
import blackArrow from "/Vectores/arrowBlackLeft.png"
import whiteArrow from "/Vectores/arrowWhiteLeft.png"
import WhiteLogo from "/Vectores/LinkIt-Logotipo-2024-white.svg"
import BlueLogo from "/Vectores/LinkIt-Logotipo-2024-blue.svg"
import type { RootState } from "../../../../../../redux/types"
import Loading from "../../../../../Loading/Loading"
import HTMLReactParser from "html-react-parser"
import { Helmet } from "react-helmet-async"
import BreadcrumbsWithSchema from "../../../../../../Utils/Breadcrumbs/Breadcrumbs"
import CallToAction from "../../../../../../Utils/Buttons/CTA/callToAction"

const SUPERADMN_ID = import.meta.env.VITE_SUPERADMN_ID

function JobDescription() {
  const { id, slug } = useParams<{ id: string; slug: string }>()

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authentication = useSelector((state: State) => state.Authentication)
  const [jobData, setJobData] = useState<JobDescriptionProps>({} as JobDescriptionProps)
  const [loading, isLoading] = useState<boolean>(false)
  const { i18n } = useTranslation()
  const { language } = i18n
  const navigate = useNavigate()
  const isDarkMode = useSelector((state: RootState) => state.darkMode)
  const isSpanish = language === "es"

  useEffect(() => {
    const fetchJob = async () => {
      if (!loading) isLoading(true)
      try {
        const response = await axios.get(`https://linkit-server.onrender.com/jds/find?code=${id}`, {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
            "Accept-Language": sessionStorage.getItem("lang"),
          },
        })
        setJobData(response.data[0])
      } catch (error: any) {
        Swal.fire({ title: "Error", text: error.response.data, icon: "error" })
      } finally {
        isLoading(false)
        window.scrollTo(0, 0)
      }
    }
    fetchJob()
    window.scrollTo(0, 0)
  }, [i18n.language, id])

  const handleGoBack = () => {
    navigate("/soyTalento")
  }

  const handleApply = () => {
    if (!authentication.isAuthenticated) {
      Swal.fire({
        title: "¡Ups!",
        text: "Debes iniciar sesión para poder aplicar a esta vacante",
        icon: "warning",
        confirmButtonText: "Iniciar sesión",
        confirmButtonColor: "#01A28B",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(setPressLogin("visible"))
        }
      })
      return
    }

    if (authentication.user.role !== "user") {
      Swal.fire({
        title: "Acceso denegado",
        text: "Esta acción es solo para talentos. Las empresas no pueden aplicar.",
        icon: "error",
        confirmButtonColor: "#F87171",
        confirmButtonText: "Aceptar",
      })
      return
    }
    if (!authentication.user.active) {
      Swal.fire({
        title: "Cuenta no verificada",
        text: "Debes confirmar tu correo electrónico para poder aplicar.",
        icon: "info",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3B82F6",
      })
      return
    }
    navigate(`application`)
    dispatch(setFormVisible(true))
  }

  const agregarClasesHTML = (str: string): string => {
    str = str.replace(/<ul>/g, '<ul className="flex flex-col list" style={{ "list-style": "initial" }} >')
    str = str.replace(/<li/g, '<li className="font-[600] text-size list-item lg:max-w-[70%] dark:text-white"')
    str = str.replace(/<p/g, '<p className="font-[600] text-size lg:max-w-[70%] dark:text-white"')

    return str
  }

  const regex = /<.*?>/g
  const removerEtiquetasHTML = (texto: string): boolean => {
    const textoSinEtiquetas = texto.replace(/<[^>]*>/g, "")
    return /[a-zA-Z0-9]/.test(textoSinEtiquetas)
  }

  // Extraer texto plano para los schemas
  const getPlainText = (htmlString: string): string => {
    if (!htmlString) return ""
    const div = document.createElement("div")
    div.innerHTML = htmlString
    return div.textContent || div.innerText || ""
  }

  // Convertir arrays de HTML a texto plano para los schemas
  const getPlainTextFromArray = (arr: string[] | undefined): string => {
    if (!arr || arr.length === 0) return ""
    return arr.map((item) => getPlainText(item)).join(", ")
  }

  // Generar el schema de JobPosting para Schema.org
  const generateJobPostingSchema = () => {
    if (!jobData || !jobData.title) return null

    // Fecha de publicación (si no está disponible, usar la fecha actual menos 7 días)
    const datePosted = jobData.createdAt || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()

    // Fecha de expiración (si no está disponible, usar la fecha actual más 30 días)
    const validThrough = jobData.expirationDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()

    // Construir el schema
    const jobPostingSchema: any = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: jobData.title,
      description: getPlainText(jobData.description || ""),
      datePosted: datePosted,
      validThrough: validThrough,
      employmentType: jobData.jobType || "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: jobData.company || "LinkIT",
        sameAs: "https://www.linkit-hr.com",
        logo: "https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: jobData.location || "Remoto",
        },
      },
      applicantLocationRequirements: {
        "@type": "Country",
        name: jobData.location || "Remoto",
      },
      jobLocationType: jobData.location === "Remoto" ? "TELECOMMUTE" : "ONSITE",
      identifier: {
        "@type": "PropertyValue",
        name: "LinkIT Job Code",
        value: id,
      },
    }

    // Añadir requisitos si están disponibles
    if (jobData.requirements && jobData.requirements.length > 0) {
      jobPostingSchema["skills"] = getPlainTextFromArray(jobData.requirements)
      jobPostingSchema["qualifications"] = getPlainTextFromArray(jobData.requirements)
    }

    // Añadir responsabilidades si están disponibles
    if (jobData.responsabilities && jobData.responsabilities.length > 0) {
      jobPostingSchema["responsibilities"] = getPlainTextFromArray(jobData.responsabilities)
    }

    // Añadir beneficios si están disponibles
    if (jobData.benefits && jobData.benefits.length > 0) {
      jobPostingSchema["jobBenefits"] = getPlainTextFromArray(jobData.benefits)
    }
    return jobPostingSchema
  }

  return (
    <>
      {/* Schema.org implementation */}
      <Helmet>
        <title>{jobData.title ? `${jobData.title} | LinkIT` : "Oferta de trabajo | LinkIT"}</title>
        <meta
          name="description"
          content={
            jobData.description
              ? getPlainText(jobData.description).substring(0, 160)
              : "Descubre esta oportunidad laboral en el sector IT con LinkIT. Aplica ahora y da el siguiente paso en tu carrera profesional."
          }
        />
        {jobData.title && <script type="application/ld+json">{JSON.stringify(generateJobPostingSchema())}</script>}
      </Helmet>

      <div className="">
        {loading ? <Loading text={t("Cargando información")} /> : null}
        <article className="font-montserrat text-linkIt-400 dark:bg-linkIt-200 flex flex-col relative p-[7%] pt-[17vh] lg:pt-[23vh]">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <BreadcrumbsWithSchema
              items={[
                { label: isSpanish ? "Inicio" : "Home", path: "/" },
                { label: isSpanish ? "Para Talento" : "For Talent", path: "/soyTalento" },
                { label: isSpanish ? "Ofertas de trabajo" : "Job Offers", path: "/soyTalento#vacantes" },
                {
                  label: jobData.title || (isSpanish ? "Oferta de trabajo" : "Job Offer"),
                  path: `/soyTalento/Joboffer/${id}/${slug}`,
                  active: true,
                },
              ]}
            />
          </div>

          <div className="lg:flex grid relative mb-[10%] w-full">
            <div className="w-full">
              <header className="mb-[3%]">
                <motion.button
                  className="flex flex-row gap-[.5rem] items-center content-center mb-[5%] font-bold text-size text-black dark:text-white"
                  onClick={handleGoBack}
                  whileHover={{ cursor: "pointer", scale: 1.1 }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <img src={isDarkMode ? whiteArrow : blackArrow} alt="back" className="w-[1.5rem]" />
                  {language === "en" ? "Go back" : "Volver"}
                </motion.button>
                <h3 className="text-black border-[2px] border-linkIt-300 dark:border-linkIt-200 dark:bg-white dark: inline-flex px-2 py-1 text-size font-semibold rounded-[7px] mb-[3%]">
                  CODE: {id}
                </h3>
                <h1 className="text-black dark:text-white font-bold titles-size" itemProp="title">
                  {jobData.title}
                </h1>

                {/* Job metadata */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {jobData.location && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {jobData.location}
                    </span>
                  )}
                  {jobData.jobType && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                      </svg>
                      {jobData.jobType}
                    </span>
                  )}
                </div>
              </header>
              <section className="mb-[3%]" itemProp="description">
                <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Descripción")}</h3>
                <p className="font-[600] text-size lg:max-w-[70%] dark:text-white">
                  {jobData.description && HTMLReactParser(jobData.description)}
                </p>
              </section>
              {jobData?.aboutUs && (
                <section className="mb-[3%]">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Acerca de nosotros")}</h3>
                  <p className="font-[600] text-size lg:max-w-[70%] dark:text-white">
                    {jobData.aboutUs && HTMLReactParser(jobData.aboutUs)}
                  </p>
                </section>
              )}
              {jobData?.aboutClient && (
                <section className="mb-[3%]">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Acerca de nuestro cliente")}</h3>
                  {jobData.aboutClient && HTMLReactParser(agregarClasesHTML(jobData.aboutClient))}
                </section>
              )}
              {jobData.responsabilities?.length > 0 &&
              jobData.responsabilities?.length === 1 &&
              regex.test(jobData.responsabilities[0]) ? (
                <section className="mb-[3%]" itemProp="responsibilities">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Responsabilidades")}</h3>
                  {HTMLReactParser(agregarClasesHTML(jobData.responsabilities[0]))}
                </section>
              ) : (
                <section className="mb-[3%]" itemProp="responsibilities">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Responsabilidades")}</h3>
                  <ul className="flex flex-col list">
                    {jobData.responsabilities?.map((responsability, index) => {
                      return (
                        <li key={index} className="font-[600] text-size list-item lg:max-w-[70%] dark:text-white">
                          {responsability}
                        </li>
                      )
                    })}
                  </ul>
                </section>
              )}
              {jobData.requirements && jobData.requirements.length > 0 && (
                <section className="mb-[3%]" itemProp="qualifications">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Requerimientos")}</h3>
                  {jobData.requirements.length === 1 && regex.test(jobData.requirements[0]) ? (
                    HTMLReactParser(agregarClasesHTML(jobData.requirements[0]))
                  ) : (
                    <ul className="flex flex-col">
                      {jobData.requirements.map((requirement, index) => (
                        <li key={index} className="font-[600] text-size list-item lg:max-w-[70%] dark:text-white">
                          {HTMLReactParser(requirement)}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              )}
              {jobData.niceToHave?.length > 0 &&
                jobData.niceToHave?.length === 1 &&
                regex.test(jobData.niceToHave[0]) &&
                removerEtiquetasHTML(jobData.niceToHave[0]) && (
                  <section className="mb-[3%]">
                    <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Deseable")}</h3>
                    {HTMLReactParser(agregarClasesHTML(jobData.niceToHave[0]))}
                  </section>
                )}{" "}
              {jobData.niceToHave?.length > 0 &&
                !regex.test(jobData.niceToHave[0]) &&
                /[a-zA-Z0-9]/.test(jobData.niceToHave[0]) && (
                  <section className="mb-[3%]">
                    <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Deseable")}</h3>
                    <ul className="flex flex-col list">
                      {jobData.niceToHave?.map((desirable, index) => {
                        return (
                          <li key={index} className="font-[600] text-size lg:max-w-[70%] dark:text-white list-item">
                            {desirable}
                          </li>
                        )
                      })}
                    </ul>
                  </section>
                )}
              {jobData.benefits && jobData.benefits.length > 0 && (
                <section className="mb-[3%]" itemProp="jobBenefits">
                  <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Beneficios")}</h3>
                  {jobData.benefits.length === 1 && regex.test(jobData.benefits[0]) ? (
                    HTMLReactParser(agregarClasesHTML(jobData.benefits[0]))
                  ) : (
                    <ul className="flex flex-col">
                      {jobData.benefits.map((benefit, index) => (
                        <li key={index} className="font-[600] text-size list-item lg:max-w-[70%] dark:text-white">
                          {HTMLReactParser(benefit)}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              )}
              {jobData.benefits?.length > 0 &&
                !regex.test(jobData.benefits[0]) &&
                /[a-zA-Z0-9]/.test(jobData.benefits[0]) && (
                  <section className="mb-[3%]" itemProp="jobBenefits">
                    <h3 className="font-bold text-linkIt-300 subtitles-size mb-[1%]">{t("Beneficios")}</h3>
                    <ul className="flex flex-col list">
                      {jobData.benefits?.map((benefit, index) => {
                        return (
                          <li key={index} className="font-[600] text-size lg:max-w-[70%] dark:text-white list-item">
                            {benefit}
                          </li>
                        )
                      })}
                    </ul>
                  </section>
                )}
              <section className="mt-[10%] lg:flex grid content-center items-center justify-items-center lg:max-w-[70%] dark:text-white">
                <img
                  src="/Vectores/complete-form.svg"
                  alt="complete-form"
                  className="w-[30px] ssm:w-[40px] lg:w-1/16 mr-2 lg:mr-4 hidden lg:block"
                />
                <h3 className="font-bold text-black dark:text-white subtitles-size row-start-1 text-center lg:text-start">
                  {t("Para aplicar por favor completa")} {t("el siguiente formulario")}
                </h3>
              </section>
            </div>

            <section className="lg:w-[50%] flex flex-col justify-items-center items-center gap-[1rem]">
              <img
                src={isDarkMode ? WhiteLogo : BlueLogo}
                alt="linkIt-logo"
                className="w-full sticky top-[30%] mb-[20%] hidden lg:block"
              />
              <button
                className="inline-flex relative lg:sticky lg:top-[93%] justify-self-center border border-linkIt-300 text-white bg-linkIt-300 rounded-[7px] p-1 xs:p-1.5 sm:p-2 2xl:p-3 px-1 xs:px-2 text-size whitespace-nowrap hover:bg-linkIt-200 hover:border-linkIt-200 transition-all duration-300 ease-in-out font-bold dark:hover:border-white dark:hover:bg-white dark:hover:text-linkIt-300 cursor-pointer font-manrope"
                onClick={() => handleApply()}
              >
                {t("Aplicar a esta vacante")}
              </button>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-8 mb-12">
            <CallToAction
              variant="compact"
              customTitle={isSpanish ? "¿Buscas otras oportunidades?" : "Looking for other opportunities?"}
              buttonStyle="gradient"
              externalLinks={{
                findJob: "/soyTalento#vacantes",
                resources: "/recursos",
              }}
            />
          </div>
        </article>
        <Newsletter />
      </div>
    </>
  )
}

export default JobDescription


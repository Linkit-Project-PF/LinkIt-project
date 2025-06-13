import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import CallToAction from "../../../../../Utils/Buttons/CTA/callToAction"
import BreadcrumbsWithSchema from "../../../../../Utils/Breadcrumbs/Breadcrumbs"
import { useParams } from "react-router-dom"

interface EventsInfoProps {
  videoUrl: string
  title: string
  description: string
  category: string
  image?: string
  createdDate?: string
  createdBy?: string
}

export function EventsInfo({ videoUrl, title, description, category, image, createdDate, createdBy }: EventsInfoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Extraer ID del video de la URL
  const getVideoId = (url: string) => {
    try {
      // Manejar diferentes formatos de URL de YouTube
      const urlObj = new URL(url)

      // Para videos normales
      if (urlObj.searchParams.has("v")) {
        return urlObj.searchParams.get("v")
      }

      // Para URLs acortadas (youtu.be)
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1)
      }

      // Para transmisiones en vivo
      if (url.includes("/live/")) {
        const parts = urlObj.pathname.split("/")
        const liveIndex = parts.indexOf("live")
        if (liveIndex !== -1 && parts[liveIndex + 1]) {
          return parts[liveIndex + 1]
        }
      }

      // Para URLs de embed
      if (urlObj.pathname.startsWith("/embed/")) {
        return urlObj.pathname.split("/")[2]
      }

      throw new Error(`No se pudo extraer ID de:${url}` )
    } catch (error) {
      console.error("Error al procesar URL:", error)
      return null
    }
  }

  const videoId = getVideoId(videoUrl)

  // Formatear la fecha para mostrarla de manera amigable
  const formatDate = (dateString?: string) => {
    if (!dateString) return ""

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("es-ES", options)
  }

  // Generar el esquema JSON-LD para Schema.org
  const generateSchemaMarkup = () => {
    // Determinar si es un video de YouTube
    const isYoutubeVideo = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")

    if (isYoutubeVideo && videoId) {
      // Esquema para videos de YouTube
      const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: title,
        description: description,
        thumbnailUrl: image
          ? `https://res.cloudinary.com/dquhriqz3/image/upload/${image}`
          : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        uploadDate: createdDate || new Date().toISOString(),
        contentUrl: videoUrl,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        publisher: {
          "@type": "Organization",
          name: "LinkIt",
          logo: {
            "@type": "ImageObject",
            url: "https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg",
          },
        },
        author: {
          "@type": "Person",
          name: createdBy || "LinkIt",
        },
        about: category,
      }

      return JSON.stringify(videoSchema)
    } else {
      // Esquema para eventos (no YouTube)
      const eventSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: title,
        description: description,
        image: image ? `https://res.cloudinary.com/dquhriqz3/image/upload/${image}` : "",
        startDate: createdDate || new Date().toISOString(),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        location: {
          "@type": "VirtualLocation",
          url: videoUrl,
        },
        organizer: {
          "@type": "Organization",
          name: "LinkIt",
          url: "https://www.linkit-hr.com",
        },
        performer: {
          "@type": "Person",
          name: createdBy || "LinkIt",
        },
        about: category,
      }

      return JSON.stringify(eventSchema)
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-50 dark:bg-gray-900 font-montserrat">
        {/* Logo animado */}
        <motion.img
          src="/Linkit-logo/linkit-logo-blue.svg"
          alt="Linkit Logo"
          className="w-24 h-24"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "linear" }}
        />

        {/* Texto animado */}
        <motion.h1
          className="text-lg font-semibold text-gray-700 dark:text-gray-300"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        >
          Cargando video...
        </motion.h1>

        {/* Barra de progreso */}
        <div className="w-40 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    )
  }

  if (!videoId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h1 className="text-red-600 dark:text-red-400 font-semibold">Error: URL de video inválida</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              No se pudo extraer el ID del video de la URL proporcionada.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Implementación de Schema.org con Helmet */}
      <Helmet>
        <title>{title} | LinkIt</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{generateSchemaMarkup()}</script>
      </Helmet>

      <div className="min-h-screen w-full overflow-x-hidden dark:bg-linkIt-200">
        {/* Contenedor para breadcrumbs */}
        <div className="w-full pt-[17vh] lg:pt-[23vh]">
          <div className="container mx-auto px-4 sm:px-6">
            <BreadcrumbsWithSchema
              items={[
                { label: "Recursos", path: "/recursos" },
                { label: "Eventos", path: "/recursos?type=event" },
                {
                  label: title || "Evento",
                  path: `/events/${slug}`,
                  active: true,
                },
              ]}
            />
          </div>
        </div>

        {/* Contenedor principal */}
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 font-montserrat">
              <div className="space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-primary/10 text-primary">
                    {category}
                  </span>
                </div>

                {/* Mostrar autor y fecha si están disponibles */}
                {(createdBy || createdDate) && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    {createdBy && <span>Por {createdBy}</span>}
                    {createdBy && createdDate && <span className="mx-2">•</span>}
                    {createdDate && <time dateTime={createdDate}>{formatDate(createdDate)}</time>}
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </div>

              {/* Video responsivo */}
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Call to Action */}
              <div className="mt-12">
                <CallToAction variant="default" customTitle="¿Te interesó este evento?" buttonStyle="filled" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
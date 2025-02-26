import { useEffect, useState } from "react"
import {motion} from "framer-motion"

interface EventsInfoProps {
  videoUrl: string
  title: string
  description: string
  category: string
}

export function EventsInfo({ videoUrl, title, description, category }: EventsInfoProps) {
  const [isLoading, setIsLoading] = useState(true)

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

      console.log("No se pudo extraer ID de:", url)
      return null
    } catch (error) {
      console.error("Error al procesar URL:", error)
      return null
    }
  }
  
  
  const videoId = getVideoId(videoUrl)

  ///linkit-logo/linkit-logo-blue.svg
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-50">
      {/* Logo animado */}
      <motion.img
        src="/Linkit-logo/linkit-logo-blue.svg"
        alt="Linkit Logo"
        className="w-24 h-24"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      {/* Texto animado */}
      <motion.h1
        className="text-lg font-semibold text-gray-700"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        Cargando video...
      </motion.h1>

      {/* Barra de progreso */}
      <div className="w-40 h-2 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
    )
  }

  if (!videoId) {
    return (
      <div className="space-y-4">
        <h1>Error: URL de video inválida</h1>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="space-y-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-primary/10 text-primary">
          {category}
        </span>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}


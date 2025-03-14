import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useTranslation } from "react-i18next"
import testimoniosData from "../../Utils/testimonios.json"

// Traducciones específicas para este componente
const translations = {
  es: {
    title: "Lo que dicen nuestros clientes",
    rating: "Calificación",
    previousPage: "Página anterior",
    nextPage: "Página siguiente",
    goToPage: "Ir a la página",
    seeMoreButton: "Conoce más casos de éxito",
  },
  en: {
    title: "What our clients say",
    rating: "Rating",
    previousPage: "Previous page",
    nextPage: "Next page",
    goToPage: "Go to page",
    seeMoreButton: "See more success stories",
  },
}

const Testimonials = () => {
  const { i18n } = useTranslation()
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimoniosData.length / testimonialsPerPage)

  // Determinar el idioma actual (con fallback a español)
  const currentLang = i18n.language.startsWith("en") ? "en" : "es"

  // Función para obtener traducciones
  const t = (key: keyof typeof translations.es, params?: Record<string, any>) => {
    const translation = translations[currentLang][key]
    if (params) {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue.toString()),
        translation,
      )
    }
    return translation
  }

  // Reiniciar la página actual cuando cambia el idioma
  useEffect(() => {
    setCurrentPage(0)
  }, [i18n.language])

  // Obtener los testimonios para la página actual
  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage
    const end = start + testimonialsPerPage
    return testimoniosData.slice(start, end)
  }

  // Navegar a la página anterior
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  // Navegar a la página siguiente
  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  // Determinar si el idioma actual es inglés
  const isEnglish = currentLang === "en"

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#173951]">{t("title")}</h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getCurrentTestimonials().map((testimonio, index) => (
              <motion.div
                key={testimonio.id}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-xl text-[#173951]">
                      {isEnglish ? testimonio.titleEn : testimonio.titulo}
                    </h3>
                    <img src={testimonio.rating || "/placeholder.svg"} alt={t("rating")} className="h-6 mt-2" />
                  </div>
                  <Quote className="text-[#4ECDC4] w-8 h-8 opacity-50" />
                </div>

                <p className="text-gray-700 mb-6 flex-grow">
                  "{isEnglish ? testimonio.testimonial : testimonio.testimonio}"
                </p>

                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4ECDC4] flex-shrink-0">
                    <img
                      src={testimonio.foto || "/placeholder.svg"}
                      alt={testimonio.nombre}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback para imágenes que no cargan
                        ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=60&width=60"
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-[#173951]">{testimonio.nombre}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controles de navegación */}
          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-[#4ECDC4] hover:text-white hover:border-[#4ECDC4] transition-colors"
              aria-label={t("previousPage")}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full ${currentPage === index ? "bg-[#4ECDC4]" : "bg-gray-300"}`}
                  aria-label={`${t("goToPage")} ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-[#4ECDC4] hover:text-white hover:border-[#4ECDC4] transition-colors"
              aria-label={t("nextPage")}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


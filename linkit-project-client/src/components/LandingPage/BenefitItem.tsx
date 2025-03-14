import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useTranslation } from "react-i18next"

// Traducciones específicas para este componente
const translations = {
  es: {
    benefits: {
      timeEfficiency: {
        title: "Eficientiza tu tiempo",
        description: "Reduce el tiempo de contratación hasta en un 60%",
      },
      riskFree: {
        title: "Contrata sin riesgos",
        description: "Garantía de reemplazo de 3 meses",
      },
      resourceOptimization: {
        title: "Optimiza tus recursos",
        description: "Ahorra hasta un 40% en costos de contratación",
      },
    },
  },
  en: {
    benefits: {
      timeEfficiency: {
        title: "Optimize your time",
        description: "Reduce hiring time by up to 60%",
      },
      riskFree: {
        title: "Risk-free hiring",
        description: "3-month replacement guarantee",
      },
      resourceOptimization: {
        title: "Optimize your resources",
        description: "Save up to 40% on hiring costs",
      },
    },
  },
}

interface BenefitItemProps {
  icon: ReactNode
  text: string
  description: string
  translationKey?: string
}

const BenefitItem = ({ icon, text, description, translationKey }: BenefitItemProps) => {
  const { i18n } = useTranslation()

  // Determinar el idioma actual (con fallback a español)
  const currentLang = i18n.language.startsWith("en") ? "en" : "es"

  // Función para obtener traducciones
  const t = (key: string) => {
    // Navegar por el objeto de traducciones usando la ruta de la clave
    const keys = key.split(".")
    let translation: any = translations[currentLang]

    for (const k of keys) {
      if (translation[k] === undefined) return null
      translation = translation[k]
    }

    return translation
  }

  // Si hay una clave de traducción, usar los textos traducidos
  let displayText = text
  let displayDescription = description

  if (translationKey) {
    const translatedContent = t(translationKey)
    if (translatedContent) {
      displayText = translatedContent.title
      displayDescription = translatedContent.description
    }
  }

  return (
    <motion.div
      className="flex items-start gap-4 text-white"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ x: 5 }}
    >
      <div className="bg-[#4ECDC4] p-3 rounded-lg shadow-md flex items-center justify-center">{icon}</div>
      <div>
        <h3 className="text-xl font-bold">{displayText}</h3>
        <p className="text-gray-200 text-sm">{displayDescription}</p>
      </div>
    </motion.div>
  )
}

export default BenefitItem


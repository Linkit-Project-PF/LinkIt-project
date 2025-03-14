import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

// Traducciones específicas para este componente
const translations = {
  es: {
    nombre: "Nombre",
    apellido: "Apellido",
    correo: "Correo corporativo",
    telefono: "Número de teléfono",
    empresa: "Empresa",
    pais: "País de la empresa",
    buscandoTalento: "¿Estás en búsqueda de talento IT?",
    perfilBuscando: "¿Qué perfil estás buscando?",
    terminos: "He leído y acepto los",
    terminosLink: "Términos y condiciones",
    privacidadLink: "Política de privacidad",
    y: "y la",
    empezarAhora: "Empezar ahora",
    placeholder: {
      nombre: "Ingresar nombre",
      apellido: "Apellido",
      correo: "ejemplo@mail.com",
      telefono: "+54 000 000000",
      empresa: "Ingresa nombre de empresa",
      pais: "Ingresa el país",
      seleccionar: "Seleccionar",
    },
    opciones: {
      actualmente: "Sí, actualmente",
      en1mes: "En 1 mes",
      en2meses: "En 2 meses",
      en3meses: "En 3 meses o más",
    },
    perfiles: {
      frontend: "Frontend Developer",
      backend: "Backend Developer",
      fullstack: "Fullstack Developer",
      devops: "DevOps Engineer",
      qa: "QA Engineer",
      mobile: "Mobile Developer",
      data: "Data Scientist/Engineer",
      ui: "UI/UX Designer",
    },
  },
  en: {
    nombre: "First Name",
    apellido: "Last Name",
    correo: "Corporate Email",
    telefono: "Phone Number",
    empresa: "Company",
    pais: "Company Country",
    buscandoTalento: "Are you looking for IT talent?",
    perfilBuscando: "What profile are you looking for?",
    terminos: "I have read and accept the",
    terminosLink: "Terms and Conditions",
    privacidadLink: "Privacy Policy",
    y: "and the",
    empezarAhora: "Get Started Now",
    placeholder: {
      nombre: "Enter first name",
      apellido: "Last name",
      correo: "example@mail.com",
      telefono: "+54 000 000000",
      empresa: "Enter company name",
      pais: "Enter country",
      seleccionar: "Select",
    },
    opciones: {
      actualmente: "Yes, currently",
      en1mes: "In 1 month",
      en2meses: "In 2 months",
      en3meses: "In 3 months or more",
    },
    perfiles: {
      frontend: "Frontend Developer",
      backend: "Backend Developer",
      fullstack: "Fullstack Developer",
      devops: "DevOps Engineer",
      qa: "QA Engineer",
      mobile: "Mobile Developer",
      data: "Data Scientist/Engineer",
      ui: "UI/UX Designer",
    },
  },
}

interface FormData {
  nombre: string
  apellido: string
  correo: string
  telefono: string
  empresa: string
  pais: string
  buscandoTalento: "actualmente" | "en1mes" | "en2meses" | "en3meses"
  perfil: string
  aceptaTerminos: boolean
}

interface Technology {
  name: string
}

const ContactForm = () => {
  const { i18n } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    empresa: "",
    pais: "",
    buscandoTalento: "actualmente",
    perfil: "",
    aceptaTerminos: false,
  })

  // Determinar el idioma actual (con fallback a español)
  const currentLang = i18n.language.startsWith("en") ? "en" : "es"

  // Función para obtener traducciones
  const t = (key: string, params?: Record<string, any>) => {
    // Navegar por el objeto de traducciones usando la ruta de la clave
    const keys = key.split(".")
    let translation: any = translations[currentLang]

    for (const k of keys) {
      if (translation[k] === undefined) return key
      translation = translation[k]
    }

    if (typeof translation !== "string") return key

    if (params) {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue.toString()),
        translation,
      )
    }
    return translation
  }

  // Obtener las tecnologías del stack desde Redux
  const allStackTechnologies = useSelector((state: any) => (state.resources?.stackTechnologies as Technology[]) || [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica para enviar el formulario
  }

  // Opciones de perfil de respaldo en caso de que no haya tecnologías disponibles
  const fallbackProfiles = [
    { name: "Frontend Developer" },
    { name: "Backend Developer" },
    { name: "Fullstack Developer" },
    { name: "DevOps Engineer" },
    { name: "QA Engineer" },
    { name: "Mobile Developer" },
    { name: "Data Scientist/Engineer" },
    { name: "UI/UX Designer" },
  ]

  // Usar las tecnologías del stack si están disponibles, de lo contrario usar las opciones de respaldo
  const profileOptions =
    allStackTechnologies && allStackTechnologies.length > 0 ? allStackTechnologies : fallbackProfiles

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 font-montserrat">
      {/* Nombre */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {t("nombre")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder={t("placeholder.nombre")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] text-sm transition-all"
          required
        />
      </div>

      {/* Apellido */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {t("apellido")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder={t("placeholder.apellido")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] text-sm transition-all"
          required
        />
      </div>

      {/* Correo corporativo */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {t("correo")} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder={t("placeholder.correo")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] text-sm transition-all"
          required
        />
      </div>

      {/* Número de teléfono */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {t("telefono")} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder={t("placeholder.telefono")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] text-sm transition-all"
          required
        />
      </div>

      {/* Empresa */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {t("empresa")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          placeholder={t("placeholder.empresa")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] text-sm transition-all"
          required
        />
      </div>

      {/* País de la empresa */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {t("pais")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          placeholder={t("placeholder.pais")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] text-sm transition-all"
          required
        />
      </div>

      {/* ¿Estás en búsqueda de talento IT? */}
      <div className="space-y-2 col-span-1 md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          {t("buscandoTalento")} <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3 text-sm text-black">
          <div className="flex items-center bg-gray-50 p-2 rounded-md border border-gray-200 hover:border-[#4ECDC4] transition-colors">
            <input
              type="radio"
              id="actualmente"
              name="buscandoTalento"
              value="actualmente"
              checked={formData.buscandoTalento === "actualmente"}
              onChange={handleChange}
              className="w-4 h-4 text-[#4ECDC4] focus:ring-[#4ECDC4]"
            />
            <label htmlFor="actualmente" className="ml-2 text-sm font-medium">
              {t("opciones.actualmente")}
            </label>
          </div>
          <div className="flex items-center bg-gray-50 p-2 rounded-md border border-gray-200 hover:border-[#4ECDC4] transition-colors">
            <input
              type="radio"
              id="en1mes"
              name="buscandoTalento"
              value="en1mes"
              checked={formData.buscandoTalento === "en1mes"}
              onChange={handleChange}
              className="w-4 h-4 text-[#4ECDC4] focus:ring-[#4ECDC4]"
            />
            <label htmlFor="en1mes" className="ml-2 text-sm font-medium">
              {t("opciones.en1mes")}
            </label>
          </div>
          <div className="flex items-center bg-gray-50 p-2 rounded-md border border-gray-200 hover:border-[#4ECDC4] transition-colors">
            <input
              type="radio"
              id="en2meses"
              name="buscandoTalento"
              value="en2meses"
              checked={formData.buscandoTalento === "en2meses"}
              onChange={handleChange}
              className="w-4 h-4 text-[#4ECDC4] focus:ring-[#4ECDC4]"
            />
            <label htmlFor="en2meses" className="ml-2 text-sm font-medium">
              {t("opciones.en2meses")}
            </label>
          </div>
          <div className="flex items-center bg-gray-50 p-2 rounded-md border border-gray-200 hover:border-[#4ECDC4] transition-colors">
            <input
              type="radio"
              id="en3meses"
              name="buscandoTalento"
              value="en3meses"
              checked={formData.buscandoTalento === "en3meses"}
              onChange={handleChange}
              className="w-4 h-4 text-[#4ECDC4] focus:ring-[#4ECDC4]"
            />
            <label htmlFor="en3meses" className="ml-2 text-sm font-medium">
              {t("opciones.en3meses")}
            </label>
          </div>
        </div>
      </div>

      {/* ¿Qué perfil estás buscando? - Ahora usando allStackTechnologies */}
      <div className="space-y-1 col-span-1 md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          {t("perfilBuscando")} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            name="perfil"
            value={formData.perfil}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] appearance-none bg-white text-sm transition-all text-black"
            required
          >
            <option value="" disabled>
              {t("placeholder.seleccionar")}
            </option>
            {profileOptions.map((tech, index) => (
              <option key={index} value={tech.name}>
                {tech.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          </div>
        </div>
      </div>

      {/* Términos y condiciones */}
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-start bg-gray-50 p-3 rounded-md border border-gray-200">
          <input
            type="checkbox"
            id="terminos"
            name="aceptaTerminos"
            checked={formData.aceptaTerminos}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#4ECDC4] focus:ring-[#4ECDC4] rounded"
            required
          />
          <label htmlFor="terminos" className="ml-2 text-sm text-gray-700">
            {t("terminos")}{" "}
            <span className="text-[#4ECDC4] hover:underline cursor-pointer font-medium">{t("terminosLink")}</span>{" "}
            {t("y")}{" "}
            <span className="text-[#4ECDC4] hover:underline cursor-pointer font-medium">{t("privacidadLink")}</span>{" "}
            <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      {/* Botón de envío */}
      <div className="col-span-1 md:col-span-2 mt-2">
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-[#4ECDC4] to-[#2AB7CA] hover:from-[#2AB7CA] hover:to-[#4ECDC4] text-white font-bold py-3 px-6 rounded-md transition-all w-full flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {t("empezarAhora")}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </form>
  )
}

export default ContactForm


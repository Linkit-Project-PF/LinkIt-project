import { useState } from "react";
import {motion} from "framer-motion"


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
  
  const ContactForm = () => {
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
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
  
    return (
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 font-montserrat">
        {/* Nombre */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresar nombre"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
            required
          />
        </div>
  
        {/* Apellido */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Apellido <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
            required
          />
        </div>
  
        {/* Correo corporativo */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Correo corporativo <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="ejemplo@mail.com"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
            required
          />
        </div>
  
        {/* Número de teléfono */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Número de teléfono <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <div className="w-1/4 mr-2">
              <select className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white text-sm">
                <option>+54</option>
                <option>+1</option>
                <option>+34</option>
                <option>+52</option>
              </select>
            </div>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="999 9999"
              className="w-3/4 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
              required
            />
          </div>
        </div>
  
        {/* Empresa */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            Empresa <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Ingresa nombre de empresa"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
            required
          />
        </div>
  
        {/* País de la empresa */}
        <div className="space-y-1">
          <label className="block text-sm font-medium">
            País de la empresa <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 appearance-none bg-white text-sm"
              required
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="argentina">Argentina</option>
              <option value="mexico">México</option>
              <option value="colombia">Colombia</option>
              <option value="espana">España</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
  
        {/* ¿Estás en búsqueda de talento IT? */}
        <div className="space-y-1 col-span-1 md:col-span-2">
          <label className="block text-sm font-medium">
            ¿Estás en búsqueda de talento IT? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <input
                type="radio"
                id="actualmente"
                name="buscandoTalento"
                value="actualmente"
                checked={formData.buscandoTalento === "actualmente"}
                onChange={handleChange}
                className="w-3 h-3 text-teal-500 focus:ring-teal-500"
              />
              <label htmlFor="actualmente" className="ml-2 text-sm">
                Sí, actualmente
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="en1mes"
                name="buscandoTalento"
                value="en1mes"
                checked={formData.buscandoTalento === "en1mes"}
                onChange={handleChange}
                className="w-3 h-3 text-teal-500 focus:ring-teal-500"
              />
              <label htmlFor="en1mes" className="ml-2 text-sm">
                En 1 mes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="en2meses"
                name="buscandoTalento"
                value="en2meses"
                checked={formData.buscandoTalento === "en2meses"}
                onChange={handleChange}
                className="w-3 h-3 text-teal-500 focus:ring-teal-500"
              />
              <label htmlFor="en2meses" className="ml-2 text-sm">
                En 2 meses
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="en3meses"
                name="buscandoTalento"
                value="en3meses"
                checked={formData.buscandoTalento === "en3meses"}
                onChange={handleChange}
                className="w-3 h-3 text-teal-500 focus:ring-teal-500"
              />
              <label htmlFor="en3meses" className="ml-2 text-sm">
                En 3 meses o más
              </label>
            </div>
          </div>
        </div>
  
        {/* ¿Qué perfil estás buscando? */}
        <div className="space-y-1 col-span-1 md:col-span-2">
          <label className="block text-sm font-medium">
            ¿Qué perfil estás buscando? <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              name="perfil"
              value={formData.perfil}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 appearance-none bg-white text-sm"
              required
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
              <option value="devops">DevOps Engineer</option>
              <option value="qa">QA Engineer</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
  
        {/* Términos y condiciones */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terminos"
              name="aceptaTerminos"
              checked={formData.aceptaTerminos}
              onChange={handleChange}
              className="mt-1 w-3 h-3 text-teal-500 focus:ring-teal-500"
              required
            />
            <label htmlFor="terminos" className="ml-2 text-xs">
              He leído y acepto los{" "}
              <span className="text-teal-500 hover:underline cursor-pointer">Términos y condiciones</span> y la{" "}
              <span className="text-teal-500 hover:underline cursor-pointer">Política de privacidad</span>{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>
        </div>
  
        {/* Botón de envío */}
        <div className="col-span-1 md:col-span-2 mt-2">
          <motion.button
            type="submit"
            className="bg-linkIt-300 hover:bg-linkIt-200 text-white font-medium py-2 px-6 rounded-md transition-colors w-full sm:w-auto text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Empezar a hora
          </motion.button>
        </div>
      </form>
    )
  }
  
  export default ContactForm
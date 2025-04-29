import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import validations from "./validations";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  service: string[];
  email: string;
  web: string;
  message: string;
}

export default function InicioForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    service: [] as string[],
    email: "",
    web: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    company: "",
    service: "",
    email: "",
    web: "",
    message: "",
  });

  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

    const fieldErrors = validations({
      ...formData,
      [name]: value,
    });

    if (isCheckbox) {
      if (checked) {
        setFormData((prevContacts) => {
          if (!prevContacts.service.includes(value)) {
            return {
              ...prevContacts,
              service: [...prevContacts.service, value],
            };
          } else {
            return prevContacts;
          }
        });
      } else {
        setFormData((prevContacts) => ({
          ...prevContacts,
          service: prevContacts.service.filter((service) => service !== value),
        }));
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: fieldErrors[name as keyof typeof fieldErrors],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar formulario antes de enviar
    const newErrors = {
      firstName:
        formData.firstName.trim() === "" ? t("Este campo es obligatorio") : "",
      lastName:
        formData.lastName.trim() === "" ? t("Este campo es obligatorio") : "",
      company:
        formData.company.trim() === "" ? t("Este campo es obligatorio") : "",
      service:
        formData.service.length === 0 ? t("Este campo es obligatorio") : "",
      email: formData.email.trim() === "" ? t("Este campo es obligatorio") : "",
      web: formData.web.trim() === "" ? t("Este campo es obligatorio") : "",
      message:
        formData.message.trim() === "" ? t("Este campo es obligatorio") : "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Formulario enviado:", formData);
      // Aquí puedes manejar el envío del formulario
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        service: [],
        email: "",
        web: "",
        message: "",
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-linkIt-300 to-linkIt-200 font-montserrat text-white py-6 px-6 md:px-8 lg:px-12 shadow-2xl dark:from-linkIt-400 dark:to-linkIt-300 h-full flex items-center justify-center">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-2xl">
        <h2 className="font-bold text-2xl xs:text-2xl md:text-2xl xl:text-4xl leading-tight font-manrope mb-6 text-center">
          {t("Contáctanos para más información")}
        </h2>
        <form
          className="bg-white/10 backdrop-blur-sm p-6 md:p-6 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Nombre */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <motion.input
                className={`w-full bg-transparent border-b-2 rounded-lg ${
                  errors.firstName
                    ? "border-red-400"
                    : "border-white/50 focus:border-white"
                } px-3 py-2 text-white placeholder-white/60 focus:outline-none transition-all duration-300`}
                type="text"
                placeholder={t("Nombre")}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-300 text-xs mt-1"
                >
                  {errors.firstName}
                </motion.p>
              )}
            </div>
            <div className="relative">
              <motion.input
                className={`w-full bg-transparent border-b-2 rounded-lg ${
                  errors.lastName
                    ? "border-red-400"
                    : "border-white/50 focus:border-white"
                } px-3 py-2 text-white placeholder-white/60 focus:outline-none transition-all duration-300`}
                type="text"
                placeholder={t("Apellido")}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-300 text-xs mt-1"
                >
                  {errors.lastName}
                </motion.p>
              )}
            </div>
          </div>

          {/* Empresa */}
          <div className="relative">
            <motion.input
              className={`w-full bg-transparent border-b-2 rounded-lg ${
                errors.company
                  ? "border-red-400"
                  : "border-white/50 focus:border-white"
              } px-3 py-2 text-white placeholder-white/60 focus:outline-none transition-all duration-300`}
              type="text"
              placeholder={t("Empresa")}
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-xs mt-1"
              >
                {errors.company}
              </motion.p>
            )}
          </div>

          {/* Servicio */}
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`w-full bg-transparent border-2 rounded-lg ${
                errors.service
                  ? "border-red-400"
                  : "border-white/50 focus:border-white"
              } px-3 py-2 text-white flex justify-between items-center cursor-pointer transition-all duration-300`}
            >
              <span
                className={
                  formData.service.length ? "text-white" : "text-white/60"
                }
              >
                {formData.service.length
                  ? `${t(formData.service[0])} ${
                      formData.service.length > 1
                        ? `+${formData.service.length - 1}`
                        : ""
                    }`
                  : t("¿Qué servicio te interesa?")}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg overflow-hidden"
              >
                <div className="p-2 space-y-1">
                  {[
                    "Gestión y beneficios",
                    "Reclutamiento y selección",
                    "Contratación",
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        name={service}
                        value={service}
                        checked={formData.service.includes(service)}
                        onChange={handleChange}
                        className="w-4 h-4 text-linkIt-300 border-gray-300 rounded focus:ring-linkIt-300"
                      />
                      <span className="ml-2 text-gray-800 font-medium">
                        {t(service)}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Web */}
          <div className="relative">
            <motion.input
              className={`w-full bg-transparent border-b-2 rounded-lg ${
                errors.web
                  ? "border-red-400"
                  : "border-white/50 focus:border-white"
              } px-3 py-2 text-white placeholder-white/60 focus:outline-none transition-all duration-300`}
              type="text"
              placeholder={t("Web")}
              name="web"
              value={formData.web}
              onChange={handleChange}
            />
            {errors.web && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-xs mt-1"
              >
                {errors.web}
              </motion.p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <motion.input
              className={`w-full bg-transparent border-b-2 rounded-lg ${
                errors.email
                  ? "border-red-400"
                  : "border-white/50 focus:border-white"
              } px-3 py-2 text-white placeholder-white/60 focus:outline-none transition-all duration-300`}
              type="email"
              placeholder={t("Email")}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-xs mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Mensaje */}
          {/* <div className="relative">
            <textarea
              className={`w-full bg-transparent border-2 rounded-lg ${
                errors.message
                  ? "border-red-400"
                  : "border-white/50 focus:border-white"
              } px-4 py-3 text-white placeholder-white/60 focus:outline-none transition-all duration-300 min-h-[120px] resize-none`}
              placeholder={t("Mensaje")}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-xs mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </div> */}

          {/* Botón de envío */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
              Object.values(errors).every((error) => error === "")
                ? "bg-white text-linkIt-300 hover:bg-opacity-90"
                : "bg-white/50 text-white/70 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!Object.values(errors).every((error) => error === "")}
          >
            {t("Enviar")}
          </motion.button>
        </form>
      </div>
    </div>
  );
}

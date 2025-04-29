import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function InicioForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validaciones básicas
    setErrors({
      ...errors,
      [name]: value.trim() === "" ? t("Este campo es obligatorio") : "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar formulario antes de enviar
    const newErrors = {
      name: formData.name.trim() === "" ? t("Este campo es obligatorio") : "",
      email: formData.email.trim() === "" ? t("Este campo es obligatorio") : "",
      message: formData.message.trim() === "" ? t("Este campo es obligatorio") : "",
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log("Formulario enviado:", formData);
      // Aquí puedes manejar el envío del formulario
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-linkIt-300 to-linkIt-200 font-montserrat text-white py-12 px-6 md:px-8 lg:px-12 shadow-2xl dark:from-linkIt-400 dark:to-linkIt-300 h-full flex items-center justify-center">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-lg">
        <h2 className="font-bold text-2xl xs:text-3xl md:text-4xl xl:text-5xl leading-tight font-manrope mb-6 text-center">
          {t("Contáctanos para más información")}
        </h2>
        <form
          className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Nombre */}
          <div className="relative">
            <motion.input
              className={`w-full bg-transparent border-b-2 rounded-lg ${
                errors.name
                  ? "border-red-400"
                  : "border-white/50 focus:border-white"
              } px-3 py-2 text-white placeholder-white/60 focus:outline-none transition-all duration-300`}
              type="text"
              placeholder={t("Nombre")}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-300 text-xs mt-1"
              >
                {errors.name}
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
          <div className="relative">
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
          </div>

          {/* Botón de envío */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
              !errors.name && !errors.email && !errors.message
                ? "bg-white text-linkIt-300 hover:bg-opacity-90"
                : "bg-white/50 text-white/70 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!!errors.name || !!errors.email || !!errors.message}
          >
            {t("Enviar")}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
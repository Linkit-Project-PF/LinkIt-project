import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ModuloD({ isVisible }: { isVisible: boolean }) {
  const { t } = useTranslation();

  const items = [
    {
      img: "/2025/Home/ModuleD/linkit-web-vectores-08.webp",
      title: "Proceso ágil",
      text: "En 5 días hábiles presentaremos talentos previamente entrevistados y calificados.",
    },
    {
      img: "/2025/Home/ModuleD/linkit-web-vectores-09.webp",
      title: "Comunicación asertiva",
      text: "Nos comprometemos a mantener una comunicación ágil y efectiva durante todo el proceso de selección.",
    },
    {
      img: "/2025/Home/ModuleD/linkit-web-vectores-10.webp",
      title: "Consultoría 360°",
      text: "Te asesoramos desde el perfil ideal, los presupuestos idóneos y procesos de contratación hasta planes de beneficios, retención y mucho más.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 bg-linkIt-500 dark:bg-linkIt-400 dark:text-white p-[6%] items-center">
      <div className="mb-4">
        {items.map((item, index) => {
          const delay = 0.5 + index * 0.5 + index;
          return (
            <div key={index}>
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 1.6, delay }}
              >
                <img className="w-1/6 p-4" src={item.img} alt={t(item.title)} />
                <div className="space-y-2 flex flex-col py-4">
                  <h3 className="font-manrope subtitles-size font-bold">
                    {t(item.title)}
                  </h3>
                  <p className="text-size font-montserrat font-medium">
                    {t(item.text)}
                  </p>
                </div>
              </motion.div>
              {index <= items.length - 1 && (
                <motion.div
                  className="relative my-2 w-full flex justify-center"
                  initial={{ opacity: 0, width: 0 }}
                  animate={
                    isVisible
                      ? { opacity: 1, width: "100%" }
                      : { opacity: 0, width: 0 }
                  }
                  transition={{ duration: 1.6, delay: delay + 0.5 }}
                >
                  <hr className="border-t border-gray-300 dark:border-gray-400 w-full border-2" />
                  <motion.span
                    className="absolute right-0 -top-0.5 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isVisible
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.6, delay: delay + 0.8 }}
                  />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

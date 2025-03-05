import { motion } from "framer-motion"
import SplitText from "../../Utils/splitText"
import BenefitItem from "./BenefitItem"
import Navbar from "./NavBar"
import ContactForm from "./ContactForm"

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <Navbar />

      <main className="flex-grow bg-[#EBEDEF] py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Text Content */}
            <div className="lg:w-5/12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="block">¿Buscas </span>
                <SplitText
                  text="contratar talento"
                  className="text-linkIt-300"
                  animation="fadeInUp"
                  staggerChildren={0.05}
                />
                <span className="block">o formar un equipo IT con</span>
                <span className="block">nuestra ayuda?</span>
              </h1>

              <p className="text-lg mb-3">
                En <span className="font-bold">LinkIT</span>, te ayudamos a encontrar el mejor talento tech sin costos
                por adelantado. Solo pagas si tienes éxito, <span className="font-bold">¡y la demo es gratis!</span>
              </p>

              <div className="space-y-3 mt-4">
                <BenefitItem text="Eficientiza tu tiempo" />
                <BenefitItem text="Contrata sin riesgos" />
                <BenefitItem text="Optimiza tus recursos" />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:w-7/12">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action Section - Moved to bottom */}
      <div className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.h2
              className="text-3xl font-bold text-gray-800 font-montserrat"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Agenda una llamada con nuestro equipo!
            </motion.h2>

            <motion.button
              className="mt-4 md:mt-0 bg-linkIt-300 hover:bg-teal-500 text-white font-medium py-2 px-6 rounded-md transition-colors font-montserrat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar llamada
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage


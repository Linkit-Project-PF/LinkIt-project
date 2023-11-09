import companies from "../../../../../Utils/companies.json"
import { useState } from "react";
import { motion } from 'framer-motion'

export default function Carrusel() {

    const items: number = 5;
    const [currentPage, setCurrentPage] = useState(0)

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevius = () => {
        setCurrentPage(currentPage - 1)
    }

    const startIndex = currentPage * items
    const endIndex = startIndex + items

    const companiesFiltered = companies.slice(startIndex, endIndex)

    return (
        <motion.div
            className="flex flex-row justify-between px-20 py-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }} // Configuración de animación al aparecer
            exit={{ opacity: 1, x: 50 }} // Configuración de animación al desaparecer
        >
            <button onClick={handlePrevius} disabled={currentPage === 0}>
                <img src="/public/vectores/previus.png" alt="previus" />
            </button>
            {companiesFiltered.map((c) => {
                return (
                    <motion.div
                        key={c.id}
                        className="flex justify-center items-center overflow:hidden w-48 h-20"
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 500 }}
                    >
                        <motion.img
                            className="h-full w-full object-contain" src={c.logo}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        />
                    </motion.div>
                )
            })}
            <button onClick={handleNext} disabled={endIndex > companies.length}>
                <img src="/public/vectores/next.png" alt="next" />
            </button>
        </motion.div>
    )
}

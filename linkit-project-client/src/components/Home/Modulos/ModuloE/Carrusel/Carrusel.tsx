import companies from "../../../../../Utils/companies.json"
import { useState } from "react";
import { motion } from 'framer-motion'

export default function Carrusel() {

    const items: number = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const [animation, setAnimation] = useState('right');

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
        setAnimation('right')
    }

    const handlePrevius = () => {
        setCurrentPage(currentPage - 1)
        setAnimation('left')
    }

    const startIndex = currentPage * items
    const endIndex = startIndex + items

    const companiesFiltered = companies.slice(startIndex, endIndex)

    return (
        <div className="flex flex-row justify-between px-20 py-2">
            <button onClick={handlePrevius} disabled={currentPage === 0}>
                <img src="Vectores/previus.png" alt="previus" />
            </button>
            {companiesFiltered.map((c) => {

                const animateProps = animation === 'right' ? {opacity: 1, x:0, } : {opacity: 1, x:0, }
                const initialProps = animation === 'right' ? {opacity: 0, x:100} : {opacity: 0, x:-100} 
                const exitProps = animation === 'right' ? {opacity: 0, x:100} : {opacity: 0, x:-100} 
                
                return (
                    <motion.div
                        key={c.id}
                        className="flex justify-center items-center overflow:hidden w-48 h-20"
                        initial={initialProps}
                        animate={animateProps}
                        exit={exitProps}   
                        transition={{ duration: 0.4 }}
                    >
                        <motion.img
                            className="h-full w-full object-contain" src={c.logo} />
                    </motion.div>
                )
            })}
            <button onClick={handleNext} disabled={endIndex > companies.length}>
                <img src="Vectores/next.png" alt="next" />
            </button>
        </div>
    )
}

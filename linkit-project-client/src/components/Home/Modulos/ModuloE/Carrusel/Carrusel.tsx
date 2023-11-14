import companies from "../../../../../Utils/companies.json"
import arrow from "/Vectores/arrow.png"
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';


export default function ModuloC() {
    const items: number = 5;
    const [currentPage, setCurrentPage] = useState(0);

    const startindex = currentPage % companies.length;
    const endIndex = startindex + items;
    const duplicatedCompanies = [...companies, ...companies, ...companies];
    const renderedCompanies = duplicatedCompanies.slice(startindex, endIndex);

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % companies.length);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) =>
            prevPage === 0 ? companies.length - 1 : prevPage - 1
        );
    };

    useEffect(() => {   
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % companies.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col items-center pb-3">
            <div className="flex flex-row space-x-10">
                <button className="" onClick={handlePrev}> <img className='h-5 rotate-90 ' src={arrow} alt="prev" /></button>
                <motion.div
                    className="w-[50rem] xl:w-[55rem] 2xl:w-[65rem] flex flex-row justify-center mb-10 xl:mb-12 2xl:mb-24"
                >

                    {renderedCompanies.map((company) => (
                        <motion.div
                            key={company.id}
                            className="relative px-4 py-4 justify-center overflow:hidden w-36 xl:w-40 2xl:w-52  h-16 xl:h-24 2xl:h-32 top-4 2xl:top-9">
                            <img src={company.logo} className="h-full w-full object-contain" alt='logo' />
                        </motion.div>
                    ))}

                </motion.div>
                <button className="relative" onClick={handleNext}> <img className='h-5 -rotate-90' src={arrow} alt="prev" /></button>
            </div>
        </div>
    )
}


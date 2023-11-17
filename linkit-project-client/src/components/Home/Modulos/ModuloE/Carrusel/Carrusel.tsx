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
        <div className="relative flex flex-col items-center p-3">
            <div className="flex flex-row space-x-10 ">
                <button className="" onClick={handlePrev}> <img className='relative h-5 rotate-90 left-[290px] top-[-15px] sm:left-[160px] md:left-[100px] lg:left-[10px] xl:left-[-40px] 2xl:top-[-40px] 2xl:left-[-50px]' src={arrow} alt="prev" /></button>
                <motion.div
                    className="w-[50rem] xl:w-[55rem] 2xl:w-[65rem] flex flex-row justify-center mb-10 xl:mb-12 2xl:mb-24"
                >

                    {renderedCompanies.map((company) => (
                        <motion.div
                            key={company.id}
                            className="relative justify-center overflow:hidden h-4 w-12 sm:w-20 sm:h-8 md:w-28 lg:w-40 lg:h-12 xl:w-60 2xl:w-72">
                            <img src={company.logo} className="h-full w-full object-contain mx-2" alt='logo' />
                        </motion.div>
                    ))}

                </motion.div>
                <button className="relative" onClick={handleNext}> <img className='relative h-[20px] -rotate-90 left-[-290px] top-[-15px] sm:left-[-160px] md:left-[-100px] lg:left-[-10px] xl:left-[40px] 2xl:top-[-40px] 2xl:left-[50px]' src={arrow} alt="prev" /></button>
            </div>
        </div>
    )
}


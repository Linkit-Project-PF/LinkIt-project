import companies from "../../../../../Utils/companies.json"
import { motion } from 'framer-motion'

export default function Carrusel() {

    const slideVariants = {
        hidden: { x: 0 },
        visible: { x: "-100%" },
    }

    return (
                <motion.div
                    className="pl-[60px] whitespace-nowrap "
                    initial="hidden"
                    animate="visible"
                    variants={slideVariants}
                    transition={{
                        type: "tween",
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity,
                        
                    }}
                >
                    {companies.map((c) => {
                        return (
                            <motion.img
                                key={c.id}
                                className="m-[40px] h-[50px] inline-block"
                                src={c.logo}
                            />
                        )
                    })}
                    {companies.map((c) => {
                        return (
                            <motion.img
                                key={c.id}
                                className="m-[40px] h-[50px] inline-block"
                                src={c.logo}
                            />
                        )
                    })}
                </motion.div >
    )
}


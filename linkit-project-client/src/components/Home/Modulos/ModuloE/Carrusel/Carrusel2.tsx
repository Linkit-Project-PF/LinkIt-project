import companies from "../../../../../Utils/companies.json"
import { motion } from 'framer-motion'

export default function Carrusel2() {

    const slideVariants = {
        hidden: { x: 0 },
        visible: { x: "-100%" },
    }

    return (
        <div >
            <motion.div
                className="pl-[60px] whitespace-nowrap"
                initial="hidden"
                animate="visible"
                variants={slideVariants}
                transition={{
                    type: "tween",
                    damping: 1,
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {companies.map((c) => {
                    return (
                            <motion.img
                                className="m-[40px] h-[50px] inline-block"
                                src={c.logo}
                            />
                    )
                })}
                {companies.map((c) => {
                    return (
                            <motion.img
                                className="m-[40px] h-[50px] inline-block"
                                src={c.logo}
                            />
                    )
                })}
            </motion.div >
        </div>
    )
}


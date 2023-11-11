import companies from "../../../../../Utils/companies.json"
import { motion } from 'framer-motion'

export default function Carrusel() {

    const slideVariants = {
        hidden: { x: 0 },
        visible: { x: "-100%" },
    }

    return (
        <motion.div
            className="-mx-[352px]  whitespace-nowrap w-auto flex gap-12"
            initial="hidden"
            animate="visible"
            variants={slideVariants}
            transition={{
                type: "tween",
                duration: 25,
                ease: "linear",
                repeat: Infinity,
                /* repeatType: "mirror" */
            }
            }

        >

            {companies.map((c) => {
                return (
                    <motion.img
                        key={c.id}
                        className=" m-0 p-0 h-[50px] inline-block"
                        src={c.logo}
                    />
                )
            })}
            {companies.map((c) => {
                return (
                    <motion.img
                        key={c.id}
                        className=" m-0 p-0 h-[50px] inline-block"
                        src={c.logo}
                    />
                )
            })}
        </motion.div >
    )
}


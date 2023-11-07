import { motion, Variants } from 'framer-motion'

const divVariants: Variants = {
    hidden: {
        y: 300
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            bounce: 0.3,
        }
    }
}

function Home() {
    return (
        <>
        <h1>Home Page</h1>

        </>
        
    )
}

export default Home
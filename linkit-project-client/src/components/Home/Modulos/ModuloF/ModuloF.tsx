import { useNavigate } from "react-router-dom"
import "./ModuloF.css"
import { motion } from "framer-motion"

export default function ModuloF() {

    const navigate = useNavigate()

    const goSoyEmpresa = () => {
        navigate("/SoyEmpresa")
    }
    const goSoyTalento = () => {
        navigate("/SoyTalento")
    }

    return (
        <div className="skewed-borderF">
            <div className="grid grid-cols-2 gap-1 mb-12 md:mb-0">
                <div className="flex flex-col justify-center contentF xl:ml-12 2xl:ml-16">
                    <h1 className="font-bold mt-10 ml-2 md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl xl:mb-10 2xl:mb-20">Talento y empresas en más de 50 países</h1>
                    <div className="flex p-1">
                        <motion.button className="bg-linkIt-300 rounded-lg p-1 h-auto xl:p-2 2xl:px-6 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-1 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-xl" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>Contrata Talento</motion.button>
                        <motion.button className="border-linkIt-300 border rounded-lg p-1 xl:p-2 2xl:px-6 h-auto font-medium shadow-md hover:bg-linkIt-300 hover:shadow-md hover:text-white transition-all duration-300 ease-in-out m-1 text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-xl" onClick={goSoyTalento} whileTap={{ scale: 0.9 }}>Vacantes disponibles</motion.button>
                    </div>
                </div>
                <div className="relative left-1 contentF">
                    <div >
                        <img className="absolut max-h-full" src="/Vectores/linkit-web-vectores-11.svg" alt="computer with persons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

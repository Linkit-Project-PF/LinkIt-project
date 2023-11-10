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
            <div className="grid grid-cols-2 gap-1 h-[610px]">
                <div className="flex flex-col justify-center p-24 contentF">
                    <h1 className="text-6xl font-bold ">Talento y empresas en más de 50 países</h1>
                    <div className="flex py-16">
                        <motion.button className="bg-linkIt-300 rounded-lg p-2 h-10 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-2" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>Contrata Talento</motion.button>
                        <motion.button className="border-linkIt-300 border rounded-lg p-2 h-10 font-medium shadow-md hover:bg-linkIt-300 hover:shadow-md hover:text-white transition-all duration-300 ease-in-out m-2" onClick={goSoyTalento} whileTap={{ scale: 0.9 }}>Vacantes disponibles</motion.button>
                    </div>
                </div>
                <div className="relative left-1 contentF">
                    <div >
                        <img className="absolute top-[-64px] " src="/Vectores/linkit-web-vectores-11.svg" alt="computer with persons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

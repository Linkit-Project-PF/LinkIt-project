import { useNavigate } from "react-router-dom"
import "./ModuloF.css"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function ModuloF() {
    const {t}= useTranslation()
    const navigate = useNavigate()

    const goSoyEmpresa = () => {
        navigate("/SoyEmpresa")
    }
    const goSoyTalento = () => {
        navigate("/SoyTalento")
    }

    return (
        <div className="relative bg-linkIt-500 dark:bg-linkIt-200 dark:text-white">
            <div className="my-[10%] ml-[6%] mb-[15%]">
                    <h1 className="relative z-10 font-extrabold text-[4vw] w-[37%] justify-self-start leading-tight font-manrope">{t('Talento y empresas en más de 50 países')}</h1>
                    <div className="relative z-10 mt-[3%] space-x-2">
                        <motion.button className="background-button" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>{t('Contrata Talento')}</motion.button>
                        <motion.button className="transparent-background-button" onClick={goSoyTalento} whileTap={{ scale: 0.9 }}>{t('Vacantes disponibles')}</motion.button>
                    </div>
                    </div>
                        <img className="absolute z-10 top-[-10.5%] w-[70%] left-[3%]" src="/Vectores/linkit-web-vectores-11.svg" alt="world map" />
        </div>
    )
}

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
        <div className="relative overflow-hidden lg:overflow-visible bg-linkIt-500 dark:bg-linkIt-200 dark:text-white p-[9%] w-screen before:lg:block before:hidden before:bg-linkIt-500 before:dark:bg-linkIt-200 before:w-screen before:lg:h-[14%] before:absolute before:top-[93%] before:left-0 before:skew-y-[-3deg] after:hidden after:lg:block after:bg-white after:dark:bg-linkIt-400 after:w-screen after:lg:h-[10px] after:absolute after:bottom-[-6.3%] after:left-0 after:skew-y-[-3deg]">
            <div className="">
                    <h1 className="relative z-10 font-extrabold text-[4vw] w-[45%] justify-self-start leading-tight font-manrope">{t('Talento y empresas en más de 50 países')}</h1>
                    <div className="relative z-10 mt-[3%] space-x-2 mb-[3rem]">
                        <motion.button className="background-button" onClick={goSoyEmpresa} whileTap={{ scale: 0.9 }}>{t('Contrata Talento')}</motion.button>
                        <motion.button className="transparent-background-button" onClick={goSoyTalento} whileTap={{ scale: 0.9 }}>{t('Vacantes disponibles')}</motion.button>
                    </div>
                    </div>
                        <img className="absolute top-[-10%] md:top-[-14%] lg:top-[-11.4%] lg:xl:top-[-11.7%] left-[50%] w-[70%] lg:left-[35%] z-0" src="/Vectores/linkit-web-vectores-11.svg" alt="world map" />
        </div>
    )
}

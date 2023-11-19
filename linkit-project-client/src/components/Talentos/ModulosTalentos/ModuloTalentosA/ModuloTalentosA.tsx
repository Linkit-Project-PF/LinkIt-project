// import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import CloudinaryUploadWidget from "../../../quienesSomos/cloudinaryWidget"
import { useEffect, useState } from "react"
// import PhoneInput from "react-phone-number-input/input"

export default function ModuloTalentosA() {
  const [filePublicId, setFilePublicId] = useState("")

  useEffect(() => {
    if (filePublicId)
      alert(`File uploaded with public ID: ${filePublicId}`)
  }, [filePublicId])


//   const navigate = useNavigate()

//   const goSoyEmpresa = () => {
//     navigate("/SoyEmpresa")
//   }
//   const goSoyTalento = () => {
//     navigate("/SoyTalento")
//   }

  return (
    <div className="grid grid-cols-2 gap-1 p-5 bg-linkIt-500 py-24">
      <div className="flex flex-col justify-center p-24">
        <h1 className="text-5xl font-bold ">Conéctate con los mejores proyectos IT</h1>
        <div className="py-8 pr-60">
          <h3 className="text-3xl xl:whitespace-nowrap">Aplica a las mejores oportunidades <br/> de manera remota.</h3>
        </div>
        <CloudinaryUploadWidget setFilePublicId={setFilePublicId}>
          <button className="h-10 px-4 py-1 bg-black text-white rounded-md">Demo Upload File</button>
        </CloudinaryUploadWidget>
        <div className="flex">
          <motion.button className="bg-linkIt-300 rounded-lg p-2 h-10 text-white font-medium shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out m-2" whileTap={{ scale: 0.9 }}>Vacantes disponibles</motion.button>
          
        </div>
      
        <div className="flex flex-row items-center">
          <img className="w-1/6" src="Vectores/linkit-web-vectores-16.svg" alt="stars" />
          <h4 className="flex font-semibold">4/5 on Trustpilot <p className="underline ml-2">Read reviews</p></h4>
        </div>
      </div>
      <div>
        <img className="w-auto" src="/Vectores/linkit-web-vectores-14.svg" alt="computer with persons" />
      </div>
    </div>
  )
}

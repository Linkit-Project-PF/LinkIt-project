import { createContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { useTranslation } from "react-i18next"

declare global {
  interface Window {
    cloudinary: any
  }
}

interface CloudinaryWidgetProps {
  children: React.ReactNode
  setFilePublicId?: (value: string) => void
  setFileName: (value: string) => void
  updateLink?: (value: string) => void
  onUploadSuccess?: (value: string) => void
  setReload?: (value: boolean) => void
  className?: string
  setInformationImage?: any
  isAPostulation?: true | undefined | null
}

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext({})

/**
 * Component to load the Cloudinary upload widget script and open the widget
 * @param {children} React.ReactNode - The component children
 * @param {setFilePublicId} (value: string) => void - The function to set the file public id
 * @returns {JSX.Element} - The component JSX.Element
 */
function CloudinaryWidget({
  children,
  setFilePublicId,
  updateLink,
  setFileName,
  className,
  setReload,
  setInformationImage,
  isAPostulation,
  onUploadSuccess,
}: CloudinaryWidgetProps) {
  const [loaded, setLoaded] = useState(false)
  const { t } = useTranslation()

  const uwConfig = {
    cloudName: "dquhriqz3",
    uploadPreset: "new-preset",
  }
  let uploadSuccess = false

  const openCloudinaryWidget = () => {
    if (loaded) {
      // Create upload widget configuration
      const myWidget = window.cloudinary.createUploadWidget(uwConfig, (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          uploadSuccess = true

          // Para enlaces directos (como PDFs)
          if (updateLink) {
            updateLink(result.info.secure_url)
          }

          // Para IDs de archivos (como imágenes)
          setFilePublicId && setFilePublicId(result.info.public_id)

          // Para información adicional
          isAPostulation !== true && setInformationImage && setInformationImage(result.info.public_id)

          // Para el nombre del archivo
          setFileName(`${result.info.original_filename}.${result.info.format}`)

          // Para recargar datos si es necesario
          setReload && setReload(true)

          // Para callback de éxito personalizado
          onUploadSuccess && onUploadSuccess(result.info.public_id)

          myWidget.close()
        } else if (result.event === "close") {
          if (uploadSuccess) {
            Swal.fire({
              icon: "success",
              title: t("Enviado"),
              timer: 1000,
              showConfirmButton: false,
              showLoaderOnConfirm: true,
            })
            uploadSuccess = false
          } else {
            Swal.fire({
              icon: "error",
              title: t("Cancelado"),
              timer: 1000,
              showConfirmButton: false,
              showLoaderOnConfirm: true,
            })
          }
        }
      })

      myWidget.open()
    }
  }

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw")
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script")
        script.setAttribute("async", "")
        script.setAttribute("id", "uw")
        script.src = "https://upload-widget.cloudinary.com/global/all.js"
        script.addEventListener("load", () => setLoaded(true))
        document.body.appendChild(script)
      } else {
        // If already loaded, update the state
        setLoaded(true)
      }
    }
  }, [loaded])

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <script src="https://media-editor.cloudinary.com/all.js" type="text/javascript"></script>
      <div className={className} onClick={openCloudinaryWidget} id="upload_widget">
        {children}
      </div>
    </CloudinaryScriptContext.Provider>
  )
}

export default CloudinaryWidget
export { CloudinaryScriptContext }


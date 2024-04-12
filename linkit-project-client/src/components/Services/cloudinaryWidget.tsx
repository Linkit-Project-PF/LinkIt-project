// import { Cloudinary } from "@cloudinary/url-gen/index";
import { createContext, useEffect, useState } from "react";
import { Curriculum } from "../Profiles/types";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

declare global {
  interface Window {
    cloudinary: any;
  }
}

interface IComponentProps {
  children: React.ReactNode;
  setFilePublicId?: (value: string) => void;
  setFileName: (value: string) => void;
  setCv?: (value: Curriculum) => void;
  onUploadSuccess?: (value: string) => void;
  setReload?: (value: boolean) => void;
  className?: string;
}

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext({});

/**
 * Component to load the Cloudinary upload widget script and open the widget
 * @param {children} React.ReactNode - The component children
 * @param {setFilePublicId} (value: string) => void - The function to set the file public id
 * @returns {JSX.Element} - The component JSX.Element
 *
 * @example
 *  const [filePublicId, setFilePublicId] = useState("")
 *  <CloudinaryUploadWidget setFilePublicId={setFilePublicId}>
 *    <button>Upload</button>
 *  </CloudinaryUploadWidget>
 */
function CloudinaryUploadWidget({
  children,
  setFilePublicId,
  setCv,
  setFileName,
  className,
  setReload,
}: IComponentProps) {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  const [uwConfig] = useState({
    cloudName: "dquhriqz3",
    uploadPreset: "new-preset",
  });
  let uploadSuccess = false;

  const openCloudinaryWidget = () => {
    if (loaded) {
      // Create upload widget configuration

      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            uploadSuccess = true;
            setFilePublicId && setFilePublicId(result.info.public_id);
            setCv &&
            setCv({
              fileName: `${result.info.original_filename}.${result.info.format}`,
              cloudinaryId: result.info.public_id,
            });
            setFileName(
              `${result.info.original_filename}.${result.info.format}`
              );
            setReload && setReload(true);
          } else if (result.event === "close") {
            if (uploadSuccess) {
              Swal.fire({
                icon: "success",
                title: t("Enviado"),
                timer: 1000,
                showConfirmButton: false,
                showLoaderOnConfirm: true
              })
              uploadSuccess = false;
            } else {
              Swal.fire({
                icon: "error",
                title: t("Cancelado"),
                timer: 1000,
                showConfirmButton: false,
                showLoaderOnConfirm: true
              })
            }
          }
        }
        );
        
      myWidget.open();
    }
  };

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <script
        src="https://media-editor.cloudinary.com/all.js"
        type="text/javascript"
      ></script>
      <div
        className={className}
        onClick={openCloudinaryWidget}
        id="upload_widget"
      >
        {children}
      </div>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };

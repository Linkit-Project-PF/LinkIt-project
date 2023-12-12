// import { Cloudinary } from "@cloudinary/url-gen/index";
import { createContext, useEffect, useState } from "react";


declare global {
  interface Window {
    cloudinary: any;
  }
}

interface IComponentProps {
  children: React.ReactNode
  setFilePublicId: (value: string) => void
  setFileName: (value: string) => void
  onUploadSuccess?: (value: string) => void
  className?: string
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
function CloudinaryUploadWidget({children, setFilePublicId, setFileName, className}: IComponentProps) {
  const [loaded, setLoaded] = useState(false);

  const [uwConfig] = useState({
    cloudName: "dquhriqz3",
    uploadPreset: "new-preset",
  });

	const openCloudinaryWidget = () => {
    if (loaded) {
      // Create upload widget configuration
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            setFilePublicId(result.info.public_id)
            setFileName(`${result.info.original_filename}.${result.info.format}`)
          }
        }
      )
			
			myWidget.open()
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
      <script src="https://media-editor.cloudinary.com/all.js" type="text/javascript"></script>
      <div className={className} onClick={openCloudinaryWidget} id="upload_widget">
        {children}
      </div>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };

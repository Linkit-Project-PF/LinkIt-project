import CloudinaryUploadWidget from "../../Services/cloudinaryWidget";
import { useState, useEffect, FunctionComponent } from "react";

export interface IUser {
  userName: string
  userLastName: string
  userImage: string
}

interface IComponentProps {
  user: IUser
}

const ProfileComponent: FunctionComponent<IComponentProps> = ({user}) => {
  const [filePublicId, setFilePublicId] = useState("")

  useEffect(() => {
    if (filePublicId)
      alert(`File uploaded with public ID: ${filePublicId}`)
  }, [filePublicId])

  return (
    <div className="flex w-full mt-20 h-[22vh] justify-center">
      <div className="flex justify-between w-11/12 p-3">

        <div className="flex flex-col justify-between w-1/2">
          <h1 className="text-4xl font-bold mt-6">Hola {user.userName}!</h1>
          <div className="flex space-x-6">
            <button className="text-xl font-semibold hover:text-linkIt-300">
              Mis Datos
            </button>
            <button className="text-xl font-semibold hover:text-linkIt-300">
              Mis Postulaciones
            </button>
          </div>
        </div>

        <div className="flex space-x-4 w-1/2 justify-end items-end">
          <button className="text-black">Cambiar Contraseña</button>
          <button className="text-black">Cerrar Sesión</button>
          <div className="relative rounded-full w-36 h-36 bg-gray-300">
            <div className="relative w-full h-full">
              <CloudinaryUploadWidget
                setFilePublicId={setFilePublicId}
                className="flex absolute bottom-0 right-0 bg-white  rounded-full ring-2 ring-black w-9 h-9 justify-center items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height={20} width={20} ><g><path d="M13.491666666666669 2.925a0.42500000000000004 0.42500000000000004 0 0 0 -0.5916666666666667 0L3.391666666666667 12.433333333333334a0.4166666666666667 0.4166666666666667 0 0 0 0 0.5916666666666667l3.566666666666667 3.566666666666667a0.4 0.4 0 0 0 0.5833333333333334 0L17.058333333333334 7.083333333333334a0.42500000000000004 0.42500000000000004 0 0 0 0 -0.5916666666666667Z" fill="#000000" strokeWidth={0.8333333333333334} /><path d="M2.5 13.925a0.42500000000000004 0.42500000000000004 0 0 0 -0.39166666666666666 -0.10833333333333334 0.4 0.4 0 0 0 -0.3 0.275L0 19.441666666666666a0.4083333333333333 0.4083333333333333 0 0 0 0.1 0.42500000000000004 0.4166666666666667 0.4166666666666667 0 0 0 0.45000000000000007 0.13333333333333333l5.3500000000000005 -1.7833333333333334a0.43333333333333335 0.43333333333333335 0 0 0 0.275 -0.3 0.4083333333333333 0.4083333333333333 0 0 0 -0.11666666666666668 -0.4166666666666667Z" fill="#000000" strokeWidth={0.8333333333333334} /><path d="M19.166666666666668 0.8333333333333334a3 3 0 0 0 -4.166666666666667 0l-0.5916666666666667 0.5916666666666667a0.4166666666666667 0.4166666666666667 0 0 0 0 0.5916666666666667l3.566666666666667 3.566666666666667a0.42500000000000004 0.42500000000000004 0 0 0 0.5833333333333334 0L19.166666666666668 5a2.9416666666666664 2.9416666666666664 0 0 0 0 -4.166666666666667Z" fill="#000000" strokeWidth={0.8333333333333334} /></g></svg>
              </CloudinaryUploadWidget>
            </div>
          </div>
        </div>

      </div>
    </div> 
  )
}

export default ProfileComponent;
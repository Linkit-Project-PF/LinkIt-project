import CloudinaryUploadWidget from "../../../Services/cloudinaryWidget";
import { useState, useEffect, FunctionComponent, useRef } from "react";
import { IUser } from "../../types";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { SUPERADMN_ID } from "../../../../env";
import axios from "axios";
import { logout, setUser } from "../../../../redux/features/AuthSlice";
import Swal from "sweetalert2";
import { editUser } from "../../api";
import { useTranslation } from "react-i18next";

interface IComponentProps {
  user: IUser
  setSelectedOptions: React.Dispatch<React.SetStateAction<string>>
}

const TalentComponent: FunctionComponent<IComponentProps> = ({user, setSelectedOptions}) => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const [filePublicId, setFilePublicId] = useState("")
  const [fileName, setFileName] = useState("")
  const navigate = useNavigate()
  const isFirstRender = useRef(true)

  useEffect(()=>{
    if(isFirstRender.current) {
      isFirstRender.current = false
      return
    }



    const updatedUser= async ()=>{
      try {
        const editedUser = await editUser({...user, image: filePublicId})
        dispatch(setUser(editedUser))
        if (editedUser){
          Swal.fire({
            title: t("Imagen actualizada"),
            text: fileName,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#0098DA",
          })
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: t("Hubo un error al actualizar la imagen"),
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#0098DA",
        })
      }
    }
    updatedUser()
  },[filePublicId])

  const changePassword = async (e: any) => {
    try {
      const response = await axios.put<IUser>(
        `https://linkit-server.onrender.com/users/update/${user._id}`,{"email": user.email, "password": true}, {
          headers: {
            Authorization: `Bearer ${SUPERADMN_ID}`,
            'Accept-Language': sessionStorage.getItem('lang')
          },
        }
      )
      if(response) alert('Revisa tu correo electronico')
    } catch (error: any) {
      throw new Error(error.code)
    }
    e.preventDefault()
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <div className="flex w-full pt-5 justify-center">
      <div className="flex p-3 flex-col md:flex-row w-full">


        <div className="flex flex-col w-full text-center md:justify-evenly">
          <h1 className="text-4xl font-bold mb-8">{t('Hola ') + user.firstName}!</h1>
          <div className="flex justify-evenly mb-8">
            <button onClick={() => setSelectedOptions('MyInfo')} className="text-xl font-semibold hover:text-linkIt-300">
              {t('Mis Datos')}
            </button>
            <button onClick={() => setSelectedOptions('MyApps')} className="text-xl font-semibold hover:text-linkIt-300">
              {t('Mis Postulaciones')}
            </button>
          </div>
        </div>


        <div className="flex flex-col md:flex-row w-full pt-10 md:justify-evenly md:pt-0">
          <div className="relative w-full flex justify-center md:w-[50%]">
            <div className={`relative rounded-full w-[250px] h-[250px] bg-gray-300 ${user.image ? "flex flex-col justify-center items-center content-center" : ''}`}>

              <CloudinaryUploadWidget
                setFilePublicId={setFilePublicId}
                setFileName={setFileName}
                className="flex absolute bottom-0 right-0 bg-white  rounded-full ring-2 ring-black w-9 h-9 justify-center items-center cursor pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height={20} width={20} ><g><path d="M13.491666666666669 2.925a0.42500000000000004 0.42500000000000004 0 0 0 -0.5916666666666667 0L3.391666666666667 12.433333333333334a0.4166666666666667 0.4166666666666667 0 0 0 0 0.5916666666666667l3.566666666666667 3.566666666666667a0.4 0.4 0 0 0 0.5833333333333334 0L17.058333333333334 7.083333333333334a0.42500000000000004 0.42500000000000004 0 0 0 0 -0.5916666666666667Z" fill="#000000" strokeWidth={0.8333333333333334} /><path d="M2.5 13.925a0.42500000000000004 0.42500000000000004 0 0 0 -0.39166666666666666 -0.10833333333333334 0.4 0.4 0 0 0 -0.3 0.275L0 19.441666666666666a0.4083333333333333 0.4083333333333333 0 0 0 0.1 0.42500000000000004 0.4166666666666667 0.4166666666666667 0 0 0 0.45000000000000007 0.13333333333333333l5.3500000000000005 -1.7833333333333334a0.43333333333333335 0.43333333333333335 0 0 0 0.275 -0.3 0.4083333333333333 0.4083333333333333 0 0 0 -0.11666666666666668 -0.4166666666666667Z" fill="#000000" strokeWidth={0.8333333333333334} /><path d="M19.166666666666668 0.8333333333333334a3 3 0 0 0 -4.166666666666667 0l-0.5916666666666667 0.5916666666666667a0.4166666666666667 0.4166666666666667 0 0 0 0 0.5916666666666667l3.566666666666667 3.566666666666667a0.42500000000000004 0.42500000000000004 0 0 0 0.5833333333333334 0L19.166666666666668 5a2.9416666666666664 2.9416666666666664 0 0 0 0 -4.166666666666667Z" fill="#000000" strokeWidth={0.8333333333333334} /></g></svg>
              </CloudinaryUploadWidget>
              {
                user.image && (
                  <img src={`https://res.cloudinary.com/dquhriqz3/image/upload/${user.image}`} alt="" className=" h-full w-full rounded-full"/>
                  ) 
                }
            </div>
          </div>
          <div className="flex flex-col pt-5 gap-3 self-center place-self-center">
            <button className="text-black" onClick={changePassword}>{t('Cambiar Contraseña')}</button>
            <button className="text-black" onClick={handleLogout}>{t('Cerrar Sesión')}</button>
          </div>
        </div>

      </div>
    </div> 
  )
}

export default TalentComponent;
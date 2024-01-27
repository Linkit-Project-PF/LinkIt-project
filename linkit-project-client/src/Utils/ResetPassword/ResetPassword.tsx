import Swal from "sweetalert2"
import { UserLogin } from "../../components/Login/type"
import { changePassword } from "../../components/Profiles/api"
import React, {  useState } from "react"
import { useTranslation } from "react-i18next"

export default function ResetPassword({user, handleResetPassword}: {user: UserLogin, handleResetPassword: any}) {
  const { t } = useTranslation();
  const [confirmEmail, setConfirmEmail] = useState({email: ""})
  const [error, setErrors] = useState(false)

  const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target
    setConfirmEmail({
      ...confirmEmail,
      [name]: value
    })
  }


  const handleOnSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    try {
      if(user.email.length) {
        if(user.email === confirmEmail.email){
          await changePassword(user);
          await handleResetPassword();
          Swal.fire({
            title: t("Correo confirmado"),
            text: t("Se ha enviado un correo electronico para cambiar la contraseña, siga las instrucciones."),
            icon: "success",
            iconColor: "#173951",
            background: "#ECEEF0",
            allowOutsideClick: true,
            confirmButtonColor: "#01A28B",
            confirmButtonText: t("Continuar"),
          })
        }else return setErrors(true)
      }else {
        await changePassword(user);
        await handleResetPassword();
        Swal.fire({
          title: t("Correo confirmado"),
          text: t("Se ha enviado un correo electronico para cambiar la contraseña, siga las instrucciones."),
          icon: "success",
          iconColor: "#173951",
          background: "#ECEEF0",
          allowOutsideClick: true,
          confirmButtonColor: "#01A28B",
          confirmButtonText: t("Continuar"),
        })
      } 
    } catch (error) {
      throw new Error("Ingrese un mail valido")
    }


  };

  return (
    <div className="">
      <p 
        className="ml-9 mr-9 mb-9">Por favor, confirme su dirección de correo electrónico para iniciar el proceso de restablecimiento de contraseña. Se enviará un correo electrónico con instrucciones adicionales. ¡Gracias!!</p>
      <form 
        onSubmit={handleOnSubmit}
        className="flex flex-col" 
        action="">
        <label 
          className="ml-9 mr-9">
          {`Confirme su email: ${user.email}`}</label>
        <input 
          className="mr-9 ml-9 mb-3"
          type="text" 
          name="email"
          value={confirmEmail.email}
          onChange={handleInputChange}
          />
          {
            error && 
              <p 
                className="m-auto mb-2 text-green-400">
                  Las contraseñas no coinciden
              </p>
          }
        <button 
          disabled={error}
          className="bg-linkIt-300 m-auto align-middle text-white font-semibold text-[.9rem] p-[.3rem] w-[60%] rounded-[.7rem] border-[.125rem] border-linkIt-300 hover:bg-linkIt-500 hover:text-linkIt-300 transition-all duration-300 ease-in-out">
            Resetear contraseña
          </button>
      </form>
    </div>
  )
}

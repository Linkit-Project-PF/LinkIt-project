import Swal from "sweetalert2"
import { changePassword } from "../../components/Profiles/api"
import {  useEffect } from "react"
import { useTranslation } from "react-i18next"
import { UserLoginType, WebsiteUser } from "../../components/Profiles/types"

interface IResetPassword {
  user: UserLoginType | WebsiteUser
}

export default function ResetPassword(props: IResetPassword) {
  const { t } = useTranslation();
  
  const { user } = props;
 
  
  useEffect(() => {
      const confirmEmailAlert = (user: WebsiteUser | UserLoginType) => {
        Swal.fire({
          title: t('¡Confirmación de email exitoso!'),
          text: t('Hemos confirmado tu correo electrónico. Pronto recibirás un correo con las instrucciones para cambiar tu contraseña.'),
          icon: "success",
          iconColor: "#173951",
          background: "#ECEEF0",
          allowOutsideClick: true,
          confirmButtonColor: "#01A28B",
          confirmButtonText: t("Continuar"),
        })
        changePassword(user);
      }
      Swal.fire({
        title: t ("Restablecer Contraseña"),
        text: t("Por favor, confirme su correo electrónico: ") + user.email,
        input: "email",
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonText: t("Cancelar"),
        reverseButtons: true,
        confirmButtonText: t("Enviar"),
        confirmButtonColor: "#01A28B",
    }).then((result) => {
        if (result.isConfirmed) {
            const email = result.value;
            if(user.email.length) {
              if(email === user.email) {
                confirmEmailAlert(user);
              }else {
                Swal.fire({
                  title: t('¡El email no coincide!'),
                  text: t('Asegurate de escribir bien el correo'),
                  icon: "error",
                  background: "#ECEEF0",
                  allowOutsideClick: true,
                  confirmButtonColor: "#01A28B",
                  confirmButtonText: t("Continuar"),
                }).then(() => {
                  if (result.isConfirmed){
                    Swal.fire({
                      title: t ('Restablecer Contraseña'),
                      text: t('Por favor, confirme su correo electrónico: ') + user.email,
                      input: "email",
                      focusConfirm: false,
                      showCancelButton: true,
                      confirmButtonText: t("Enviar"),
                      reverseButtons: true,
                      confirmButtonColor: "#01A28B",
                      cancelButtonText: t("Cancelar"),
                  })
                  }
                });
              }
            } else confirmEmailAlert(user);
        }
    });
  },[])



  return (
    <div className="">
    </div>
  )
}

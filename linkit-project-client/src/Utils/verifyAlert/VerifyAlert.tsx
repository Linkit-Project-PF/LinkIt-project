import Swal from "sweetalert2"
import { useTranslation } from "react-i18next"
import { useEffect } from "react";


export default function VerifyAlert() {
  const { t } = useTranslation();
  useEffect(() => {
    Swal.fire({
      title: t("¡Estás listo para empezar!"),
      text: t(`Tu correo electrónico ha sido verificado con éxito Te invitamos a iniciar sesión y explorar nuestra página. Esperamos que disfrutes de la experiencia`),
      icon: "success",
      iconColor: "#173951",
      background: "#ECEEF0",
      allowOutsideClick: true,
      confirmButtonColor: "#01A28B",
      confirmButtonText: t("Continuar"),
    })
  },[])

  return (
    <div></div>
  )
}

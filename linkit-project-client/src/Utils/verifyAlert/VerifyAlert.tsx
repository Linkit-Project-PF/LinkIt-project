import Swal from "sweetalert2"
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next"
import { WebsiteUser } from "../../components/Profiles/types";
import { useEffect } from "react";


export default function VerifyAlert() {
  const { t } = useTranslation();
  const user: WebsiteUser = useSelector(
    (state: any) => state.Authentication.user
  );
  useEffect(() => {
    Swal.fire({
      title: t("Bienvenido de vuelta"),
      text: t(`Tu email ${user.email} ha sido verificado, ya puedes iniciar sesión`),
      icon: "success",
      iconColor: "#173951",
      background: "#ECEEF0",
      allowOutsideClick: true,
    })
  },[])

  return (
    <div></div>
  )
}

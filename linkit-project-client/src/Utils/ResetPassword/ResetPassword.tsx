import Swal from "sweetalert2";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { UserLoginType, WebsiteUser } from "../../components/Profiles/types";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../helpers/authentication/firebase"; // Asegúrate de importar tu instancia de auth

interface IResetPassword {
  user: UserLoginType | WebsiteUser;
}

export default function ResetPassword(props: IResetPassword) {
  const { t } = useTranslation();
  const { user } = props;

  useEffect(() => {
    Swal.fire({
      title: t("Restablecer Contraseña"),
      text: t("Por favor, confirme su correo electrónico: ") + user.email,
      input: "email",
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: t("Cancelar"),
      reverseButtons: true,
      confirmButtonText: t("Enviar"),
      confirmButtonColor: "#01A28B",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const email = result.value;
        if (!email || email !== user.email) {
          Swal.fire({
            title: t("¡El email no coincide!"),
            text: t("Asegurate de escribir bien el correo"),
            icon: "error",
            background: "#ECEEF0",
            allowOutsideClick: true,
            confirmButtonColor: "#01A28B",
            confirmButtonText: t("Continuar"),
          });
          return;
        }
        try {
          await sendPasswordResetEmail(auth, email);
          Swal.fire({
            title: t("¡Correo enviado!"),
            text: t("Revisa tu bandeja de entrada o spam para restablecer tu contraseña."),
            icon: "success",
            iconColor: "#173951",
            background: "#ECEEF0",
            allowOutsideClick: true,
            confirmButtonColor: "#01A28B",
            confirmButtonText: t("Continuar"),
          });
        } catch (error: any) {
          Swal.fire({
            title: t("Error"),
            text: error.message,
            icon: "error",
            background: "#ECEEF0",
            allowOutsideClick: true,
            confirmButtonColor: "#01A28B",
            confirmButtonText: t("Continuar"),
          });
        }
      }
    });
    // eslint-disable-next-line
  }, []);

  return <div className=""></div>;
}
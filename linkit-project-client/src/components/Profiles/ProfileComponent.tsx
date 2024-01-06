import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import CloudinaryUploadWidget from "../Services/cloudinaryWidget";
import { changePassword, editWebUserImage } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../../redux/features/AuthSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ProfileFormComponent from "./ProfileFormComponent";
import { WebsiteUser } from "./types";

export default function ProfileComponent() {
  const { t } = useTranslation();
  const [filePublicId, setFilePublicId] = useState("");
  const [fileName, setFileName] = useState("");
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user: WebsiteUser = useSelector(
    (state: any) => state.Authentication.user
  );

  // UseEffect for validate auth
  useEffect(() => {
    if (!user) navigate("/unauthorized");
  }, []);

  useEffect(() => {
    const updateUserImage = async () => {
      try {
        const updatedUser = await editWebUserImage(user, filePublicId);
        dispatch(setUser(updatedUser));
        Swal.fire({
          title: t("Imagen actualizada"),
          text: fileName,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#0098DA",
        });
      } catch (error: any) {
        Swal.fire({
          title: "Error",
          text: error.response.data,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#0098DA",
        });
      }
    };
    if (reload) {
      updateUserImage();
      setReload(false);
    }
  }, [reload]);

  async function profileChangePassword() {
    try {
      const response: string = await changePassword(user);
      if (response === "Email sent")
        Swal.fire({
          title: t("Exitoso"),
          text: t("Email de verificación enviado, revisa tu correo."),
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#0098DA",
        });
      else
        Swal.fire({
          title: "Error",
          text: response,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#0098DA",
        });
    } catch (error: any) {
      Swal.fire({
        title: t("Unexpected error"),
        text: error.message,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#0098DA",
      });
    }
  }

  function handleLogOut() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className="flex flex-col w-full pt-5 justify-center">
      <div className="flex p-3 flex-col md:flex-row w-full">
        <div className="flex flex-col md:flex-row w-full pt-10 md:justify-evenly md:pt-0">
          <div className="relative w-full flex justify-center md:w-[50%]">
            <div
              className={`relative rounded-full w-[250px] h-[250px] bg-gray-300 ${
                user?.image
                  ? "flex flex-col justify-center items-center content-center"
                  : ""
              }`}
            >
              <CloudinaryUploadWidget
                setFilePublicId={setFilePublicId}
                setFileName={setFileName}
                setReload={setReload}
                className="flex absolute bottom-0 right-0 bg-white  rounded-full ring-2 ring-black w-9 h-9 justify-center items-center cursor pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  height={20}
                  width={20}
                >
                  <g>
                    <path
                      d="M13.491666666666669 2.925a0.42500000000000004 0.42500000000000004 0 0 0 -0.5916666666666667 0L3.391666666666667 12.433333333333334a0.4166666666666667 0.4166666666666667 0 0 0 0 0.5916666666666667l3.566666666666667 3.566666666666667a0.4 0.4 0 0 0 0.5833333333333334 0L17.058333333333334 7.083333333333334a0.42500000000000004 0.42500000000000004 0 0 0 0 -0.5916666666666667Z"
                      fill="#000000"
                      strokeWidth={0.8333333333333334}
                    />
                    <path
                      d="M2.5 13.925a0.42500000000000004 0.42500000000000004 0 0 0 -0.39166666666666666 -0.10833333333333334 0.4 0.4 0 0 0 -0.3 0.275L0 19.441666666666666a0.4083333333333333 0.4083333333333333 0 0 0 0.1 0.42500000000000004 0.4166666666666667 0.4166666666666667 0 0 0 0.45000000000000007 0.13333333333333333l5.3500000000000005 -1.7833333333333334a0.43333333333333335 0.43333333333333335 0 0 0 0.275 -0.3 0.4083333333333333 0.4083333333333333 0 0 0 -0.11666666666666668 -0.4166666666666667Z"
                      fill="#000000"
                      strokeWidth={0.8333333333333334}
                    />
                    <path
                      d="M19.166666666666668 0.8333333333333334a3 3 0 0 0 -4.166666666666667 0l-0.5916666666666667 0.5916666666666667a0.4166666666666667 0.4166666666666667 0 0 0 0 0.5916666666666667l3.566666666666667 3.566666666666667a0.42500000000000004 0.42500000000000004 0 0 0 0.5833333333333334 0L19.166666666666668 5a2.9416666666666664 2.9416666666666664 0 0 0 0 -4.166666666666667Z"
                      fill="#000000"
                      strokeWidth={0.8333333333333334}
                    />
                  </g>
                </svg>
              </CloudinaryUploadWidget>
              {user?.image && (
                <img
                  src={`https://res.cloudinary.com/dquhriqz3/image/upload/${user?.image}`}
                  alt=""
                  className=" h-full w-full rounded-full"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col pt-5 gap-3 self-center place-self-center">
            {user?.provider === "email" && (
              <button className="text-black" onClick={profileChangePassword}>
                {t("Cambiar Contraseña")}
              </button>
            )}
            <button className="text-black" onClick={handleLogOut}>
              {t("Cerrar Sesión")}
            </button>
          </div>
        </div>
      </div>
      <ProfileFormComponent user={user} />
    </div>
  );
}

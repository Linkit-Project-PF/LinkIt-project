import { t } from "i18next";
import Swal from "sweetalert2";
import swal from "sweetalert";
import axios from "axios";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { isValid } from "i18n-iso-countries";

interface ExistingVacanciesOptionsProps {
  setSaveStatus: (status: boolean) => void;
  // editJDS: () => void;
  // editing: boolean;
  // handleSave: (arrayProps: string[]) => void;
  id: string;
  setViewForm: (status: boolean) => void;
  setEditing: (status: { isEditing: boolean; vacancieID?: string }) => void;
  isVisible: boolean;
}

export default function ExistingVacanciesOptions({
  setSaveStatus,
  // editJDS,
  // editing,
  // handleSave,
  id,
  setViewForm,
  setEditing,
  isVisible
}: ExistingVacanciesOptionsProps) {
  const dispatch = useDispatch();

  const token = useSelector((state: any) => state.Authentication.token);

  const showForm = () => {
    Swal.fire({
      title: t("¡Recordatorio importante!"),
      text: t(
        "Recuerda que el código de vacante y nombre de la empresa deben coincidir con la tabla Client Follow Up para la correcta visualización por parte de empresas y/o Talento"
      ),
      icon: "info",
      background: "#ECEEF0",
      allowOutsideClick: true,
      confirmButtonColor: "#01A28B",
      confirmButtonText: t("Continuar"),
    }).then((result) => {
      if (result.isConfirmed) {
        setSaveStatus(false);
        setViewForm(true);
      }
    });
  };
  const updateVacancie = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log("updateVacancie")
    setEditing({
      isEditing: true,
      vacancieID: id,
    });
    showForm();
  };

  const hideVacancie = async (e: React.MouseEvent) => {
    e.preventDefault()
    swal({
      title: t("¿Deseas cambiar la vista de la vacante?"),
      icon: "warning",
      buttons: [t("Cancelar"), t("Aceptar")],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await axios.delete(
            `https://linkit-server.onrender.com/jds/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Accept-Language": sessionStorage.getItem("lang"),
              },
            }
          );
          dispatch(setJobOffers(response.data));
          swal(t("Cambio de vista exitoso"), { icon: "success" });
        } catch (error) {
          console.error(
            t("Error al enviar la solicitud:"),
            (error as Error).message
          );
        }
      }
    });
    setSaveStatus(true);
  };

  const deleteVacancie = async (e: React.MouseEvent) => {
    e.preventDefault()
    swal({
      title: t("¿Deseas eliminar la vacante?"),
      icon: "warning",
      buttons: [t("Cancelar"), t("Aceptar")],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await axios.delete(
            `https://linkit-server.onrender.com/jds/delete/${id}?total=true`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Accept-Language": sessionStorage.getItem("lang"),
              },
            }
          );
          dispatch(setJobOffers(response.data));
          swal(t("Vacante eliminada"), { icon: "success" });
        } catch (error) {
          console.error(
            t("Error al enviar la solicitud:"),
            (error as Error).message
          );
        }
      }
    });
    setSaveStatus(true);
  };

  return (
    <div>
      <div
        key={id}
        className="capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1 "
      >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2"
          onClick={updateVacancie}
        >
          {t("Editar")}
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2mr-2" onClick={hideVacancie}>
          {isVisible? t("Mostrar") : t("Ocultar")}
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2" onClick={deleteVacancie}>
          {t("Eliminar")}
        </button>
      </div>
    </div>
  );
}

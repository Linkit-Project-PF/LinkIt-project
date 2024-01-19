import { useState } from "react";
import { ViewColHeadAdmins } from "../../../admin.types";
import swal from "sweetalert";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  searchUsersAdmins,
  setUsersAdmins,
  sortUsersAdmins,
} from "../../../../../redux/features/UsersSlice";
import { useTranslation } from "react-i18next";
import PermissionsForm from "./PermissionsForm";

interface HeadAdmins {
  hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
  viewCol: ViewColHeadAdmins;
  selectedRows: Set<string>;
  editing: boolean;
  editAdmin: () => void;
  handleSave: (arrayProps: string[]) => void;
  setSaveStatus: (status: boolean) => void;
}

export default function HeadAdmins({
  hideCol,
  viewCol,
  selectedRows,
  editing,
  editAdmin,
  handleSave,
  setSaveStatus,
}: HeadAdmins) {
  const arraySelectedRows = [...selectedRows];
  const { t } = useTranslation();
  const token = useSelector((state: any) => state.Authentication.token);
  const dispatch = useDispatch();

  //? OPTIONS COLUMNS
  const [options, setOptions] = useState(false);
  const [permVisible, isPermVisible] = useState(false);
  const hideOptions = () => {
    setOptions(!options);
  };
  //?

  //?BUSCAR
  const handleSearch = (searchTerm: string): void => {
    dispatch(searchUsersAdmins(searchTerm));
  };
  //?

  //?ORDENAR
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target;
    dispatch(sortUsersAdmins(value));
  };
  //?

  const deleteUser = async () => {
    swal({
      title: "¿Deseas eliminar el Usuario?",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          arraySelectedRows.forEach(async (id: string) => {
            const response = await axios.delete(
              `https://linkit-server.onrender.com/admins/delete/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Accept-Language": sessionStorage.getItem("lang"),
                },
              }
            );
            dispatch(setUsersAdmins(response.data));
            swal("Usuario eliminado", { icon: "success" });
          });
        } catch (error) {
          console.error(
            "Error al enviar la solicitud:",
            (error as Error).message
          );
        }
      }
    });
    setSaveStatus(true);
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl pl-16 py-6">Administradores</h1>
      </div>
      <div className=" flex flex-row justify-around pb-6">
        <div className="flex flex-row">
          <div>
            <h1>Ordenar:</h1>
          </div>
          <div>
            <select onChange={handleSort} className={`styles-head ml-2`}>
              <option value="recent">Recientes</option>
              <option value="old">Antiguos</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-row">
            <div>
              <button onClick={hideOptions}>Columnas</button>
            </div>
          </div>
          {options && (
            <div className="capitalize flex flex-col border-2 border-linkIt-300 rounded-lg mt-6 w-60 pl-2 absolute bg-linkIt-500">
              {Object.entries(viewCol).map(([key, value]) => (
                <label key={key} className="">
                  <input
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={hideCol}
                  />
                  {key}
                </label>
              ))}
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Buscar"
            onChange={(e) => handleSearch(e.target.value)}
            className={`styles-head`}
          />
        </div>
      </div>

      <div>
        <span className="flex flex-row pl-8">
          Seleccionados: {selectedRows.size}
          {selectedRows.size > 0 && (
            <div className="flex flex-row">
              {editing ? (
                <div>
                  <button
                    onClick={() => handleSave(arraySelectedRows)}
                    className="pl-6 hover:text-linkIt-300"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={editAdmin}
                    className="pl-6 hover:text-linkIt-300"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={editAdmin}
                    className="pl-6 hover:text-linkIt-300"
                  >
                    {selectedRows.size && "Editar"}
                  </button>
                </div>
              )}
              <button onClick={deleteUser} className="pl-6 hover:text-red-600">
                {selectedRows.size && "Eliminar"}
              </button>
            </div>
          )}
          {selectedRows.size === 1 && (
            <button
              onClick={() => isPermVisible(true)}
              className="ml-5 hover:cursor-pointer hover:text-cyan-500"
            >
              {t("Asignar permisos")}
            </button>
          )}
        </span>
        {permVisible && (
          <PermissionsForm
            admin={arraySelectedRows[0]}
            hideFunction={isPermVisible}
          />
        )}
      </div>
    </div>
  );
}

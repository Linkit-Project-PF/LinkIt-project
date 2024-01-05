import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import { UserProps } from "../../admin.types";
import { useSelector } from "react-redux";

type stateProps = UserProps[];

export default function UsersAdmin() {
  const { t } = useTranslation();
  const [userList, setUserList] = useState<stateProps>([]);
  const token = useSelector((state: any) => state.Authentication.token);
  const [saveStatus, setSaveStatus] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<Partial<UserProps>>({
    firstName: "",
    lastName: "",
    image: "",
    country: "",
    cv: "",
    linkedin: "",
  });

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataToShow = userList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevius = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!userList.length) {
          const response = await axios(
            "https://linkit-server.onrender.com/users/find",
            { headers: { Authorization: `Bearer ${token}`,
            'Accept-Language': sessionStorage.getItem('lang') } }
          );
          setUserList(response.data);
        }
      } catch (error) {
        console.error("Error al cargar los usuarios", error);
      }
    };
    loadData();
  }, [saveStatus]);

  const deleteUser = async (id: string) => {
    const resultado = confirm(t("¿Deseas eliminar el usuario?"));
    if (resultado) {
      try {
        const response = await axios.delete(
          `https://linkit-server.onrender.com/users/delete/${id}`,
          {
            headers: { Authorization: `Bearer ${token}`,
            'Accept-Language': sessionStorage.getItem('lang') },
          }
        );
        setUserList(response.data);
        setSaveStatus(!saveStatus);
        return swal(t("Usuario Eliminado"));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (id: string) => {
    const rowToEdit = userList.find((r) => r._id === id) as UserProps;
    const editedProperties = {
      firstName: rowToEdit.firstName,
      lastName: rowToEdit.lastName,
      image: rowToEdit.image,
      country: rowToEdit.country,
      cv: rowToEdit.cv,
      linkedin: rowToEdit.linkedin,
    };
    if (rowToEdit) {
      setEditRow(id);
      setEditing(false);
      setEditedData(editedProperties);
      setSaveStatus(!saveStatus);
    }
  };

  const handleSave = async (id: string) => {
    try {
      const endPoint = `https://linkit-server.onrender.com/users/update/${id}`;
      const result = await axios.put(endPoint, editedData, {
        headers: { Authorization: `Bearer ${token}`,
        'Accept-Language': sessionStorage.getItem('lang') },
      });
      setUserList(result.data);
    } catch (error) {
      console.error(error);
      console.error("Error al enviar la solicitud: ", (error as Error).message);
    }
    setEditing(false);
    setEditRow(null);
    setEditedData({});
    setSaveStatus(!saveStatus);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") {
      setEditedData({
        ...editedData,
        firstName: value.split(" ")[0],
        lastName: value.split(" ")[1] ?? "",
      });
    } else {
      setEditedData({
        ...editedData,
        [name]: value,
      });
    }
  };

  return (
    <div className="mb-32">
      <div className="bg-linkIt-500 mx-12  rounded-[20px] rounded-b-none w-auto ">
        <h1 className="text-4xl pl-16 py-6">{t("Gestión de usuarios")}</h1>
        <div className="flex flex-col items-end justify-center pr-32 pb-10">
          <div className="pb-2">
            <button
              className=""
              onClick={handlePrevius}
              disabled={currentPage === 0}
            >
              {t("Anterior")}
            </button>
            <button
              className="ml-12"
              onClick={handleNext}
              disabled={endIndex >= userList.length}
            >
              {t("Siguiente")}
            </button>
          </div>
          <span>
            {t("Pagina")} {currentPage + 1} {t("de")} {totalPages}
          </span>
        </div>
      </div>

      <table className="w-full sm:w-[95%] mx-auto bg-linkIt-500 rounded-[20px] rounded-t-none overflow-x-scroll">
        <thead>
          <tr className="h-12">
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t("Nombre")}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t("Correo")}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t("País")}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t("Hoja de vida")}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t("Rol")}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t("Linkedin")}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t("Postulaciones")}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t("Activo")}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((u: UserProps) => (
            <tr key={u._id}>
              <td className="px-1"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== u._id ? (
                  u.firstName + " " + u.lastName
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder={u.firstName + " " + u.lastName}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {u.email}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== u._id ? (
                  u.country
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="country"
                    autoComplete="off"
                    placeholder={u.country}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== u._id ? (
                  u.cv
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="cv"
                    autoComplete="off"
                    placeholder={u.cv}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {u.role}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== u._id ? (
                  u.linkedin
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="linkedin"
                    autoComplete="off"
                    placeholder={u.linkedin}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">0</td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {u.active ? "Sí" : "No"}
              </td>
              <td className="p-2 border-b-2 border-black">
                {!editing && editRow !== u._id ? (
                  <button
                    onClick={() => handleEdit(u._id)}
                    className="active:scale-90 m-1 h-fit w-fit"
                  >
                    {t("Editar")}
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() => handleSave(u._id)}
                      className="active:scale-90 m-1 h-fit w-fit"
                    >
                      {t("Guardar")}
                    </button>
                    <button
                      onClick={() => {
                        setEditing(false);
                        setEditRow(null);
                        setEditedData({});
                        setSaveStatus(!saveStatus);
                      }}
                    >
                      {t("Cancelar")}
                    </button>
                  </div>
                )}
                <button
                  onClick={() => deleteUser(u._id)}
                  className="active:scale-90 m-1 h-fit w-fit"
                >
                  {t("Eliminar")}
                </button>
              </td>
              <td className="px-1"></td>
            </tr>
          ))}
          <tr>
            <td className="pb-8"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

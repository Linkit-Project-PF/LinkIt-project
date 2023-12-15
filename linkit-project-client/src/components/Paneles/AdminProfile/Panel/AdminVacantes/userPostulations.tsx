import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserProps } from "../../../admin.types";
import { CreatePostulation } from "./createPost";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


export interface localState {
  user: UserProps;
  status: string;
}

interface propsInterface {
  onClose: () => void;
  jdId: string;
}

export function UserPostulations(props: propsInterface) {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const [userList, setUserList] = useState<Partial<localState[]>>([]);
  const [createForm, viewCreateForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState("");
  const [prevStatus, setPrevStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, isSaving] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const token = useSelector((state: any) => state.Authentication.token);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          `https://linkit-server.onrender.com/jds/find?id=${props.jdId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const users = data.users;
        const newArr = [];
        for (let i = 0; i < users.length; i++) {
          const { data } = await axios.get(
            `https://linkit-server.onrender.com/users/find?id=${users[i].user}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const newObj = { user: data, status: users[i].status };
          newArr.push(newObj);
        }
        setUserList(newArr);
      } catch (error: any) {
        console.error(error.response.data);
      }
    };
    getUsers();
  }, [saving]);

  const filteredUsers = userList.filter((user) => {
    const searchTermLower = searchTerm.toLowerCase();
    const nameLower = user?.user?.firstName.toLowerCase();
    const lastNameLower = user?.user?.lastName.toLowerCase();

    //coinciencia nombre o apellido
    const nameMatch = nameLower?.includes(searchTermLower);
    const lastNameMatch = lastNameLower?.includes(searchTermLower);
    // coincidencia nombre y apellido
    const fullNameMatch = `${nameLower} ${lastNameLower}`.includes(searchTermLower);

    return nameMatch || lastNameMatch || fullNameMatch;
  });

  function showCreateForm(): void {
    const result = confirm(
      t("La relacion de usuarios con vacantes no se deberia hacer por este medio, aun asi desea continuar?")
    );
    if (result) {
      viewCreateForm(true);
    }
  }

  function hideCreateForm(): void {
    viewCreateForm(false);
  }

  async function handleDelete(user: string, jd: string) {
    const result = confirm(
      t("¿Esta seguro de borrar la vacante? Esto eliminara todas las relaciones y es irreversible. Puede cambiar la vacante a un estado similar")
    );
    if (result) {
      try {
        await axios.put(
          "https://linkit-server.onrender.com/jds/userRelation",
          { user, jd, status: "any", operation: "delete" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        await axios.put(
          "https://linkit-server.onrender.com/users/jdRelation",
          { user, jd, status: "any", operation: "delete" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const newData = await axios(
          "https://linkit-server.onrender.com/jds/find",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch(setJobOffers(newData.data));
        props.onClose();
        alert(t("Vacante eliminada exitosamente"));
      } catch (error: any) {
        alert(error.response);
      }
      isSaving(!saving)
    }
  }

  async function handleEdit(event: any, jd?: string, user?: string) {
    if (event.target.id === "edit") {
      setEditing(true);
    } else if (event.target.id === "save") {
      try {
        await axios.put(
          "https://linkit-server.onrender.com/jds/userRelation",
          { user, jd, status, operation: "status" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        await axios.put(
          "https://linkit-server.onrender.com/users/jdRelation",
          { user, jd, status, operation: "status" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Se ha cambiado el estado existosamente");
        isSaving(!saving);
      } catch (error: any) {
        alert(error.response.data);
      }
      setEditing(false);
      setStatus("");
      setPrevStatus("");
      setError("");
      isSaving(!saving)
    }
  }

  async function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    if (event.target.value === prevStatus)
      setError(t("El estado seleccionado es el mismo estado anterior"));
    else setError("");
    setStatus(event.target.value);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 p-[6vw]">
      <div className="relative grid items-center bg-linkIt-500 rounded-[20px] border-[3px] border-linkIt-300 pl-6 pr-10 pt-10 pb-10 w-fit">
        <a onClick={props.onClose} className="absolute top-[1vh] left-[1vw] font-bold font-montserrat hover:text-red-600 cursor-pointer">X</a>
        <div className="flex justify-start pb-4 pl-10">
          <input
            className=""
            type="text"
            placeholder="Buscar nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="min-w-full divide-y divide-gray-200" >
          <thead className=" bg-gray-50">
            <tr className="">
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">ID</th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">{t('Nombre')}
              </th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">{t('Apellido')}</th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">{t('Correo')}</th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">{t('Ubicacion')}</th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">{t('Tecnologias')}</th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">LinkedIn</th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">CV</th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">{t('Estado')}</th>
              <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">{t('Acciones')}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((obj) => (
              <tr key={obj?.user._id} className="">
                <td className="px-6 py-4 text-[0.8vw]">{obj?.user._id}</td>
                <td className="px-6 py-4 text-[0.8vw]">{obj?.user.firstName}</td>
                <td className="px-6 py-4 text-[0.8vw]">{obj?.user.lastName}</td>
                <td className="px-6 py-4 text-[0.8vw]">{obj?.user.email}</td>
                <td className="px-6 py-4 text-[0.8vw]">{obj?.user.country}</td>
                <td className="px-6 py-4 text-[0.8vw]">{obj?.user.technologies.join(", ")}</td>
                <td className="px-6 py-4 text-[0.8vw]">{obj?.user.linkedin}</td>
                <td className="px-6 py-4 text-[0.8vw]">{obj?.user.cv}</td>
                <td className="px-6 py-4 text-[0.8vw]">
                  {editing ? (
                    <select defaultValue={obj?.status} onChange={handleChange}>
                      <option value="applied">{t('Postulado')}</option>
                      <option value="state1">{t('Estado1')}</option>
                      <option value="state2">{t('Estado2')}</option>
                      <option value="state3">{t('Estado3')}</option>
                    </select>
                  ) : (
                    obj?.status
                  )}
                </td>
                <td className="flex flex-row  justify-around items-center">
                  {editing ? (
                    <button
                      className="whitespace-nowrap text-[0.8vw] cursor-pointer hover:text-linkIt-300 mx-1 py-4"
                      type="button"
                      onClick={(event) =>
                        handleEdit(event, props.jdId, obj?.user._id)
                      }
                      id="save"
                      disabled={error ? true : false}
                    >
                      {t('Guardar')}
                    </button>
                  ) : (
                    <a
                      className="whitespace-nowrap text-[0.8vw] cursor-pointer hover:text-linkIt-300 py-4"
                      onClick={(event) => {
                        setPrevStatus(obj?.status as string);
                        handleEdit(event);
                        setStatus(obj?.status as string);
                        setError(
                          t("El estado seleccionado es el mismo estado anterior")
                        );
                      }}
                      id="edit"
                    >
                      {t('Editar')}
                    </a>
                  )}

                  {editing ? (
                    <a
                      className="whitespace-nowrap text-[0.8vw] cursor-pointer hover:text-linkIt-300 mx-1 py-4"
                      onClick={() => {
                        setEditing(false);
                        setStatus("");
                        setPrevStatus("");
                        setError("");
                      }}
                    >
                      {t('Cancelar')}
                    </a>
                  ) : null}

                  <a
                    className="whitespace-nowrap text-[0.8vw] cursor-pointer hover:text-linkIt-300 mx-1 py-4"
                    onClick={() =>
                      handleDelete(obj?.user._id as string, props.jdId)
                    }
                  >
                    {t('Eliminar')}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {createForm && (
          <CreatePostulation
            onClose={hideCreateForm}
            jdId={props.jdId}
            hideMainForm={props.onClose}
          />
        )}
        <div className="flex justify-center">
          <a onClick={showCreateForm} className=" justify-center items-center text-center row-start-2 bg-linkIt-300 w-fit p-2 text-[0.8vw] rounded-[7px] cursor-pointer text-white font-manrope border-[0.1vw] mt-4 hover:border-linkIt-300 hover:bg-transparent hover:text-black">{t('Crear')}</a>
        </div>
      </div>
    </div>
  );
}

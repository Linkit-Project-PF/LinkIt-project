import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserProps } from "../../../admin.types";
import { CreatePostulation } from "./createPost";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import { useEffect, useState } from "react";

export interface localState {
  user: UserProps;
  status: string;
}

interface propsInterface {
  onClose: () => void;
  jdId: string;
}

export function UserPostulations(props: propsInterface) {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState<Partial<localState[]>>([]);
  const [createForm, viewCreateForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState("");
  const [prevStatus, setPrevStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, isSaving] = useState(false);

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
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, [saving]);

  function showCreateForm(): void {
    const result = confirm(
      "La relacion de usuarios con vacantes no se deberia hacer por este medio, aun asi desea continuar?"
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
      "¿Esta seguro de borrar la vacante? Esto eliminara todas las relaciones y es irreversible. Puede cambiar la vacante a un estado similar"
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
        alert("Vacante eliminada exitosamente");
      } catch (error: any) {
        alert(error.response);
      }
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
        isSaving(!saving);
        alert("Se ha cambiado el estado existosamente");
      } catch (error: any) {
        alert(error.response);
      }
      setEditing(false);
      setStatus("");
      setPrevStatus("");
      setError("");
    }
  }

  async function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    if (event.target.value === prevStatus)
      setError("El estado seleccionado es el mismo estado anterior");
    else setError("");
    setStatus(event.target.value);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 p-[6vw]">
      <div className="relative grid items-center bg-linkIt-500 rounded-[20px] border-[3px] border-linkIt-300 p-[3vw]">
      <a onClick={props.onClose} className="absolute top-[1vh] left-[1vw]">X</a>
      <a onClick={showCreateForm} className="text-center row-start-2 ">CREATE</a>
      <table className="min-w-full divide-y divide-gray-200" >
        <thead className="bg-gray-50">
          <tr className="">
            <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">ID</th>
            <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">Nombre</th>
            <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">Correo</th>
            <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">Ubicacion</th>
            <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">Tecnologias</th>
            <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">LinkedIn</th>
            <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">CV</th>
            <th className="px-6 py-3 text-left text-[0.7vw] font-medium tracking-wider font-montserrat">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userList.map((obj) => (
            <tr key={obj?.user._id} className="">
              <td className="px-6 py-4 whitespace-nowrap text-[0.8vw]">{obj?.user._id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-[0.8vw]">{obj?.user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-[0.8vw]">{obj?.user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-[0.8vw]">{obj?.user.country}</td>
              <td className="px-6 py-4 whitespace-nowrap text-[0.8vw]">{obj?.user.technologies.join(", ")}</td>
              <td className="px-6 py-4 whitespace-nowrap text-[0.8vw]">{obj?.user.linkedin}</td>
              <td className="px-6 py-4 whitespace-nowrap text-[0.8vw]">{obj?.user.cv}</td>
              <td className="px-6 py-4 whitespace-nowrap text-[0.8vw]">
                {editing ? (
                  <select defaultValue={obj?.status} onChange={handleChange}>
                    <option value="applied">Postulado</option>
                    <option value="state1">Estado1</option>
                    <option value="state2">Estado2</option>
                    <option value="state3">Estado3</option>
                  </select>
                ) : (
                  obj?.status
                )}
              </td>
              <td>
                {editing ? (
                  <button
                    type="button"
                    onClick={(event) =>
                      handleEdit(event, props.jdId, obj?.user._id)
                    }
                    id="save"
                    disabled={error ? true : false}
                  >
                    Guardar
                  </button>
                ) : (
                  <a
                   className="px-6 py-4 whitespace-nowrap text-[0.8vw]"
                    onClick={(event) => {
                      setPrevStatus(obj?.status as string);
                      handleEdit(event);
                      setStatus(obj?.status as string);
                      setError(
                        "El estado seleccionado es el mismo estado anterior"
                      );
                    }}
                    id="edit"
                  >
                    Editar
                  </a>
                )}
              </td>
              {editing ? (
                <td>
                  <a
                  
                    onClick={() => {
                      setEditing(false);
                      setStatus("");
                      setPrevStatus("");
                      setError("");
                    }}
                  >
                    Cancelar
                  </a>
                </td>
              ) : null}
              <td>
                <a
                className="px-6 py-4 whitespace-nowrap text-[0.8vw]"
                  onClick={() =>
                    handleDelete(obj?.user._id as string, props.jdId)
                  }
                >
                  Eliminar
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
      </div>
    </div>
  );
}

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
    <div>
      <a onClick={props.onClose}>X</a>
      <a onClick={showCreateForm}>CREATE</a>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Ubicacion</th>
            <th>Tecnologias</th>
            <th>LinkedIn</th>
            <th>CV</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((obj) => (
            <tr key={obj?.user._id} className="gap-4">
              <td>{obj?.user._id}</td>
              <td>{obj?.user.name}</td>
              <td>{obj?.user.email}</td>
              <td>{obj?.user.country}</td>
              <td>{obj?.user.technologies.join(", ")}</td>
              <td>{obj?.user.linkedin}</td>
              <td>{obj?.user.cv}</td>
              <td>
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
  );
}

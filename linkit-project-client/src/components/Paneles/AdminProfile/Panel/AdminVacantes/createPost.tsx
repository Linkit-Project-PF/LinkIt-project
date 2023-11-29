import { useState } from "react";
import { validatePostulation } from "./Validation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";

interface relationObj {
  user: string;
  jd: string;
  status: string;
}

interface propsInterface {
  onClose: () => void;
  jdId: string;
  hideMainForm: () => void;
}

export function CreatePostulation(props: propsInterface) {
  const dispatch = useDispatch();
  const [info, setInfo] = useState<relationObj>({
    user: "",
    jd: props.jdId,
    status: "",
  });
  const [errors, setErrors] = useState<Partial<relationObj>>({
    status: "Por favor selecciona un estado",
  });
  const token = useSelector((state: any) => state.Authentication.token);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
    setErrors(validatePostulation({ ...info, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await axios.put(
        "https://linkit-server.onrender.com/jds/userRelation",
        {
          ...info,
          operation: "create",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await axios.put(
        "https://linkit-server.onrender.com/users/jdRelation",
        {
          ...info,
          operation: "create",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const newData = await axios(
        "https://linkit-server.onrender.com/jds/find",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(setJobOffers(newData.data));
      props.onClose();
      props.hideMainForm();

      alert("Se ha creado una nueva vacante exitosamente.");
    } catch (error: any) {
      alert(error.response);
    }
  }

  function handleInputErase() {
    setInfo({
      user: "",
      jd: props.jdId,
      status: "",
    });
    setErrors({ status: "Por favor selecciona un estado" });
  }

  return (
    <div>
      <a onClick={props.onClose}>X</a>
      <form onSubmit={handleSubmit}>
        <label>ID de la vacante: </label>
        <input
          name="jd"
          value={info.jd}
          type="text"
          onChange={handleChange}
          disabled
        />
        <p>{errors.jd}</p>
        <label>ID del usuario: </label>
        <input
          name="user"
          value={info.user}
          type="text"
          onChange={handleChange}
        />
        <p>{errors.user}</p>
        <label>Estado inicial: </label>
        <select
          onChange={handleChange}
          value={info.status}
          name="status"
          id="status"
        >
          <option value=""></option>
          <option value="applied">Postulado</option>
          <option value="state1">Estado1</option>
          <option value="state2">Estado2</option>
          <option value="state3">Estado3</option>
        </select>
        <p>{errors.status}</p>
        <button onClick={handleInputErase} type="button">
          Borrar
        </button>
        <button
          type="submit"
          disabled={errors.jd || errors.status || errors.user ? true : false}
          id="subButton"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import { validatePostulation } from "./Validation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const [info, setInfo] = useState<relationObj>({
    user: "",
    jd: props.jdId,
    status: "",
  });
  const [errors, setErrors] = useState<Partial<relationObj>>({
    status: t("Por favor selecciona un estado"),
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

      alert(t("Se ha creado una nueva vacante exitosamente."));
    } catch (error: any) {
      console.error(error);
    }
  }

  function handleInputErase() {
    setInfo({
      user: "",
      jd: props.jdId,
      status: "",
    });
    setErrors({ status: t("Por favor selecciona un estado") });
  }

  return (
    <div>
      <a onClick={props.onClose} className="font-bold font-montserrat hover:text-red-600 cursor-pointer">X</a>
      <form onSubmit={handleSubmit} className="min-w-full divide-y divide-gray-200 grid grid-cols-6">
        <label className="">{t('ID de la vacante:')} </label>
        <input
          className="appearance-none"
          name="jd"
          value={info.jd}
          type="text"
          onChange={handleChange}
          disabled
        />
        <p>{errors.jd}</p>
        <label>{t('ID del usuario:')} </label>
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
          <option value="applied">{t('Postulado')}</option>
          <option value="state1">{t('Estado1')}</option>
          <option value="state2">{t('Estado2')}</option>
          <option value="state3">{t('Estado3')}</option>
        </select>
        <p>{errors.status}</p>
        <button onClick={handleInputErase} type="button">
         {t('Borrar')}
        </button>
        <button
          type="submit"
          disabled={errors.jd || errors.status || errors.user ? true : false}
          id="subButton"
        >
          {t('Enviar')}
        </button>
      </form>
    </div>
  );
}

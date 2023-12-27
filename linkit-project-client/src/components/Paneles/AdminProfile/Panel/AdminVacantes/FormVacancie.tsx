import { useEffect, useState } from "react";
import axios from "axios";
import { validateVacancy } from "../../../errors/validation";
import { VacancyProps } from "../../../admin.types";
import { ValidationError } from "../../../errors/errors";
import swal from "sweetalert";
import { validations } from "./Validation";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";

type OnCloseFunction = () => void;

interface FormVacancieProps {
  onClose: OnCloseFunction;
  token: string;
  setSaveStatus: (status: boolean) => void;
}

interface InfoList {
  [key: string]: string[] | undefined;
}

export default function FormVacancie(props: FormVacancieProps) {
  const { t } = useTranslation()

  const token = useSelector((state: any) => state.Authentication.token);
  const [information, setInformation] = useState<Partial<VacancyProps>>({
    code: "",
    title: "",
    description: "", //! 10 chars minimum back requirement.
    type: "",
    location: "",
    modality: "",
    stack: [],
    aboutUs: "",
    aboutClient: "",
    responsabilities: "",
    requirements: [],
    niceToHave: [],
    benefits: [],
    company: "",
    status: "open",
  });
  // console.log(information)

  const [errors, setErrors] = useState({
    code: "",
    title: "",
    description: "",
    type: "",
    location: "",
    modality: "",
    stack: "",
    aboutUs: "",
    aboutClient: "",
    responsabilities: "",
    requirements: "",
    niceToHave: "",
    benefits: "",
    company: "",
  });

  // console.log(errors)

  const [infoList, setInfoList] = useState<InfoList>({
    stack: [],
    requirements: [],
    niceToHave: [],
    benefits: [],
  });
  const [allCompanies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const { data } = await axios.get(
          "https://linkit-server.onrender.com/companies/find",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCompanies(data);
      } catch (error) {
        alert(error);
      }
    };
    getCompanies();
    return () => setCompanies([]);
  }, []);

  const addToList = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { name } = e.currentTarget;
      const value = (e.target as HTMLInputElement).value;

      if (!infoList[name]?.includes(value)) {
        setInfoList({
          ...infoList,
          [name]: [...(infoList[name] || []), value],
        });

        setInformation({
          ...information,
          [name]: [...(infoList[name] || []), value],
        });
      } else {
        swal(t("Ya se encuentra agregado"));
      }

      (e.target as HTMLInputElement).value = ""; // Limpiar el valor
    }
  };

  const addToListBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.currentTarget;
    const value = (e.target as HTMLInputElement).value;

    if (value.trim() !== "") {
      if (!infoList[name]?.includes(value)) {
        setInfoList({
          ...infoList,
          [name]: [...(infoList[name] || []), value],
        });

        setInformation({
          ...information,
          [name]: [...(infoList[name] || []), value],
        });
      } else {
        swal(t("Ya se encuentra agregado"));
      }
    }
    (e.target as HTMLInputElement).value = "";
  };

  const deleteFromList = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
    listName: string
  ) => {
    e.preventDefault();

    const updateList = infoList[listName]?.filter((i) => i !== id);

    setInfoList({
      ...infoList,
      [listName]: updateList,
    });

    setInformation({
      ...information,
      [listName]: updateList,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const arrayProps = ["requisites", "stack", "niceToHave", "benefits"];
    if (arrayProps.includes(name)) {
      setInformation({
        ...information,
        [name]: value.split(", "),
      });
    } else {
      setInformation({
        ...information,
        [name]: value,
      });
    }
    const validationError = validations(information as VacancyProps);
    setErrors(validationError);
  };

  const handleBlurErrors = () => {
    const validationError = validations(information as VacancyProps);
    setErrors(validationError);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validations(information as VacancyProps);
    setErrors(validationError);
    try {
      validateVacancy(information as VacancyProps);
      const endPoint = "https://linkit-server.onrender.com/jds/create";
      const response = await axios.post(endPoint, information, {
        headers: { Authorization: `Bearer ${props.token}` },
      });

      swal(t("La vacante fue creada con éxito"));
      setInformation({
        code: "",
        title: "",
        description: "",
        type: "",
        location: "",
        modality: "",
        stack: [],
        aboutUs: "",
        aboutClient: "",
        responsabilities: "",
        requirements: [],
        niceToHave: [],
        benefits: [],
        company: "",
      });
      props.onClose();
      props.setSaveStatus(true)
      return response.data;
    } catch (error) {
      console.error((error as Error).message);
      throw new ValidationError(
        `${t('Error al ingresar los datos en el formulario')}: ${(error as Error).message
        }`
      );
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className=" flex flex-col justify-center items-center bg-linkIt-500 opa m-32 rounded-[20px] border-[3px] border-linkIt-300 ">
        <div>
          <h1 className="text-3xl my-12">{t('Nueva vacante')}</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
          action=""
        >
          <div className="flex flex-wrap justify-start mx-3 mb-6 px-16">
            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Código')}
              </label>
              <input
                className={
                  errors.code
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                type="text"
                name="code"
                placeholder={errors.code ? "*" : ""}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlurErrors}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Titulo')}
              </label>
              <input
                className={
                  errors.title
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                type="text"
                name="title"
                placeholder={errors.title ? "*" : ""}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlurErrors}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Nombre de la empresa')}
              </label>
              {/* <input
                className={
                  errors.company
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                type="text"
                name="company"
                placeholder={errors.company ? "*" : ""}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlurErrors}
              /> */}
              <select
                name="company"
                className={
                  errors.company
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                onChange={handleChange}
              >
                <option value="">Selecciona</option>
                {allCompanies.map((company: any) => (
                  <option>{company.companyName}</option>
                ))}
              </select>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Ubicación')}
              </label>
              <input
                className={
                  errors.location
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                type="text"
                name="location"
                placeholder={errors.location ? "*" : ""}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlurErrors}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Modalidad')}
              </label>
              <div>
                <select
                  name="modality"
                  className={
                    errors.modality
                      ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                      : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                  }
                  onChange={handleChange}
                >
                  <option value="">{t('Selecciona')}</option>
                  <option value="remote">{t('Remoto')}</option>
                  <option value="specific-remote">{t('Remoto específico')}</option>
                  <option value="on-site">{t('Presencial')}</option>
                  <option value="hybrid">{t('Hibrido')}</option>
                </select>
              </div>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Tipo')}
              </label>
              <div>
                <select
                  name="type"
                  className={
                    errors.type
                      ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                      : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                  }
                  onChange={handleChange}
                >
                  <option value="">{t('Selecciona')}</option>
                  <option value="full-time">{t('Tiempo completo')}</option>
                  <option value="part-time">{t('Medio tiempo')}</option>
                  <option value="freelance">{t('Independiente')}</option>
                </select>
              </div>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Tecnologías')}
              </label>
              <input
                className={
                  errors.stack
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                type="text"
                name="stack"
                autoComplete="off"
                placeholder={errors.stack ? "*" : ""}
                onChange={handleChange}
                onKeyDown={addToList}
                onBlur={errors.stack ? handleBlurErrors : addToListBlur}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Deseable')}
              </label>
              <input
                className="appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                type="text"
                name="niceToHave"
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={addToList}
                onBlur={errors.stack ? handleBlurErrors : addToListBlur}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Requisitos')}
              </label>
              <input
                className={
                  errors.requirements
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                type="text"
                name="requirements"
                autoComplete="off"
                placeholder={errors.requirements ? "*" : ""}
                onChange={handleChange}
                onKeyDown={addToList}
                onBlur={errors.requirements ? handleBlurErrors : addToListBlur}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Responsabilidades')}
              </label>
              <input
                className="appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                type="text"
                name="responsabilities"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Beneficios')}
              </label>
              <input
                className="appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                type="text"
                name="benefits"
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={addToList}
                onBlur={errors.benefits ? handleBlurErrors : addToListBlur}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Descripción')}
              </label>
              <textarea
                className={
                  errors.description
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                name="description"
                autoComplete="off"
                placeholder={errors.description ? "*" : ""}
                onChange={handleChange}
                onBlur={handleBlurErrors}
              ></textarea>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Acerca de la empresa')}
              </label>
              <textarea
                className="appearance-none block h-fit w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                name="aboutUs"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Acerca del cliente (opcional)')}
              </label>
              <textarea
                className="appearance-none block h-fit w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                name="aboutClient"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t('Estado (Abierta por defecto)')}
              </label>
              <div>
                <select
                  name="status"
                  className='"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                  onChange={handleChange}
                >
                  <option value="open">{t('Abierta')}</option>
                  <option value="first-interview">{t('Primera entrevista')}</option>
                  <option value="second-interview">{t('Segunda entrevista')}</option>
                  <option value="closed">{t('Cerrada')}</option>
                </select>
              </div>
            </div>
            {infoList && infoList.stack && infoList.stack.length > 0 ? (
              <div className="mx-4">
                <h3 className="text-md font-bold text-linkIt-200">
                  {t('Tecnologías agregadas')}
                </h3>
                <ul className="list-disc">
                  {infoList.stack?.map((t: string) => {
                    return (
                      <div key={t} className="flex">
                        <li className="text-sm">{t}</li>
                        <button
                          onClick={(e) => deleteFromList(e, t, "stack")}
                          className="ml-3 hover:text-red-500"
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {infoList &&
              infoList.requirements &&
              infoList.requirements.length > 0 ? (
              <div className="mx-4">
                <h3 className="text-md font-bold text-linkIt-200">
                  {t('Requisitos agregados')}
                </h3>
                <ul className="list-disc">
                  {infoList.requirements?.map((t: string) => {
                    return (
                      <div key={t} className="flex">
                        <li className="text-sm">{t}</li>
                        <button
                          onClick={(e) => deleteFromList(e, t, "requirements")}
                          className="ml-3 hover:text-red-500"
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {infoList &&
              infoList.niceToHave &&
              infoList.niceToHave.length > 0 ? (
              <div className="mx-4">
                <h3 className="text-md font-bold text-linkIt-200">
                  {t('Deseables agregados')}
                </h3>
                <ul className="list-disc">
                  {infoList.niceToHave?.map((t: string) => {
                    return (
                      <div key={t} className="flex">
                        <li className="text-sm">{t}</li>
                        <button
                          onClick={(e) => deleteFromList(e, t, "niceToHave")}
                          className="ml-3 hover:text-red-500"
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {infoList && infoList.benefits && infoList.benefits.length > 0 ? (
              <div className="mx-4">
                <h3 className="text-md font-bold text-linkIt-200">
                  {t('Beneficios agregados')}
                </h3>
                <ul className="list-disc">
                  {infoList.benefits?.map((t: string) => {
                    return (
                      <div key={t} className="flex">
                        <li className="text-sm">{t}</li>
                        <button
                          onClick={(e) => deleteFromList(e, t, "benefits")}
                          className="ml-3 hover:text-red-500"
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
          {errors.code ||
            errors.title ||
            errors.company ||
            errors.location ||
            errors.stack ||
            errors.requirements ||
            errors.description ? (
            <span className="text-red-500">
              {t('Los campos marcados con * son obligatiorios')}
            </span>
          ) : null}
          <div className="flex">
            <button
              onClick={props.onClose}
              className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 mr-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90"
            >
              {t('Volver')}
            </button>
            <button
              type="submit"
              className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 ml-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90"
            >
              {t('Publicar')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

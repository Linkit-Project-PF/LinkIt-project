import { useState } from "react";
import axios from "axios";
import { validateVacancy } from "../../../errors/validation";
import { VacancyProps } from "../../../admin.types";
import { ValidationError } from "../../../errors/errors";
import swal from "sweetalert";
import { validations } from "./Validation";

type OnCloseFunction = () => void;

interface FormVacancieProps {
  onClose: OnCloseFunction;
  token: string;
}

interface InfoList {
  [key: string]: string[] | undefined;
}

export default function FormVacancie(props: FormVacancieProps) {
  //TODO: Tarea para mi osea yo, implement a type or interface for this state & errors
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
        swal("Ya se encuentra agregado");
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
        swal("Ya se encuentra agregado");
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

      swal("La vacante fue creada con éxito");
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
      return response.data;
    } catch (error) {
      console.error((error as Error).message);
      throw new ValidationError(
        `Error al ingresar los datos en el formulario: ${
          (error as Error).message
        }`
      );
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className=" flex flex-col justify-center items-center bg-linkIt-500 opa m-32 rounded-[20px] border-[3px] border-linkIt-300 ">
        <div>
          <h1 className="text-3xl my-12">Nueva vacante</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
          action=""
        >
          <div className="flex flex-wrap justify-start mx-3 mb-6 px-16">
            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                Código
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
                Titulo
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
                Nombre de la empresa
              </label>
              <input
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
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                Ubicación
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
                Modalidad
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
                  <option value="">Selecciona</option>
                  <option value="remote">Remoto</option>
                  <option value="specific-remote">Remoto Específico</option>
                  <option value="on-site">Presencial</option>
                  <option value="hybrid">Hibrido</option>
                </select>
              </div>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                Tipo
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
                  <option value="">Selecciona</option>
                  <option value="full-time">Tiempo completo</option>
                  <option value="part-time">Medio tiempo</option>
                  <option value="freelance">Independiente</option>
                </select>
              </div>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                Tecnologías
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
                Deseable
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
                Requisitos
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
                Responsabilidades
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
                Beneficios
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
                Descripción
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
                Acerca de la empresa
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
                Acerca del cliente (opcional)
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
                Estado (Abierta por defecto)
              </label>
              <div>
                <select
                  name="status"
                  className='"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                  onChange={handleChange}
                >
                  <option value="open">Abierta</option>
                  <option value="first-interview">Primera entrevista</option>
                  <option value="second-interview">Segunda entrevista</option>
                  <option value="closed">Cerrada</option>
                </select>
              </div>
            </div>
            {infoList && infoList.stack && infoList.stack.length > 0 ? (
              <div className="mx-4">
                <h3 className="text-md font-bold text-linkIt-200">
                  Tecnologías agregadas
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
                  Requisitos agregados
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
                  Deseables agregados
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
                  Beneficios agregados
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
              Los campos marcados con * son obligatioris
            </span>
          ) : null}
          <div className="flex">
            <button
              onClick={props.onClose}
              className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 mr-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90"
            >
              Volver
            </button>
            <button
              type="submit"
              className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 ml-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90"
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

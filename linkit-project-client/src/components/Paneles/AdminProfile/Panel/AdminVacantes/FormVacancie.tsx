import { useEffect, useState } from "react";
import axios from "axios";
import { validateVacancy } from "../../../errors/validation";
import { VacancyProps } from "../../../admin.types";
import { ValidationError } from "../../../errors/errors";
import swal from "sweetalert";
import { validations } from "./Validation";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import { useNavigate } from "react-router-dom";
type OnCloseFunction = () => void;

interface FormVacancieProps {
  onClose: OnCloseFunction;
  token: string;
  setSaveStatus: (status: boolean) => void;
}

// interface FormObject {
//   en: VacancyProps
//   es: VacancyProps
// }

interface InfoList {
  [key: string]: string[] | undefined;
}

export default function FormVacancie({
  onClose,
  token,
  setSaveStatus,
}: FormVacancieProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [companyNames, setCompanyNames] = useState<string[]>([]);
  // const [vacancy, setVacancy] = useState<FormObject>();
  const [countries, setCountries] = useState([]);
  const [information, setInformation] = useState<Partial<VacancyProps>>({
    code: "",
    title: "",
    description: "",
    type: "",
    location: "",
    modality: "",
    stack: [],
    aboutUs: "",
    aboutClient: "",
    responsabilities: [],
    requirements: [],
    niceToHave: [],
    benefits: [],
    company: "",
    status: "open",
  });
console.log(information)
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

  const [infoList, setInfoList] = useState<InfoList>({
    stack: [],
    requirements: [],
    responsabilities:[],
    niceToHave: [],
    benefits: [],
  });

  useEffect(() => {
    const fetchAirtableData = async () => {
      const { data } = await axios.get(
        "https://linkit-server.onrender.com/resources/companyjds"
      );
      const allCompanies: string[] = [];
      const companies = data.map((entry: any) => entry.Client);
      companies.forEach((comp: string) => {
        if (!allCompanies.includes(comp)) allCompanies.push(comp);
      });
      setCompanyNames(allCompanies);
    };
    fetchAirtableData();
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

      (e.target as HTMLInputElement).value = "";
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

  useEffect(() => {
    if (!token) navigate("/unauthorized");
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://linkit-server.onrender.com/resources/countries"
      );
      const countries = data.map((country: any) => country.name);
      setCountries(countries);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validations(information as VacancyProps);
    setErrors(validationError);
    try {
      validateVacancy(information as VacancyProps);
      const endPoint = "https://linkit-server.onrender.com/jds/create";
      const response = await axios.post(endPoint, information, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Accept-Language": sessionStorage.getItem("lang"),
        },
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
        responsabilities: [],
        requirements: [],
        niceToHave: [],
        benefits: [],
        company: "",
      });
      const allJds = await axios.get(
        "https://linkit-server.onrender.com/jds/find",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": sessionStorage.getItem("lang"),
          },
        }
      );
      dispatch(setJobOffers(allJds.data));
      onClose();
      setSaveStatus(true);
      return response.data;
    } catch (error) { /* console.error(error) */
      console.error((error as Error).message);
      throw new ValidationError(
        `${t("Error al ingresar los datos en el formulario")}: ${
          (error as Error).message
        }`
      );
    }
  };


  const [inputClicked, setInputClicked] = useState(false);
  const handleInputClick = () => {
    setInputClicked(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className=" flex flex-col justify-center items-center bg-linkIt-500  mx-32 my-10  rounded-[7px] border-[3px] border-linkIt-300 ">
        <div className="flex w-full justify-end ">
          <button className={`background-button m-2`} onClick={onClose}>
            X
          </button>
        </div>
        <div className=" flex flex-col text-center mb-12">
          <h1 className="text-3xl">{t("Nueva vacante")}</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
          action=""
        >
          <div className="flex flex-wrap justify-start mx-3 mb-6 px-16">
            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Código")}
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
                {t("Titulo")}
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
                {t("Nombre de la empresa")}
              </label>
              <input
                className={
                  errors.company
                    ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                autoComplete="off"
                list="company-list"
                name="company"
                placeholder={errors.company ? "*" : ""}
                onChange={handleChange}
                onBlur={handleBlurErrors}
              />
              <datalist id="company-list">
                {companyNames.map((comp) => (
                  <option value={comp}></option>
                ))}
              </datalist>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Ubicación")}
              </label>
              <select
              className={
                errors.location
                  ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                  : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
              }
                onChange={handleChange}
                value={ information.location ?? "-"}
                name="location"
                placeholder={errors.location ? "*" : ""}
                autoComplete="off"
                onBlur={handleBlurErrors}
              >
                <option value=""></option>
                {countries.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select>
             
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Modalidad")}
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
                  <option value="">{t("Selecciona")}</option>
                  <option value="remote-local">{t("Remoto (Local)")}</option>
                  <option value="remote-regional">{t("Remoto (Regional)")}</option>
                  <option value="hybrid">{t("Híbrido")}</option>
                </select>
              </div>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Tipo")}
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
                  <option value="">{t("Selecciona")}</option>
                  <option value="full-time">{t("Tiempo completo")}</option>
                  <option value="part-time">{t("Medio tiempo")}</option>
                  <option value="freelance">{t("Independiente")}</option>
                </select>
              </div>
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Tecnologías")}
              </label>
              {inputClicked && (
                <span className="m-0 text-xs text-linkIt-300">
                  *Enter para agregar más tecnologías*
                </span>
              )}
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
                onClick={handleInputClick}
              />
              {infoList && infoList.stack && infoList.stack.length > 0 ? (
                <div className="mx-4">
                  <h3 className="text-xs font-bold text-linkIt-200">
                    {t("Tecnologías agregadas")}
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
            </div>

            

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Requisitos")}
              </label>
              {inputClicked && (
                <span className="m-0 text-xs text-linkIt-300">
                  *Presiona enter para agregar más de un Requisito*
                </span>
              )}
              <input
                className={
                  errors.requirements
                    ? '"appearance-none block w-full bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                type="text"
                name="requirements"
                autoComplete="off"
                placeholder={errors.requirements ? "*" : ""}
                onChange={handleChange}
                onKeyDown={addToList}
                onBlur={errors.requirements ? handleBlurErrors : addToListBlur}
                onClick={handleInputClick}
              />

              {infoList &&
              infoList.requirements &&
              infoList.requirements.length > 0 ? (
                <div className="mx-4">
                  <h3 className="text-xs font-bold text-linkIt-200">
                    {t("Requisitos agregados")}
                  </h3>
                  <ul className="list-disc">
                    {infoList.requirements?.map((t: string) => {
                      return (
                        <div key={t} className="flex">
                          <li className="text-sm">{t}</li>
                          <button
                            onClick={(e) =>
                              deleteFromList(e, t, "requirements")
                            }
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

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Deseable")}
              </label>
              {inputClicked && (
                <span className="m-0 text-xs text-linkIt-300">
                  *Presiona enter para agregar más de un Deseable*
                </span>
              )}
              <input
                className="appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                type="text"
                name="niceToHave"
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={addToList}
                onBlur={errors.stack ? handleBlurErrors : addToListBlur}
                onClick={handleInputClick}
              />
              {infoList &&
              infoList.niceToHave &&
              infoList.niceToHave.length > 0 ? (
                <div className="mx-4">
                  <h3 className="text-xs font-bold text-linkIt-200">
                    {t("Deseables agregados")}
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
            </div>

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Responsabilidades")}
              </label>
              {inputClicked && (
                <span className="m-0 text-xs text-linkIt-300">
                  *Presiona enter para agregar más de una Responsabilidad*
                </span>
              )}
              <input
                className={
                  errors.responsabilities
                    ? '"appearance-none block w-full bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                type="text"
                name="responsabilities"
                autoComplete="off"
                placeholder={errors.responsabilities ? "*" : ""}
                onChange={handleChange}
                onKeyDown={addToList}
                onBlur={errors.responsabilities ? handleBlurErrors : addToListBlur}
                onClick={handleInputClick}
              />

              {infoList &&
              infoList.responsabilities &&
              infoList.responsabilities.length > 0 ? (
                <div className="mx-4">
                  <h3 className="text-xs font-bold text-linkIt-200">
                    {t("Responsabilidades agregadas")}
                  </h3>
                  <ul className="list-disc">
                    {infoList.responsabilities?.map((t: string) => {
                      return (
                        <div key={t} className="flex">
                          <li className="text-sm">{t}</li>
                          <button
                            onClick={(e) =>
                              deleteFromList(e, t, "responsabilities")
                            }
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
{/* 
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Responsabilidades")}
              </label>
              <input
                className="appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                type="text"
                name="responsabilities"
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={noEnter}
              />
            </div> */}

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Beneficios")}
              </label>
              {inputClicked && (
                <span className="m-0 text-xs text-linkIt-300">
                  *Presiona enter para agregar más de un beneficio*
                </span>
              )}
              <input
                className="appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                type="text"
                name="benefits"
                autoComplete="off"
                onChange={handleChange}
                onKeyDown={addToList}
                onBlur={errors.benefits ? handleBlurErrors : addToListBlur}
                onClick={handleInputClick}
              />
              {infoList && infoList.benefits && infoList.benefits.length > 0 ? (
                <div className="mx-4">
                  <h3 className="text-xs font-bold text-linkIt-200">
                    {t("Beneficios agregados")}
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

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Descripción")}
              </label>
              <textarea
                className={
                  errors.description
                    ? '"appearance-none block w-full h-32 bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"'
                    : '"appearance-none block w-full h-32 bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'
                }
                name="description"
                autoComplete="off"
                placeholder={errors.description ? "*" : ""}
                onChange={handleChange}
                onBlur={handleBlurErrors}
              ></textarea>
            </div>

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Acerca de nosotros")}
              </label>
              <textarea
                className="appearance-none block h-32 w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                name="aboutUs"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                {t("Acerca del cliente")}
              </label>
              <textarea
                className="appearance-none block h-32 w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                name="aboutClient"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
          </div>
          {errors.code ||
          errors.title ||
          errors.company ||
          errors.location ||
          errors.stack ||
          errors.requirements ||
          errors.description ? (
            <span className="text-red-500">
              {t("Los campos marcados con * son obligatiorios")}
            </span>
          ) : null}
          <div className="flex m-4">
            <div className="pr-2">
              <button onClick={onClose} className={`transparent-background-button`}>
                {t("Volver")}
              </button>
            </div>
            <div className="pl-2">
              <button type="submit" className={`background-button`}>
                {t("Publicar")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

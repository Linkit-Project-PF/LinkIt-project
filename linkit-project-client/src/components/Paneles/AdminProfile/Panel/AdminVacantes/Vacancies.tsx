import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VacancyProps } from "../../../admin.types";
import FormVacancie from "./FormVacancie";
import axios from "axios";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import swal from "sweetalert";
import { UserPostulations } from "./userPostulations";
import { useTranslation } from "react-i18next";

type stateProps = {
  jobCard: {
    allJobOffers: VacancyProps[];
  };
};

export default function Vacancies() {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const data = useSelector((state: stateProps) => state.jobCard.allJobOffers);
  const token = useSelector((state: any) => state.Authentication.token);
  const [saveStatus, setSaveStatus] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [postulData, setPostulData] = useState<Partial<VacancyProps>>({});
  const [viewPostul, setViewPostul] = useState(false);
  const [editedData, setEditedData] = useState<Partial<VacancyProps>>({
    title: "",
    company: "",
    description: "",
    location: "",
    modality: "",
    type: "",
    requirements: [],
    stack: [],
    status: "",
  });

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataToShow = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevius = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios(
          "https://linkit-server.onrender.com/jds/find",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch(setJobOffers(response.data));
      } catch (error: any) {
        console.error("Error al cargar las ofertas de trabajo", error.response.data);
      }
    };
    loadData();
  }, [saveStatus]);

  const showForm = () => {
    setViewForm(true);
  };

  const noShowForm = () => {
    setViewForm(false);
    setSaveStatus(!saveStatus);
  };

  const hidePostul = () => {
    setViewPostul(false);
  };

  const deleteVacancie = async (id: string) => {
    const resultado = confirm(t("¿Deseas ocultar la vacante?"));
    if (resultado) {
      try {
        const response = await axios.delete(
          `https://linkit-server.onrender.com/jds/delete/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(setJobOffers(response.data));
        setSaveStatus(!saveStatus);
        return swal(t("Vacante ocultada"));
      } catch (error) {
        console.error(
          t("Error al enviar la solicitud:"),
          (error as Error).message
        );
      }
    }
  };

  const handleEdit = (id: string) => {
    const rowToEdit = data.find((v) => v._id === id);
    const editedProperties = {
      title: rowToEdit?.title,
      company: rowToEdit?.company,
      description: rowToEdit?.description,
      location: rowToEdit?.location,
      modality: rowToEdit?.modality,
      type: rowToEdit?.type,
      requirements: rowToEdit?.requirements,
      stack: rowToEdit?.stack,
      status: rowToEdit?.status,
    };
    if (rowToEdit) {
      setEditRow(id);
      setEditing(false);
      setEditedData(editedProperties);
      setSaveStatus(!saveStatus);
    }
  };

  const handlePostul = (id: string): void => {
    const activeRow = data.find((v) => v._id === id);
    if (activeRow) {
      setPostulData(activeRow);
      setViewPostul(true);
    }
  };

  const handleSave = async (id: string) => {
    try {
      const endPoint = `https://linkit-server.onrender.com/jds/update/${id}`;
      await axios.put(endPoint, editedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      console.error(error.response.data);
      console.error(t("Error al enviar la solicitud: "), (error as Error).message);
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
    if (name === "requirements" || name === "stack") {
      const valuesArray = value.split(",").map((i) => i.trim());
      setEditedData({
        ...editedData,
        [name]: valuesArray,
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
        <h1 className="text-4xl pl-16 py-6">{t('Gestión de vacantes')}</h1>

        <button
          className="bg-linkIt-300 flex items-center rounded-[7px] ml-20 p-3 h-10 text-white text-[10px] xl:text-xs shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out"
          onClick={showForm}
        >
          {t('Crear vacante')}
        </button>

        <div className="flex flex-col items-end justify-center pr-32 pb-10">
          <div className="pb-2">
            <button
              className=""
              onClick={handlePrevius}
              disabled={currentPage === 0}
            >
              {t('Anterior')}
            </button>
            <button
              className="ml-12"
              onClick={handleNext}
              disabled={endIndex >= data.length}
            >
              {t('Siguiente')}
            </button>
          </div>
          <span>
            {t('Pagina')} {currentPage + 1} {t('de')} {totalPages}
          </span>
        </div>
      </div>

      <table className="w-full sm:w-[95%] mx-auto bg-linkIt-500 rounded-[20px] rounded-t-none overflow-x-scroll">
        <thead>
          <tr className="h-12">
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Título Vacante')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Empresa')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Descripción')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Fecha de publicación')}{" "}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Ubicación')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Modalidad')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Tipo')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Requisitos')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Tecnologías')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Postulados')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Estado')}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              {t('Vista')}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((v: VacancyProps) => (
            <tr key={v._id}>
              <td className="px-1"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.title
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="title"
                    autoComplete="off"
                    placeholder={v.title}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.company
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="company"
                    autoComplete="off"
                    placeholder={v.company}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.description
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="description"
                    autoComplete="off"
                    placeholder={v.description}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {v.createdDate.split("T")[0]}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.location
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="location"
                    autoComplete="off"
                    placeholder={v.location}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.modality
                ) : (
                  <select
                    className="w-[80%]"
                    name="modality"
                    placeholder={v.modality}
                    onChange={handleChange}
                  >
                    <option value="remote">{t('Remoto')}</option>
                    <option value="specific-remote">{t('Remoto específico')}</option>
                    <option value="on-site">{t('Presencial')}</option>
                    <option value="hybrid">{t('Hibrido')}</option>
                  </select>
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.type
                ) : (
                  <select
                    className="w-[80%]"
                    name="type"
                    placeholder={v.type}
                    onChange={handleChange}
                  >
                    <option value="full-time">{t('Tiempo completo')}</option>
                    <option value="part-time">{t('Medio tiempo')}</option>
                    <option value="freelance">{t('Independiente')}</option>
                  </select>
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.requirements.join(", ")
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="requirements"
                    autoComplete="off"
                    placeholder={v.requirements.join(" ")}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.stack.join(" - ")
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="stack"
                    autoComplete="off"
                    placeholder={v.stack.join(" - ")}
                    onChange={handleChange}
                  />
                )}
              </td>

              <td className="px-1 border-b-2 border-black"></td>
              {/* <td className="border-b-2 border-black h-fit min-w-max">
                <a onClick={() => handlePostul(v._id)}>{v.users.length}</a>
              </td> */}
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== v._id ? (
                  v.status
                ) : (
                  <select
                    className="w-[80%]"
                    name="status"
                    placeholder={v.status}
                    onChange={handleChange}
                  >
                    <option value="open">{t('Abierta')}</option>
                    <option value="first-interview">{t('Primera entrevista')}</option>
                    <option value="second-interview">{t('Segunda entrevista')}</option>
                    <option value="closed">{t('Cerrada')}</option>
                  </select>
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {v.archived ? t("Oculta") : t("Visible")}
              </td>
              <td className="p-2 border-b-2 border-black">
                {!editing && editRow !== v._id ? (
                  <button
                    onClick={() => handleEdit(v._id)}
                    className="active:scale-90 m-1 h-fit w-fit"
                  >
                    {t('Editar')}
                  </button>
                ) : (
                  <button
                    onClick={() => handleSave(v._id)}
                    className="active:scale-90 m-1 h-fit w-fit"
                  >
                    {t('Guardar')}
                  </button>
                )}
                {!editing && editRow !== v._id ? null : (
                  <button
                    type="button"
                    onClick={() => {
                      setEditing(false);
                      setEditRow(null);
                      setEditedData({});
                    }}
                  >
                    {t('Cancelar')}
                  </button>
                )}
                <button
                  onClick={() => deleteVacancie(v._id)}
                  className="active:scale-90 m-1 h-fit w-fit"
                >
                  {t('Cerrar')}
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
      {viewPostul && (
        <UserPostulations
          onClose={hidePostul}
          jdId={postulData._id as string}
        />
      )}
      {viewForm && <FormVacancie

        setSaveStatus={setSaveStatus}
        onClose={noShowForm}
        token={token} />}
    </div>
  );
}

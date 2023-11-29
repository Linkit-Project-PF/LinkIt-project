import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vacancyProps } from "../../../admin.types";
import FormVacancie from "./FormVacancie";
import axios from "axios";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import swal from "sweetalert";
import { UserPostulations, arrivingInfo } from "./userPostulations";

type stateProps = {
  jobCard: {
    allJobOffers: vacancyProps[];
  };
};

export default function Vacancies() {
  const dispatch = useDispatch();
  const data = useSelector((state: stateProps) => state.jobCard.allJobOffers);
  const token = useSelector((state: any) => state.Authentication.token);
  const [saveStatus, setSaveStatus] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<Partial<vacancyProps>>({});
  const [postulData, setPostulData] = useState<Partial<vacancyProps>>({});
  const [viewPostul, setViewPostul] = useState(false);

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
      } catch (error) {
        console.error("Error al cargar las ofertas de trabajo", error);
      }
    };
    loadData();
  }, [saveStatus]);

  const showForm = () => {
    setViewForm(true);
  };

  const noShowForm = () => {
    setViewForm(false);
  };

  const hidePostul = () => {
    setViewPostul(false);
  };

  const deleteVacancie = async (id: string) => {
    const resultado = confirm("¿Deseas ocultar la vacante?");
    if (resultado) {
      try {
        const response = await axios.delete(
          `https://linkit-server.onrender.com/jds/delete/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(setJobOffers(response.data));
        return swal("Vacante ocultada");
      } catch (error) {
        console.error(
          "Error al enviar la solicitud:",
          (error as Error).message
        );
      }
    }
  };

  const handleEdit = (id: string) => {
    const rowToEdit = data.find((v) => v._id === id);
    if (rowToEdit) {
      setEditRow(id);
      setEditing(false);
      setEditedData(rowToEdit);
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
      console.error("Error al enviar la solicitud: ", (error as Error).message);
    }
    setEditing(false);
    setEditRow(null);
    setEditedData({});
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
        <h1 className="text-4xl pl-16 py-6">Gestión de vacantes</h1>

        <button
          className="bg-linkIt-300 flex items-center rounded-[7px] ml-20 p-3 h-10 text-white text-[10px] xl:text-xs shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out"
          onClick={showForm}
        >
          Crear vacante
        </button>

        <div className="flex flex-col items-end justify-center pr-32 pb-10">
          <div className="pb-2">
            <button
              className=""
              onClick={handlePrevius}
              disabled={currentPage === 0}
            >
              Anterior
            </button>
            <button
              className="ml-12"
              onClick={handleNext}
              disabled={endIndex >= data.length}
            >
              Siguiente
            </button>
          </div>
          <span>
            Pagina {currentPage + 1} de {totalPages}
          </span>
        </div>
      </div>

      <table className="w-[95%]  mx-12 bg-linkIt-500 rounded-[20px] rounded-t-none">
        <thead>
          <tr className="h-12">
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Título Vacante
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Empresa
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Descripción
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Fecha de publicación{" "}
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Locación
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Modalidad
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Tipo
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Requisitos
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Tecnologías
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Postulados
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Estado
            </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">
              Vista
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((v: vacancyProps) => (
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
                    <option value="remote">remote</option>
                    <option value="specific-remote">specific-remote</option>
                    <option value="on-site">on-site</option>
                    <option value="hybrid">hybrid</option>
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
                    <option value="full-time">full-time</option>
                    <option value="part-time">part-time</option>
                    <option value="freelance">freelance</option>
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
              <td className="border-b-2 border-black h-fit min-w-max">
                <a onClick={() => handlePostul(v._id)}>{v.users.length}</a>
              </td>
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
                    <option value="open">open</option>
                    <option value="first-interview">first-interview</option>
                    <option value="second-interview">second-interview</option>
                    <option value="closed">closed</option>
                  </select>
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {v.archived ? "Oculta" : "Visible"}
              </td>
              <td className="p-2 border-b-2 border-black">
                {!editing && editRow !== v._id ? (
                  <button
                    onClick={() => handleEdit(v._id)}
                    className="active:scale-90 m-1 h-fit w-fit"
                  >
                    Editar
                  </button>
                ) : (
                  <button
                    onClick={() => handleSave(v._id)}
                    className="active:scale-90 m-1 h-fit w-fit"
                  >
                    Guardar
                  </button>
                )}
                <button
                  onClick={() => deleteVacancie(v._id)}
                  className="active:scale-90 m-1 h-fit w-fit"
                >
                  Cerrar
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
          users={postulData.users as unknown as arrivingInfo[]}
          jdId={postulData._id as string}
        />
      )}
      {viewForm && <FormVacancie onClose={noShowForm} token={token} />}
    </div>
  );
}

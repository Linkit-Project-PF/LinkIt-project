import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vacancieProps } from "../../../admin.types";
import FormVacancie from "./FormVacancie";
import axios from "axios";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import swal from 'sweetalert';

type stateProps = {
  jobCard: {
    allJobOffers: vacancieProps[];
  };
};

export default function Vacancies() {
  const dispatch = useDispatch();
  const data = useSelector((state: stateProps) => state.jobCard.allJobOffers);
  // const token = useSelector((state:any) => state.Authentication.authState.token) //* token de usuario para autenticación de protección de rutas
  const [viewForm, setViewForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<Partial<vacancieProps>>({});

  

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);


  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataToShow = data.slice(startIndex, endIndex)

  const totalPages = Math.ceil(data.length / itemsPerPage)


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
          { headers: { Authorization: `Bearer 65566e201b4939c1cef34a54` } }
          //headers: { Authorization: `Bearer ${token}` }//* descomentar cuando se tenga  creado el logeo de admin
        );
        dispatch(setJobOffers(response.data));
      } catch (error) {
        console.error("Error al cargar las ofertas de trabajo", error);
      }
    };
    loadData();
  }, [dispatch]);

  const showForm = () => {
    setViewForm(true);
  };
  
  const noShowForm = () => {
    setViewForm(false);
  };

  const deleteVacancie = async (id: string) => {
    const resultado = confirm("¿Deseas cerrar la vacante?");
    if (resultado) {
      try {
        const response = await axios.delete(
          `https://linkit-server.onrender.com/jds/delete/${id}`,
          { headers: { Authorization: `Bearer 65566e201b4939c1cef34a54` } }
          // headers: { Authorization: `Bearer ${token}` } //* descomentar cuando se tenga  creado el logeo de admin
        );
        dispatch(setJobOffers(response.data));
        return swal("Vacante cerrada con exito");
      } catch (error) {
        console.error("Error al enviar la solicitud:", (error as Error).message);
      }
    }
  };

  const handleEdit = (id: string) => {
    const rowToEdit = data.find((v) => v._id === id);
    if (rowToEdit) {
      setEditRow(id);
      setEditing(false);
      setEditedData(rowToEdit);
    }
  };

  const handleSave = async (id: string) => {
    try {
      const endPoint = `https://linkit-server.onrender.com/jds/update/${id}`;
      await axios.put(endPoint, editedData, {
        headers: { Authorization: `Bearer 65566e201b4939c1cef34a54` },
        // headers: { Authorization: `Bearer ${token}` } //* descomentar cuando se tenga  creado el logeo de admin
      });
    } catch (error) {
      console.error("Error al enviar la solicitud: ", (error as Error).message);
    }
    setEditing(false);
    setEditRow(null);
    setEditedData({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "requirements" || name === "technologies") {
      setEditedData({
        ...editedData,
        [name]: value.split(", "),
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
        >Crear vacante
        </button>

        <div className="flex flex-col items-end justify-center pr-32 pb-10">
          <div className="pb-2">
            <button className="" onClick={handlePrevius} disabled={currentPage === 0}>Anterior</button>
            <button className="ml-12" onClick={handleNext} disabled={endIndex >= data.length}>Siguiente</button>
          </div>
          <span>Pagina {currentPage + 1} de {totalPages}</span>
        </div>

      </div>

      <table className="w-[95%]  mx-12 bg-linkIt-500 rounded-[20px] rounded-t-none">
        <thead>
          <tr className="h-12">
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Título Vacante</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Empresa</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Descripción</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Fecha de publicación </th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Locación</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Modalidad</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Requisitos</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Tecnologías</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Postulados</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((v: vacancieProps) => (
            <tr key={v._id}>
              <td className="px-2"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {!editing && !editing && editRow !== v._id ? (
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
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {!editing && !editing && editRow !== v._id ? (
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
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {!editing && !editing && editRow !== v._id ? (
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
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {v.createdDate.split("T")[0]}
              </td>
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {!editing && !editing && editRow !== v._id ? (
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
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {!editing && !editing && editRow !== v._id ? (
                  v.modality
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="modality"
                    autoComplete="off"
                    placeholder={v.modality}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {!editing && !editing && editRow !== v._id ? (
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
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {!editing && !editing && editRow !== v._id ? (
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
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {v.users.length}
              </td>
              <td className="px-2 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit w-44">
                {v.archived ? "Cerrada" : "Abierta"}
              </td>
              <td className="px-2 border-b-2 border-black"></td>
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
              <td className="px-2"></td>
            </tr>
          ))}
          <tr>
            <td className="pb-8"></td>
          </tr>
        </tbody>
      </table>
      {viewForm && <FormVacancie onClose={noShowForm}/>}
    </div>
  );
}

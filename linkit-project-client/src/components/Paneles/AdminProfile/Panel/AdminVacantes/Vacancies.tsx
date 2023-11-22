import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormVacancie from "./FormVacancie";
import axios from "axios";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";

type stateProps = {
  jobCard: {
    allJobOffers: vacancieProps[];
  };
};

type vacancieProps = {
  code: string;
  title: string;
  description: string;
  createdDate: string;
  location: string;
  modality: string;
  requirements: string[];
  stack: string[];
  archived: boolean;
  __v: number;
  _id: string;
};

export default function Vacancies() {
  const dispatch = useDispatch();
  const data = useSelector((state: stateProps) => state.jobCard.allJobOffers);
  // const token = useSelector((state:any) => state.Authentication.authState.token) //* token de usuario para autenticación de protección de rutas


  const [viewForm, setViewForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<Partial<vacancieProps>>({});

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
    setViewForm(!viewForm);
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
        return alert("Vacante cerrada con exito");
      } catch (error: any) {
        console.error("Error al enviar la solicitud:", error.message);
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
    } catch (error: any) {
      console.error("Error al enviar la solicitud:", error.message);
    }
    setEditing(false);
    setEditRow(null);
    setEditedData({});
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className="text-5xl pl-32 pb-4">Gestión de vacantes</h1>

      <button
        className="border-[3px] border-linkIt-300 active:scale-90 ml-16 px-3 mb-6"
        onClick={showForm}
      >
        Crear vacante
      </button>

      <table className="w-[95%] mx-12 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-3 py-2">Título Vacante</th>
            <th className="border border-gray-300 px-3 py-2">Descripción</th>
            <th className="border border-gray-300 px-3 py-2">
              Fecha de publicación
            </th>
            <th className="border border-gray-300 px-3 py-2">Locación</th>
            <th className="border border-gray-300 px-3 py-2">Modalidad</th>
            <th className="border border-gray-300 px-3 py-2">Requisitos</th>
            <th className="border border-gray-300 px-3 py-2">Tecnologías</th>
            <th className="border border-gray-300 px-3 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v: vacancieProps) => (
            <tr key={v._id}>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && !editing && editRow !== v._id ? (
                  v.title
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="title"
                    placeholder={v.title}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && !editing && editRow !== v._id ? (
                  v.description
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="description"
                    placeholder={v.description}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {v.createdDate.split("T")[0]}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && !editing && editRow !== v._id ? (
                  v.location
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="location"
                    placeholder={v.location}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && !editing && editRow !== v._id ? (
                  v.modality
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="modality"
                    placeholder={v.modality}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && !editing && editRow !== v._id ? (
                  v.requirements
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="requisites"
                    placeholder={v.requirements.join("-")}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && !editing && editRow !== v._id ? (
                  v.stack.join(" - ")
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="stack"
                    placeholder={v.stack.join(" - ")}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {v.archived ? "Cerrada" : "Abierta"}
              </td>
              <td>
                {!editing && editRow !== v._id ? (
                  <button
                    onClick={() => handleEdit(v._id)}
                    className="border-[3px] border-linkIt-300 active:scale-90 m-1 px-3 py-2"
                  >
                    Editar
                  </button>
                ) : (
                  <button
                    onClick={() => handleSave(v._id)}
                    className="border-[3px] border-linkIt-300 active:scale-90 m-1 px-3 py-2"
                  >
                    Guardar
                  </button>
                )}
                <button
                  onClick={() => deleteVacancie(v._id)}
                  className="border-[3px] border-linkIt-300 active:scale-90 px-3 py-2"
                >
                  Cerrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewForm && <FormVacancie />}
    </div>
  );
}

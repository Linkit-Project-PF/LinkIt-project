import { useState } from "react";
import { useSelector } from "react-redux";
import FormVacancie from "./FormVacancie";
import axios from "axios";

type stateProps = {
  jobCard: {
    allJobOffers: vacancieProps[];
  };
};

type vacancieProps = {
  title: string;
  description: string;
  createdDate: string;
  location: string;
  modality: string;
  requisites: any[];
  schedule: string;
  stack: any[];
  archived: boolean;
  id: string;
  __v: number;
  _id: string;
};

export default function AdminPanel() {
  const data = useSelector((state: stateProps) => state.jobCard.allJobOffers);

  const [viewForm, setViewForm] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editRow, setEditRow] = useState<string | null>(null)
  const [editedData, setEditedData] = useState<Partial<vacancieProps>>({})

  console.log(editedData)

  const showForm = () => {
    setViewForm(!viewForm)
  }

  const deleteVacancie = async (id: any) => {
    const resultado = confirm("¿Deseas eliminar la vacante?")
    if (resultado) {
      try {
        const response = await axios.delete(`https://linkit-server.onrender.com/jds/delete/id:${id}`)
        return console.log(response.data)
      } catch (error: any) {
        console.error('Error al enviar la solicitud:', error.message);
      }
    }
  }

  const handleEdit = (id: string) => {
    const rowToEdit = data.find((v) => v._id === id)
    if (rowToEdit) {
      setEditRow(id)
      setEditing(false)
      setEditedData(rowToEdit)
    }
  }

  const handleSave = () => {
    setEditing(false)
    setEditRow(null)
    setEditedData({})
  }

  const handleChange = (e:any) => {
    const {name, value} = e.target
    setEditedData({
      ...editedData,
      [name]:value
    })
  }

  return (
    <div>
      <h1 className="text-5xl pt-32 pl-32 pb-16">Panel de Administrador</h1>
      <button className="ml-16 px-3 pb-6" onClick={showForm}>Crear vacante</button>
      <table className="w-[95%] mx-12 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-3 py-2">Título Vacante</th>
            <th className="border border-gray-300 px-3 py-2">Descripción</th>
            <th className="border border-gray-300 px-3 py-2">Fecha de publicación</th>
            <th className="border border-gray-300 px-3 py-2">Locación</th>
            <th className="border border-gray-300 px-3 py-2">Modalidad</th>
            <th className="border border-gray-300 px-3 py-2">Requisitos</th>
            <th className="border border-gray-300 px-3 py-2">Horario</th>
            <th className="border border-gray-300 px-3 py-2">Tecnologías</th>
            <th className="border border-gray-300 px-3 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v: vacancieProps) => (
            <tr key={v._id}>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && (!editing && editRow !== v._id) ? (
                  (v.title)
                ) : <input
                  className="w-[80%]"
                  type="text"
                  name="title"
                  placeholder={v.title}
                  onChange={handleChange}
                />}</td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && (!editing && editRow !== v._id) ? (
                  (v.description)
                ) : <input
                  className="w-[80%]"
                  type="text"
                  name="description"
                  placeholder={v.description}
                  onChange={handleChange}

                />}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {v.createdDate.split("T")[0]}</td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && (!editing && editRow !== v._id) ? (
                  (v.location)
                ) : <input
                  className="w-[80%]"
                  type="text"
                  name="location"
                  placeholder={v.location}
                  onChange={handleChange}

                />}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && (!editing && editRow !== v._id) ? (
                  (v.modality)
                ) : <input
                  className="w-[80%]"
                  type="text"
                  name="modality"
                  placeholder={v.modality}
                  onChange={handleChange}

                />}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && (!editing && editRow !== v._id) ? (
                  (v.requisites)
                ) : <input
                  className="w-[80%]"
                  type="text"
                  name="requisites"
                  placeholder={v.requisites.join("-")}
                  onChange={handleChange}

                />}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && (!editing && editRow !== v._id) ? (
                  (v.schedule)
                ) : <input
                  className="w-[80%]"
                  type="text"
                  name="schedule"
                  placeholder={v.schedule}
                  onChange={handleChange}

                />}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {!editing && (!editing && editRow !== v._id) ? (
                  (v.stack.join(" - "))
                ) : <input
                  className="w-[80%]"
                  type="text"
                  name="stack"
                  placeholder={v.stack.join(" - ")}
                  onChange={handleChange}

                />}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {v.archived ? 'Cerrada' : 'Abierta'}</td>
              <td>
                {!editing && editRow !== v._id
                  ? <button onClick={() => handleEdit(v._id)} className="border border-gray-300 px-3 py-2">Editar</button>
                  : <button onClick={handleSave} className="border border-gray-300 px-3 py-2">Guardar</button>
                }
                <button onClick={() => deleteVacancie(v._id)} className="border border-gray-300 px-3 py-2">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewForm && <FormVacancie />}
    </div>
  );
}

import { useState } from "react";
import { useSelector } from "react-redux";
import FormVacancie from "./FormVacancie";

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

  const showForm = ()=>{
    setViewForm(!viewForm)
  }

  return (
    <div>
      <h1 className="text-5xl pt-32 pl-32 pb-16">Panel de Administrador</h1>
      <button className="ml-16 px-4 pb-6" onClick={showForm}>Crear vacante</button>
      <table className="w-[95%] mx-12 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Título Vacante</th>
            <th className="border border-gray-300 px-4 py-2">Descripción</th>
            <th className="border border-gray-300 px-4 py-2">Fecha de publicación</th>
            <th className="border border-gray-300 px-4 py-2">Locación</th>
            <th className="border border-gray-300 px-4 py-2">Modalidad</th>
            <th className="border border-gray-300 px-4 py-2">Requisitos</th>
            <th className="border border-gray-300 px-4 py-2">Horario</th>
            <th className="border border-gray-300 px-4 py-2">Tecnologías</th>
            <th className="border border-gray-300 px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v: vacancieProps) => (
            <tr key={v._id}>
              <td className="border border-gray-300 px-4 py-2">{v.title}</td>
              <td className="border border-gray-300 px-4 py-2">{v.description}</td>
              <td className="border border-gray-300 px-4 py-2">{v.createdDate.split("T")[0]}</td>
              <td className="border border-gray-300 px-4 py-2">{v.location}</td>
              <td className="border border-gray-300 px-4 py-2">{v.modality}</td>
              <td className="border border-gray-300 px-4 py-2">{v.requisites}</td>
              <td className="border border-gray-300 px-4 py-2">{v.schedule}</td>
              <td className="border border-gray-300 px-4 py-2">{v.stack.join(" - ")}</td>
              <td className="border border-gray-300 px-4 py-2">{v.archived ? 'Cerrada' : 'Abierta'}</td>
              <td>
              <button className="border border-gray-300 px-4 py-2">Editar</button>
              <button className="border border-gray-300 px-4 py-2">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewForm && <FormVacancie/>}
    </div>
  );
}

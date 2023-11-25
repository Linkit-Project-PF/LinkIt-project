import axios from "axios"
import { useEffect, useState } from "react"
import { ResourceProps } from "../../../admin.types";
import { setResources } from "../../../../../redux/features/ResourcesSlice";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
  resources: {
    allresources: ResourceProps[];
  };
}

export default function AdminRecursos() {

  const data = useSelector((state: RootState) => state.resources.allresources)
  const dispatch = useDispatch();

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
          "https://linkit-server.onrender.com/posts/find",
          { headers: { Authorization: `Bearer 65566e201b4939c1cef34a54` } }
        );
        dispatch(setResources(response.data))
      } catch (error) {
        console.error("Error al cargar los recursos", error);
      }
    }
    loadData()
  }, [dispatch])

  return (
    <div>
      <h1 className="text-5xl pl-32 pb-4">Gestión de recursos</h1>
      <button
        className="border-[3px] border-linkIt-300 active:scale-90 ml-16 px-3 mb-6"
      /*         onClick={showForm} */
      >
        Crear Recurso
      </button>
      <div className="mx-12">
        <br />
        <span>Pagina {currentPage + 1} de {totalPages}</span>
        <br />
        <button className="" onClick={handlePrevius} disabled={currentPage === 0}>Anterior</button>
        <button className="ml-12" onClick={handleNext} disabled={endIndex >= data.length}>Siguiente</button>
      </div>
      <table className="w-[95%] mx-12 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-10 py-2">Titulo</th>
            <th className="border border-gray-300 px-3 py-2">Descripción</th>
            <th className="border border-gray-300 px-3 py-2">Link</th>
            <th className="border border-gray-300 px-3 py-2">Tipo</th>
            <th className="border border-gray-300 px-3 py-2">Fecha</th>
            <th className="border border-gray-300 px-3 py-2">Imagen</th>
            <th className="border border-gray-300 px-3 py-2">Categoría</th>
            <th className="border border-gray-300 px-3 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((r: ResourceProps) => (
            <tr key={r.id}>
              <td className="border border-gray-300 px-3 py-2">{r.title}</td>
              <td className="border border-gray-300 px-3 py-2">{r.description}</td>
              <td className="border border-gray-300 px-3 py-2">{r.link}</td>
              <td className="border border-gray-300 px-3 py-2">{r.type}</td>
              <td className="border border-gray-300 px-3 py-2">{r.date}</td>
              <td className="border border-gray-300 px-3 py-2">{r.image}</td>
              <td className="border border-gray-300 px-3 py-2">{r.category}</td>
              <td className="border border-gray-300 px-3 py-2">{r.archived ? "Invisible" : "Visible"}</td>
              <td>
                <button className="border-[3px] border-linkIt-300 active:scale-90 m-1 px-3 py-2">
                  Editar
                </button>

                <button className="border-[3px] border-linkIt-300 active:scale-90 m-1 px-3 py-2">
                  Guardar
                </button>

                <button className="border-[3px] border-linkIt-300 active:scale-90 px-3 py-2">
                  Cerrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

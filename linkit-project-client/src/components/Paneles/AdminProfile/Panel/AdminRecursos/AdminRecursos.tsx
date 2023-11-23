import axios from "axios"
import { useEffect, useState } from "react"
import { setResources } from "../../../../../redux/features/ResourcesSlice";
import { useDispatch } from "react-redux";

type ResourceProps = {
  id: number,
  title: string,
  description: string,
  link: string,
  type: string,
  date: string,
  image: string,
  category: string,
  archived: boolean,
}

export default function AdminRecursos() {

  const dispatch = useDispatch();
  const [resourceData, setResourceData] = useState<Partial<ResourceProps>>({})

  console.log(resourceData)

  useEffect(()=>{
    const loadData = async () =>{
      try {
        const response = await axios (
          "https://linkit-server.onrender.com/posts/find",
          { headers: { Authorization: `Bearer 65566e201b4939c1cef34a54` } }
        );
          dispatch(setResources(response.data))
          setResourceData(response.data)
      } catch (error) {
        console.error("Error al cargar los recursos", error);
      }
    }
    loadData()
  },[dispatch])

  return (
    <div>
        <h1 className="text-5xl pl-32 pb-4">Gestión de recursos</h1>
        <table>
          <thead>
            <tr>
              <th className="border border-gray-300 px-3 py-2">Titulo</th>
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
            {}
          </tbody>
        </table>
    </div>
  )
}

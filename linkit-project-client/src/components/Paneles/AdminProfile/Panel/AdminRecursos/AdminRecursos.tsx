import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResourceProps } from "../../../admin.types";
import axios from "axios";
import { setResources } from "../../../../../redux/features/ResourcesSlice";
import swal from 'sweetalert';
import FormResource from "./FormResource";
// import {UserPostulations} from "./userPostulations";

type stateProps = {
  resources: {
    allresources: ResourceProps[];
  };
}

export default function AdminRecursos() {
  const dispatch = useDispatch();
  const data = useSelector((state: stateProps) => state.resources.allresources);
  // const token = useSelector((state:any) => state.Authentication.authState.token) //* token de usuario para autenticación de protección de rutas
  const [saveStatus, setSaveStatus] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<Partial<ResourceProps>>({
    title: "",
    description: "",
    link: "",
    type: "",
    image: "",
    category: "",
  });



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
          { headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` } }
          //headers: { Authorization: `Bearer ${token}` }//* descomentar cuando se tenga  creado el logeo de admin
        );
        dispatch(setResources(response.data));
      } catch (error) {
        console.error("Error al cargar los recursos", error);
      }
    };
    loadData();
  }, [saveStatus]);

  const showForm = () => {
    setViewForm(true);
  };

  const noShowForm = () => {
    setViewForm(false);
    setSaveStatus(!saveStatus)
  };



  const deleteResource = async (id: string) => {
    const resultado = confirm("¿Deseas ocultar el recurso?");
    if (resultado) {
      try {
        const response = await axios.delete(
          `https://linkit-server.onrender.com/posts/delete/${id}`,
          { headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` } }
          // headers: { Authorization: `Bearer ${token}` } //* descomentar cuando se tenga  creado el logeo de admin
        );
        dispatch(setResources(response.data));
        setSaveStatus(!saveStatus)
        return swal("Recurso ocultado");
      } catch (error) {
        console.error(error);
      }
    }
  };



  const handleEdit = (id: string) => {
    const rowToEdit = data.find((r) => r._id === id);
    const editedProperties = {
      title: rowToEdit?.title,
      description: rowToEdit?.description,
      link: rowToEdit?.link,
      type: rowToEdit?.type,
      image: rowToEdit?.image,
      category: rowToEdit?.category,
    }
    if (rowToEdit) {
      setEditRow(id);
      setEditing(false);
      setEditedData(editedProperties);
      setSaveStatus(!saveStatus)
    }
  };

  const handleSave = async (id: string) => {
    try {
      const endPoint = `https://linkit-server.onrender.com/posts/update/${id}`;
      await axios.put(endPoint, editedData, {
        headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` },
        // headers: { Authorization: `Bearer ${token}` } //* descomentar cuando se tenga  creado el logeo de admin
      });
    } catch (error) {
      console.error("Error al enviar la solicitud: ", (error as Error).message);
    }
    setEditing(false);
    setEditRow(null);
    setEditedData({});
    setSaveStatus(!saveStatus)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "requirements" || name === "stack") {
      const valuesArray = value.split(",").map((i) => i.trim())
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
        <h1 className="text-4xl pl-16 py-6">Gestión de recursos</h1>

        <button
          className="bg-linkIt-300 flex items-center rounded-[7px] ml-20 p-3 h-10 text-white text-[10px] xl:text-xs shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out"
          onClick={showForm}
        >Crear recurso
        </button>

        <div className="flex flex-col items-end justify-center pr-32 pb-10">
          <div className="pb-2">
            <button className="" onClick={handlePrevius} disabled={currentPage === 0}>Anterior</button>
            <button className="ml-12" onClick={handleNext} disabled={endIndex >= data.length}>Siguiente</button>
          </div>
          <span>Pagina {currentPage + 1} de {totalPages}</span>
        </div>

      </div>

      <table className="w-full sm:w-[95%] mx-auto bg-linkIt-500 rounded-[20px] rounded-t-none overflow-x-scroll">
        <thead>
          <tr className="h-12">
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Título</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Descripción</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Link</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Fecha</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Tipo</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Imágen</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Categoría</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Vista</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((r: ResourceProps) => (
            <tr key={r._id}>
              <td className="px-1"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.title
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="title"
                    autoComplete="off"
                    placeholder={r.title}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.description
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="description"
                    autoComplete="off"
                    placeholder={r.description}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.link
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="link"
                    autoComplete="off"
                    placeholder={r.link}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {r.createdDate.split("T").slice()[0]}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.type
                ) : (
                  <select
                    className="w-[80%]"
                    name="type"
                    placeholder={r.type}
                    onChange={handleChange}
                  >
                    <option value="blog">blog</option>
                    <option value="ebook">ebook</option>
                    <option value="social">social</option>
                  </select>
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.image
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="image"
                    autoComplete="off"
                    placeholder={r.image}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.category
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="category"
                    autoComplete="off"
                    placeholder={r.category}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {r.archived ? "Oculta" : "Visible"}
              </td>
              <td className="p-2 border-b-2 border-black">
                {!editing && editRow !== r._id ? (
                  <button
                    onClick={() => handleEdit(r._id)}
                    className="active:scale-90 m-1 h-fit w-fit"
                  >
                    Editar
                  </button>
                ) : (
                  <button
                    onClick={() => handleSave(r._id)}
                    className="active:scale-90 m-1 h-fit w-fit"
                  >
                    Guardar
                  </button>
                )}
                <button
                  onClick={() => deleteResource(r._id)}
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
      {viewForm && <FormResource onClose={noShowForm} />}
    </div>
  );
}

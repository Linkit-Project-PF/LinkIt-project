import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewProps } from "../../../admin.types";
import axios from "axios";
import { setReviews } from "../../../../../redux/features/ReviewsSlice";
import swal from 'sweetalert';
import FormReview from "./FormReviews";



type stateProps = {
  reviews: {
    allReviews: ReviewProps[]
  }
};

export default function AdminReviews() {
  const dispatch = useDispatch();
  const data = useSelector((state: stateProps) => state.reviews.allReviews);
  // const token = useSelector((state:any) => state.Authentication.authState.token) //* token de usuario para autenticación de protección de rutas
  const [saveStatus, setSaveStatus] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editRow, setEditRow] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<Partial<ReviewProps>>({
    name: "",
    rol: "",
    country: "",
    detail: ""
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
          "https://linkit-server.onrender.com/reviews/find",
          { headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` } }
          //headers: { Authorization: `Bearer ${token}` }//* descomentar cuando se tenga  creado el logeo de admin
        );
        dispatch(setReviews(response.data));
      } catch (error) {
        console.error("Error al cargar las reviews", error);
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



  const deleteReview = async (id: string) => {
    const resultado = confirm("¿Deseas ocultar el recurso?");
    if (resultado) {
      try {
        const response = await axios.delete(
          `https://linkit-server.onrender.com/reviews/delete/${id}`,
          { headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` } }
          // headers: { Authorization: `Bearer ${token}` } //* descomentar cuando se tenga  creado el logeo de admin
        );
        dispatch(setReviews(response.data));
        setSaveStatus(!saveStatus)
        return swal("Review ocultada");
      } catch (error) {
        console.error(error);
      }
    }
  };



  const handleEdit = (id: string) => {
    const rowToEdit = data.find((r) => r._id === id);
    const editedProperties = {
      name: rowToEdit?.name,
      rol: rowToEdit?.rol,
      country: rowToEdit?.country,
      detail: rowToEdit?.detail,
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
      const endPoint = `https://linkit-server.onrender.com/reviews/update/${id}`;
      await axios.put(endPoint, editedData, {
        headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` },
        // headers: { Authorization: `Bearer ${token}` } //* descomentar cuando se tenga  creado el logeo de admin
      });
    } catch (error) {
      console.error("Error al enviar la solicitud: ", (error))
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
        <h1 className="text-4xl pl-16 py-6">Gestión de reviews</h1>

        <button
          className="bg-linkIt-300 flex items-center rounded-[7px] ml-20 p-3 h-10 text-white text-[10px] xl:text-xs shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out"
          onClick={showForm}
        >Crear review
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
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Nombre</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Rol</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">País</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Detalle</th>
            <th></th>
            <th className="bg-linkIt-300 rounded-t-xl px-6 text-white font-light w-fit h-fit">Vista</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((r: ReviewProps) => (
            <tr key={r._id}>
              <td className="px-1"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.name
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder={r.name}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.rol
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="rol"
                    autoComplete="off"
                    placeholder={r.rol}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.country
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="country"
                    autoComplete="off"
                    placeholder={r.country}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td className="px-1 border-b-2 border-black"></td>
              <td className="border-b-2 border-black h-fit min-w-max">
                {!editing && editRow !== r._id ? (
                  r.detail
                ) : (
                  <input
                    className="w-[80%]"
                    type="text"
                    name="detail"
                    autoComplete="off"
                    placeholder={r.detail}
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
                  onClick={() => deleteReview(r._id)}
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
      {viewForm && <FormReview onClose={noShowForm} />}
    </div>
  );
}

import { useState } from "react";
import { ViewReviewProps } from "../../../admin.types";
import FormReview from "./FormReviews";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import axios from "axios";
import { searchReviews, setReviews, sortReviews } from "../../../../../redux/features/ReviewsSlice";

interface HeadReviews {
    hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewCol: ViewReviewProps
    selectedRows: Set<string>;
    editing: boolean
    editReview: () => void
    handleSave: (arrayProps: string[]) => void
    setSaveStatus: (status: boolean) => void;
}

export default function HeadReviews({ hideCol, viewCol, selectedRows, editing, editReview, handleSave, setSaveStatus }: HeadReviews) {
    const dispatch = useDispatch();
    const token = useSelector((state: any) => state.Authentication.token);
    const arraySelectedRows = [...selectedRows]
    
    //? OPTION COLUMNS
    const [options, setOptions] = useState(false)
    const hideOptions = () => {
        setOptions(!options)
    }
    //?
    
    //?BUSCAR
    const handleSearch = (searchTerm: string): void => {
        dispatch(searchReviews(searchTerm))
    }
    //?
    
    //?ORDENAR
    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const { value } = e.target;
        dispatch(sortReviews(value))
    }
    //?
    
    //? FORM
    const [viewForm, setViewForm] = useState(false);
    const showForm = () => {
        setViewForm(true);
    };
    const noShowForm = () => {
        setViewForm(false);
    };
    //?

    const deleteReview = async () => {
        swal({
            title: "¿Deseas eliminar el Usuario?",
            icon: "warning",
            buttons: ["Cancelar", "Aceptar"],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    arraySelectedRows.forEach(async (id: string) => {
                        const response = await axios.delete(
                            `https://linkit-server.onrender.com/reviews/delete/${id}`,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                    'Accept-Language': sessionStorage.getItem('lang')
                                },
                            }
                        );
                        dispatch(setReviews(response.data));
                        swal("Usuario eliminado", { icon: "success" });
                    })
                } catch (error) {
                    console.error(
                        "Error al enviar la solicitud:",
                        (error as Error).message
                    );
                }
            }
        });
        setSaveStatus(true)
    };

    return (
        <div>
            <div>
                <h1 className="text-4xl pl-16 py-6">Gestión de reseñas</h1>
            </div>
            <div className=' flex flex-row justify-around pb-6'>
                <div>
                    <button
                        className="flex items-center border border-linkIt-300 rounded-[7px] p-2 shadow-md hover:border-linkIt-200 transition-all duration-300 ease-in-out mr-5"
                        onClick={showForm}
                    >
                        Crear reseña
                    </button>
                </div>
                <div className="flex flex-row">
                    <div>
                        <h1>Ordenar:</h1>
                    </div>
                    <div>
                        <select
                            onChange={handleSort}
                            className={`styles-head ml-2`}
                        >
                            <option value="recent">Recientes</option>
                            <option value="old">Antiguos</option>
                        </select>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex flex-row">
                        <div>
                            <button
                                onClick={hideOptions}
                            >Columnas</button>
                        </div>
                    </div>
                    {options && (
                        <div className="capitalize flex flex-col border-2 border-linkIt-300 rounded-lg mt-6 w-60 pl-2 absolute bg-linkIt-500">
                            {Object.entries(viewCol).map(([key, value]) => (
                                <label key={key}>
                                    <input
                                        type="checkbox"
                                        name={key}
                                        checked={value}
                                        onChange={hideCol}
                                    />
                                    {key}
                                </label>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Buscar"
                        onChange={(e) => handleSearch(e.target.value)}
                        className={`styles-head`}
                    />
                </div>
                {viewForm && <FormReview
                    onClose={noShowForm}
                />}
            </div>
            <div>
                <span className="flex flex-row pl-8">Seleccionados: {selectedRows.size}
                    {selectedRows.size > 0 &&
                        <div className="flex flex-row">
                            {editing ?
                                <div>
                                    <button
                                        onClick={() => handleSave(arraySelectedRows)}
                                        className="pl-6 hover:text-linkIt-300"
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        onClick={editReview}
                                        className="pl-6 hover:text-linkIt-300"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                :
                                <div>
                                    <button
                                        onClick={editReview}
                                        className="pl-6 hover:text-linkIt-300"
                                    >
                                        {selectedRows.size && 'Editar'}
                                    </button>
                                </div>
                            }
                            <button
                                onClick={deleteReview}
                                className="pl-6 hover:text-red-600"
                            >
                                {selectedRows.size && 'Eliminar'}
                            </button>
                        </div>
                    }
                </span>
            </div>
        </div>
    )
}

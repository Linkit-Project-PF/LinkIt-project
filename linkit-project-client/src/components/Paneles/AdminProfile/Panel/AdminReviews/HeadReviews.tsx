import { useState } from "react";
import { ViewReviewProps } from "../../../admin.types";
import FormReview from "./FormReviews";

interface HeadReviews {
    hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewCol: ViewReviewProps
}

export default function HeadReviews({ hideCol, viewCol }: HeadReviews) {
    const [options, setOptions] = useState(false)
    const [viewForm, setViewForm] = useState(false);

    const hideOptions = () => {
        setOptions(!options)
    }

    const showForm = () => {
        setViewForm(true);
    };

    const noShowForm = () => {  
        setViewForm(false);
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
                        <select placeholder='Ordenar' className="ml-2">
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
                    // onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                {viewForm && <FormReview
                    onClose={noShowForm}
                />}
            </div>
        </div>
    )
}

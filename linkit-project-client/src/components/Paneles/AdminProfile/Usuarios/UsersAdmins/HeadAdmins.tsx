import { useState } from "react"
import { ViewColHeadAdmins } from "../../../admin.types";

interface HeadAdmins {
    hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewCol: ViewColHeadAdmins
    selectedRows: Set<string>;
    editing: boolean
    editAdmin: () => void
    handleSave: (arrayProps: string[]) => void
}

export default function HeadAdmins({ hideCol, viewCol, selectedRows, editing, editAdmin, handleSave }: HeadAdmins) {

    const [options, setOptions] = useState(false)

    const arraySelectedRows = [...selectedRows]

    const hideOptions = () => {
        setOptions(!options)
    }

    return (
        <div>

            <div>
                <h1 className="text-4xl pl-16 py-6">Administradores</h1>
            </div>
            <div className=' flex flex-row justify-around pb-6'>
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
                                <label key={key} className="">
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
                                        onClick={editAdmin}
                                        className="pl-6 hover:text-linkIt-300"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                :
                                <div>
                                    <button
                                        onClick={editAdmin}
                                        className="pl-6 hover:text-linkIt-300"
                                    >
                                        {selectedRows.size && 'Editar'}
                                    </button>
                                </div>
                            }
                            <button
                                // onClick={deleteVacancie}
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

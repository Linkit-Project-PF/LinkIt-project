import { useState } from "react"
import { ViewColHeadAdmins } from "../../../admin.types";

interface HeadAdmins {
    hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewCol: ViewColHeadAdmins
}

export default function HeadAdmins({ hideCol, viewCol }:HeadAdmins) {

    const [options, setOptions] = useState(false)

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
        </div>
    )
}

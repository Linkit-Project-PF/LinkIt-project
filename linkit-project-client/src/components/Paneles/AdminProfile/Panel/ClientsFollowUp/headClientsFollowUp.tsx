import { useState } from "react";
import { ViewColClientsFollowUps } from "../../../admin.types";
import { useDispatch } from "react-redux";
import { filterJobData, sortJobData } from "../../../../../redux/features/ClientsFollowUpSlice";

interface HeadClientsFollowUp {
    hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewCol: ViewColClientsFollowUps
}
export default function HeadClientsFollowUp({ hideCol, viewCol }: HeadClientsFollowUp) {
    const [options, setOptions] = useState(false)
    const dispatch = useDispatch()
    const hideOptions = () => {
        setOptions(!options)
    }

    const handleSearch = (searchTerm: string): void => {
        dispatch(filterJobData(searchTerm))
    }
    
    const handleSort = (e:React.ChangeEvent<HTMLSelectElement>): void =>{
        const {value} = e.target;
        dispatch(sortJobData(value))
    }

    return (
        <div>

            <div>
                <h1 className="text-4xl pl-16 py-6">Clients Follow Up</h1>
            </div>
            <div className=' flex flex-row justify-around pb-6'>
                <div className="flex flex-row">
                    <div>
                        <h1>Ordenar:</h1>
                    </div>
                    <div>
                        <select 
                        className={`ml-2 styles-head`}
                        onChange={handleSort}
                        >
                            <option value="recent">Recientes</option>
                            <option value="old">Antiguos</option>
                        </select>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex flex-row">
                        <div>
                            <button onClick={hideOptions}>Columnas</button>
                        </div>
                    </div>
                    {options && (
                        <div className="flex flex-col border-2 border-linkIt-300 rounded-lg mt-6 w-60 pl-2 absolute bg-linkIt-500">
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
            </div>
        </div>
    )
}

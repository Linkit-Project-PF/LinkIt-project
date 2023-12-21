// import React from 'react'

import React, { useState } from "react"
import { ViewCol } from "../../../admin.types";
import { useDispatch, useSelector } from "react-redux";
import FormVacancie from "./FormVacancie";
import { setsearchJobOffers } from "../../../../../redux/features/JobCardsSlice";

interface HeadVacancyProps {
    hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewCol: ViewCol
}

export default function HeadVacancy({ hideCol, viewCol }: HeadVacancyProps) {
    const token = useSelector((state: any) => state.Authentication.token);

    const [options, setOptions] = useState(false)
    const [viewForm, setViewForm] = useState(false);
    const dispatch = useDispatch();

    const handleSearch = (searchTerm: string) => {
        dispatch(setsearchJobOffers(searchTerm))
    }

    const showForm = () => {
        setViewForm(true);
    };

    const noShowForm = () => {
        setViewForm(false);
    };

    const hideOptions = () => {
        setOptions(!options)
    }


    return (
        <div>

            <div>
                <h1 className="text-4xl pl-16 py-6">Gestión de vacantes</h1>
            </div>
            <div className=' flex flex-row justify-around pb-6'>
                <div>
                    <button
                        className="flex items-center border border-linkIt-300 rounded-[7px] p-2 shadow-md hover:border-linkIt-200 transition-all duration-300 ease-in-out mr-5"
                        onClick={showForm}
                    >
                        Crear vacante
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
                            <button onClick={hideOptions}>Columnas</button>
                        </div>
                    </div>
                    {options &&
                        <div className="flex flex-col border-2 border-linkIt-300 rounded-lg mt-6 w-52 pl-2 absolute bg-linkIt-500">
                            <label>
                                <input type="checkbox" name="title" checked={viewCol.title} onChange={hideCol} />
                                Título
                            </label>
                            <label>
                                <input type="checkbox" name="description" checked={viewCol.description} onChange={hideCol} />
                                Descipción
                            </label>
                            <label>
                                <input type="checkbox" name="type" checked={viewCol.type} onChange={hideCol} />
                                Tipo
                            </label>
                            <label>
                                <input type="checkbox" name="location" checked={viewCol.location} onChange={hideCol} />
                                Locación
                            </label>
                            <label>
                                <input type="checkbox" name="modality" checked={viewCol.modality} onChange={hideCol} />
                                Modalidad
                            </label>
                            <label>
                                <input type="checkbox" name="stack" checked={viewCol.stack} onChange={hideCol} />
                                Tecnologías
                            </label>
                            <label>
                                <input type="checkbox" name="AboutUs" checked={viewCol.AboutUs} onChange={hideCol} />
                                Acerca de Nosotros
                            </label>
                            <label>
                                <input type="checkbox" name="AboutClient" checked={viewCol.AboutClient} onChange={hideCol} />
                                Acerca de la empresa
                            </label>
                            <label>
                                <input type="checkbox" name="responsabilities" checked={viewCol.responsabilities} onChange={hideCol} />
                                Responsabilidades
                            </label>
                            <label>
                                <input type="checkbox" name="requiriments" checked={viewCol.requiriments} onChange={hideCol} />
                                Requerimientos
                            </label>
                            <label>
                                <input type="checkbox" name="niceToHave" checked={viewCol.niceToHave} onChange={hideCol} />
                                Deseable
                            </label>
                            <label>
                                <input type="checkbox" name="benefits" checked={viewCol.benefits} onChange={hideCol} />
                                Beneficios
                            </label>
                            <label>
                                <input type="checkbox" name="company" checked={viewCol.company} onChange={hideCol} />
                                Empresa
                            </label>
                            <label>
                                <input type="checkbox" name="code" checked={viewCol.code} onChange={hideCol} />
                                Código
                            </label>
                            <label>
                                <input type="checkbox" name="archived" checked={viewCol.archived} onChange={hideCol} />
                                Vista
                            </label>
                        </div>
                    }
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Buscar"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>
            {viewForm && <FormVacancie onClose={noShowForm} token={token} />}
        </div>
    )
}

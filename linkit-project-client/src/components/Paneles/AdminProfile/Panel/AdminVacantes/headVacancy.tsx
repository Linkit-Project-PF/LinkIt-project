// import React from 'react'

import React, { useState } from "react"
import { ViewColVacancy } from "../../../admin.types";
import { useDispatch, useSelector } from "react-redux";
import FormVacancie from "./FormVacancie";
import { setSortJobOffers, setJobOffers, setSearchJobOffers } from "../../../../../redux/features/JobCardsSlice";
import swal from "sweetalert";
import { t } from "i18next";
import axios from "axios";
import { RootState } from "../../../../../redux/types";

interface HeadVacancyProps {
    hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewCol: ViewColVacancy;
    selectedRows: Set<string>;
    setSaveStatus: (status: boolean) => void;
    editJDS: () => void
    editing: boolean
    handleSave: (arrayProps: string[]) => void
}

export default function HeadVacancy({ hideCol, viewCol, selectedRows, setSaveStatus, editJDS, editing, handleSave }: HeadVacancyProps) {
    const token = useSelector((state: any) => state.Authentication.token);
    const selectSortDate = (state: RootState) => state.jobCard.sortValues.sortDate
    const sortDate = useSelector(selectSortDate)




    const arraySelectedRows = [...selectedRows]

    const [options, setOptions] = useState(false)
    const [viewForm, setViewForm] = useState(false);
    const dispatch = useDispatch();


    const handleSearch = (searchTerm: string) => {
        dispatch(setSearchJobOffers(searchTerm))
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

    const deleteVacancie = async () => {
        swal({
            title: t("¿Deseas ocultar la vacante?"),
            icon: "warning",
            buttons: [t("Cancelar"), t("Aceptar")],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    arraySelectedRows.forEach(async (id: string) => {
                        const response = await axios.delete(
                            `https://linkit-server.onrender.com/jds/delete/${id}`,
                            {
                                headers: { Authorization: `Bearer ${token}`,
                                'Accept-Language': sessionStorage.getItem('lang') },
                            }
                        );
                        dispatch(setJobOffers(response.data));
                        swal(t("Vacante ocultada"), { icon: "success" });
                    })
                } catch (error) {
                    console.error(
                        t("Error al enviar la solicitud:"),
                        (error as Error).message
                    );
                }
            }
        });
        setSaveStatus(true)
    };

    const handleDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        dispatch(setSortJobOffers(value))
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
                        <select
                            className="ml-2"
                            onChange={handleDate}
                            value={sortDate}
                        >
                            <option value="-">-</option>
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
                        <div className="flex flex-col border-2 border-linkIt-300 rounded-lg mt-6 w-52 pl-2 absolute bg-linkIt-500 z-20">
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
            {viewForm && <FormVacancie
                onClose={noShowForm}
                token={token}
                setSaveStatus={setSaveStatus}
            />}
            <div className="flex flex-row pb-6">
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
                                        onClick={editJDS}
                                        className="pl-6 hover:text-linkIt-300"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                :
                                <div>
                                    <button
                                        onClick={editJDS}
                                        className="pl-6 hover:text-linkIt-300"
                                    >
                                        {selectedRows.size <= 1 ? 'Editar vacante' : 'Editar vacantes'}
                                    </button>
                                </div>
                            }
                            <button
                                onClick={deleteVacancie}
                                className="pl-6 hover:text-red-600"
                            >
                                {selectedRows.size <= 1 ? 'Cerrar vacante' : 'Cerrar vacantes'}
                            </button>
                        </div>
                    }
                </span>
            </div>
        </div>
    )
}

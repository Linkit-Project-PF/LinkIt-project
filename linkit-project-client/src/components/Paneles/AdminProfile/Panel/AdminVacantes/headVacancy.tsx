// import React from 'react'

import { useState } from "react"
import { ViewCol } from "../../../admin.types";

interface HeadVacancyProps {
    hideCol: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewCol: ViewCol
}

export default function HeadVacancy({ hideCol, viewCol }: HeadVacancyProps) {

    const [options, setOptions] = useState(false)

    const hideOptions = () => {
        setOptions(!options)
    }


    return (
        <div className=' flex flex-row justify-around p-6'>
            <div>
                <button>Crear</button>
            </div>
            <div className="flex flex-row">
                <div>
                    <h1>Ordenar:</h1>
                </div>
                <select placeholder='Ordenar' className="ml-2">
                    <option value=""></option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="recent">Recientes</option>
                    <option value="old">Antiguos</option>
                </select>
            </div>
            <div className="flex flex-row">
                <div>
                    <button onClick={hideOptions}>Columnas</button>
                </div>
            </div>
            {options &&
                <div className="relative flex flex-col">
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
                        <input type="checkbox" name="users" checked={viewCol.users} onChange={hideCol} />
                        Postulados
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
                        <input type="checkbox" name="status" checked={viewCol.status} onChange={hideCol} />
                        Estado
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
            <div>
                <input type="text" placeholder="Buscar" />
            </div>
        </div>
    )
}

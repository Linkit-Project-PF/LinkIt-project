// import React from 'react'

import { useState } from "react"

export default function HeadVacancy({ hideCol, viewCol }) {

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
                    <button onClick={hideOptions}>Esconder columna</button>
                </div>
            </div>
            {options ?
                <div className="">
                    <div className="relative flex flex-col">
                        <label>
                            <input type="checkbox" name="title" checked={viewCol} onClick={hideCol}/>
                            Título
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Descipción
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Tipo
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Locación
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Modalidad
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Tecnologías
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Postulados
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Acerca de Nosotros
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Responsabilidades
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Requerimientos
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Deseable
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Beneficios
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Empresa
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Estado
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Código
                        </label>
                        <label>
                            <input type="checkbox" name="" />
                            Vista
                        </label>
                    </div>
                </div>
                : null}
            <div>
                <input type="text" placeholder="Buscar" />
            </div>
        </div>
    )
}

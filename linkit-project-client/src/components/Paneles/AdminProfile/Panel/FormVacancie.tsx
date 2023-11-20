import { useState } from "react";

export default function FormVacancie() {


    const [information, setInformation] = useState({
        title: "",
        description: "",
        location: "",
        modality: "",
        requisites: "",
        schedule: "",
        stack: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInformation({
            ...information,
            [name]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setInformation({
            title: "",
            description: "",
            location: "",
            modality: "",
            requisites: "",
            schedule: "",
            stack: "",
        })
    }


    return (
        <div className="flex flex-col m-4 justify-center items-center">
            <h1 className="text-2xl">Nueva vacante</h1>

            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center" action="">

                <label>Titulo</label>
                <input
                    className="border border-linkIt-300 p-1"
                    type="text"
                    name="title"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <label>Descripción</label>
                <input
                    className="border border-linkIt-300 p-1"
                    type="text"
                    name="description"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <label>Locación</label>
                <input
                    className="border border-linkIt-300 p-1"
                    type="text"
                    name="location"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <label>Modalidad</label>
                <input
                    className="border border-linkIt-300 p-1"
                    type="text"
                    name="modality"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <label>Requisitos</label>
                <input
                    className="border border-linkIt-300 p-1"
                    type="text"
                    name="requisites"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <label>Horario</label>
                <input
                    className="border border-linkIt-300 p-1"
                    type="text"
                    name="schedule"
                    autoComplete="off"
                    onChange={handleChange}
                />

                <label>Tecnologías</label>
                <input
                    className="border border-linkIt-300 p-1"
                    type="text"
                    name="stack"
                    autoComplete="off"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="border border-linkIt-300 p-1 m-2"
                >
                    Publicar
                </button>
            </form>
        </div>
    )
}

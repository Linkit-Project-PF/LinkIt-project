import { useState } from "react";
import axios from "axios";
import { validateForm } from "../../../errors/validation";
import { ValidationError } from "../../../errors/errors";

export default function FormVacancie() {
  //TODO: Tarea para mi osea yo, implement a type or interface for this state & errors
  const [information, setInformation] = useState({
    code: "", //! what is thats supposed to be?
    title: "",
    description: "", //! 10 chars minimum back requirement.
    type: "", //! ASK COMPANY ON FRIDAY what is supposed to be this
    location: "",
    modality: "", //TODO This should be a select/checkbox as there are only three options 'full-time', 'part-time' or 'freelance'
    stack: [],
    aboutUs: "",
    aboutClient: "",
    responsabilities: "",
    requirements: [],
    niceToHave: [],
    benefits: [],
    company: "", //TODO This may be a select with all companies names ? Do it with route companies/find, save company name
  });

  const [errors, setErrors] = useState({
    code: "",
    title: "",
    description: "",
    type: "",
    location: "",
    modality: "",
    stack: "",
    aboutUs: "",
    aboutClient: "",
    responsabilities: "",
    requirements: "",
    niceToHave: "",
    benefits: "",
    company: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const arrayProps = ["requisites", "stack", "niceToHave", "benefits"];
    //! NOTE: This props are arrays, this is done so that everytime form user separes with ', ' a new array item is created.
    // In case you want to apply this logic, please state on the form that this props must be separated with a comma.
    if (arrayProps.includes(name)) {
      setInformation({
        ...information,
        [name]: value.split(", "),
      });
    } else {
      setInformation({
        ...information,
        [name]: value,
      });
    }

    //! NOTE: test this logic & the errors implementation
    setErrors({
      ...errors,
      [name]: value,
    })
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validateForm(information); //TODO: this is a custom error, create a custom error handler
      const endPoint = "https://linkit-server.onrender.com/jds/create";
      const response = await axios.post(endPoint, information, {
        headers: { Authorization: `Bearer 65566e201b4939c1cef34a54` },
      }); //TODO THIS ID MUST BE FROM THE LOGGED USER ON REDUX PERSIST FOR ROUTE PROTECT

      alert("La vacante fue creada con éxito");
      setInformation({
        code: "",
        title: "",
        description: "", 
        type: "", 
        location: "",
        modality: "",
        stack: [],
        aboutUs: "",
        aboutClient: "",
        responsabilities: "",
        requirements: [],
        niceToHave: [],
        benefits: [],
        company: "",
      });
      return response.data;
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      //TODO: this is a custom error, create a custom error handler
      throw new ValidationError(`Error al ingresar los datos en el formulario: ${(error as Error).message}`)
    }
  };

  return (
    <div className="flex flex-col m-4 justify-center items-center">
      <h1 className="text-2xl">Nueva vacante</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
        action=""
      >
        <label>Código</label>
        <input
          className="border border-linkIt-300 p-1"
          type="text"
          name="code"
          autoComplete="off"
          onChange={handleChange}
        />

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

        <label>Ubicación</label>
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
          name="requirements"
          autoComplete="off"
          onChange={handleChange}
        />

        <label>Tipo</label>
        <input
          className="border border-linkIt-300 p-1"
          type="text"
          name="type"
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

        <label>Beneficios</label>
        <input
          className="border border-linkIt-300 p-1"
          type="text"
          name="benefits"
          autoComplete="off"
          onChange={handleChange}
        />

        <label>Acerca de la empresa</label>
        <input
          className="border border-linkIt-300 p-1"
          type="text"
          name="aboutUs"
          autoComplete="off"
          onChange={handleChange}
        />

        <label>Acerca del cliente (opcional)</label>
        <input
          className="border border-linkIt-300 p-1"
          type="text"
          name="aboutClient"
          autoComplete="off"
          onChange={handleChange}
        />

        <label>Responsabilidades</label>
        <input
          className="border border-linkIt-300 p-1"
          type="text"
          name="responsabilities"
          autoComplete="off"
          onChange={handleChange}
        />

        <label>Deseable</label>
        <input
          className="border border-linkIt-300 p-1"
          type="text"
          name="niceToHave"
          autoComplete="off"
          onChange={handleChange}
        />

        <label>Nombre de la empresa</label>
        <input
          className="border border-linkIt-300 p-1"
          type="text"
          name="company"
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" className="border border-linkIt-300 p-1 m-2">
          Publicar
        </button>
      </form>
    </div>
  );
}

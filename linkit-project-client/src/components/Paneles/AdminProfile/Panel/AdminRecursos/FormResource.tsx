
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
// import validations from "./Validation";
import { ResourceProps } from "../../../admin.types";
import { useTranslation } from "react-i18next";


type OnCloseFunction = () => void;

interface FormResourceProps {
  onClose: OnCloseFunction;
}


export default function FormResource({ onClose }: FormResourceProps) {
  //TODO: Tarea para mi osea yo, implement a type or interface for this state & errors
  const {t} = useTranslation()
  const [information, setInformation] = useState<Partial<ResourceProps>>({
    title: "",
    description: "",
    link: "",
    type: "",
    image: "",
    category: "",
  });
  // console.log(information)

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    link: "",
    type: "",
    image: "",
    category: "",
  });

  // console.log(errors)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInformation({
      ...information,
      [name]: value,
    });

  };


  const handleBlurErrors = () => {
    // const validationError = validations(information)
    // setErrors(validationError)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const validationError = validations(information)
    // setErrors(validationError)
    try {
      const endPoint = "https://linkit-server.onrender.com/posts/create";
      const response = await axios.post(endPoint, information, {
        headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` },
        // headers: { Authorization: `Bearer ${token}` } //* descomentar cuando se tenga  creado el logeo de admin
      });

      swal(t("El post fue creado con éxito"));
      setInformation({
        title: "",
        description: "",
        link: "",
        type: "",
        image: "",
        category: "",
      });
      onClose()
      return response.data;
    } catch (error: any) {
      console.error(error.response.data)
    }
  };



  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">

      <div className=" flex flex-col justify-center items-center bg-linkIt-500 opa m-32 rounded-[20px] border-[3px] border-linkIt-300 ">

        <div>
          <h1 className="text-3xl my-12">{t('Nuevo Recurso')}</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
          action=""
        >
          <div className="flex flex-wrap justify-start mx-3 mb-6 px-16">

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t('Título')}</label>
              <input
                className={errors.title ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                type="text"
                name="title"
                placeholder={errors.title ? "*" : ""}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlurErrors}
              />

            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Link</label>
              <input
                className={errors.link ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                type="text"
                name="link"
                placeholder={errors.link ? "*" : ""}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlurErrors}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('Imagen')}</label>
              <input
                className={errors.image ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                type="text"
                name="image"
                placeholder={errors.image ? "*" : ""}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlurErrors}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('Categoría')}</label>
              <input
                className={errors.category ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                type="text"
                name="category"
                placeholder={errors.category ? "*" : ""}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlurErrors}
              />
            </div>

            <div className="w-fit px-3 mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('Tipo')}</label>
              <div>
                <select
                  name="type"
                  className={errors.type ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                  onChange={handleChange}>
                  <option value="">{t('Selecciona')}</option>
                  <option value="blog">Blog</option>
                  <option value="ebook">Ebook</option>
                  <option value="social">Social</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Descripción</label>
              <textarea
                className={errors.description ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                name="description"
                autoComplete="off"
                placeholder={errors.description ? "*" : ""}
                onChange={handleChange}
                onBlur={handleBlurErrors}
              ></textarea>
            </div>
          </div>

          {errors.title || errors.description || errors.link || errors.type || errors.image || errors.category ? <span className="text-red-500">{t('Los campos marcados con * son obligatorios')}</span> : null}
          <div className="flex">
            <button onClick={onClose} className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 mr-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90">
              {t('Volver')}
            </button>
            <button type="submit" className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 ml-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90">
              {t('Publicar')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

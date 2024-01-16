
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { ResourceProps } from "../../../admin.types";
import { useTranslation } from "react-i18next";
import { validations } from "./Validation";
import { useSelector } from "react-redux";
import { IUser } from "../../../../Profiles/types";

export type stateProps = {
  Authentication: {
    user: IUser
  }
  resources: {
    allresources: ResourceProps[];
  };
}

type OnCloseFunction = () => void;

interface FormResourceProps {
  onClose: OnCloseFunction;
}

export default function FormResource({ onClose, }: FormResourceProps) {
  const token = useSelector((state: stateProps) => state.Authentication.user._id)
  const user = useSelector((state: stateProps) => state.Authentication.user)
  const { t } = useTranslation()
  const [information, setInformation] = useState<Partial<ResourceProps>>({
    title: "",
    description: "",
    link: "",
    type: "",
    image: "",
    category: "",
    headers: [{
      head: "",
      body: "",
    }],
    createdBy: user.firstName,
  });
  console.log(information)

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    link: "",
    image: "",
    category: "",
    headers: [],
  });

  // console.log(errors)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInformation({
      ...information,
      [name]: value,
    });

    const validationError = validations(information as ResourceProps);
    setErrors(validationError);
  };


  const handleBlurErrors = () => {
    const validationError = validations(information as ResourceProps);
    setErrors(validationError);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validations(information as ResourceProps);
    setErrors(validationError);

    try {
      const endPoint = "https://linkit-server.onrender.com/posts/create";
      const response = await axios.post(endPoint, information, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept-Language': sessionStorage.getItem('lang')
        }
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
    <div className="fixed flex justify-center p-24 top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className=" flex flex-col justify-center items-center bg-linkIt-500 w-fit h-fit rounded-[20px] border-[3px] border-linkIt-300  p-8">
        <div className="flex w-full justify-end ">
          <button
            className={`background-button m-2`}
            onClick={onClose}
          >X</button>
        </div>
        <div>
          <h1 className="text-3xl mb-6">{t(`Nuevo recurso ${information.type}`)}</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
          action=""
        >
          <div className="flex flex-col">

            <div className="w-fit">
              <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('Tipo')}</label>
              <div>
                <select
                  name="type"
                  className="appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                  onChange={handleChange}>
                  <option value="">{t('Selecciona')}</option>
                  <option value="blog">Blog</option>
                  <option value="ebook">Ebook</option>
                  <option value="social">Social</option>
                </select>
              </div>
            </div>
            {information.type === 'social' || information.type === 'ebook' ? (
              <div className="flex flex-row flex-wrap w-[110vh]">
                <div className="w-fit mb-6">
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



                <div className="w-full mb-6">
                  <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t('Descripción')}</label>
                  <textarea
                    className={errors.description ? '"appearance-none block w-full bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                    name="description"
                    autoComplete="off"
                    placeholder={errors.description ? "*" : ""}
                    onChange={handleChange}
                    onBlur={handleBlurErrors}
                  >
                  </textarea>
                  <span className="text-xs text-red-600">{errors.description}</span>
                </div>
                <div className="flex justify-center items-center">
                  {errors.title || errors.description || errors.link || errors.image || errors.category ? <span className="text-red-500">{t('Los campos marcados con * son obligatorios')}</span> : null}
                </div>
              </div>
            ) : information.type === 'blog' ? (
              <div className="flex flex-row flex-wrap w-[110vh]">
                <div className="w-fit mb-6">
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

                <div className="w-full mb-6">
                  <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t('Descripción')}</label>
                  <textarea
                    className={errors.description ? '"appearance-none block w-full bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-full bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                    name="description"
                    autoComplete="off"
                    placeholder={errors.description ? "*" : ""}
                    onChange={handleChange}
                    onBlur={handleBlurErrors}
                  >
                  </textarea>
                  <span className="text-xs text-red-600">{errors.description}</span>
                </div>

                <div>
                  <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t('Encabezado')}</label>
                  <input
                    className={errors.headers ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                    type="text"
                    name="header"
                    placeholder={errors.headers ? "*" : ""}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlurErrors}
                  />
                </div>

                <div className="flex justify-center items-center">
                  {errors.title || errors.image || errors.category ? <span className="text-red-500">{t('Los campos marcados con * son obligatorios')}</span> : null}
                </div>
              </div>
            ) :
              <span>Selecciona el tipo de recurso</span>
            }
          </div>


          <div className="flex m-4">
            <button onClick={onClose}
              className={`background-button mr-2`}
            >
              {t('Volver')}
            </button>
            {information.type &&
              <button type="submit"
                className={`background-button ml-2`}
              >
                {t('Publicar')}
              </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
}

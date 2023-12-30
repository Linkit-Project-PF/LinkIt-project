
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { validations } from "./Validation";
import { ValidationError } from "../../../errors/errors";
import { validateReview } from "../../../errors/validation";
import { ReviewProps } from "../../../admin.types";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { stateProps } from "../AdminRecursos/AdminRecursos";


type OnCloseFunction = () => void;

interface FormReviewProps {
    onClose: OnCloseFunction;
}


export default function FormReview({ onClose }: FormReviewProps) {
    
    const {t}=useTranslation();
    const token = useSelector((state: stateProps) => state.Authentication.user._id )
    const [information, setInformation] = useState<Partial<ReviewProps>>({
        name: "",
        rol: "",
        country: "",
        detail: "",
    });
    // console.log(information)

    const [errors, setErrors] = useState({
        name: "",
        rol: "",
        country: "",
        detail: "",
    });

    // console.log(errors)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setInformation({
            ...information,
            [name]: value,
        });

        const validationError = validations(information as ReviewProps);
        setErrors(validationError);
    };


    const handleBlurErrors = () => {
        const validationError = validations(information as ReviewProps);
        setErrors(validationError);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationError = validations(information as ReviewProps);
        setErrors(validationError);
        try {
            //* validation review form
            const validationError = validations(information as ReviewProps)
            setErrors(validationError)
            
            validateReview(information as ReviewProps) //* errors from console
            const endPoint = "https://linkit-server.onrender.com/reviews/create";
            const response = await axios.post(endPoint, information, {
                headers: { Authorization: `Bearer ${token}`,
                'Accept-Language': sessionStorage.getItem('lang') }
              });

            swal(t("El post fue creado con éxito"));
            setInformation({
                name: "",
                rol: "",
                country: "",
                detail: "",
            });
            onClose()
            return response.data;
        } catch (error) {
            console.error((error as Error).message)
            throw new ValidationError((error as Error).message);
        }
    };



    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">

            <div className=" flex flex-col justify-center items-center bg-linkIt-500 opa m-32 rounded-[20px] border-[3px] border-linkIt-300 ">

                <div>
                    <h1 className="text-3xl my-12">{t('Nueva Reseña')}</h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center"
                    action=""
                >
                    <div className="flex flex-wrap justify-start mx-3 mb-6 px-16">

                        <div className="w-fit px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t('Nombre Cliente')}</label>
                            <input
                                className={errors.name ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                                type="text"
                                name="name"
                                placeholder={errors.name ? "*" : ""}
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlurErrors}
                            />

                        </div>

                        <div className="w-fit px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t('Rol')}</label>
                            <select
                                className={errors.rol ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                                name="rol"
                                placeholder={errors.rol ? "*" : ""}
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlurErrors}
                            >
                                <option value="">{t('Selecciona')}</option>
                                <option value="user">{t('Usuario')}</option>
                                <option value="company">{t('Empresa')}</option>
                            </select>
                        </div>

                        <div className="w-fit px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('País')}</label>
                            <input
                                className={errors.country ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                                type="text"
                                name="country"
                                placeholder={errors.country ? "*" : ""}
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlurErrors}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">{t('Detalle')}</label>
                            <textarea
                                className={errors.detail ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                                name="detail"
                                autoComplete="off"
                                placeholder={errors.detail ? "*" : ""}
                                onChange={handleChange}
                                onBlur={handleBlurErrors}
                            ></textarea>
                        </div>
                    </div>
                    {errors.name || errors.rol || errors.country || errors.detail ? <span className="text-red-500">{t('Los campos marcados con * son obligatiorios')}</span> : null}
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


import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
// import validations from "./Validation";
import { ReviewProps } from "../../../admin.types";

type OnCloseFunction = () => void;

interface FormReviewProps {
    onClose: OnCloseFunction;
}


export default function FormReview({ onClose }: FormReviewProps) {
    //TODO: Tarea para mi osea yo, implement a type or interface for this state & errors
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
            const endPoint = "https://linkit-server.onrender.com/reviews/create";
            const response = await axios.post(endPoint, information, {
                headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` },
                // headers: { Authorization: `Bearer ${token}` } //* descomentar cuando se tenga  creado el logeo de admin
            });

            swal("El post fue creado con éxito");
            setInformation({
                name: "",
                rol: "",
                country: "",
                detail: "",
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
                    <h1 className="text-3xl my-12">Nueva Review</h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center"
                    action=""
                >
                    <div className="flex flex-wrap justify-start mx-3 mb-6 px-16">

                        <div className="w-fit px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Nombre Cliente</label>
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
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Rol</label>
                            <select
                                className={errors.rol ? '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-red-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white text-red-500"' : '"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"'}
                                name="rol"
                                placeholder={errors.rol ? "*" : ""}
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlurErrors}
                            >
                                <option value="">Selecciona</option>
                                <option value="user">Usuario</option>
                                <option value="company">Empresa</option>
                            </select>
                        </div>

                        <div className="w-fit px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >País</label>
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
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">Detalle</label>
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
                    {errors.name || errors.rol || errors.country || errors.detail ? <span className="text-red-500">Los campos marcados con * son obligatioris</span> : null}
                    <div className="flex">
                        <button onClick={onClose} className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 mr-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90">
                            Volver
                        </button>
                        <button type="submit" className="bg-linkIt-300 flex justify-center items-center rounded-[7px] mb-12 ml-6 p-6 h-12 w-32 text-white text-[10px] xl:text-xl shadow-md hover:bg-transparent hover:border-linkIt-300 hover:text-black hover:shadow-sm hover:shadow-linkIt-300 transition-all duration-300 ease-in-out active:scale-90">
                            Publicar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

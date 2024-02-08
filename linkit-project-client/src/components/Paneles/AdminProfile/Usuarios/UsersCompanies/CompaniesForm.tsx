import { useSelector } from "react-redux";
import { IUser } from "../../../../Profiles/types";
import { useTranslation } from "react-i18next";
import { CompaniesProps } from "../../../admin.types";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";



type OnCloseFunction = () => void;
interface FormAdminProps {
    onClose: OnCloseFunction;
    setSaveStatus: (status: boolean) => void;
}
export type stateProps = {
    Authentication: {
        user: IUser
    }
}

export default function CompaniesForm({ onClose, setSaveStatus }: FormAdminProps) {

    const token = useSelector((state: stateProps) => state.Authentication.user._id)
    const { t } = useTranslation()

    const [information, setInformation] = useState<Partial<CompaniesProps>>({
        role: "company",
        companyName: "",
        repName: "",
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInformation({
            ...information,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const endPoint = "https://linkit-server.onrender.com/companies/create";
            const response = await axios.post(endPoint, information, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept-Language': sessionStorage.getItem('lang')
                }
            });
            swal(t("Empresa creada con éxito"));
            setInformation({
                companyName: "",
                repName: "",
                email: "",
            });
            onClose()
            setSaveStatus(true)
            return response.data;
        } catch (error: any) {
            console.error(error)
            throw new Error(t("Error al enviar la solicitud:")).message
        }
    };


    return (
        <div className="fixed flex justify-center p-24 top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-y-auto">
            <div className=" flex flex-col justify-center items-center bg-linkIt-500 w-fit h-fit rounded-[7px] border-[3px] border-linkIt-300  p-8">
                <div className="flex w-full justify-end ">
                    <button
                        className={`background-button m-2`}
                        onClick={onClose}
                    >X</button>
                </div>
                <div>
                    <h1 className="text-3xl mb-6">{t(`Datos Nueva Empresa`)}</h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center"
                    action=""
                >
                    <div className="flex flex-row flex-wrap w-[110vh]">
                        <div className="w-fit mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('Nombre de la empresa')}</label>
                            <input
                                className={"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"}
                                type="text"
                                name="companyName"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-fit px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('Representante')}</label>
                            <input
                                className={"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"}
                                type="text"
                                name="repName"
                                onChange={handleChange}

                            />
                        </div>
                        <div className="w-fit px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('E-mail')}</label>
                            <input
                                className={"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"}
                                type="text"
                                name="email"
                                onChange={handleChange}

                            />
                        </div>
                        <div className="w-fit px-3 mb-6">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" >{t('Contraseña')}</label>
                            <input
                                className={"appearance-none block w-fit bg-linkIt-500 text-blackk border border-linkIt-300 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white"}
                                type="password"
                                name="password"
                                onChange={handleChange}

                            />
                        </div>
                    </div>
                    <div className="flex m-4">
                        <button onClick={onClose}
                            className={`background-button mr-2`}

                        >
                            {t('Volver')}
                        </button>

                        <button type="submit"
                            className={`background-button ml-2`}
                        >
                            {t('Crear')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

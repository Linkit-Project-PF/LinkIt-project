import { useDispatch, useSelector } from "react-redux";
import HeadCompaniesU from "./HeadCompaniesU";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUsersCompanies } from "../../../../../redux/features/UsersSlice";
import { CompaniesProps } from "../../../admin.types";

type stateProps = {
    users: {
        companies: CompaniesProps[];
    };
};

export default function CompaniesU() {

    const token = useSelector((state: any) => state.Authentication.token);
    const dispatch = useDispatch()
    const data = useSelector((state: stateProps) => state.users.companies)

    const [viewCol, setViewCol] = useState({
        rol: true,
        empresa: true,
        pais: true,
        correo: true,
        linkedin: true,
        representante: true,
        imágen: true,
        "Fecha de registro": true,
        interesado: true,
        "AirTable Id": true,
        "Firebase Id": true,
        estado: true,
    })


    useEffect(() => {
        const loadData = async (): Promise<void> => {
            try {
                const response = await axios(
                    "https://linkit-server.onrender.com/companies/find",
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                dispatch(setUsersCompanies(response.data));
            } catch (error) {
                console.error("Error al cargar las información", error);
            }
        };
        loadData();
    }, [])

    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const dataToShow = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNext = (): void => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevius = (): void => {
        setCurrentPage(currentPage - 1);
    };

    const hideCol = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name } = e.target
        setViewCol((prevViewCol) => ({
            ...prevViewCol,
            [name]: !prevViewCol[name as keyof typeof prevViewCol],
        }))
    }

    const renderSectionBasicCap = <K extends keyof CompaniesProps>(title: string, key: K,) => (

        <div>
            <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
                <h1>{title}</h1>
            </div>
            <div>
                {dataToShow.map((r: CompaniesProps, index) => (
                    <p key={`${key}-${index}`} className='capitalize pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
                ))}
            </div>
        </div>

    )
    const renderSectionBasic = <K extends keyof CompaniesProps>(title: string, key: K,) => (

        <div>
            <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
                <h1>{title}</h1>
            </div>
            <div>
                {dataToShow.map((r: CompaniesProps, index) => (
                    <p key={`${key}-${index}`} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
                ))}
            </div>
        </div>

    )
    const renderSectionActive = <K extends keyof CompaniesProps>(title: string, key: K,) => (

        <div>
            <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
                <h1>{title}</h1>
            </div>
            <div>
                {dataToShow.map((r: CompaniesProps, index) => (
                    <p key={`${key}-${index}`} className='capitalize pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === true ? 'Activo' : 'Inactivo')}</p>
                ))}
            </div>
        </div>

    )

    return (
        <div className=' bg-scroll bg-linkIt-500'>
            <HeadCompaniesU
                hideCol={hideCol}
                viewCol={viewCol}
            />
            <div className='flex flex-row mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-lg'>
                {viewCol.rol && renderSectionBasicCap("Rol", "role")}
                {viewCol.empresa && renderSectionBasicCap("Nombre", "companyName")}
                {viewCol.pais && renderSectionBasicCap("Pais", "country")}
                {viewCol.correo && renderSectionBasic("Correo", "email")}
                {viewCol.linkedin && renderSectionBasic("Linkedin", "linkedin")}
                {viewCol.representante && renderSectionBasicCap("Representante", "repName")}
                {viewCol.imágen && renderSectionBasic("Imagen", "image")}
                {viewCol["Fecha de registro"] && renderSectionBasic("Fecha de Registro", "registeredDate")}
                {viewCol.interesado && renderSectionBasic("Interesado", "interested")}
                {viewCol["AirTable Id"] && renderSectionBasic("AirTable Id", "airTableId")}
                {viewCol["Firebase Id"] && renderSectionBasic("Firebase Id", "firebaseId")}
                {viewCol.estado && renderSectionActive("Estado", "active")}
            </div>
            <div className="flex flex-row justify-around">
                <button
                    className="cursor-pointer hover:text-linkIt-300"
                    onClick={handlePrevius}
                    disabled={currentPage === 0}
                >
                    Anterior
                </button>
                <span className='text-center'>
                    Pagina {currentPage + 1} de {totalPages}
                </span>
                <button
                    className="cursor-pointer hover:text-linkIt-300"
                    onClick={handleNext}
                    disabled={endIndex >= dataToShow.length}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}

// import React from 'react'

import { useState, useEffect } from 'react'
import HeadVacancy from './headVacancy'
import { useDispatch, useSelector } from "react-redux";
import { VacancyProps } from "../../../admin.types";
import { setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import axios from "axios";
import { UserPostulations } from "./userPostulations";


type stateProps = {
    jobCard: {
        allJobOffers: VacancyProps[];
    };
};

export default function Vacancies2() {

    const data = useSelector((state: stateProps) => state.jobCard.allJobOffers);
    const token = useSelector((state: any) => state.Authentication.token);
    const [saveStatus, /*setSaveStatus*/] = useState(false); //* Estado que actualiza la info de la tabla
    const dispatch = useDispatch();

    const [viewPostul, setViewPostul] = useState(false);
    const [postulData, setPostulData] = useState<Partial<VacancyProps>>({});

    const [viewCol, setViewCol] = useState({
        title: true,
        description: true,
        type: true,
        location: true,
        modality: true,
        stack: true,
        users: true,
        AboutUs: true,
        AboutClient: true,
        responsabilities: true,
        requiriments: true,
        niceToHave: true,
        benefits: true,
        company: true,
        status: true,
        code: true,
        archived: true,
    })

    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const dataToShow = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const hidePostul = () => {
        setViewPostul(false);
    };

    const handlePostul = (id: string): void => {
        const activeRow = data.find((v) => v._id === id);
        if (activeRow) {
            setPostulData(activeRow);
            setViewPostul(true);
        }
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevius = () => {
        setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios(
                    "https://linkit-server.onrender.com/jds/find",
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                dispatch(setJobOffers(response.data));
            } catch (error) {
                console.error("Error al cargar las ofertas de trabajo", error);
            }
        };
        loadData();
    }, [saveStatus]);


    const hideCol = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target
        setViewCol((prevViewCol) => ({
            ...prevViewCol,
            [name]: !prevViewCol[name as keyof typeof prevViewCol],
        }))
    }

    return (
        <div className='bg-scroll bg-linkIt-500'>


            <HeadVacancy
                hideCol={hideCol}
                viewCol={viewCol}
            />

            <div className='flex flex-row mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-t-lg'>
                {viewCol.title &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div className='justify-start'>
                                <h1>Titulo</h1>
                            </div>
                            <div className='ml-6 justify-end'>
                                <select name="sort" className='border-none outline-none'>
                                    <option value=""></option>
                                    <option value="">A-Z</option>
                                    <option value="">Z-A</option>
                                </select>
                            </div>
                        </div>
                        <div className=''>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.title}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.description &&
                    <div className=''>
                        <div className='flex flex-row px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
                            <h1>Descipción</h1>
                        </div>

                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{v.description}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.type &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <h1>Tipo</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-b-2 border-r-2 -none outline-none'>
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.type}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.location &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Locación</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.location}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.modality &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <h1>Modalidad</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-none outline-none'>
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.modality}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.stack &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Tecnologías</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.stack}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.users &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Postulados</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 text-center border-b-2 border-r-2 border-linkIt-50'>
                                    <a className='cursor-pointer hover:text-linkIt-300' onClick={() => handlePostul(v._id)}>{v.users.length}</a>
                                    </p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.AboutUs &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200 whitespace-nowrap'>
                            <h1>Acerca de Nosotros</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{v.aboutUs}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.AboutClient &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200 whitespace-nowrap'>
                            <h1>Acerca de la Empresa</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{v.aboutClient}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.responsabilities &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Responsabilidades</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{v.responsabilities}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.requiriments &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Requerimientos</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{v.requirements}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.niceToHave &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Deseable</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{v.niceToHave}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.benefits &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Beneficios</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{v.benefits}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.company &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <h1>Empresa</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-none outline-none'>
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.company}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.status &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <h1>Estado</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-none outline-none'>
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.status}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.code &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Código</h1>
                        </div>

                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.code}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.archived &&
                    <div className=''>
                        <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <h1>Vista</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-b-2 border-r-2 -none outline-none'>
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className='pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>{v.archived ? "Oculta" : "Visible"}</p>
                            ))}
                        </div>
                    </div>
                }


            </div>
            <div className="flex flex-row justify-around">
                <button
                    className=""
                    onClick={handlePrevius}
                    disabled={currentPage === 0}
                >
                    Anterior
                </button>
                <span className='text-center'>
                    Pagina {currentPage + 1} de {totalPages}
                </span>
                <button
                    className=""
                    onClick={handleNext}
                    disabled={endIndex >= data.length}
                >
                    Siguiente
                </button>
            </div>
            {viewPostul && (
                <UserPostulations
                    onClose={hidePostul}
                    jdId={postulData._id as string}
                />
            )}
        </div>
    )
}

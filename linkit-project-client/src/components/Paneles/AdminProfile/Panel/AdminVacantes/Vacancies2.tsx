// import React from 'react'

import { useState, useEffect } from 'react'
import HeadVacancy from './headVacancy'
import { useDispatch, useSelector } from "react-redux";
import { VacancyProps } from "../../../admin.types";
import { setFilterJobOffers, setJobOffers } from "../../../../../redux/features/JobCardsSlice";
import axios from "axios";
import { t } from 'i18next';


type stateProps = {
    jobCard: {
        allJobOffers: VacancyProps[];
        filterJobOffers: VacancyProps[];
    };
};

export default function Vacancies2() {
    //
    const filteredJobData = useSelector((state: stateProps) => state.jobCard.filterJobOffers);
    const token = useSelector((state: any) => state.Authentication.token);
    const dispatch = useDispatch();



    const [saveStatus, setSaveStatus] = useState<boolean>(true); //* Estado que actualiza la info de la tabla



    const allStackTechnologies = useSelector(
        (state: any) => state.resources.stackTechnologies as string[]
    );

    const [tehcs, setTehcs] = useState(false)

    const hideTehcs = () => {
        setTehcs(!tehcs)
    }


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

    const dataToShow = filteredJobData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredJobData.length / itemsPerPage);

    const [viewStatus, setViewStatus] = useState('Visible')


    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
    const [editing, setEditing] = useState(false)
    const [editedData, setEditedData] = useState<Partial<VacancyProps>>({});


    const handleView = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const { value } = e.target
        setViewStatus(value)
        dispatch(setFilterJobOffers(value))
    }


    const handleNext = (): void => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevius = (): void => {
        setCurrentPage(currentPage - 1);
    };


    useEffect(() => {
        const loadData = async (): Promise<void> => {
            try {
                const response = await axios(
                    "https://linkit-server.onrender.com/jds/find",
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                dispatch(setJobOffers(response.data));
                dispatch(setFilterJobOffers('Visible'));
            } catch (error) {
                console.error("Error al cargar las ofertas de trabajo", error);
            }
        };
        loadData();
    }, [saveStatus]);



    const hideCol = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name } = e.target
        setViewCol((prevViewCol) => ({
            ...prevViewCol,
            [name]: !prevViewCol[name as keyof typeof prevViewCol],
        }))
    }


    const editJDS = () => {
        setEditing(!editing)
    }

    const handleEdit = (id: string): void => {
        const updateSelectedRows = new Set(selectedRows);
        if (updateSelectedRows.has(id)) {
            updateSelectedRows.delete(id)
        } else {
            updateSelectedRows.add(id)
        }
        setSelectedRows(updateSelectedRows)
        setEditing(false)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        if (name === "requirements" || name === "stack") {
            const valuesArray = value.split(",").map((i) => i.trim());
            setEditedData({
                ...editedData,
                [name]: valuesArray,
            });

        } else {
            setEditedData({
                ...editedData,
                [name]: value,
            });
        }
    };

    const handleSave = async (arrayProps: string[]) => {
        try {
            arrayProps.forEach(async (id: string) => {
                const endPoint = `https://linkit-server.onrender.com/jds/update/${id}`;
                await axios.put(endPoint, editedData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            })
        } catch (error: any) {
            console.error(error.response.data);
            console.error(t("Error al enviar la solicitud: "), (error as Error).message);
        }
        setEditing(false);
        setEditedData({});
        setSaveStatus(!saveStatus);
    };

    return (
        <div className=' bg-scroll bg-linkIt-500'>

            <HeadVacancy
                selectedRows={selectedRows}
                hideCol={hideCol}
                viewCol={viewCol}
                setSaveStatus={setSaveStatus}
                editJDS={editJDS}
                editing={editing}
                handleSave={handleSave}
            />

            <div className='capitalize flex flex-row  mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-lg'>

                {viewCol.title &&
                    <div className=''>
                        <div className='capitalize flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
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
                                <div
                                    key={v._id}
                                    className={selectedRows.has(v._id) ? 'capitalize flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap' : 'capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1'}>
                                    <input type="checkbox" name='edit' onChange={() => handleEdit(v._id)} checked={selectedRows.has(v._id)} />
                                    <p key={v._id} className='pl-2'>
                                        {selectedRows.has(v._id) && editing ?
                                            <input
                                                name='title'
                                                type="text"
                                                onChange={handleChange}
                                                defaultValue={v.title}
                                                className="bg-linkIt-500 text-black"
                                            /> : v.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.description &&
                    <div className=''>
                        <div className='flex flex-row  px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
                            <h1>Descipción</h1>
                        </div>

                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}
                                    className={selectedRows.has(v._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}>
                                    <p >
                                        {selectedRows.has(v._id) && editing ?
                                            <textarea
                                                name='description'
                                                onChange={handleChange}
                                                defaultValue={v.description}
                                                className="bg-linkIt-500 text-black w-full h-6"
                                            /> : v.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.type &&
                    <div className=''>
                        <div className='capitalize flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <h1>Tipo</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-b-2 border-r-2 -none outline-none'>
                                    <option value=""></option>
                                    <option value="">Full-time</option>
                                    <option value="">Part-time</option>
                                    <option value="">Freelance</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}>
                                    <p className={selectedRows.has(v._id) ? 'capitalize  flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap justify-center items-center' : 'capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1 justify-center items-center'}>
                                        {selectedRows.has(v._id) && editing ?
                                            <select
                                                defaultValue={v.type}
                                                name='type'
                                                onChange={handleChange}
                                                className=" bg-linkIt-500 text-black"
                                            >
                                                <option value="full-time">Full-time</option>
                                                <option value="part-time">Part-time</option>
                                                <option value="freelance">Freelance</option>
                                            </select>
                                            : v.type}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.location &&
                    <div className=''>
                        <div className='capitalize flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Locación</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div
                                    key={v._id}
                                    className={selectedRows.has(v._id) ? 'capitalize flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap' : 'capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1'}>
                                    <p className=''>
                                        {selectedRows.has(v._id) && editing ?
                                            <input
                                                name='location'
                                                type="text"
                                                onChange={handleChange}
                                                defaultValue={v.location}
                                                className="bg-linkIt-500 text-black"
                                            /> : v.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.modality &&
                    <div className=''>
                        <div className='capitalize flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <h1>Modalidad</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-none outline-none'>
                                    <option value=""></option>
                                    <option value="">Remote</option>
                                    <option value="">Specific-remote</option>
                                    <option value="">On-Site</option>
                                    <option value="">Hybrid</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}>
                                    <p className={selectedRows.has(v._id) ? 'capitalize flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap justify-center items-center' : 'capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1 justify-center items-center'}>
                                        {selectedRows.has(v._id) && editing ?
                                            <select
                                                defaultValue={v.modality}
                                                name='modality'
                                                onChange={handleChange}
                                                className="bg-linkIt-500 text-black"
                                            >
                                                <option value="remote">Remote</option>
                                                <option value="specific-remote">Specific-remote</option>
                                                <option value="on-Site">On-Site</option>
                                                <option value="hybrid">Hybrid</option>
                                            </select>
                                            : v.modality}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.stack &&
                    <div className='relative'>
                        <div className='capitalize flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <button onClick={hideTehcs}>Tecnologías</button>
                            </div>
                        </div>
                        <div className='absolute mt-6 border-2  border-black'>
                            {tehcs && allStackTechnologies?.map((stack: any, index: number) => {
                                return (
                                    <div key={index} className='pl-6 capitalize flex flex-row '>
                                        <label className=''>
                                            <input className='' type="checkbox" name={stack.name} />
                                            {stack.name}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div
                                    key={v._id}
                                    className={selectedRows.has(v._id) ? 'capitalize flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap' : 'capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1'}>
                                    <p className=''>
                                        {selectedRows.has(v._id) && editing ?
                                            <input
                                                name='stack'
                                                type="text"
                                                onChange={handleChange}
                                                defaultValue={v.stack.join(', ')}
                                                className="bg-linkIt-500 text-black"
                                            /> : v.stack.join(', ')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }


                {viewCol.AboutUs &&
                    <div className=''>
                        <div className='flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200 whitespace-nowrap'>
                            <h1>Acerca de Nosotros</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}
                                    className={selectedRows.has(v._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}>
                                    <p >
                                        {selectedRows.has(v._id) && editing ?
                                            <textarea
                                                name='aboutUs'
                                                onChange={handleChange}
                                                defaultValue={v.aboutUs}
                                                className="bg-linkIt-500 text-black w-full h-6"
                                            /> : v.aboutUs}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.AboutClient &&
                    <div className=''>
                        <div className='flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200 whitespace-nowrap'>
                            <h1>Acerca de la Empresa</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}
                                    className={selectedRows.has(v._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}>
                                    <p >
                                        {selectedRows.has(v._id) && editing ?
                                            <textarea
                                                name='aboutClient'
                                                onChange={handleChange}
                                                defaultValue={v.aboutClient}
                                                className="bg-linkIt-500 text-black w-full h-6"
                                            /> : v.aboutClient}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.responsabilities &&
                    <div className=''>
                        <div className='flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Responsabilidades</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}
                                    className={selectedRows.has(v._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}>
                                    <p >
                                        {selectedRows.has(v._id) && editing ?
                                            <textarea
                                                name='responsabilities'
                                                onChange={handleChange}
                                                defaultValue={v.responsabilities}
                                                className="bg-linkIt-500 text-black w-full h-6"
                                            /> : v.responsabilities}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.requiriments &&
                    <div className=''>
                        <div className='flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Requerimientos</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}
                                    className={selectedRows.has(v._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}>
                                    <p >
                                        {selectedRows.has(v._id) && editing ?
                                            <textarea
                                                name='requirements'
                                                onChange={handleChange}
                                                defaultValue={v.requirements}
                                                className="bg-linkIt-500 text-black w-full h-6"
                                            /> : v.requirements}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.niceToHave &&
                    <div className=''>
                        <div className='flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Deseable</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}
                                    className={selectedRows.has(v._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}>
                                    <p >
                                        {selectedRows.has(v._id) && editing ?
                                            <textarea
                                                name='niceToHave'
                                                onChange={handleChange}
                                                defaultValue={v.niceToHave}
                                                className="bg-linkIt-500 text-black w-full h-6"
                                            /> : v.niceToHave}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.benefits &&
                    <div className=''>
                        <div className='flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Beneficios</h1>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <div key={v._id}
                                    className={selectedRows.has(v._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}>
                                    <p >
                                        {selectedRows.has(v._id) && editing ?
                                            <textarea
                                                name='benefits'
                                                onChange={handleChange}
                                                defaultValue={v.benefits}
                                                className="bg-linkIt-500 text-black w-full h-6"
                                            /> : v.benefits}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.company &&
                    <div className=''>
                        <div className='capitalize flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
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
                                <div key={v._id}>
                                    <p className={selectedRows.has(v._id) ? 'capitalize flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap justify-center items-center' : 'capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1 justify-center items-center'}>
                                        {v.company}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.code &&
                    <div className=''>
                        <div className='capitalize flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <h1>Código</h1>
                        </div>

                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className={selectedRows.has(v._id) ? ' flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap' : ' flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1'}>{v.code}</p>
                            ))}
                        </div>
                    </div>
                }

                {viewCol.archived &&
                    <div className=''>
                        <div className='capitalize flex flex-row  px-16 border-b-2 border-r-2  border-linkIt-200'>
                            <div>
                                <h1>Vista</h1>
                            </div>
                            <div className='ml-6'>
                                <select
                                    name="view"
                                    className='border-b-2 border-r-2 -none outline-none'
                                    onChange={handleView}
                                    defaultValue={viewStatus}
                                >
                                    <option value="Visible">Visible</option>
                                    <option value="Hidden">Hidden</option>
                                    <option value="All">All</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {dataToShow.map((v: VacancyProps) => (
                                <p key={v._id} className={selectedRows.has(v._id) ? 'capitalize flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap' : 'capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1'}>{v.archived ? 'Hidden' : 'Visible'}</p>
                            ))}
                        </div>
                    </div>
                }


            </div>
            <div className="capitalize flex flex-row  justify-around">
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
                    disabled={endIndex >= filteredJobData.length}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}

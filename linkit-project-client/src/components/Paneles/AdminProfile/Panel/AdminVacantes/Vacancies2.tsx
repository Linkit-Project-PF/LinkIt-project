// import React from 'react'

import { useState } from 'react'
import HeadVacancy from './headVacancy'

export default function Vacancies2() {

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
    console.log(viewCol)

    const hideCol = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target
        setViewCol((prevViewCol) => ({
            ...prevViewCol,
            [name]: !prevViewCol[name as keyof typeof prevViewCol],
        }))
    }

    return (
        <div className='bg-scroll bg-linkIt-500'>

            <HeadVacancy hideCol={hideCol} viewCol={viewCol} />

            <div className='flex flex-row overflow-y-scroll'>

                {viewCol.title &&
                    <div className='ml-6'>
                        <div className='flex flex-row px-16 border border-linkIt-200 rounded-tl-lg'>
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
                    </div>
                }

                {viewCol.description &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Descipción</h1>
                        </div>
                    </div>
                }

                {viewCol.type &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <div>
                                <h1>Tipo</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-none outline-none'>
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                }

                {viewCol.location &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Locación</h1>
                        </div>
                    </div>
                }

                {viewCol.modality &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
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
                    </div>
                }

                {viewCol.stack &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Tecnologías</h1>
                        </div>
                    </div>
                }

                {viewCol.users &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Postulados</h1>
                        </div>
                    </div>
                }

                {viewCol.AboutUs &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200 whitespace-nowrap'>
                            <h1>Acerca de Nosotros</h1>
                        </div>
                    </div>
                }

                {viewCol.AboutClient &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200 whitespace-nowrap'>
                            <h1>Acerca de la Empresa</h1>
                        </div>
                    </div>
                }

                {viewCol.responsabilities &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Responsabilidades</h1>
                        </div>
                    </div>
                }

                {viewCol.requiriments &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Requerimientos</h1>
                        </div>
                    </div>
                }

                {viewCol.niceToHave &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Deseable</h1>
                        </div>
                    </div>
                }

                {viewCol.benefits &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Beneficios</h1>
                        </div>
                    </div>
                }

                {viewCol.company &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
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
                    </div>
                }

                {viewCol.status &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
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
                    </div>
                }

                {viewCol.code &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200'>
                            <h1>Código</h1>
                        </div>
                    </div>
                }

                {viewCol.archived &&
                    <div className=''>
                        <div className='flex flex-row px-16 border border-linkIt-200 rounded-tr-lg'>
                            <div>
                                <h1>Vista</h1>
                            </div>
                            <div className='ml-6'>
                                <select name="sort" className='border-none outline-none'>
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                }

                
            </div>
        </div>
    )
}

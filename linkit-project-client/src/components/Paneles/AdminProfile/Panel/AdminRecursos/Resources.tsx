import { useEffect, useState } from "react";
import HeadResources from "./HeadResources";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setResources } from "../../../../../redux/features/ResourcesSlice";
import { ResourceProps, ViewResourceProps } from "../../../admin.types";

export type stateProps = {
    resources: {
        allresources: ResourceProps[];
    };
}

export default function Resources() {
    const dispatch = useDispatch()
    const token = useSelector((state: any) => state.Authentication.token);
    const data = useSelector((state: stateProps) => state.resources.allresources);


    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataToShow = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const [viewCol, setViewCol] = useState<ViewResourceProps>({
        _id: false,
        title: true,
        description: true,
        link: true,
        type: true,
        createdDate: true,
        image: true,
        category: true,
        archived: true,
      })


    useEffect(() => {
        const loadData = async (): Promise<void> => {
            try {
                const response = await axios(
                    "https://linkit-server.onrender.com/posts/find",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Accept-Language': sessionStorage.getItem('lang')
                        }
                    }
                );
                dispatch(setResources(response.data));
            } catch (error) {
                console.error("Error al cargar las información", error);
            }
        };
        loadData();
    }, [])

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

    const renderSectionBasicCap = <K extends keyof ResourceProps>(title: string, key: K,) => (
        <div>
          <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
            <h1>{title}</h1>
          </div>
          <div>
            {dataToShow.map((r: ResourceProps, index) => (
              <p key={`${key}-${index}`} className='capitalize pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
            ))}
          </div>
        </div>
      )

      const renderSectionBasic = <K extends keyof ResourceProps>(title: string, key: K,) => (
        <div>
          <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
            <h1>{title}</h1>
          </div>
          <div>
            {dataToShow.map((r: ResourceProps, index) => (
              <p key={`${key}-${index}`} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
            ))}
          </div>
        </div>
      )

      const renderSectionActive = <K extends keyof ResourceProps>(title: string, key: K,) => (

        <div>
          <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
            <h1>{title}</h1>
          </div>
          <div>
            {dataToShow.map((r: ResourceProps, index) => (
              <p key={`${key}-${index}`} className='capitalize pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === true ? 'Oculto' : 'Visible')}</p>
            ))}
          </div>
        </div>
      )
    
    return (

        <div>
            <HeadResources 
             hideCol={hideCol}
             viewCol={viewCol}
            />
            <div className='flex flex-row mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-lg'>
            {viewCol._id && renderSectionBasic("ID", "_id")}
            {viewCol.title && renderSectionBasicCap("Título", "title")}
            {viewCol.link && renderSectionBasicCap("Link", "link")}
            {viewCol.type && renderSectionBasicCap("Tipo", "type")}
            {viewCol.createdDate && renderSectionBasicCap("Fecha de Creación", "createdDate")}
            {viewCol.image && renderSectionBasicCap("URL Imágen", "image")}
            {viewCol.category && renderSectionBasicCap("Categoría", "category")}
            {viewCol.archived && renderSectionActive("Estado", "archived")}

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
                    disabled={endIndex >= data.length}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}

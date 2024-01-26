import { useEffect, useState } from "react";
import HeadResources from "./HeadResources";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setResources, sortResource } from "../../../../../redux/features/ResourcesSlice";
import { ResourceProps, ViewResourceProps } from "../../../admin.types";

export type stateProps = {
  resources: {
    filteredResources: ResourceProps[];
  };
}

export default function Resources() {
  const dispatch = useDispatch()
  const token = useSelector((state: any) => state.Authentication.token);
  const data = useSelector((state: stateProps) => state.resources.filteredResources);
  const [saveStatus, setSaveStatus] = useState<boolean>(true);

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
        dispatch(sortResource('recent'))
      } catch (error) {
        console.error("Error al cargar las información", error);
      }
    };
    loadData();
  }, [saveStatus])

  //?COLUMNS
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
  const hideCol = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target
    setViewCol((prevViewCol) => ({
      ...prevViewCol,
      [name]: !prevViewCol[name as keyof typeof prevViewCol],
    }))
  }
  //?

  //? PAGINADO
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const dataToShow = data?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handleNext = (): void => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevius = (): void => {
    setCurrentPage(currentPage - 1);
  };
  //? 

  //?EDITAR
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [editing, setEditing] = useState(false)
  const [editedData, setEditedData] = useState<Partial<ResourceProps>>({});
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
  const editResource = () => {
    setEditing(!editing)
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };
  const handleSave = async (arrayProps: string[]) => {
    try {
      arrayProps.forEach(async (id: string) => {
        const endPoint = `https://linkit-server.onrender.com/posts/update/${id}`;
        await axios.put(endPoint, editedData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Accept-Language': sessionStorage.getItem('lang')
          },
        });
      })
    } catch (error: any) {
      console.error(error.response.data);
      console.error("Error al enviar la solicitud: ", (error as Error).message);
    }
    setEditing(false);
    setEditedData({});
    setSaveStatus(!saveStatus);
  };
  //?

  //?SECCIONES
  const renderSectionSelect = <K extends keyof ResourceProps>(title: string, key: K,) => (
    <div>
      <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow?.map((r: ResourceProps, index) => (
          <div
            key={`${key}-${index}`}
            className={selectedRows.has(r._id) ? 'capitalize flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap' : 'capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1'}
          >
            <input type="checkbox" name="edit" onChange={() => handleEdit(r._id)} checked={selectedRows.has(r._id)} />
            <p className="pl-2">{selectedRows.has(r._id) && editing ?
              <input
                name={key}
                type="text"
                defaultValue={r[key] as any}
                onChange={handleChange}
                className="bg-linkIt-500 text-black w-full"
              />
              : String(r[key] === undefined || NaN ? '' : r[key])}</p>
          </div>
        ))}
      </div>
    </div>
  )
  const renderSectionBasicNoEdit = <K extends keyof ResourceProps>(title: string, key: K,) => (
    <div>
      <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow?.map((r: ResourceProps, index) => (
          <div
            key={`${key}-${index}`}
            className={selectedRows.has(r._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}
          >
            <p>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
          </div>
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
        {dataToShow?.map((r: ResourceProps, index) => (
          <div
            key={`${key}-${index}`}
            className={selectedRows.has(r._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}
          >
            <p>{selectedRows.has(r._id) && editing ?
              <input
                name={key}
                type="text"
                defaultValue={r[key] as any}
                onChange={handleChange}
                className="bg-linkIt-500 text-black w-full"
              />
              : String(r[key] === undefined || NaN ? '' : r[key])}</p>
          </div>
        ))}
      </div>
    </div>
  )
  const renderSectionBasicCap = <K extends keyof ResourceProps>(title: string, key: K,) => (
    <div>
      <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow?.map((r: ResourceProps, index) => (
          <div
            key={`${key}-${index}`}
            className={selectedRows.has(r._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}
          >
            <p>{selectedRows.has(r._id) && editing ?
              <input
                name={key}
                type="text"
                defaultValue={r[key] as any}
                onChange={handleChange}
                className="bg-linkIt-500 text-black"
              />
              : String(r[key] === undefined || NaN ? '' : r[key])}</p>
          </div>
        ))}
      </div>
    </div>
  )
  const renderSectionBasicCapType = <K extends keyof ResourceProps>(title: string, key: K,) => (
    <div>
      <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow?.map((r: ResourceProps, index) => (
          <div
            key={`${key}-${index}`}
            className={selectedRows.has(r._id) ? 'capitalize pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'capitalize pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}
          >
            <p>{selectedRows.has(r._id) && editing ?
              <input
                name={key}
                type="text"
                defaultValue={r[key] as any}
                onChange={handleChange}
                className="bg-linkIt-500 text-black"
              />
              : String(r[key] === undefined || NaN ? '' : r[key] && r[key]=== 'social' ? 'evento' :r[key])}</p>
          </div>
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
        {dataToShow?.map((r: ResourceProps, index) => (
          <div
            key={`${key}-${index}`}
            className={selectedRows.has(r._id) ? 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center' : 'pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center'}
          >
            <p>{String(r[key] === true ? 'Inactivo' : 'Activo')}</p>
          </div>
        ))}
      </div>
    </div>
  )
  //?

  return (

    <div className="bg-linkIt-500 mx-12 rounded-[20px] rounded-b-none w-auto">
      <HeadResources
        hideCol={hideCol}
        viewCol={viewCol}
        selectedRows={selectedRows}
        editing={editing}
        editResource={editResource}
        handleSave={handleSave}
        setSaveStatus={setSaveStatus}
      />
      <div className='flex flex-row mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-lg'>
        {viewCol.title && renderSectionSelect("Título", "title")}
        {viewCol._id && renderSectionBasicNoEdit("ID", "_id")}
        {viewCol.link && renderSectionBasic("Link", "link")}
        {viewCol.type && renderSectionBasicCapType("Tipo", "type")}
        {viewCol.createdDate && renderSectionBasic("Fecha de Creación", "createdDate")}
        {viewCol.image && renderSectionBasic("URL Imágen", "image")}
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

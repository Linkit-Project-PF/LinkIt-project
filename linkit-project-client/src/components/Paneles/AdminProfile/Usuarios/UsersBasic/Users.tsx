import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersTalent } from "../../../../../redux/features/UsersSlice";
import axios from "axios";
import HeadUsers from "./HeadUsers";
import { TalentProps } from "../../../admin.types";

type stateProps = {
  users: {
    talents: TalentProps[];
  };
};

export default function Users() {
  const token = useSelector((state: any) => state.Authentication.token);
  const dispatch = useDispatch()
  const data = useSelector((state: stateProps) => state.users.talents)

  const [viewCol, setViewCol] = useState({
    rol: true,
    nombre: true,
    apellido: true,
    pais: true,
    correo: true,
    curriculum: true,
    linkedin: true,
    tecnologías: true,
    'Fecha de creación': true,
    postulaciones: true,
    'Nivel de inglés': true,
    imágen: true,
    estado: true,
  })


  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        const response = await axios(
          "https://linkit-server.onrender.com/users/find",
          { headers: { Authorization: `Bearer ${token}`,
          'Accept-Language': sessionStorage.getItem('lang') } }
        );
        console.log(response.data)
        dispatch(setUsersTalent(response.data));
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

  const renderSectionBasicCap = <K extends keyof TalentProps>(title: string, key: K,) => (
    <div>
      <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow.map((r: TalentProps, index) => (
          <p key={`${key}-${index}`} className='capitalize pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
        ))}
      </div>
    </div>
  )

  const renderSectionBasic = <K extends keyof TalentProps>(title: string, key: K,) => (
    <div>
      <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow.map((r: TalentProps, index) => (
          <p key={`${key}-${index}`} className='pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === undefined || NaN ? '' : r[key])}</p>
        ))}
      </div>
    </div>
  )

  const renderSectionActive = <K extends keyof TalentProps>(title: string, key: K,) => (

    <div>
      <div className='flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200'>
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow.map((r: TalentProps, index) => (
          <p key={`${key}-${index}`} className='capitalize pl-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50'>{String(r[key] === true ? 'Activo' : 'Inactivo')}</p>
        ))}
      </div>
    </div>
  )

  return (
    <div className=' bg-scroll bg-linkIt-500'>
      <HeadUsers
        hideCol={hideCol}
        viewCol={viewCol}
      />
      <div className='flex flex-row mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-lg'>
        {viewCol.rol && renderSectionBasicCap("Rol", "role")}
        {viewCol.nombre && renderSectionBasicCap("Nombre", "firstName")}
        {viewCol.apellido && renderSectionBasicCap("Apellido", "lastName")}
        {viewCol.pais && renderSectionBasicCap("País", "country")}
        {viewCol.correo && renderSectionBasic("Correo", "email")}
        {viewCol.curriculum && renderSectionBasic("Curriculum", "cv")}
        {viewCol.linkedin && renderSectionBasic("Linkedin", "linkedin")}
        {viewCol.tecnologías && renderSectionBasic("Tecnologías", "technologies")}
        {viewCol["Fecha de creación"] && renderSectionBasic("Fecha de creación", "registeredDate")}
        {viewCol.postulaciones && renderSectionBasic("Postulaciones", "postulations")}
        {viewCol["Nivel de inglés"] && renderSectionBasic("Nivel de inglés", "englishLevel")}
        {viewCol.imágen && renderSectionBasic("Imágen", "image")}
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

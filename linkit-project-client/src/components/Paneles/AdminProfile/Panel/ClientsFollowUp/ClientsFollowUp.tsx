import { useEffect, useState } from "react";
import HeadClientsFollowUp from "./headClientsFollowUp";
import { useDispatch, useSelector } from "react-redux";
import { ClientFollowUpProps } from "../../../admin.types";
import { setJobData } from "../../../../../redux/features/ClientsFollowUpSlice";
import axios from "axios";

type stateProps = {
  jobData: {
    allJobData: ClientFollowUpProps[];
  };
};

export default function ClientsFollowUp() {
  const token = useSelector((state: any) => state.Authentication.token);


  const [viewCol, setViewCol] = useState({
    "1st Client interview": true,
    "1st Offer": true,
    "1st endorsement": true,
    "2nd Client interview": true,
    "Alignment/Start date": true,
    "Año fecha cierre": true,
    "Años de experiencia mínimo": true,
    Area: true,
    BUDGET: true,
    "BUDGET in USD": true,
    "Cantidad de vacantes": true,
    "Cl. Interview time": true,
    Client: true,
    "Contact Name": true,
    "Contact mail": true,
    Comments: true,
    "Closed Rate": true,
    Country: true,
    "Created By": true,
    "Created time Month": true,
    "Created time year": true,
    "Endorsement time": true,
    "English Level": true,
    "Fee acordado": true,
    "Hourly Type": true,
    JD: true,
    "Last Modified": true,
    "Lider de la búsqueda": true,
    "Mes fecha cierre": true,
    "Modalidad de empleo": true,
    "Nombre talento": true,
    "On-site / Remote": true,
    "Prospect type": true,
    "Recruitment role code": true,
    "Reasons closed lost": true,
    Recruiter: true,
    Responsable: true,
    "Role Code": true,
    "Role Name": true,
    "Role Closed date": true,
    "Sales code": true,
    Seniority: true,
    Status: true,
    "Talent Pool Stack": true,
    "Talent Start Date": true,
    "Time to fill": true,
    "Time to offer": true,
    "Tipo de cliente": true,
    "Tipo de oportunidad": true,
    "To today": true,
    "Total candidates endorsed": true,
    created: true,
  })
  const data = useSelector((state: stateProps) => state.jobData.allJobData)
  const dispatch = useDispatch()


  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        const response = await axios(
          "https://linkit-server.onrender.com/resources/companyjds",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch(setJobData(response.data));
      } catch (error) {
        console.error("Error al cargar las información", error);
      }
    };
    loadData();
  }, []);


  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataToShow = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);


  const hideCol = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target
    setViewCol((prevViewCol) => ({
      ...prevViewCol,
      [name]: !prevViewCol[name as keyof typeof prevViewCol],
    }))
  }

  const handleNext = (): void => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevius = (): void => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className=' bg-scroll bg-linkIt-500'>


        <HeadClientsFollowUp
          hideCol={hideCol}
          viewCol={viewCol}
        />

        <div className='flex flex-row mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-lg'>

          {viewCol["Recruitment role code"] &&
            <div className=''>
              <div className='flex flex-row px-16 border-b-2 border-r-2  border-linkIt-200'>
                <div className='justify-start'>
                  <h1>Recruitment role code</h1>
                </div>
              </div>
              <div className=''>
                {dataToShow.map((c: ClientFollowUpProps) => (
                  <div key={c["Recruitment role code"]} className='flex flex-row pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50'>
                    <input type="checkbox" name='edit' />
                    <p className='pl-2'>{c["Recruitment role code"]}</p>
                  </div>
                ))}
              </div>
            </div>
          }

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
    </div>
  )
}

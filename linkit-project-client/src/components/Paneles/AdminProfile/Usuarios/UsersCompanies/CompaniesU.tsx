import { useDispatch, useSelector } from "react-redux";
import HeadCompaniesU from "./HeadCompaniesU";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUsersCompanies } from "../../../../../redux/features/UsersSlice";
import { CompaniesProps } from "../../../admin.types";

export type statePropsCompanies = {
  users: {
    filteredCompanies: CompaniesProps[];
    companies: CompaniesProps[];
  };
};

export default function CompaniesU() {
  const token = useSelector((state: any) => state.Authentication.token);
  const dispatch = useDispatch();
  const data = useSelector(
    (state: statePropsCompanies) => state.users.filteredCompanies
  );
  const [saveStatus, setSaveStatus] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        const response = await axios(
          "https://linkit-server.onrender.com/companies/find",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        dispatch(setUsersCompanies(response.data));
      } catch (error) {
        console.error("Error al cargar las información", error);
      }
    };
    loadData();
  }, [saveStatus]);

  //? COLUMNAS
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
  });
  const hideCol = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    setViewCol((prevViewCol) => ({
      ...prevViewCol,
      [name]: !prevViewCol[name as keyof typeof prevViewCol],
    }));
  };
  //?

  //?PAGINADO
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
  //?

  //?EDITAR
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState<Partial<CompaniesProps>>({});
  const handleEdit = (id: string): void => {
    const updateSelectedRows = new Set(selectedRows);
    if (updateSelectedRows.has(id)) {
      updateSelectedRows.delete(id);
    } else {
      updateSelectedRows.add(id);
    }
    setSelectedRows(updateSelectedRows);
    setEditing(false);
  };
  const editCompanies = () => {
    setEditing(!editing);
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
        const endPoint = `https://linkit-server.onrender.com/companies/update/${id}`;
        await axios.put(endPoint, editedData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": sessionStorage.getItem("lang"),
          },
        });
      });
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
  const renderSectionSelect = <K extends keyof CompaniesProps>(
    title: string,
    key: K
  ) => (
    <div>
      <div className="flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200">
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow.map((r: CompaniesProps, index) => (
          <div
            key={`${key}-${index}`}
            className={
              selectedRows.has(r._id)
                ? "capitalize flex flex-row  pl-3 h-8 pt-1 bg-linkIt-300 whitespace-nowrap"
                : "capitalize flex flex-row  pl-3 h-8 pt-1 border-b-2 border-r-2 border-linkIt-50 overflow-ellipsis overflow-hidden line-clamp-1"
            }
          >
            <input
              type="checkbox"
              name="edit"
              onChange={() => handleEdit(r._id)}
              checked={selectedRows.has(r._id)}
            />
            <p className="pl-2">
              {String(r[key] === undefined || NaN ? "" : r[key])}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  const renderSectionBasicNoEdit = <K extends keyof CompaniesProps>(
    title: string,
    key: K
  ) => (
    <div>
      <div className="flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200">
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow.map((r: CompaniesProps, index) => (
          <div
            key={`${key}-${index}`}
            className={
              selectedRows.has(r._id)
                ? "pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center"
                : "pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center"
            }
          >
            <p>{String(r[key] === undefined || NaN ? "" : r[key])}</p>
          </div>
        ))}
      </div>
    </div>
  );
  const renderSectionBasic = <K extends keyof CompaniesProps>(
    title: string,
    key: K
  ) => (
    <div>
      <div className="flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200">
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow.map((r: CompaniesProps, index) => (
          <div
            key={`${key}-${index}`}
            className={
              selectedRows.has(r._id)
                ? "pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center"
                : "pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center"
            }
          >
            <p>
              {selectedRows.has(r._id) && editing ? (
                <input
                  name={key}
                  type="text"
                  defaultValue={r[key] as any}
                  onChange={handleChange}
                  className="bg-linkIt-500 text-black w-full"
                />
              ) : (
                String(r[key] === undefined || NaN ? "" : r[key])
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  const renderSectionBasicCap = <K extends keyof CompaniesProps>(
    title: string,
    key: K
  ) => (
    <div>
      <div className="flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200">
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow.map((r: CompaniesProps, index) => (
          <div
            key={`${key}-${index}`}
            className={
              selectedRows.has(r._id)
                ? "pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center"
                : "pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center"
            }
          >
            <p>
              {selectedRows.has(r._id) && editing ? (
                <input
                  name={key}
                  type="text"
                  defaultValue={r[key] as any}
                  onChange={handleChange}
                  className="bg-linkIt-500 text-black"
                />
              ) : (
                String(r[key] === undefined || NaN ? "" : r[key])
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  const renderSectionActive = <K extends keyof CompaniesProps>(
    title: string,
    key: K
  ) => (
    <div>
      <div className="flex flex-row whitespace-nowrap px-20 border-b-2 border-r-2  w-80 border-linkIt-200">
        <h1>{title}</h1>
      </div>
      <div>
        {dataToShow.map((r: CompaniesProps, index) => (
          <div
            key={`${key}-${index}`}
            className={
              selectedRows.has(r._id)
                ? "pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 bg-linkIt-300 justify-center items-center"
                : "pl-3 pr-3 pt-1 overflow-hidden overflow-ellipsis h-8 w-80 line-clamp-1 border-b-2 border-r-2 border-linkIt-50 justify-center items-center"
            }
          >
            <p>{String(r[key] === true ? "Activo" : "Inactivo")}</p>
          </div>
        ))}
      </div>
    </div>
  );
  //?

  return (
    <div className=" bg-scroll bg-linkIt-500">
      <HeadCompaniesU
        hideCol={hideCol}
        viewCol={viewCol}
        selectedRows={selectedRows}
        editing={editing}
        editCompanies={editCompanies}
        handleSave={handleSave}
        setSaveStatus={setSaveStatus}
      />
      <div className="flex flex-row mx-6 overflow-y-scroll border-2 border-linkIt-200 rounded-lg">
        {viewCol.rol && renderSectionSelect("Rol", "role")}
        {viewCol.empresa && renderSectionBasicCap("Nombre", "companyName")}
        {viewCol.pais && renderSectionBasicCap("Pais", "country")}
        {viewCol.correo && renderSectionBasic("Correo", "email")}
        {viewCol.linkedin && renderSectionBasic("Linkedin", "linkedin")}
        {viewCol.representante &&
          renderSectionBasicCap("Representante", "repName")}
        {viewCol.imágen && renderSectionBasic("Imagen", "image")}
        {viewCol["Fecha de registro"] &&
          renderSectionBasicNoEdit("Fecha de Registro", "createdDate")}
        {viewCol.interesado &&
          renderSectionBasicNoEdit("Interesado", "interested")}
        {viewCol["AirTable Id"] &&
          renderSectionBasicNoEdit("AirTable Id", "airTableId")}
        {viewCol["Firebase Id"] &&
          renderSectionBasicNoEdit("Firebase Id", "firebaseId")}
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
        <span className="text-center">
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
  );
}

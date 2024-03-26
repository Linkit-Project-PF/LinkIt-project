import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavPanelAdmin() {
  const { t } = useTranslation();
  const params = useParams()

 
  return (
    <nav className="w-screen">
    <ul className="flex flex-row pt-4 pb-4 justify-center items-center  ">
        <li
          className={`text-2xl mr-10 p-5 ${
            params['*']?.includes('statistics') ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/statistics/OKRs"
          >
            {t("Estadísticas")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-10 p-4 ${
            params['*']?.includes('vacantes') ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/vacantes"
          >
            {t("Vacantes")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-10 p-5 ${
            params['*']?.includes('clientsfollowup') ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/clientsfollowup"
          >
            {t("Seguimiento")}
          </NavLink>
        </li>
        <li
          className={`ttext-2xl mr-10 p-5 ${
            params['*']?.includes('recursos') ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/recursos"
          >
            {t("Recursos")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-10 p-5 ${
            params['*']?.includes('reviews') ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/reviews"
          >
            {t("Reseñas")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-10 p-5 ${
            params['*']?.includes('users') ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/users"
          >
            {t("Usuarios")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-10 p-5 ${
            params['*']?.includes('datos') ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/mis-datos"
          >
            {t("Mis datos")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

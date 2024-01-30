import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function NavPanelAdmin() {
  const { t } = useTranslation();
  const [active, isActive] = useState([1, 0, 0, 0, 0, 0, 0]);

  return (
    <nav>
      <ul className="flex flex-row p-6 pb-0">
        <li
          className={`text-2xl mr-16 p-5 ${
            active[0] === 1 ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            onClick={() => isActive([1, 0, 0, 0, 0, 0, 0])}
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/statistics/OKRs"
          >
            {t("Estadísticas")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-16 p-5 ${
            active[1] === 1 ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            onClick={() => isActive([0, 1, 0, 0, 0, 0, 0])}
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/vacantes"
          >
            {t("Vacantes")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-16 p-5 ${
            active[2] === 1 ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            onClick={() => isActive([0, 0, 1, 0, 0, 0, 0])}
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/clientsfollowup"
          >
            {t("Seguimiento")}
          </NavLink>
        </li>
        <li
          className={`ttext-2xl mr-16 p-5 ${
            active[3] === 1 ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            onClick={() => isActive([0, 0, 0, 1, 0, 0, 0])}
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/recursos"
          >
            {t("Recursos")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-16 p-5 ${
            active[4] === 1 ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            onClick={() => isActive([0, 0, 0, 0, 1, 0, 0])}
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/reviews"
          >
            {t("Reseñas")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-16 p-5 ${
            active[5] === 1 ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            onClick={() => isActive([0, 0, 0, 0, 0, 1, 0])}
            className="hover:text-linkIt-300 text-2xl hover:cursor-pointer font-bold"
            to="/AdminDashboard/users"
          >
            {t("Usuarios")}
          </NavLink>
        </li>
        <li
          className={`text-2xl mr-16 p-5 ${
            active[6] === 1 ? "text-linkIt-300" : ""
          }`}
        >
          <NavLink
            onClick={() => isActive([0, 0, 0, 0, 0, 0, 1])}
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

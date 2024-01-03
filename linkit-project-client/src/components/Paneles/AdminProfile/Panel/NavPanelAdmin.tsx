import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function NavPanelAdmin() {
  const {t} = useTranslation()
  return (
    <nav>
      <ul className="flex flex-row p-6 pl-16 pb-0">
        <li className="text-2xl mr-16">
          <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/statistics/OKRs">{t('Estadísticas')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/vacantes">{t('Vacantes')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/clientsfollowup">{t('Seguimiento')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/recursos">{t('Recursos')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/reviews">{t('Reseñas')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/users">{t('Usuarios')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/mis-datos">{t('Mis datos')}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function NavPanelAdmin() {
  const {t} = useTranslation()
  return (
    <nav>
      <ul className="flex flex-row p-6 pl-16 pb-0">
        <li className="text-2xl mr-16">
          <NavLink to="/AdminDashboard/vacantes">{t('Vacantes')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink to="/AdminDashboard/clientsfollowup">{t('Seguimiento')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink to="/AdminDashboard/recursos">{t('Recursos')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink to="/AdminDashboard/reviews">{t('Reseñas')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink to="/AdminDashboard/usuarios">{t('Usuarios')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink to="/AdminDashboard/mis-datos">{t('Mis datos')}</NavLink>
        </li>
        <li className="text-2xl mr-16">
          <NavLink to="/AdminDashboard">{t('Estadisticas')}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

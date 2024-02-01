import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function UsersAdminHead() {
    const { t } = useTranslation();
    return (
        <div>
            <nav>
                <ul className="flex flex-row pl-16 pb-0 pt-[2vw]">
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/users">{t ("Talentos")}</NavLink>
                    </li>
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/users/conpaniesUsers">{t ("Empresas")}</NavLink>
                    </li>
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/users/adminsUsers">{t ("Administradores")}</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

import { NavLink } from "react-router-dom";

export default function UsersAdminHead() {
    return (
        <div>
            <nav>
                <ul className="flex flex-row pl-16 pb-0">
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/users">Talentos</NavLink>
                    </li>
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/users/conpaniesUsers">Empresas</NavLink>
                    </li>
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/users/adminsUsers">Admins</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

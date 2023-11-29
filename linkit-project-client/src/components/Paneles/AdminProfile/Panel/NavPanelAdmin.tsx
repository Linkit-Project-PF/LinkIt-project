import { NavLink } from "react-router-dom";


export default function NavPanelAdmin() {
  return (
    <nav>
        <ul className="flex flex-row p-6 pl-16 pb-0">
            <li className="text-2xl mr-16"><NavLink to="/AdminDashboard/vacantes">Vacantes</NavLink></li>
            <li className="text-2xl mr-16"><NavLink to="/AdminDashboard/recursos">Recursos</NavLink></li>
            <li className="text-2xl mr-16"><NavLink to="/AdminDashboard/reviews">Reviews</NavLink></li>
            <li className="text-2xl mr-16"><NavLink to="/AdminDashboard/usuarios">Usuarios</NavLink></li>
            <li className="text-2xl mr-16"><NavLink to="/AdminDashboard/mis-datos">Mis datos</NavLink></li>
        </ul>
    </nav>
  )
}

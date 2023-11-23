import { NavLink } from "react-router-dom";


export default function NavPanelAdmin() {
  return (
    <nav>
        <ul className="flex flex-row m-16 mb-4 mt-6 pl-12">
            <li className="mx-6"><NavLink to="/AdminDashboard/vacantes">Vacantes</NavLink></li>
            <li className="mx-6"><NavLink to="/AdminDashboard/recursos">Rescursos</NavLink></li>
            <li className="mx-6"><NavLink to="/AdminDashboard/reviews">Reviews</NavLink></li>
        </ul>
    </nav>
  )
}

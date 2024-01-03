import { NavLink } from "react-router-dom";

export default function HeadStatitics() {
    return (
        <div>
            <nav>
                <ul className="flex flex-row pl-16 pb-0">
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/statistics/web">Web</NavLink>
                    </li>
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/statistics/postulaciones">Postulaciones</NavLink>
                    </li>
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/statistics/followUps">Follow Ups</NavLink>
                    </li>
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/statistics/presentation">Presentation</NavLink>
                    </li>
                    <li className="text-2xl mr-16">
                        <NavLink className="hover:text-linkIt-300" to="/AdminDashboard/statistics/OKRs">OKRs</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

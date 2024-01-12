import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeadStatitics() {
  const [active, isActive] = useState([0, 0, 0, 0, 1]);
  return (
    <div>
      <nav>
        <ul className="flex flex-row pl-16 pb-0">
          <li
            className={`text-2xl mr-16 ${active[0] === 1 ? "underline" : ""}`}
          >
            <NavLink
              onClick={() => isActive([1, 0, 0, 0, 0])}
              className={`hover:text-linkIt-300`}
              to="/AdminDashboard/statistics/web"
            >
              Web
            </NavLink>
          </li>
          <li
            className={`text-2xl mr-16 ${active[1] === 1 ? "underline" : ""}`}
          >
            <NavLink
              onClick={() => isActive([0, 1, 0, 0, 0])}
              className={`hover:text-linkIt-300`}
              to="/AdminDashboard/statistics/postulaciones"
            >
              Postulaciones
            </NavLink>
          </li>
          <li
            className={`text-2xl mr-16 ${active[2] === 1 ? "underline" : ""}`}
          >
            <NavLink
              onClick={() => isActive([0, 0, 1, 0, 0])}
              className={`hover:text-linkIt-300`}
              to="/AdminDashboard/statistics/followUps"
            >
              Follow Ups
            </NavLink>
          </li>
          <li
            className={`text-2xl mr-16 ${active[3] === 1 ? "underline" : ""}`}
          >
            <NavLink
              onClick={() => isActive([0, 0, 0, 1, 0])}
              className={`hover:text-linkIt-300`}
              to="/AdminDashboard/statistics/presentation"
            >
              Presentation
            </NavLink>
          </li>
          <li
            className={`text-2xl mr-16 ${active[4] === 1 ? "underline" : ""}`}
          >
            <NavLink
              onClick={() => isActive([0, 0, 0, 0, 1])}
              className={`hover:text-linkIt-300`}
              to="/AdminDashboard/statistics/OKRs"
            >
              OKRs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

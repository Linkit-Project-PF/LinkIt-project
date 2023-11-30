import { Route, Routes, useNavigate } from "react-router-dom";
import NavPanelAdmin from "./NavPanelAdmin";
import Vacancies from "./AdminVacantes/Vacancies";
import AdminRecursos from "./AdminRecursos/AdminRecursos";
import AdminReviews from "./AdminReviews/AdminReviews";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Footer from "../../../../Utils/Footer/Footer";
import UsersAdmin from "../Usuarios/UsersAdmin";
import Statistics from "./AdminStatistics/Statistics";

type userInfoProps = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  active: boolean;
  role: string;
};

export default function AdminPanel() {
  const token = useSelector((state: any) => state.Authentication.token);

  const [userData, setUserData] = useState<Partial<userInfoProps>>({});
  const nav = useNavigate();

  useEffect(() => {
    const infoUser = async () => {
      try {
        if (!token) {
          nav("/unauthorized");
          return;
        }
        const response = await axios(
          `https://linkit-server.onrender.com/admins/find?id=${token}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!response.data) {
          nav("/unauthorized");
          return;
        }
        setUserData(response.data);
      } catch (error) {
        nav("/unauthorized");
      }
    };
    infoUser();
  }, []);

  return (
    <div className="pt-32">
      <h1 className="text-5xl pt-6 pl-16 font-bold">Hola {userData.name}!</h1>
      <NavPanelAdmin />
      <Routes>
        <Route path="vacantes" element={<Vacancies />} />
        <Route path="recursos" element={<AdminRecursos />} />
        <Route path="reviews" element={<AdminReviews />} />
        <Route path="usuarios" element={<UsersAdmin />} />
        <Route path="estadisticas" element={<Statistics />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

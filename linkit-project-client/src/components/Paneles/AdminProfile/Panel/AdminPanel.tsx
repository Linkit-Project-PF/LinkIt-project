import { Route, Routes, useNavigate } from "react-router-dom";
import NavPanelAdmin from "./NavPanelAdmin";
import AdminRecursos from "./AdminRecursos/AdminRecursos";
import AdminReviews from "./AdminReviews/AdminReviews";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Footer from "../../../../Utils/Footer/Footer";
import { useTranslation } from "react-i18next";
import Vacancies2 from "./AdminVacantes/Vacancies2";
import ClientsFollowUp from "./ClientsFollowUp/ClientsFollowUp";
import { IAdmin } from "../../../Profiles/types";
import Statistics from "./AdminStatistics/Statistics";
import UsersAdmin2 from "../Usuarios/UsersAdmin2";
// import Vacancies from "./AdminVacantes/Vacancies";
// import SuperAdminProfile from "../../../Profiles/SuperAdminProfile/SuperAdminProfile";

export default function AdminPanel() {
  const { t } = useTranslation();
  const token = useSelector((state: any) => state.Authentication.token);

  const [userData, setUserData] = useState<Partial<IAdmin>>({});
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
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Accept-Language": sessionStorage.getItem("lang"),
            },
          }
        );
        if (!response.data) {
          nav("/unauthorized");
          return;
        }
        setUserData(response.data as IAdmin);
      } catch (error) {
        nav("/unauthorized");
      }
    };
    infoUser();
  }, []);

  // TODO SuperAdminProfile is damaged, It does not edit admin but user, and the DOM rendering is weird
  return (
    <div className="pt-32">
      <h1 className="mt-[80px] text-5xl pt-6 pl-16 font-bold">
        {t("Hola")} {userData.firstName}!
      </h1>
      <NavPanelAdmin />
      <Routes>
        <Route path="/*" element={<Statistics />} />
        <Route path="vacantes" element={<Vacancies2 />} />
        <Route path="clientsfollowup" element={<ClientsFollowUp />} />
        <Route path="recursos" element={<AdminRecursos />} />
        <Route path="reviews" element={<AdminReviews />} />
        <Route path="users/*" element={<UsersAdmin2 />} />
        {/* <Route path="mis-datos" element={<SuperAdminProfile />} /> */}
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

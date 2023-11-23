import { Route, Routes } from "react-router-dom";
import NavPanelAdmin from "./NavPanelAdmin";
import Vacancies from "./AdminVacantes/Vacancies";
import AdminRecursos from "./AdminRecursos/AdminRecursos";
import AdminReviews from "./AdminReviews/AdminReviews";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

type userInfoProps = {
    _id:string
    name: string
    email: string
    phone: string
    country: string
    active: boolean
    role: string
}


export default function AdminPanel() {

    const token = useSelector((state:any) => state.Authentication.authState.token)

    const [userData, setUserData] = useState<Partial<userInfoProps>>({})

    useEffect(()=>{
        const infoUser = async()=>{
            const response = await axios(
                `https://linkit-server.onrender.com/users/find?id=${token}`,
            { headers: { Authorization: `Bearer 65566e201b4939c1cef34a54` } })
            // { headers: { Authorization: `Bearer ${token}` } }) //* descomentar cuando se tenga  creado el logeo de admin
            setUserData(response.data)
        }
        infoUser()
    },[])

    return (
        <div className="pt-32">
            <h1 className="text-5xl pt-6 pl-32">Hola {userData.name}!</h1>
            <NavPanelAdmin />
            <Routes>
                <Route path="vacantes" element={<Vacancies />} />
                <Route path="recursos" element={<AdminRecursos />} />
                <Route path="reviews" element={<AdminReviews />} />
            </Routes>
        </div>
    )
}
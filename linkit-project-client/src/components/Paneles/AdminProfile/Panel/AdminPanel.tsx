import { Route, Routes } from "react-router-dom";
import NavPanelAdmin from "./NavPanelAdmin";
import Vacancies from "./AdminVacantes/Vacancies";
import AdminRecursos from "./AdminRecursos/AdminRecursos";
import AdminReviews from "./AdminReviews/AdminReviews";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Footer from "../../../../Utils/Footer/Footer";

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
    const role = useSelector((state: any) => {
        if (state.Authentication.authState.role === 'company') return 'companie'
        else return state.Authentication.authState.role
    })
    console.log(role)

    const [userData, setUserData] = useState<Partial<userInfoProps>>({})

    useEffect(()=>{
        const infoUser = async()=>{
            const response = await axios(
                `https://linkit-server.onrender.com/${role}s/find?id=${token}`,
            { headers: { Authorization: `Bearer 6564e8c0e53b0475ffe277f2` } })
            // { headers: { Authorization: `Bearer ${token}` } }) //* descomentar cuando se tenga  creado el logeo de admin
            setUserData(response.data)
        }
        infoUser()
    },[])

    return (
        <div className="pt-32">
            <h1 className="text-5xl pt-6 pl-16 font-bold">Hola {userData.name}!</h1>
            <NavPanelAdmin />
            <Routes>
                <Route path="vacantes" element={<Vacancies />} />
                <Route path="recursos" element={<AdminRecursos />} />
                <Route path="reviews" element={<AdminReviews />} />
            </Routes>
            <br />
            <Footer/>
        </div>
    )
}

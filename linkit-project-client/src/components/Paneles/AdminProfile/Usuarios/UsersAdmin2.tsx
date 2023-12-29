import { Route, Routes } from 'react-router-dom'
import UsersAdminHead from './UsersAdminHead'
import Users from './UsersBasic/Users'
import CompaniesU from './UsersCompanies/CompaniesU'
import Admins from './UsersAdmins/Admins'
import { t } from 'i18next'

export default function UsersAdmin2() {
    return (
        <div className="bg-linkIt-500 mx-12 rounded-[20px] rounded-b-none w-auto">
            <h1 className="text-4xl pl-16 py-6">{t("Usuarios")}</h1>
            <UsersAdminHead />
            <Routes>
                <Route path="/" element={<Users/>} />
                <Route path="conpaniesUsers" element={<CompaniesU/>} />
                <Route path="adminsUsers" element={<Admins/>} />
            </Routes>
            <br />
        </div>
    )
}

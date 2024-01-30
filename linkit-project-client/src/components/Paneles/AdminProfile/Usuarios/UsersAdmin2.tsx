import { Route, Routes } from "react-router-dom";
import UsersAdminHead from "./UsersAdminHead";
import Users from "./UsersBasic/Users";
import CompaniesU from "./UsersCompanies/CompaniesU";
import Admins from "./UsersAdmins/Admins";

export default function UsersAdmin2() {
  return (
    <div className="bg-linkIt-500 mx-12 rounded-[20px] w-auto p-3">
      <UsersAdminHead />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="conpaniesUsers" element={<CompaniesU />} />
        <Route path="adminsUsers" element={<Admins />} />
      </Routes>
      <br />
    </div>
  );
}

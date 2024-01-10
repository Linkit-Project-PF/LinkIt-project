import CompanyForm from "./CompanyProfile/CompanyProfileForm";
import SuperAdminProfileForm from "./SuperAdminProfile/SuperAdminProfileForm";
import TalentForm from "./TalentProfile/TalentProfileForm";
import { IAdmin, ICompany, IUser, WebsiteUser } from "./types";

export default function ProfileFormComponent({ user }: { user: WebsiteUser }) {
  return (
    <>
      {user ? (
        <>
          {user.role === "user" && <TalentForm user={user as IUser} />}
          {user.role === "company" && (
            <CompanyForm company={user as ICompany} />
          )}
          {user.role === "admin" && (
            <SuperAdminProfileForm admin={user as IAdmin} />
          )}
        </>
      ) : null}
    </>
  );
}

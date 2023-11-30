import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import CompanyForm from "./CompanyProfileModules/CompanyProfileForm";
import CompanyComponent from "./CompanyProfileModules/CompanyComponent";

const CompanyProfile = () => {
  const {company} = useSelector((state: RootState) => state.Authentication)

  if (!company) return null

  return (
    <>
      <CompanyComponent company={company}/>
      <CompanyForm company={company}/>
    </>
  )
};

export default CompanyProfile;
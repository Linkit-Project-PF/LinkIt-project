import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import CompanyForm from "./CompanyProfileModules/CompanyProfileForm";
import CompanyComponent from "./CompanyProfileModules/CompanyComponent";
import MyPosts from "./MyPosts/MyPosts";
import { useState } from "react";

const CompanyProfile = () => {
  const {company} = useSelector((state: RootState) => state.Authentication)

  if (!company) return null

  const [selectedOptions, setSelectedOptions] = useState<string>('MyInfo')

  return (
    <>
      <CompanyComponent setSelectedOptions={setSelectedOptions} company={company}/>
      {selectedOptions === 'MyInfo' && <CompanyForm company={company}/>}
      {selectedOptions === 'MyPosts' && <MyPosts/>}
    </>
  )
};

export default CompanyProfile;
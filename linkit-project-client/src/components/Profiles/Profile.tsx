// import CompanyProfile from "./CompanyProfile/CompanyProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import CompanyProfile from "./CompanyProfile/CompanyProfile";
// import TalentProfile from "./TalentProfile/TalentProfile";

const Profile = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state: RootState) => state.Authentication)
  
  useEffect(() => {
    // If the user is not logged in, redirect to the home page
    if (!user) {
      navigate("/")
    }
  }, [user, navigate])

  if (!user) return null
  
  return (
    <div>
      {/* <CompanyProfile/> */}
      {/* <TalentProfile/> */}
    </div>
  )
};

export default Profile;
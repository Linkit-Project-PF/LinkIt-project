// import CompanyProfile from "./CompanyProfile/CompanyProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import TalentProfile from "./TalentProfile/TalentProfile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <TalentProfile/>
      {/* <CompanyProfile/> */}
    </div>
  )
};

export default Profile;
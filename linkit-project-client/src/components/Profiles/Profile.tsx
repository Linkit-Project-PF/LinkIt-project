// import CompanyProfile from "./CompanyProfile/CompanyProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
// import TalentProfile from "./TalentProfile/TalentProfile";

const Profile = () => {
  const navigate = useNavigate();
  const { role } = useSelector((state: RootState) => state.Authentication);

  useEffect(() => {
    // Redirect to home if not authenticated or role is not set
    if (!role) {
      navigate("/");
    }
  }, [role, navigate]);

  // Render based on role
  return (
    <div>
      {role === 'company' && <CompanyProfile />}
      {/* {role === 'user' && <TalentProfile />} */}
    </div>
  );
};

export default Profile;
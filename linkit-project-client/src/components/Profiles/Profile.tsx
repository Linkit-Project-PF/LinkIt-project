import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import TalentProfile from "./TalentProfile/TalentProfile";

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
    <div className="mt-[120px] md:mt-[180px] h-full">
      {role === 'company' ? <CompanyProfile /> : <TalentProfile />}
    </div>
  );
};

export default Profile;
import { useSelector } from "react-redux";
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import TalentForm from "./TalentProfileModules/TalentProfileForm";
import { RootState } from "../../../redux/types";

const TalentProfile = () => {
  const {user} = useSelector((state: RootState) => state.Authentication)

  if (!user) return null

  return (
    <>
      <ProfileComponent user={user} />
      <TalentForm user={user} />
    </>
  )
}

export default TalentProfile;
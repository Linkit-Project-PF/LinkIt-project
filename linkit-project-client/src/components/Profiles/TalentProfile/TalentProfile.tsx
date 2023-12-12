import { useSelector } from "react-redux";
import TalentComponent from "./TalentProfileModules/TalentComponent";
import TalentForm from "./TalentProfileModules/TalentProfileForm";
import { RootState } from "../../../redux/types";

const TalentProfile = () => {
  const {user} = useSelector((state: RootState) => state.Authentication)

  if (!user) return null

  return (
    <>
      <TalentComponent user={user} />
      <TalentForm user={user} />
    </>
  )
}

export default TalentProfile;
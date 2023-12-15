import { useSelector } from "react-redux";
import TalentComponent from "./TalentProfileModules/TalentComponent";
import TalentForm from "./TalentProfileModules/TalentProfileForm";
import { RootState } from "../../../redux/types";
import { useState } from "react";
import MyApps from "./MyApps/MyApps";

const TalentProfile = () => {
  const {user} = useSelector((state: RootState) => state.Authentication)

  if (!user) return null

  const [selectedOptions, setSelectedOptions] = useState<string>('MyInfo')

  return (
    <>
      <TalentComponent setSelectedOptions={setSelectedOptions} user={user} />
      {selectedOptions === 'MyInfo' && <TalentForm user={user} />}
      {selectedOptions === 'MyApps' && <MyApps/>}
    </>
  )
}

export default TalentProfile;
import { useSelector } from "react-redux";
import TalentComponent from "./TalentProfileModules/TalentComponent";
import TalentForm from "./TalentProfileModules/TalentProfileForm";
import { RootState } from "../../../redux/types";
import { useState } from "react";
import MyApps from "./MyApps/MyApps";
import Unauthorized from "../../Errores/SinAutorizacion";

const TalentProfile = () => {
  const {user} = useSelector((state: RootState) => state.Authentication)
  const [selectedOptions, setSelectedOptions] = useState<string>('MyInfo')
  if (!user) return (<Unauthorized />)


  return (
    <div className="flex flex-col gap-5 pt-10 h-[80%] md:w-full">
      <TalentComponent setSelectedOptions={setSelectedOptions} user={user} />
      {selectedOptions === 'MyInfo' && <TalentForm user={user} />}
      {selectedOptions === 'MyApps' && <MyApps/>}1
    </div>
  )
}

export default TalentProfile;
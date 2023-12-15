import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { UserRoleEnum } from "../types";
// import SuperAdminComponent from "./SuperAdminProfileModules/SuperAdminComponent";
import SuperAdminProfileForm from "./SuperAdminProfileModules/SuperAdminProfileForm";

const SuperAdminProfile = () => {
  const {role, user} = useSelector((state: RootState) => state.Authentication)

  if (role !== UserRoleEnum.ADMIN || !user) return null

  return (
    <>
      {/* <SuperAdminComponent role={role} user={user}/> */}
      <SuperAdminProfileForm role={role} user={user}/>
    </>
  )
};

export default SuperAdminProfile;
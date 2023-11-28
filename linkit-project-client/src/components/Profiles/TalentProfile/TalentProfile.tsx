import ProfileComponent, { IUser } from "../ProfileComponent/ProfileComponent";
import TalentForm from "./TalentProfileModules/TalentProfileForm";

const user: IUser = {
  userName: "Alfred",
  userLastName: "Talent",
  userImage: "https://res.cloudinary.com/dkrcosw87/image/upload/v1633904614/linkit-project/avatars/avatars-1.png"
}

const TalentProfile = () => {

  return (
    <div>
      <ProfileComponent user={user}/>
      <TalentForm/>
    </div>
  )
};

export default TalentProfile;
import { useState } from "react";
import InternalNavBar from "../NavBar/InternalNavBar";
import { UserRoleEnum } from "./types";
import { useTranslation } from "react-i18next";
import ProfileComponent from "./ProfileComponent";
import MyApps from "./TalentProfile/MyApps/MyApps";
import MyPosts from "./CompanyProfile/MyPosts/MyPosts";

interface dashBoardProps {
  role: UserRoleEnum;
}

export default function UserDashboard({ role }: dashBoardProps) {
  const { t } = useTranslation();
  const user: string[] = [t("Mis datos"), t("Mis postulaciones")];
  const company: string[] = [t("Mis dagtos"), t("Mis vacantes")];
  const [profileVisible, setProfileVisible] = useState(true);
  const [auxVisible, setAuxVisible] = useState(false);

  return (
    <div className="flex flex-col pt-5 md:w-full">
      <InternalNavBar
        items={role === "user" ? user : company}
        statusHandler={[setProfileVisible, setAuxVisible]}
      />
      <div className="pb-5 md:py-10 mb-10 mx-5 md:mx-10 z-10 h-[80%] rounded-2xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {profileVisible && <ProfileComponent />}
        {role === "user" ? (
          <>{auxVisible && <MyApps />}</>
        ) : (
          <>{auxVisible && <MyPosts />}</>
        )}
      </div>
    </div>
  );
}
